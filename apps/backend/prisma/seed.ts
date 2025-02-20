import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const generateSlug = (str: string): string => {
  return str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '');
};

async function main() {
  const users = Array.from({ length: 10 }).map(() => ({
    name: faker.person.fullName(),
    email: faker.internet.email(),
    bio: faker.lorem.sentence(),
    avatar: faker.image.avatar(),
  }));

  await prisma.user.createMany({
    data: users,
  });

  const posts = Array.from({ length: 40 }).map(() => ({
    title: faker.lorem.sentence(),
    slug: generateSlug(faker.lorem.sentence()),
    content: faker.lorem.paragraph(3),
    thumbnail: faker.image.urlLoremFlickr(),
    authorId: faker.number.int({ min: 1, max: 10 }),
    published: true,
  }));
  
  await Promise.all(
    posts.map(async (post) => {
      await prisma.post.create({
        data: {
          ...post,
          comments: {
            createMany: {
              data: Array.from({ length: 20 }).map(() => ({
                content: faker.lorem.sentence(),
                authorId: faker.number.int({ min: 1, max: 10 }),
              })),
            },
          },
        },
      });
    })
  );
  

  console.log('seeding completed');
}

main()
  .then(() => {
    prisma.$disconnect();
  })
  .catch((e) => {
    prisma.$disconnect();
    console.log(e);
  });
