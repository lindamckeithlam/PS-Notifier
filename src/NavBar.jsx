import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import AccountCircle from "@material-ui/icons/AccountCircle";

import DrawerContainer from "./DrawerContainer";

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

class NavBar extends React.Component {
  state = {
    drawerOpen: false
  };

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
                <Badge badgeContent={17} color="secondary">
                  <AccountCircle />
                </Badge>
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>

        {/* Notification Drawer */}
        <DrawerContainer
          open={this.state.drawerOpen}
          onClose={() => this.setState({ drawerOpen: false })}
        />
      </div>
    );
  }
}

export default withStyles(styles)(NavBar);
