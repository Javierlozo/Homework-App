/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function HomeSearch() {
  return (
    <Autocomplete
      id="combo-box-demo"
      options={top100Films}
      getOptionLabel={(option) => option.title}
      style={{ width: 450, backgroundColor: "white", marginTop: 20 }}
      renderInput={(params) => (
        <TextField {...params} label="Subject" variant="outlined" />
      )}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: "Maths" },
  { title: "Social Science" },
  { title: "English" },
  { title: "Arts" },
  { title: "Science" },
  { title: "Computer Science" },
  { title: "History" },
];
