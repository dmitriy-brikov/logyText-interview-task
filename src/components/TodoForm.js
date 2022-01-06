import React, { useState, useContext } from "react";
import { Grid, Button, TextField, makeStyles, Box } from "@material-ui/core";
import Store from "../context";
import { orange } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  buttonDarkTheme: {
    backgroundColor: orange[500],
  },
  textField: {
    width: "95%",
    "&.Mui-focused": {
      "&.MuiFormLabel-root": {
        color: orange[500] 
      },
    },
  },
  input: {
    "&.Mui-focused": {
      '&.MuiInput-underline:after': {
        borderBottom: "2px solid orange",
      },
    },
  },
  label: {
    "&.Mui-focused": {
      "&.MuiFormLabel-root": {
        color: orange[500] 
      },
    },
  },
}));

const TodoForm = () => {
  const classes = useStyles();
  const { state, dispatch } = useContext(Store);

  const [todo, setTodo] = useState("");

  const handleTodoChange = e => {
    setTodo(e.target.value);
  };

  const handleSubmitForm = e => {
    if (e.keyCode === 13) handleTodoAdd();
  };

  const handleTodoAdd = e => {
    dispatch({ type: "ADD_TODO", payload: todo });
    setTodo("");
  };

  return (
    <Box mt={2}>
      <Grid container alignItems="flex-end" spacing={0}>
        <Grid item xs={12} sm={10}>
          
          <TextField  
            InputProps={state.myTheme === "dark" ? { className: classes.input } : {}}
            InputLabelProps={state.myTheme === "dark" ? { className: classes.label } : {}}
            className={classes.textField}  
            id="standart-basic"
            label="Enter new todo"
            value={todo}
            onChange={handleTodoChange}
            onKeyUp={handleSubmitForm}
          /> 
      </Grid>
      <Grid item xs={12} sm={2}>
        <Button
          fullWidth
          variant="contained"
          className={state.myTheme === "dark" ? classes.buttonDarkTheme : classes.button}
          color={state.myTheme === "dark" ? 'inherit' : 'primary'}
          size="small"
          onClick={handleTodoAdd}
        >
          Add
        </Button>
      </Grid>
    </Grid>
    </Box>
  );
};
export default TodoForm;
