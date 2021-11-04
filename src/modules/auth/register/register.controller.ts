import { Controller, Post, Body } from '@nestjs/common';
import { RegisterRequestDto } from './dto/register.request.dto';
import { ApiTags, ApiOperation, ApiOkResponse } from '@nestjs/swagger';
import { RegisterService } from './register.service';
import { RegisterResponseDto } from './dto/register.response.dto';

@ApiTags('Register')
@Controller('register')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @ApiOperation({
    summary: 'To register/sign-up a user',
  })
  @ApiOkResponse({
    description: 'success',
    type: RegisterResponseDto,
  })
  @Post()
  async registerUser(@Body() registerRequestDto: RegisterRequestDto) {
    const data = await this.registerService.registerUser(registerRequestDto);
    return { data };
  }
}
