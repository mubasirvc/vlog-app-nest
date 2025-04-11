
import { Post } from "@/lib/types/modelTypes";
import PostCard from "./PostCard";
import Pagination from "./Pagination";

type Props = {
  posts: Post[];
  currentPage: number;
  totalPages: number;
};

const Posts = async ({ posts, currentPage, totalPages }: Props) => {
  return (
    <section id="posts" className="pt-8 lg:pt-32 bg-[url('https://pagedone.io/asset/uploads/1691055810.png')] bg-center bg-cover">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
        <h1 className="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl text-gray-600 mb-5 md:text-5xl leading-[50px]">
          Latest
          <span className="text-indigo-600 ml-2">Articles</span>
        </h1>
        <p className="max-w-2xl mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9">
        Stay updated with insightful articles, expert opinions, and trending topics across various fields.  
        Dive into knowledge and discover something new every day!
        </p>
        <div className="h-1 mx-auto bg-gradient-to-r from-gray-500 to-gray-800 w-[700px] mb-9 rounded-t-md mt-5"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          {posts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
        <Pagination
          className="mt-4 mb-20"
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </div>
    </section>
  );
};

export default Posts;