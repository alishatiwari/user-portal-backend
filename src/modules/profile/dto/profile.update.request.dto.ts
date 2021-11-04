import {
  IsString,
  IsNotEmpty,
  MaxLength,
  IsOptional,
  IsUrl,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class ProfileUpdateRequestDto {
  @ApiProperty({ name: 'firstname' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  firstname: string;

  @ApiProperty({ name: 'lastname' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  lastname: string;

  @ApiPropertyOptional({ name: 'avatar' })
  @IsOptional()
  @IsUrl()
  @IsNotEmpty()
  avatar: string;
}
