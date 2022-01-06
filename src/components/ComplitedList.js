import React, { useContext } from "react";
import Store from "../context";
import Cached from "@material-ui/icons/Cached";
import {
  List,
  ListItem,
  ListItemSecondaryAction,
  IconButton,
  Grid,
  Typography,
  Tooltip,
  Box,
  Paper
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";

const ComplitedList = () => {
  const { state, dispatch } = useContext(Store);

  let count = state.complited.length;
  let comment;
  if (count === 0) {
    comment = "Have you rested enough to start new tasks?";
  } else {
    comment = "";
  }

  return (
    <Paper elevation={2}>
        <Box mt={3} p={2}>
            <Grid container  spacing={2}>
                <Grid item xs={12}>
                <Typography variant="h6">Complited ({count})</Typography>
                <Typography>{comment}</Typography>
                <Box mt={1}>
                    <List>
                    {state.complited.map(t => (
                        <ListItem  divider key={t}>
                        <Typography style={{color: green[500]}} >{t}</Typography>
                        <ListItemSecondaryAction>
                            <Tooltip placement="top" title="Restore" arrow>
                                <IconButton
                                edge="end"
                                aria-label="restore"
                                onClick={() => dispatch({ type: "RESTORE", payload: t })}
                                >
                                    <Cached />
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
export default ComplitedList;
