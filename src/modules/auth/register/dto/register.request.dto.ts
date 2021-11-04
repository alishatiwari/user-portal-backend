import {
  IsString,
  IsNotEmpty,
  MaxLength,
  IsEmail,
  Matches,
  IsOptional,
  IsUrl,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class RegisterRequestDto {
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

  @ApiProperty({ name: 'email' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ name: 'password' })
  @IsString()
  @IsNotEmpty()
  @Matches(
    /^(?=.{6,})(?!.*[\s])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.+[`~()',;_\[\]|\\/.<>?:"{}@#$%^&+*!=-]).*$/,
    {
      message: 'Password too weak',
    },
  )
  password: string;

  @ApiPropertyOptional({ name: 'avatar' })
  @IsOptional()
  @IsUrl()
  @IsNotEmpty()
  avatar: string;
}
