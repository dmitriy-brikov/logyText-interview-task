import React, { useContext } from "react";
import Store from "../context";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckBox from '@material-ui/icons/CheckBox';
import {
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  IconButton,
  Grid,
  Typography,
  Tooltip,
  Paper,
  Box
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";

const TodoList = () => {
  const { state, dispatch } = useContext(Store);

  let count = state.todos.length;
  let comment;
  if (count === 0) {
    comment = "So when you are free, start another work to get tired!";
  } else {
    comment = "";
  }

  return (
    <Paper elevation={2}>
        <Box mt={3} p={2}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6">Todo List ({count})</Typography>
              <Typography>{comment}</Typography>
              <Box mt={1}>
                <List>
                  {state.todos.map(t => (
                    <ListItem divider key={t}>
                      <ListItemText primary={t} />
                      <ListItemSecondaryAction>
                        <Tooltip placement="top" title="Complite" arrow>
                          <IconButton
                            edge="end"
                            aria-label="complited"
                            onClick={() => dispatch({ type: "COMPLITED", payload: t })}
                          >
                            <CheckBox style={{fill: green[500]}}/>
                          </IconButton>
                        </Tooltip>
                        <Tooltip placement="top" title="Delete" arrow>
                          <IconButton
                            edge="end"
                            aria-label="delete"
                            onClick={() => dispatch({ type: "DELETE", payload: t })}
                          >
                            <DeleteIcon color="error"/>
                          </IconButton>
                        </Tooltip>
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};
export default TodoList;
