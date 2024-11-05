import {
  Body,
  Controller,
  Post,
  Req,
  UnauthorizedException,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() data: any, @Res() res: Response) {
    try {
      const { accessToken, refreshToken } = await this.authService.login(data);

      res.cookie('refreshToken', refreshToken, {
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
        sameSite: 'strict',
        httpOnly: true,
      });

      return res.status(HttpStatus.OK).json({ accessToken });
    } catch (error) {
      return res.status(HttpStatus.UNAUTHORIZED).json({
        message: 'Invalid credentials',
      });
    }
  }

  @Post('refresh')
  async refresh(@Req() req) {
    const refreshToken = req.cookies['refreshToken'];
    if (!refreshToken) {
      throw new UnauthorizedException('Refresh token not found');
    }

    return await this.authService.refresh(refreshToken);
  }
}
