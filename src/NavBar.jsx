import React from "react";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";

import DrawerContainer from "./DrawerContainer";
import { clearNotifications } from "./actions.js";

const styles = theme => ({
  grow: {
    flexGrow: 1
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  notificationSection: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  }
});

const msp = state => {
  return {
    notifications: state.notifications
  };
};

const mdp = dispatch => ({
  clearNotifications: () => dispatch(clearNotifications())
});

class NavBar extends React.Component {
  state = {
    drawerOpen: false
  };

  clearNotifications() {
    this.props.clearNotifications();
  }

  render() {
    const classes = this.props.classes;
    return (
      <div className={classes.grow}>
        <AppBar position="static">
          <Toolbar>
            {/* App Name */}
            <Typography className={classes.title} variant="h6" noWrap>
              PS-Notifier
            </Typography>

            <div className={classes.grow} />

            <div className={classes.notificationSection}>
              <IconButton
                edge="end"
                aria-haspopup="true"
                onClick={() => this.setState({ drawerOpen: true })}
                color="inherit"
              >
                <Badge
                  badgeContent={this.props.notifications}
                  color="secondary"
                >
                  <Avatar
                    alt="Profile Picture"
                    src="https://avatars3.githubusercontent.com/u/35122889?s=400&v=4"
                  />
                </Badge>
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>

        {/* Notification Drawer */}
        <DrawerContainer
          open={this.state.drawerOpen}
          onClose={() => {
            this.props.clearNotifications();
            this.setState({ drawerOpen: false });
          }}
        />
      </div>
    );
  }
}

const NavBarContainer = connect(
  msp,
  mdp
)(withStyles(styles)(NavBar));

export default NavBarContainer;
