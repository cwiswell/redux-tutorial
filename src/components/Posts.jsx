import { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../js/actions/index";


export class Post extends Component {
    
  componentDidMount() {
    // calling the new action creator
    this.props.getData();
  }
  render() {
    return null;
  }
}

export default connect(
  null,
  { getData }
)(Post);