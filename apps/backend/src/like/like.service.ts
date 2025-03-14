import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LikeService {
  constructor(private readonly prismaService: PrismaService) {}

  async likePost({ postId, userId }: { postId: number; userId: number }) {
    try {
      const like = await this.prismaService.like.create({
        data: {
          userId,
          postId,
        },
      });

      return !!like;
    } catch (error) {
      throw new BadRequestException('You have already liked this post!');
    }
  }

  async unLikePost({ postId, userId }: { postId: number; userId: number }) {
    try {
      await this.prismaService.like.delete({
        where: {
          userId_postId: {
            userId,
            postId,
          },
        },
      });

      return true;
    } catch (error) {
      throw new BadRequestException('Like not found!');
    }
  }

  async getPostLikesCount(postId: number) {
    return this.prismaService.like.count({ where: { postId } });
  }

  async isUserLikedPost({
    userId,
    postId,
  }: {
    userId: number;
    postId: number;
  }) {
    const isLiked = await this.prismaService.like.findFirst({
      where: { postId, userId },
    });

    return !!isLiked
  }
}
