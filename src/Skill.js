import React from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function LinearProgressWithLabel(props) {
  return (
    <div>
    <Box display="flex" alignItems="center">
    <Typography variant="h6">{props.program}</Typography>
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
    </div>
    
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

export default function Skill() { 
const [php, setPhp] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setPhp((prevProg) => (
        prevProg>= 80? 80: prevProg+ 10
        ));
    }, 300);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const [asp, setAsp] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setAsp((prevProg) => (
        prevProg>= 70? 70: prevProg+ 10
        ));
    }, 300);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const [js, setJs] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setJs((prevProg) => (
        prevProg>= 80? 80: prevProg+ 10
        ));
    }, 300);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const [python, setPython] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setPython((prevProg) => (
        prevProg>= 60? 60: prevProg+ 10
        ));
    }, 300);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const [java, setJava] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setJava((prevProg) => (
        prevProg>= 50? 50: prevProg+ 10
        ));
    }, 300);
    return () => {
      clearInterval(timer);
    };
  }, []);

  
const [mern, setMern] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setMern((prevProg) => (
        prevProg>= 80? 80: prevProg+ 10
        ));
    }, 300);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const [ml, setMl] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setMl((prevProg) => (
        prevProg>= 60? 60: prevProg+ 10
        ));
    }, 300);
    return () => {
      clearInterval(timer);
    };
  }, []);



  const classes = useStyles() 
  return (
    <div className={classes.root}>

      <LinearProgressWithLabel value={php} program="Php"/>
      <LinearProgressWithLabel value={asp} program="Asp.Net"/>
      <LinearProgressWithLabel value={js} program="Javascript"/>
      <LinearProgressWithLabel value={python} program="Python"/>
      <LinearProgressWithLabel value={java} program="Java"/>
      <LinearProgressWithLabel value={mern} program="MERN"/>
      <LinearProgressWithLabel value={ml} program="ML"/>

    </div>
  );
}


