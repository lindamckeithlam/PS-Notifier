import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Gist from "react-gist";

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
          {/* Gist Link */}
          <Gist id="11af66c06ead3f46d205bd432aab0358" />
        </div>
      </Drawer>
    );
  }
}

export default withStyles(styles)(DrawerContainer);
