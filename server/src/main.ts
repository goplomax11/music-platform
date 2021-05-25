import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"


const start = async () =>{
    try{
        const PORT =  process.env.PORT || 5000;
        const app = NestFactory.create(AppModule);
        (await app).listen(PORT, () => console.log(`server work on ${PORT} port `))
    } catch (e){
        console.log(e)
    }
}

start()