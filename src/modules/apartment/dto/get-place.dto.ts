import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString, Min, MIN } from 'class-validator';

export class GetPlaceParams {
  @ApiProperty({ example: 1 })
  @IsNumber()
  @Min(0)
  pageSize: number;

  @ApiProperty({ example: 1 })
  @IsNumber()
  @Min(0)
  page: number;

  @ApiProperty({ example: 1, nullable: true })
  @IsOptional()
  @IsString()
  name: string;

  @ApiProperty({ example: 1, nullable: true })
  @IsOptional()
  @IsString()
  address: string;

  @ApiProperty({ example: 1, nullable: true })
  @IsOptional()
  @IsNumber()
  @Min(0)
  limitUser: number;

  @ApiProperty({ example: 1, nullable: true })
  @IsOptional()
  @IsString()
  typePlace: string;

  @ApiProperty({ example: 1, nullable: true })
  @IsOptional()
  @IsNumber()
  @Min(0)
  minPrice: number;

  @ApiProperty({ example: 1, nullable: true })
  @IsOptional()
  @IsNumber()
  @Min(0)
  maxPrice: number;

  @ApiProperty({ example: 1, nullable: true })
  @IsOptional()
  @IsNumber()
  @Min(0)
  minArea: number;

  @ApiProperty({ example: 1, nullable: true })
  @IsOptional()
  @IsNumber()
  @Min(0)
  maxArea: number;

  @ApiProperty({ example: 1, nullable: true })
  @IsOptional()
  @IsString()
  province: string;

  @ApiProperty({ example: 1, nullable: true })
  @IsOptional()
  @IsString()
  district: string;
  
  @ApiProperty({ example: 1, nullable: true })
  @IsOptional()
  @IsString()
  ward: string;
  
}
