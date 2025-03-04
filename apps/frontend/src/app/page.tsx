import Hero from "@/components/hero";
import Posts from "@/components/Posts";
import { fetchPosts } from "@/lib/actions/postActions";
import { DEFAULT_PAGE_SIZE } from "@/lib/constants";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function Home({ searchParams }: Props) {
  const page = searchParams.page ? Number(searchParams.page) : undefined;
  const { posts, totalPosts } = await fetchPosts({ page });

  return (
    <main>
      <Hero />
      <Posts
        posts={posts}
        currentPage={page ? Number(page) : 0}
        totalPages={Math.ceil(totalPosts / DEFAULT_PAGE_SIZE)}
      />
    </main>
  );
}
