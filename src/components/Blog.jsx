import {FaTrash, FaPen, FaEye} from 'react-icons/fa6'
import blogStore from '../store';


function Blog({ blog }) {
  const deleteBlog = blogStore(state=>state.deleteBlog)
  const setPanel = blogStore(state=>state.setPanel)
  const setEditContent = blogStore(state=>state.setEditContent)
  const setEditTitle = blogStore(state=>state.setEditTitle)
  const setSelectedBlog = blogStore(state=>state.setSelectedBlog)

  function handleView(){
    setPanel('view')
    setEditContent(blog.body)
  }
  function handleEdit(){
    setPanel('edit')
    // setEditContent(blog.body)
    // setEditTitle(blog.title)
    setSelectedBlog(blog)

  }

  return (
    <div className="flex row justify-between items-center bg-stone-100 rounded p-2">
      <h1 className="text-xl text-stone-700 font-bold">
        {blog.title}
      </h1>
      <div className='flex items-center justify-center gap-1 md:gap-3 text-xs font-normal'>
        <button onClick={handleView} className='p-1 rounded shadow bg-purple-400 text-zinc-100'>
            < FaEye />
        </button >
        <button  onClick={handleEdit} className='p-1 rounded shadow bg-purple-400 text-zinc-100'>
            < FaPen />
        </button>
        <button onClick={()=>deleteBlog(blog.id)} className='p-1 rounded shadow bg-purple-400 text-zinc-100'>
            <FaTrash />
        </button>
      </div>
    </div>
  );
}

export default Blog;
