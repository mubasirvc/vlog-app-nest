import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SignInInput } from './dto/signin.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { verify } from 'argon2';

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}

  async validateLocalUser({ email, password }: SignInInput) {
    const user = await this.prismaService.user.findUnique({
      where: { email },
    });

    if (!user) throw new UnauthorizedException('User Not found!');

    const IsPasswordMatch = await verify(user.password!, password);

    if (!IsPasswordMatch)
      throw new UnauthorizedException('Invalid Credintials!');

    return user;
  }
}
