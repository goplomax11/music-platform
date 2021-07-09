import { PlayerAction, PlayerState } from "../../types/player"

const initialState : PlayerState = {
    active: null,
    volume: 50,
    duration: 0,
    currentTime:0,
    pause:true
}

export const PlayerReducer = ( state = initialState, action:PlayerAction ) : PlayerState =>{
    switch (action.type) {
         case "PLAY":
            return {...state, pause: false}
    
         case "PAUSE":
            return {...state, pause: true}
    
         case "SET_DURATION":
            return {...state, duration : action.payload }
    
         case "SET_VOLUME":
            return {...state, volume: action.payload}
    
         case "SET_CURRENT_TIME":
            return {...state, currentTime:action.payload}

        case "SET_ACTIVE":
            return {...state, active:action.payload}
    
        default:
            return state
    }
}