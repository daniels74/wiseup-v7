import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from '@prisma/client';
import { GetUser } from 'src/auth/decorator';

@Controller('users')
export class UserController {
  @UseGuards(AuthGuard('jason-web-token'))
  @Get('me')
  getMe(
    @GetUser() user: User,
    @GetUser('email') email: string,
    @GetUser('id') id: number,
  ) {
    console.log('email: ', email);
    console.log('id: ', id);
    return user;
  }
}
