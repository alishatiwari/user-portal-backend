import { Controller, Body, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiOkResponse } from '@nestjs/swagger';
import { LoginRequestDto } from './dto/login.request.dto';
import { LoginService } from './login.service';
import { LoginResponseDto } from './dto/login.response.dto';

@ApiTags('Login')
@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @ApiOperation({
    summary: 'To sign-in/log-in a user',
  })
  @ApiOkResponse({
    description: 'success',
    type: LoginResponseDto,
  })
  @Post()
  async loginuser(@Body() loginRequestDto: LoginRequestDto) {
    const data = await this.loginService.login(loginRequestDto);
    return { data };
  }
}
