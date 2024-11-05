import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async login(data: any) {
    const payload = { username: data.email, sub: 1 };
    return { accessToken: this.jwtService.sign(payload) };
  }
}
