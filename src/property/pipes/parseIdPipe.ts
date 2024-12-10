import { ArgumentMetadata, BadRequestException, HttpCode, HttpException, HttpStatus, Injectable, PipeTransform } from "@nestjs/common";


@Injectable() // now we can use it in other modules as well
export class ParseIdPipe implements PipeTransform<string , number> {
    transform(value: string, metadata: ArgumentMetadata): number {
        const val = parseInt(value)

        if( isNaN(val) ) {
            throw new BadRequestException("Id must be a number" )
        }

        if(val <= 0) {
            throw new HttpException("Id must be a positive number" , HttpStatus.BAD_REQUEST)
        }

        return val;
    }
}