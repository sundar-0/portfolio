import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(4),
      fontFamily:'sans-serif',
      marginTop:20,
      marginBottom:4,
      marginRight:6,
      "&:hover": {
        color: '#ed1212',
        cursor: 'pointer',
        fontFamily:'sans-serif',
        fontWeight:'bold',
        textTransform:'uppercase'
      }
    },
  }));

export default function Project() {
    const[msg,setMsg]=React.useState()
    const classes=useStyles()
    return (
        <div className={classes.root}>
             <Grid container spacing={0}>
        {
             ['Educate Nepal', 'Grocery Management System', 'Movie Recommendation App']
            .map((text, index) =>
            <Grid item xs={12} sm={6} key={text}>
            <Paper className={classes.paper} onMouseMove={()=>setMsg("Show Demo")}>
            {text}
            </Paper>
            <Button size="large" color="primary">
            {msg}
            </Button>
            </Grid>
            )
        }
             </Grid>
        </div>
    )
}

