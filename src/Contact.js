import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  }
}));

export default function Contact() {
  const classes = useStyles();
  return (
    <Grid container spacing={0}>
    <Grid item xs={12}>
    <Paper className={classes.root}>
    <form method="POST" className={classes.root} autoComplete="off">
      <TextField id="name" label="Enter Name" />
      <br />
      <TextField id="email" label="Enter Email" />
      <br />
      <TextField id="query" label="Enter Query" />
      <br />
    <Button type="submit" className="primary">
        Submit
    </Button>
    </form>
    </Paper>
    </Grid>
    
    </Grid>
  );
}


