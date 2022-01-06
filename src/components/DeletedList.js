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
  Paper,
  Box
} from "@material-ui/core";

const DeletedList = () => {
  const { state, dispatch } = useContext(Store);

  let count = state.deleted.length;
  let comment;
  if (count === 0) {
    comment = "You are good at all tasks!";
  } else {
    comment = "";
  }

  return (
    <Paper elevation={2}>
        <Box mt={3} p={2}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                <Typography variant="h6">Deleted ({count})</Typography>
                <Typography>{comment}</Typography>
                <Box mt={1}>
                    <List>
                    {state.deleted.map(t => (
                        <ListItem  divider key={t}>
                        <Typography color="error" component="del">{t}</Typography>
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
export default DeletedList;
