import { Body, Controller, Get, HttpCode, Param, ParseBoolPipe, Post, Query, UsePipes } from '@nestjs/common';
import { CreatePropertyDto } from './dto/createproperty.dto';
import { IdParamDto } from './dto/idParam.dto';
import { ParseIdPipe } from './pipes/parseIdPipe';
import { createPropertySchema, CreatePropertyZodDto } from './dto/createPropertyZod.dto';
import { ZodValidationPipe } from './pipes/zodValidationPipe';

@Controller('property')
export class PropertyController {

    @Get()
    findAll(){
        return "All Properties"
    }

    @Get(":id")
    findOne(@Param( "id" , ParseIdPipe) id : number) {
        return id
    }

    @Post()
    @UsePipes(new ZodValidationPipe(createPropertySchema))
    create(@Body() body: CreatePropertyZodDto ) {
        return body;
    }
}
