import { fetchPostById } from "@/lib/actions/postActions";
import Image from "next/image";
import SanitizedContent from "./_components/SanitizedContent";
import Comments from "./_components/Comments";
import { getSession } from "@/lib/session";
import Like from "./_components/Like";

type Props = {
  params: {
    id: string;
  };
};

const PostPage = async ({ params }: Props) => {
  const postId = (await params).id;
  const post = await fetchPostById(Number(postId));
  const session = await getSession()

  return (
    <main className="container mx-auto px-4 py-8 mt-16">
      <h1 className="text-4xl font-bold mb-4 text-slate-700">{post.title}</h1>
      <p className="text-slate-500 text-sm mb-4">
        By {post.author.name} | {new Date(post.createdAt).toLocaleDateString()}
      </p>

      <div className="relative w-80 h-60">
        <Image
          src={post.thumbnail || "/no-image.jpg"}
          alt={post.title}
          fill
          className="rounded-md object-cover"
        />
      </div>

      <SanitizedContent content={post.content} />
      <Like postId={post.id} user={session?.user} />
      <Comments user={session?.user} postId={post.id} />
    </main>
  );
};

export default PostPage;