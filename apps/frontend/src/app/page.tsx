import Hero from "@/components/hero";
import Posts from "@/components/Posts";
import { fetchPosts } from "@/lib/actions/postActions";
import { DEFAULT_PAGE_SIZE } from "@/lib/constants";
import { getSession } from "@/lib/session";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function Home({ searchParams }: Props) {
  const page = await searchParams.page ? Number( await searchParams.page) : undefined;
  const { posts, totalPosts } = await fetchPosts({ page });

  const session = await getSession()
  console.log(session, 'session');
  
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
