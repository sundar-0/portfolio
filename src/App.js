import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import WorkIcon from '@material-ui/icons/Work';
import MessageIcon from '@material-ui/icons/Message';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import About from './About'
import Skill from './Skill'
import Project from './Project'
import Contact from './Contact'
import firstImage from './image/feature.JPG'
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css'


const handleOpen=(text)=>{
  console.log(text)
text==='GitHub'?window.open('https://www.github.com/sundar-0'):window.open('https://www.facebook.com/sundar.dumre.3')
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function MainSkeleton(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <>
  
      <Avatar alt="Sundar" src={firstImage} style={{width:100,height:100,margin:2,border:'5px solid steelblue'}}/>
      <Divider/>
      <List>
        {['About Me', 'MySkills','MyProject'].map((text, index) => (
          index===0 ?
          <Link to="/aboutme" style={{textDecoration:'none'}} key={text}>
          <ListItem button>
            <ListItemIcon> <InfoIcon/></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
          </Link>
          :
          index===1 ?
          <Link to="/myskill" style={{textDecoration:'none'}} key={text}>
          <ListItem button >
            <ListItemIcon> <AssignmentTurnedInIcon/></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
          </Link>
          :
          <Link to="/myproject" style={{textDecoration:'none'}} key={text}>
          <ListItem button>
            <ListItemIcon> <WorkIcon/> </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
          </Link>
        ))}
      </List>
      <Divider />

      <List>
        {['Contact','GitHub','Facebook'].map((text,index) => 
        index===0
          ?
          <Link to="/contactme" style={{textDecoration:'none'}} key={text}>
          <ListItem button>
            <ListItemIcon><MessageIcon/></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
          </Link>
          :
          index===1
          ?
          <ListItem button  key={text}>
            <ListItemIcon onClick={()=>{handleOpen(text)}}><GitHubIcon/></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
          :
          <ListItem button key={text}>
            <ListItemIcon onClick={()=>{handleOpen(text)}}><FacebookIcon/></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        )}
      </List>
    </>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Router>
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
           Hello Fellas!!
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
         
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
        <Route exact path="/">
            <About/>
          </Route>
          <Route path="/aboutme">
            <About/>
          </Route>
          <Route path="/myskill">
            <Skill />
          </Route>
          <Route path="/myproject">
            <Project />
          </Route>
          <Route path="/contactme">
          <Contact/>
          </Route>
        </Switch>
      </main>
    </div>
    </Router>
  );
}

MainSkeleton.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default MainSkeleton;
