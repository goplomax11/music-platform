import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join, resolve } from "path";
import { FileModule } from "./file/file.module";
import { TrackModule } from "./tracks/track.module";



@Module({
    imports:[
        ServeStaticModule.forRoot({ rootPath: resolve(__dirname,'static')}),
        MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.q0xyn.mongodb.net/music-platform?retryWrites=true&w=majority'),
        TrackModule,
        FileModule
    ]
})

export class AppModule{}