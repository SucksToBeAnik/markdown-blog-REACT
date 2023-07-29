import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import blogStore from "../store";
import remarkGfm from "remark-gfm";

function BlogView() {
  const editContent = blogStore((s) => s.editContent);
  const setEditContent = blogStore((s) => s.setEditContent);
  const panel = blogStore((s) => s.panel);
  const selectedBlog = blogStore((s) => s.selectedBlog);
  const setSelectedBlog = blogStore((s) => s.setSelectedBlog);
  const updateBlog = blogStore((s) => s.updateBlog);
  const createBlog = blogStore((s) => s.createBlog);
  const editTitle = blogStore((s) => s.editTitle);
  const setEditTitle = blogStore((s) => s.setEditTitle);

  function handleSubmit(e) {
    e.preventDefault();
    if (selectedBlog !== null) {
      updateBlog({
        id: selectedBlog.id,
        title: editTitle,
        body: editContent,
      });
      setSelectedBlog(null);
    } else {
      createBlog({
        title: editTitle,
        body: editContent,
      });
    }
  }

  return (
    <div className="px-3 py-2 md:px-6 md:py-4">
      {panel === "view" ? (
        <div className="space-y-2 min-h-96">
        <ReactMarkdown className="prose" remarkPlugins={[remarkGfm]}>
          {editTitle}
        </ReactMarkdown>
        <ReactMarkdown className="prose" remarkPlugins={[remarkGfm]}>
          {editContent}
        </ReactMarkdown>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            placeholder="Give a title..."
            className="w-full border p-1 md:p-2 rounded-md focus:outline-none"
          />
          <textarea
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            placeholder="Write your blog here..."
            className="w-full h-96 rounded border p-1 md:p-2 focus:outline-none"
          ></textarea>
          <button className="rounded bg-purple-400 text-zinc-100 p-1 md:p-2 w-24 text-md uppercase font-semibold">Save</button>
        </form>
      )}
    </div>
  );
}

export default BlogView;
