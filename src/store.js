import { create } from "zustand";
import { nanoid } from "nanoid";

const initialBlogs = [
  {
    id: nanoid(),
    title: "test 1",
    body: "test body 2",
  },
  {
    id: nanoid(),
    title: "test 2",
    body: "## hello",
  },
  {
    id: nanoid(),
    title: "test 1",
    body: "test body 2",
  },
  {
    id: nanoid(),
    title: "test 2",
    body: "## hello",
  },
];

const initialState = {
  panel: null,
  blogs: initialBlogs,
  editTitle:'',
  editContent: "",
  selectedBlog: null
};

const blogStore = create((set) => ({
  ...initialState,
  setEditTitle: (title) => set(() => ({ editTitle: title })),
  setEditContent: (content) => set(() => ({ editContent: content })),
  setSelectedBlog: (blog)=>set(()=>({selectedBlog:blog})),
  setPanel: (activePanel) => set(() => ({ panel: activePanel })),
  createBlog: (blog) =>
    set((state) => ({ blogs: [...state.blogs, { id: nanoid(), ...blog }] })),
  updateBlog: (blog) =>
    set((state) => {
      const remainingBlogs = state.blogs.filter((item) => item.id !== blog.id);
      
      return {blogs:[blog,...remainingBlogs]}
    }),
  deleteBlog: (id) =>
    set((state) => {
      const remainingBlogs = state.blogs.filter((blog) => blog.id !== id);
      return { blogs: remainingBlogs };
    }),
}));

export default blogStore;
