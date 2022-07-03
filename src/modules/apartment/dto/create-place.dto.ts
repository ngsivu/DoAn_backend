import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsString,
  IsNumber,
  IsOptional,
  Matches,
  IsBoolean,
} from 'class-validator';

export class CreatePlaceDto {
  @ApiProperty({ required: true, example: 'Phòng trọ 3 người Đống Đa' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ required: true, example: 'Lãng Yên hai bà trung' })
  @IsNotEmpty()
  @IsString()
  address: string;

  @ApiProperty({ required: true, example: '1' })
  @IsNotEmpty()
  @IsString()
  province: string;

  @ApiProperty({ required: true, example: '1' })
  @IsNotEmpty()
  @IsString()
  district: string;

  @ApiProperty({ required: true, example: '1' })
  @IsNotEmpty()
  @IsString()
  ward: string;

  @ApiProperty({ required: true, example: '1' })
  @IsNotEmpty()
  @IsString()
  area: string;

  @ApiProperty({ required: true, example: 1000 })
  @IsNotEmpty()
  @Matches(/^[0-9]*$/, {
    message: 'Giá phải chứ ký tự 0-9',
  })
  price: string;

  @ApiProperty({ example: 1000 })
  @IsString()
  deposit: string;

  @ApiProperty({ example: 1000 })
  @IsString()
  totalBedroom: string;

  @ApiProperty({ example: 1000 })
  @IsString()
  totalRestroom: string;

  @ApiProperty({ required: true, example: 'description' })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsArray()
  imageDetails;

  @ApiProperty({ example: 1000 })
  @IsArray()
  services;

  @ApiProperty({ example: 1000 })
  @IsOptional()
  @IsNumber()
  limitUsers: number;

  @ApiProperty({ example: false })
  @IsBoolean()
  vip: boolean;
}
