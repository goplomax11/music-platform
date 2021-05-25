import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TrackModule } from "./tracks/track.module";



@Module({
    imports:[
        MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.q0xyn.mongodb.net/music-platform?retryWrites=true&w=majority'),
        TrackModule
    ]
})

export class AppModule{}