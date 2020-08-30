import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import SetUsername from "./SetUsername";
import ConfirmSignUp from "./ConfirmSignUp";
import { Auth } from "aws-amplify";
import { navigate } from "@reach/router";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  backButton: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));

function getSteps() {
  return ["Create Username and Password", "Confirm Sign Up"];
}
function getStepContent(stepIndex, signUpForm, setSignUpForm) {
  switch (stepIndex) {
    case 0:
      return (
        <SetUsername signUpForm={signUpForm} setSignUpForm={setSignUpForm} />
      );
    case 1:
      return (
        <ConfirmSignUp signUpForm={signUpForm} setSignUpForm={setSignUpForm} />
      );
    default:
      return "Unknown stepIndex";
  }
}
export default function SignUp() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const [signUpForm, setSignUpForm] = React.useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    role: "",
    confirmationCode: ""
  });
  console.log(signUpForm);

  const [signUpUser, setSignUpUser] = React.useState(undefined);
  console.log("signed up user", signUpUser);

  function renderButton() {
    if (activeStep === steps.length - 1) {
      return (
        <Button variant="contained" color="primary" onClick={handleConfirmUser}>
          Confirm
        </Button>
      );
    } else {
      return (
        <Button variant="contained" color="primary" onClick={handleNext}>
          Next
        </Button>
      );
    }
  }
  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };
  const handleCreateUser = () => {
    try {
      async function signUp() {
        const user = await Auth.signUp({
          firstname: signUpForm.firstname,
          lastname: signUpForm.lastname,
          username: signUpForm.username,
          password: signUpForm.password,
          role: signUpForm.role,
          attributes: {
            email: signUpForm.username
          }
        });
        setSignUpUser(user);
      }
      signUp();
      handleNext();
    } catch (error) {
      console.log(error);
    }
  };

  async function handleConfirmUser() {
    async function uploadToSql() {
      console.log("upload to mysql");
      return await axios({
        method: "post",
        url: "https://localhost:4000/user",
        data: {
          firstname: signUpForm.firstname,
          lastname: signUpForm.lastname,
          username: signUpForm.username,
          role: signUpForm.role
        },
        headers: { "Content-Type": "application/json" }
      });
    }
    try {
      const response = await Auth.confirmSignUp(
        signUpForm.username,
        signUpForm.confirmationCode
      );
      // prompt(response);
      if (response === "SUCCESS") {
        uploadToSql();
        // return await axios({
        //   method: "post",
        //   url: "https://localhost:4000/user",
        //   data: {
        //     firstname: signUpForm.firstname,
        //     lastname: signUpForm.lastname,
        //     username: signUpForm.username,
        //     role: signUpForm.role
        //   }
        // });
        // const myUuid = uuid();
        // Storage.put(
        //   `${signUpForm.username}/profilepics/${myUuid}.png`,
        //   signUpForm.profilePic,
        //   {
        //     contentType: "image/png"
        //   }
        // )
        //   .then(result => console.log(result))
        //   .then(() => {
        //     uploadToSql(myUuid); // call the db
        //   })
        //   .then(() => navigate("/"))
        //   .catch(err => console.log(err));
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className={classes.paper}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        <div>
          <Typography className={classes.instructions}>
            {getStepContent(activeStep, signUpForm, setSignUpForm)}{" "}
          </Typography>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            className={classes.backButton}
          >
            Back
          </Button>
          {activeStep === steps.length - 2 ? (
            <Button
              variant="contained"
              color="primary"
              onClick={handleCreateUser}
            >
              Create User
            </Button>
          ) : (
            renderButton()
          )}
        </div>
      </div>
    </div>
  );
}
