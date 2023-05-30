import React from "react";
import "./sidebar.css";
import { makeStyles } from "@material-ui/core/styles";
import {
  Twitter,
  Home,
  LocalOffer,
  MailOutline,
  TurnedInNot,
  Person,
  SentimentDissatisfied,
  FormatListBulleted,
  Notifications,
} from "@material-ui/icons";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  Sidebar: {
    backgroundColor: theme.palette.background.default,
    width: "240px",
    height: "100vh",
    padding: theme.spacing(2),
  },
  icons: {
    marginRight: theme.spacing(1),
  },
}));

const Sidebar = () => {
  const classes = useStyles();

  return (
    
    <div component={classes.Sidebar}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <Twitter className={`classes.twitterIcon`} listedItemIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Home className={classes.icons} />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <LocalOffer className={classes.icons} />
          </ListItemIcon>
          <ListItemText primary="Explore" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Notifications className={classes.icons} />
          </ListItemIcon>
          <ListItemText primary="Notifications" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <MailOutline className={classes.icons} />
          </ListItemIcon>
          <ListItemText primary="Messages" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <TurnedInNot className={classes.icons} />
          </ListItemIcon>
          <ListItemText primary="Bookmarks" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <FormatListBulleted className={classes.icons} />
          </ListItemIcon>
          <ListItemText primary="Lists" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Person className={classes.icons} />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SentimentDissatisfied className={classes.icons} />
          </ListItemIcon>
          <ListItemText primary="More" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
