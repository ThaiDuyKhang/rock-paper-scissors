import React, { Component } from "react";
import { connect } from "react-redux";

class Bot extends Component {
  render() {

    return (
      <div>
        <div className="row bubble-red">
          <div className="col-1">
            <img 
              className="weapon-red"
              src={this.props.weaponBot.img}
              alt={this.props.weaponBot.img}
              width={100} height={120}
            ></img>
          </div>
          <div className="col-11"></div>
        </div>
        <img
          width={550}
          src="./img/player-red.svg"
          alt="./img/player-red.svg"
        ></img>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    weaponBot: state.OanTuTiReducer.weaponBot,
  }
}
export default connect(mapStateToProps, null)(Bot);