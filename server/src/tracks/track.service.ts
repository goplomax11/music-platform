import { CreateTrackDto } from './dto/create-track.dto';
import { Injectable, Post } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Track, TrackDocument } from "./schemas/track.schema";


@Injectable()
export class TrackService {

    constructor(@InjectModel(Track.name) private trackModel: Model<TrackDocument>) {}

    async getAll(){
        
    }
    async getOne(){
        
    }
    async delete(){
        
    }
    @Post()
    async create(dto: CreateTrackDto) : Promise<Track>{
        const track = await this.trackModel.create({...dto, listens:0})
        return track;
    }
}