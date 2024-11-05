import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class SecretKeyMiddleware implements NestMiddleware {
  private readonly SECRET_KEY = process.env.SECRET_KEY;
  use(req: Request, res: Response, next: NextFunction) {
    const secretKey = req.get('APIKey');
    if (!secretKey || secretKey !== this.SECRET_KEY) {
      throw new UnauthorizedException('Invalid secret key');
    }
    next();
  }
}
