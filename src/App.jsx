import BlogList from "./components/BlogList";
import BlogEdit from "./components/BlogEdit";
import BlogView from "./components/BlogView";
import blogStore from "./store";
import Lottie from 'lottie-react'
import blog from './assets/blog.json'

function App() {
  const panel = blogStore((state) => state.panel);
  const setPanel = blogStore((state) => state.setPanel);
  const setEditContent = blogStore((s) => s.setEditContent);
  const setEditTitle = blogStore((s) => s.setEditTitle);

  function handlePanel() {
    setEditContent("");
    setEditTitle("");
    setPanel("edit");
  }
  function handleHome() {
    setPanel(null);
  }

  return (
    <main className="grid min-h-screen grid-cols-3 gird-rows-2 md:grid-rows-1 gap-5">
      <section className="col-span-3 row-start-2 md:row-start-1 flex flex-col items-center rounded bg-stone-100 p-2 md:col-span-1">


        <div className="flex w-full items-center justify-between">
          <button
            onClick={handleHome}
            className="mb-2 rounded bg-purple-400 px-3 py-2 uppercase text-stone-100"
          >
            Home
          </button>
          <button
            onClick={handlePanel}
            className="mb-2 rounded bg-purple-400 px-3 py-2 uppercase text-stone-100"
          >
            Write Blog
          </button>
        </div>


        <div className="h-full w-full self-start">
          <BlogList />
        </div>
      </section>

      <section className="col-span-3 md:col-span-2 row-start-1 md:row-start-1">
        {panel === null ? (
          <div className="flex h-full w-full flex-col items-center justify-evenly text-left py-2 px-2">
            <div className="w-full space-y-2 md:w-3/5">

              <Lottie animationData={blog} loop={true} className="h-3/5" />

              <h1 className="from bg-purple-400 bg-gradient-to-r to-purple-200 bg-clip-text py-3 text-4xl text-transparent md:text-6xl">
                Write beautiful blogs!
              </h1>
              <h2 className="rounded bg-purple-400 p-2 text-2xl text-zinc-100 md:text-4xl">
                Publish now!
              </h2>
              <p></p>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex justify-around px-3 py-2">
              <h3
                onClick={() => setPanel("edit")}
                className={`${
                  panel !== "edit"
                    ? "bg-white text-stone-700"
                    : "bg-purple-400 text-zinc-100"
                } flex-grow cursor-pointer rounded-md px-1 py-1 text-center text-lg uppercase md:px-3 md:py-2 md:text-2xl`}
              >
                Edit
              </h3>
              <h3
                onClick={() => setPanel("view")}
                className={`${
                  panel !== "view"
                    ? "bg-white text-stone-700"
                    : "bg-purple-400 text-zinc-100"
                } flex-grow cursor-pointer rounded-md px-1 py-1 text-center text-lg uppercase md:px-3 md:py-2 md:text-2xl`}
              >
                View
              </h3>
            </div>
            {panel !== null && <BlogView />}
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
