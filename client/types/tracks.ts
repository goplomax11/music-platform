export interface ITrack {
    _id : string,
    name : string,
    artist : string,
    text : string,
    listens: number,
    image? : string,
    audio? : string,
    comments : String[] | [],
}

 export interface TrackListProps {
    tracks: ITrack[],
}