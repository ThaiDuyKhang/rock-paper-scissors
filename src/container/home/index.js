import React, { Component } from "react";
import Player from "./player";
import Bot from "./bot";
import InfoGame from "./infoGame";
import { connect } from "react-redux";
import "./style.css";

class OanTuTi extends Component {
  render() {
    return (
      <div className="template-oantuti">
        <div className="row game text-center">
          <div className="col-4 player">
            <Player />
          </div>
          <div className="col-4 row info-middle text-center">
            <div className="col info-game text-center">
              <InfoGame />
            </div>
            <div className="col text-center">
              <img
                onClick={()=>{this.props.fight();}}
                className="fight"
                src="./img/fight.svg"
                alt="./img/fight.svg"
                width={180}
              ></img>
            </div>
          </div>
          <div className="col-4 bot">
            <Bot />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fight: () => {
      let count = 0;
      //Khai báo hàm lặp đi lặp lại
      let randomWeaponBOT = setInterval(() => {
        dispatch({
          type: "RANDOM_WEAPON",
        })
        count ++;
        if(count > 15){
          clearInterval(randomWeaponBOT)
          
          dispatch({
            type: 'END_GAME',

          })

        }
      }, 100);
    },
  };
};

export default connect(null, mapDispatchToProps)(OanTuTi);
