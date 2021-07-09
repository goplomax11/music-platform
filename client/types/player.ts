import { ITrack } from './tracks';

export interface PlayerState{
    active: null | ITrack;
    volume:number,
    duration:number,
    currentTime: number,
    pause:boolean,
}

export enum PlayerActionTypes {
    PLAY = "PLAY",
    PAUSE = "PAUSE",
    SET_DURATION = "SET_DURATION",
    SET_VOLUME = "SET_VOLUME",
    SET_CURRENT_TIME = "SET_CURRENT_TIME",
    SET_ACTIVE = "SET_ACTIVE",
}

interface PlayAction {
    type: PlayerActionTypes.PLAY
}
interface PauseAction {
    type: PlayerActionTypes.PAUSE
}
interface SetVolumeAction {
    type: PlayerActionTypes.SET_VOLUME,
    payload: number;
}
interface SetDurationAction {
    type: PlayerActionTypes.SET_DURATION,
    payload:number;
}
interface SetCurrentTimeAction {
    type: PlayerActionTypes.SET_CURRENT_TIME,
    payload:number;
}
interface SetActiveAction {
    type: PlayerActionTypes.SET_ACTIVE,
    payload: ITrack
}
 export type PlayerAction = PauseAction | PlayAction | SetVolumeAction | SetDurationAction | SetCurrentTimeAction | SetActiveAction;