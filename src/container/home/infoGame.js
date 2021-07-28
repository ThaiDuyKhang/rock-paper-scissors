import React, { Component } from "react";
import { connect } from "react-redux";

class InfoGame extends Component {
  render() {
    return (
      <div>
        <div className="notice mt-1">{this.props.result}</div>
        <div className="row">
          <div className="you-win col-6">
            Thắng:
            <span className="number-win"> {this.props.win}</span>
          </div>
          <div className="you-lose col-6">
            Thua:
            <span className="number-lose"> {this.props.lose}</span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    result: state.OanTuTiReducer.result,
    win: state.OanTuTiReducer.win,
    lose: state.OanTuTiReducer.lose,
  };
};

export default connect(mapStateToProps,null)(InfoGame);
