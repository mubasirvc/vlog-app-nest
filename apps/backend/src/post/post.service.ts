import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostInput } from './dto/create-post.input';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async findAll({ skip = 0, take = 12 }: { skip?: number; take?: number }) {
    return await this.prisma.post.findMany({ skip, take });
  }

  async count() {
    return await this.prisma.post.count();
  }

  async findOne(id: number) {
    return await this.prisma.post.findFirst({
      where: {
        id,
      },
      include: {
        author: true,
        tags: true,
      },
    });
  }

  async findByUser({
    userId,
    skip,
    take,
  }: {
    userId: number;
    skip: number;
    take: number;
  }) {
    return await this.prisma.post.findMany({
      where: { author: { id: userId } },
      select: {
        id: true,
        content: true,
        createdAt: true,
        published: true,
        slug: true,
        title: true,
        thumbnail: true,
        _count: {
          select: { comments: true, likes: true },
        },
      },
      take,
      skip,
    });
  }

  async userPostCount(userId: number) {
    return await this.prisma.post.count({ where: { authorId: userId } });
  }

  async create({
    createPostInput,
    authorId,
  }: {
    createPostInput: CreatePostInput;
    authorId: number;
  }) {
    return await this.prisma.post.create({
      data: {
        ...createPostInput,
        thumbnail: createPostInput.thumbnail ?? 'null',
        author: {
          connect: {
            id: authorId,
          },
        },
        tags: {
          connectOrCreate: createPostInput.tags.map((tag) => ({
            where: { name: tag },
            create: { name: tag },
          })),
        },
      },
    });
  }
}
