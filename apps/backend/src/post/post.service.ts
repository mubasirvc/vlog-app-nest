import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async findAll({ skip = 0, take = 12 }: { skip?: number; take?: number }) {
    return await this.prisma.post.findMany({ skip, take });
  }

  async count(){
    return await this.prisma.post.count()
  }
}
