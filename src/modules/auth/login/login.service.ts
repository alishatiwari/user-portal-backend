import { Injectable, BadRequestException } from '@nestjs/common';
import { Users } from '../../../entities/user.entity';
import { generateMD5Hash } from '../../../utils/password.helper';
import { LoginRequestDto } from './dto/login.request.dto';
import { LoginResponseDto } from './dto/login.response.dto';
import { JwtHelper } from '../../../utils/jwt.helper';
import { UserSessions } from '../../../entities/user.sessions.entity';

@Injectable()
export class LoginService {
  constructor(private readonly jwtHelper: JwtHelper) {}

  /**
   * It logs in user to platform
   * and generates a session token to access APIs
   * @param loginRequestDto
   */
  async login(loginRequestDto: LoginRequestDto) {
    const user = await Users.findOne({
      where: { email: loginRequestDto.email },
    });
    if (!user) {
      throw new BadRequestException('User not found');
    }
    const hashPassword = await generateMD5Hash(loginRequestDto.password);
    if (user.password !== hashPassword) {
      throw new BadRequestException('Invalid password');
    }
    const token = await this.jwtHelper.generateToken({ userid: user.userid });
    await UserSessions.upsert({ userid: user.userid, token });

    return new LoginResponseDto(token);
  }
}
