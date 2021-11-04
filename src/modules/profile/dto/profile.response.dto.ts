import { ApiProperty } from '@nestjs/swagger';
import { UserObject } from '../../../modules/auth/register/interface/userobject.interface';
import { RegisterResponseDto } from '../../../modules/auth/register/dto/register.response.dto';

export class ProfileResponseDto extends RegisterResponseDto {
  @ApiProperty()
  readonly memberSince: string;

  constructor(user: UserObject) {
    super(user);
    this.memberSince = user.createdAt;
  }
}
