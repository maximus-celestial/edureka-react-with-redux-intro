import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import DisplayItems from "../components/displayItems";

class App extends React.Component {
  componentDidMount() {
    console.log("In App componentDidMount");
    this.props.foodItems(); //calls the method that has the  defined action in the actions/index.js file
  }
  render() {
    return <DisplayItems datalist={this.props.output} />;
  }
}

function mapStateToProps(state) {
  return {
    output: state.foods,
  };
}

export default connect(mapStateToProps, actions)(App);
