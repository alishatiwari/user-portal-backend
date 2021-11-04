import { Injectable, BadRequestException } from '@nestjs/common';
import { RegisterRequestDto } from './dto/register.request.dto';
import { Users } from '../../../entities/user.entity';
import { generateMD5Hash } from '../../../utils/password.helper';
import { RegisterResponseDto } from './dto/register.response.dto';

@Injectable()
export class RegisterService {
  /**
   * It registers users to platform
   * @param registerRequestDto contains required user details
   */
  async registerUser(registerRequestDto: RegisterRequestDto) {
    const userExist = await Users.findOne({
      where: { email: registerRequestDto.email },
    });
    if (userExist) {
      throw new BadRequestException(
        'Email already taken, Please use another email',
      );
    }
    registerRequestDto.password = await generateMD5Hash(
      registerRequestDto.password,
    );
    const userData = await Users.create(registerRequestDto);
    return new RegisterResponseDto(userData);
  }
}
