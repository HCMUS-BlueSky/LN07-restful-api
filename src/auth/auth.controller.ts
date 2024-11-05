import {
  Body,
  Controller,
  Post,
  Response,
  Request,
  Res,
  Req,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() data: any, @Response() res) {
    const { accessToken, refreshToken } = await this.authService.login(data);
    res.cookie('refreshToken', refreshToken, {
      expires: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
      sameSite: 'strict',
      httpOnly: true,
    });
    return { accessToken };
  }

  @Post('refresh')
  async refresh(@Req() req) {
    const refreshToken = req.cookies['refreshToken'];
    if (!refreshToken) {
      throw new UnauthorizedException('Refresh token not found');
    }
    // Optionally, you could refresh the refresh token by setting it again
    // res.cookie('refreshToken', refreshToken, {
    //   httpOnly: true,
    //   secure: true,
    //   sameSite: 'strict',
    // });

    return await this.authService.refresh(refreshToken);
  }
}
