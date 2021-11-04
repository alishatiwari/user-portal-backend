import { Controller, Body, Get, Put, UseGuards } from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiOkResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { ProfileService } from './profile.service';
import { ProfileResponseDto } from './dto/profile.response.dto';
import { ProfileUpdateRequestDto } from './dto/profile.update.request.dto';
import { UserGuard } from '../../guards/user.guard';
import { User } from '../../decorators/user.decorator';

@ApiTags('Profile')
@ApiBearerAuth()
@Controller('profile')
@UseGuards(UserGuard)
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @ApiOperation({
    summary: 'To view a user profile',
  })
  @ApiOkResponse({
    description: 'success',
    type: ProfileResponseDto,
  })
  @Get()
  async viewProfile(@User() caller: { userid: string }) {
    const data = await this.profileService.viewProfile(caller.userid);
    return { data };
  }

  @ApiOperation({
    summary: 'To update a user profile',
  })
  @ApiOkResponse({
    description: 'success',
    type: ProfileResponseDto,
  })
  @Put()
  async updateProfile(
    @User() caller: { userid: string },
    @Body() profileUpdateRequestDto: ProfileUpdateRequestDto,
  ) {
    const data = await this.profileService.updateProfile(
      caller.userid,
      profileUpdateRequestDto,
    );
    return { data, message: 'Profile has been updated successfully!!!' };
  }
}
