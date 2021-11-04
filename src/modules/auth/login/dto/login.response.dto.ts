import { ApiProperty } from '@nestjs/swagger';

export class LoginResponseDto {
  @ApiProperty({ name: 'accessToken' })
  readonly accessToken: string;

  constructor(token: string) {
    this.accessToken = token;
  }
}
