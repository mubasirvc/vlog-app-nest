import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { SignInInput } from './dto/signin.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Resolver()
export class AuthResolver {
  constructor(
    private readonly authService: AuthService,
  ) {}

  @Mutation(() => String)
  async signIn(@Args('signInInput') signInInput: SignInInput) {
    
    const user = await this.authService.validateLocalUser(signInInput)
    return "successful login"
  }
}
