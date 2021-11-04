import { ApiProperty } from '@nestjs/swagger';
import { UserObject } from '../interface/userobject.interface';

export class RegisterResponseDto {
  @ApiProperty()
  readonly userid: string;

  @ApiProperty()
  readonly firstname: string;

  @ApiProperty()
  readonly lastname: string;

  @ApiProperty()
  readonly email: string;

  @ApiProperty()
  readonly avatar: string;

  constructor(user: UserObject) {
    this.userid = user.userid;
    this.firstname = user.firstname;
    this.lastname = user.lastname;
    this.email = user.email;
    this.avatar = user.avatar;
  }
}
