import { Body, Controller, Delete, Get, Param, Post, UploadedFiles, UseInterceptors, Query } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FileFieldsInterceptor } from "@nestjs/platform-express";
import { ObjectId} from "mongoose";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { CreateTrackDto } from "./dto/create-track.dto";
import { TrackService } from "./track.service";


@Controller('/tracks')
export class TrackController{
    constructor(private trackService: TrackService) {}

    @Post()
 
    @UseInterceptors(FileFieldsInterceptor([
      { name: 'image', maxCount: 1 },
      { name: 'audio', maxCount: 1 },
    ]))

    create(@UploadedFiles() files, @Body() dto: CreateTrackDto){
        const {image, audio} = files
        console.log(image[0])
        return this.trackService.create( dto, image[0], audio[0])
    } 

    @Get()
    getAll(@Query('count') count:number,
        @Query('offset') offset: number){
        return this.trackService.getAll(count,offset)
    }

    @Get(':id')
    getOne(@Param('id') id:ObjectId){
        return this.trackService.getOne(id)

    }

    @Get('/search/:query')
    search(@Param('query') query : string){
        return this.trackService.search(query)
    }


    @Delete(':id')
    delete(@Param('id') id:ObjectId){
        return this.trackService.delete(id)
    }

    @Post('/comment')
    addComment(@Body() dto:CreateCommentDto){
        return this.trackService.addComment(dto)
    }

    @Post('/listen/:id')
    listen(@Param('id') id:ObjectId){
        return this.trackService.listen(id)
    }  
}