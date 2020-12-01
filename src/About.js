import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typewriter from 'typewriter-effect';
import PeopleIcon from '@material-ui/icons/People';
import WorkIcon from '@material-ui/icons/Work';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import GetAppIcon from '@material-ui/icons/GetApp';
import './about.css'
import pyBasic from './MyAcheivment/pybasic.pdf'
import webData from './MyAcheivment/pyaccesswebdata.pdf'
import dataStr from './MyAcheivment/pydatastructure.pdf'
import pyCapstone from './MyAcheivment/pycapstone.pdf'
import myCv from './Cv/mycv.pdf'

const openFile=(text)=>{
console.log(text)
 text==='Python Basic'
 ?
 window.open(pyBasic,'mywindow','width=800,height=400,toolbar=yes,location=yes,directories=yes,status=yes,menubar=yes,scrollbars=yes,copyhistory=yes,resizable=yes')
 :
 text==='Web Data with Python'
 ?
 window.open(webData,'mywindow','width=800,height=400,toolbar=yes,location=yes,directories=yes,status=yes,menubar=yes,scrollbars=yes,copyhistory=yes,resizable=yes')
 :
 text==='Datastructure with Python'
 ?
 window.open(dataStr,'mywindow','width=800,height=400,toolbar=yes,location=yes,directories=yes,status=yes,menubar=yes,scrollbars=yes,copyhistory=yes,resizable=yes')
 :
 window.open(pyCapstone,'mywindow','width=800,height=400,toolbar=yes,location=yes,directories=yes,status=yes,menubar=yes,scrollbars=yes,copyhistory=yes,resizable=yes')
}
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    fontFamily:'sans-serif',
    marginTop:25,
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

export default function About() {
  const [projectDone, setProjectDone] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProjectDone((prevProg) => (
        prevProg>= 10 ? 10 : prevProg+ 2
        ));
    }, 300);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const [projectRemaining, setProjectRemaining] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProjectRemaining((prevProg) => (
        prevProg>= 20 ? 20 : prevProg+ 2
        ));
    }, 300);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const [totalClient, setTotalClient] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setTotalClient((prevProg) => (
        prevProg>= 12 ? 12: prevProg+ 2
        ));
    }, 300);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const [happyClient, setHappyClient] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setHappyClient((prevProg) => (
        prevProg>= 8 ? 8 : prevProg+ 2
        ));
    }, 300);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Paper className="description">
          <Typography variant="body1" component="h5" style={{color:'skyblue',fontWeight:'bold',fontSize:'20px'}}>
              Me a:
              <Typewriter 
                  options={{
                    strings: ['Student!!','Web Developer!!','A Learner!!','Computer Engineer!!', 'Aspirant Leader!!'],
                    autoStart: true,
                    loop: true,
                  }}
                />
          </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
         {Description}
        </Grid>
        <Grid item xs={12}>
        <Paper className={classes.paper} style={{backgroundColor:'#f1f1f1'}}>
         Some Information:
         </Paper>
         </Grid>
         {
          ['Project Done', 'Project Remaining', 'Total Clients','HappyClients']
         .map((text, index) => 
         index===0 ?
         <Grid item xs={6} sm={6} key={text}>
          <Paper className={classes.paper} style={{backgroundColor:'#f1f1f1'}}>
          <WorkIcon/>
          {text}:{projectDone}
          </Paper>
          </Grid>
          :
        index===1 ?
        <Grid item xs={6} sm={6} key={text}>
          <Paper className={classes.paper} style={{backgroundColor:'#f1f1f1'}}>
          <CheckCircleIcon/>
          {text}:{projectRemaining}
          </Paper>
        </Grid>
        :
        index===2 ?
        <Grid item xs={6} sm={6} key={text}>
          <Paper className={classes.paper} style={{backgroundColor:'#f1f1f1'}}>
          <PeopleIcon/>
          {text}:{totalClient}
          </Paper>
        </Grid>
        :
        <Grid item xs={6} sm={6} key={text}>
          <Paper className={classes.paper} style={{backgroundColor:'#f1f1f1'}}>
          <EmojiEmotionsIcon/>
          {text}:{happyClient}
          </Paper>
        </Grid>
          )}   

        <Grid item xs={12}>
        <Paper className={classes.paper} style={{backgroundColor:'#f1f1f1'}}>
         My Achievments:
         </Paper>
         </Grid>

         {
          ['Python Basic', 'Web Data with Python', 'Datastructure with Python','Python CapeStone']
         .map((text, index) => 
         <Grid item xs={12} sm={6} key={text}>
          <Paper className={classes.paper} style={{backgroundColor:'#f1f1f1'}} onClick={()=>openFile(text)}>
          {text}
          </Paper>
          </Grid>
          )}
          <Grid item xs={12} sm={4} md={4} lg={4}>
          <Paper className={classes.paper} style={{backgroundColor:'#f1f1f1'}} onClick={()=>window.open(myCv)}>
          <GetAppIcon/>
          Download CV
          </Paper>
          </Grid>

      </Grid>
    </div>  
  
  );
}
const Description=(
<>
    <Typography variant="body1" component="p" style={{backgroundColor:'#f1f1f1',fontFamily:'sans-serif',fontSize:'18px',padding:"10px",marginTop:'10px',lineHeight:'40px'}}>
    Who Am I?
    <br/>
      I am Sundar Dumre currently studying B.E Computer in Nepal Engineering College.
      I am a full stack developer..I can make a website for your company.You can hire me for this
    <br/>
      <Button size="large" color="secondary">
          Hire Me
    </Button>
    </Typography>
</>
)


