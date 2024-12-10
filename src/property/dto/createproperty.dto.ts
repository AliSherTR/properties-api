import { IsInt, IsPositive, IsString } from "class-validator";

export class CreatePropertyDto {
    @IsString()
    name: string

    @IsInt()
    @IsPositive()
    area: number
}