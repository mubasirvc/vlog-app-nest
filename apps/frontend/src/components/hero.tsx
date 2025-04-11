const Hero = () => {
  return (
    <>
      <section className="px-2 pt-32 bg-white md:px-0">
        <div className="container items-center max-w-7xl px-8 mx-auto xl:px-5">
          <div className="flex flex-wrap items-center sm:-mx-3">          <div className="w-full md:w-1/2 md:px-3">
            <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-600 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                <span className="block xl:inline">
                  {" "}
                  Discover Inspiring Stories
                </span>{" "}
                <span className="block text-indigo-600 xl:inline">
                  & Expert Insights
                </span>
              </h1>
              <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                Explore thought-provoking articles, expert opinions, and the latest trends across various topics.

              </p>
              <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                <a
                  href="#posts"
                  className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-indigo-600 rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto"
                >
                  Read Latest Posts
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 ml-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </div>
            <div className="w-full md:w-1/2">
              <img id="heroImg1" className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0" src="./hero.svg" alt="Awesome hero page image" width="500" height="488" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;