import CrossIcon from "./components/icons/crossIcon";
import MoonIcon from "./components/icons/MoonIcon";

function App() {
  const classButtonSelector =
    "inline-block h-5 w-5 rounded-full border-2 flex-none items-center";

  return (
    <div className=" min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold uppercase tracking-[0.3em] text-white">
            TODO
          </h1>
          <button>
            <MoonIcon />
          </button>
        </div>
        <form className="mt-8 flex items-center gap-4 overflow-hidden rounded-md bg-white p-4">
          <span className="inline-block h-5 w-5 rounded-full border-2"></span>
          <input
            className="w-full text-gray-400 outline-none"
            type="text"
            placeholder="Create a new todo..."
          />
        </form>
      </header>
      <main className="container mx-auto mt-5 px-4 ">
        <div className="rounded-md bg-white">
          <article className="flex gap-4 border-b border-b-gray-300 p-4">
            <button className={classButtonSelector}></button>
            <p className="grow text-gray-600">
              Complete online Javascript course
            </p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>
          <article className="flex gap-4 border-b border-b-gray-300 p-4">
            <button className={classButtonSelector}></button>
            <p className="grow text-gray-600">
              Complete online Javascript course
            </p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>
          <article className="flex gap-4 border-b border-b-gray-300 p-4">
            <button className={classButtonSelector}></button>
            <p className="grow text-gray-600">
              Complete online Javascript course
            </p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>

          <section className="flex justify-between p-4 text-gray-400">
            <span>5 tems left</span>
            <button>Clear Completed</button>
          </section>
        </div>
      </main>

      <section className="container mx-auto mt-5 px-4 ">
        <div className="flex justify-center gap-4 rounded-md bg-white p-4">
          <button className=" font-semibold text-gray-400 hover:text-sky-500">
            All
          </button>
          <button className=" font-semibold text-gray-400 hover:text-sky-500">
            Active
          </button>
          <button className=" font-semibold text-gray-400 hover:text-sky-500">
            Completed
          </button>
        </div>
      </section>

      <section className="mt-5 text-center">
        <p className="font-semibold text-gray-400">
          Drag and drop to reader list
        </p>
      </section>
    </div>
  );
}

export default App;
