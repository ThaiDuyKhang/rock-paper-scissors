import React, { Component } from "react";
import { connect } from "react-redux";

class Player extends Component {
  render() {
    return (
      <div>
        <div className="row bubble-blue">
          <div className="col-11"></div>
          <div className="col-1">
            <img
              className="weapon-blue"
              src={this.props.weaponPlayer.find((weapon)=>weapon.choose === true).img}
              alt={this.props.weaponPlayer.find((weapon)=>weapon.choose === true).img}
              width={100} height={120}
            ></img>
          </div>
        </div>
        <img
          width={550}
          src="./img/player-blue.svg"
          alt="./img/player-blue.svg"
        ></img>
        <div className="row weapon-blue">
          {this.props.weaponPlayer.map((weapon, index) => {
            return (
              <div className="col-4">
                <img onClick={()=>{
                  this.props.chooseWeaponPlayer(weapon.id);
                }}
                  className="weapon"
                  src={weapon.img}
                  alt={weapon.img}
                  width={100} height={120}
                ></img>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    weaponPlayer: state.OanTuTiReducer.weaponPlayer,
  };
};

const mapDispatchToProps = (dispatch) =>{
  return {
    chooseWeaponPlayer: (id)=>{
      dispatch({
        type: 'CHOOSE_WEAPON',
        id,
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);
