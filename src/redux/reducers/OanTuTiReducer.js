const stateDefault = {
  weaponPlayer: [
    {id: "keo",img: "./img/keo.svg",choose: true,},
    {id: "bua",img: "./img/bua.svg",choose: false,},
    {id: "bao",img: "./img/bao.svg",choose: false,},
  ],

  result: "Chiến nào !!",
  win:0, 
  lose:0, 
  weaponBot: {id: "keo",img: "./img/keo.svg"},
};


const OanTuTiReducer = (state=stateDefault, action) =>{
    switch(action.type){
        case 'CHOOSE_WEAPON':{
          //Reset mảng về false
          let weaponPlayerUpdate = [...state.weaponPlayer];
          //Tạo mảng mới từ mảng cũ và action.id từ button
          weaponPlayerUpdate = weaponPlayerUpdate.map((weapon, index)=>{
            if (weapon.id === action.id){
              return {...weapon, choose: true}
            }
            return {...weapon, choose: false}
          })
          // console.log(weaponPlayerUpdate);
          state.weaponPlayer = weaponPlayerUpdate;
          return {...state};
        }
        case 'RANDOM_WEAPON':{
          let random = Math.floor(Math.random() * 3);
          let weaponRandom = state.weaponPlayer[random];
          state.weaponBot = weaponRandom;
          return {...state};
        }
        case 'END_GAME':{
          let player = state.weaponPlayer.find((item) => item.choose === true);
          let bot = state.weaponBot;

          switch(player.id){
            case "keo":
              if (bot.id === "keo") {
                state.result = "Hòa !! Chiến tiếp";
              } else if (bot.id === "bua") {
                state.lose += 1;
                state.result = "Thua rồi !! Gỡ thôi";
              } else {
                state.win += 1;
                state.result = "Thắng rồi !! Nghỉ chơi";
              };
              break;
            case "bua":
              if (bot.id === "bua") {
                state.result = "Hòa !! Chiến tiếp";
              } else if (bot.id === "bao") {
                state.lose += 1;
                state.result = "Thua rồi !! Gỡ thôi";
              } else {
                state.win += 1;
                state.result = "Thắng rồi !! Nghỉ chơi";
              };
              break;
            case "bao":
              if (bot.id === "bao") {
                state.result = "Hòa !! Chiến tiếp";
              } else if (bot.id === "keo") {
                state.lose += 1;
                state.result = "Thua rồi !! Gỡ thôi";
              } else {
                state.win += 1;
                state.result = "Thắng rồi !! Nghỉ chơi";
              };
              break;
            default: 
            state.win += 1;
            state.result = "Thắng rồi !! Nghỉ chơi";
          }
          return {...state}
        }
        default: return {...state};
    }
}

export default OanTuTiReducer;