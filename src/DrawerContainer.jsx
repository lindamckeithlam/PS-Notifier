import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";

const styles = theme => ({
  root: {
    width: 500
  }
});

class DrawerContainer extends React.Component {
  render() {
    const classes = this.props.classes;
    return (
      <Drawer
        anchor="right"
        open={this.props.open}
        onClose={this.props.onClose}
      >
        <div className={classes.root}>
          <List>
            <ListItem button>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Notifications" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    );
  }
}

export default withStyles(styles)(DrawerContainer);
