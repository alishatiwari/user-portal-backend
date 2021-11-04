import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { jwtConfig } from '../config/env';
import { UserSessions } from '../entities/user.sessions.entity';

@Injectable()
export class JwtHelper {
  /**
   * It generates a jwt token with given payload
   * @param tokenDto payload
   */
  generateToken(tokenDto: { userid: string }): string {
    const token = jwt.sign(tokenDto, jwtConfig.secret, {
      expiresIn: jwtConfig.expiry,
    });
    return token;
  }

  /**
   * It verifies given jwt token
   * @param token
   */
  async verify(token: string) {
    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET);
      const userSession = await UserSessions.findOne({
        where: { userid: payload.userid, token },
      });
      if (!userSession) {
        return false;
      }
      return { userid: payload.userid };
    } catch (e) {
      return false;
    }
  }

  /**
   * It extracts user's accessToken from request headers
   * @param request
   */
  getTokenFromHeader(request: Request): string {
    let token = request.headers['accesstoken'];

    if (token && token.startsWith('Bearer ')) {
      // Remove Bearer from string
      return (token = token.slice(7, token.length));
    }
    return token;
  }
}
