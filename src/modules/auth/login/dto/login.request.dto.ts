import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class LoginRequestDto {
  @ApiProperty({ name: 'email' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ name: 'password' })
  @IsString()
  @IsNotEmpty()
  password: string;
}
