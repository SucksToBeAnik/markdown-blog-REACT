import Blog from "./Blog";
import blogStore from "../store";

function BlogList() {
  const blogs = blogStore((state) => state.blogs);

  return (
    <div className="h-full rounded bg-gradient-to-b from-purple-400 to-purple-200 ">
      {blogs.length > 0 ? (
        <div className=" space-y-2 px-2 py-3">
          {blogs.map((blog) => (
            <Blog key={blog.id} blog={blog} />
          ))}
        </div>
      ) : (
        <h1 className="text-2xl md:text-3xl p-2 mt-auto text-zinc-100">The blog drawer is empty!</h1>
      )}
    </div>
  );
}

export default BlogList;
