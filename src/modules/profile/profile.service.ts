import { Injectable, BadRequestException } from '@nestjs/common';
import { Users } from '../../entities/user.entity';
import { ProfileResponseDto } from './dto/profile.response.dto';
import { ProfileUpdateRequestDto } from './dto/profile.update.request.dto';

@Injectable()
export class ProfileService {
  /**
   * It fetches & returns user's profile details
   * @param userid user's unique identifier
   */
  async viewProfile(userid: string) {
    const user = await Users.findOne({
      where: { userid },
    });
    if (!user) {
      throw new BadRequestException('User not found');
    }

    return new ProfileResponseDto(user);
  }

  async updateProfile(
    userid: string,
    profileUpdateRequestDto: ProfileUpdateRequestDto,
  ) {
    const user = await Users.findOne({
      where: { userid },
    });
    if (!user) {
      throw new BadRequestException('User not found');
    }
    await Users.update(profileUpdateRequestDto, { where: { userid } });

    return {};
  }
}
