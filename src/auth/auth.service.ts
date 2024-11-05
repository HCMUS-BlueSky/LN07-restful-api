import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async login(data: any) {
    const payload = { username: data.email };
    return {
      accessToken: this.jwtService.sign(payload, { expiresIn: '1m' }),
      refreshToken: this.jwtService.sign(payload, { expiresIn: '1d' }),
    };
  }

  async refresh(refreshToken: string) {
    try {
      const payload = this.jwtService.verify(refreshToken);

      // Generate a new access token
      const newAccessToken = this.jwtService.sign(
        { username: payload.username },
        {
          expiresIn: '1m',
        },
      );

      return { accessToken: newAccessToken };
    } catch {
      throw new UnauthorizedException('Invalid or expired refresh token');
    }
  }
}
