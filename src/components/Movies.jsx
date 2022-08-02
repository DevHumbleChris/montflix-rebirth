export default function Movies() {
  return (
    <>
      <div className="my-4 p-3">
        <h3 className="text-xl">Trending Movies</h3>
        <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
          <div class="animate-pulse flex space-x-4">
            <div class="flex-1 space-y-6 py-1">
              <div class="h-48 bg-slate-200 rounded"></div>
              <div class="space-y-3">
                <div class="grid grid-cols-3 gap-4">
                  <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                  <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                </div>
                <div class="h-2 bg-slate-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="movie p-2 flex overflow-x-auto scroll-smooth">
                    <div className="mx-2 shrink-0">
                        <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/49WJfeN0moxb9IPfGn8AIqMGskD.jpg" className="rounded-xl" />
                        <div className="p-2">
                            <h4>The Cabinet of Dr. Caligari</h4>
                            <h5>Mar 08, 1964</h5>
                        </div>
                    </div>
                </div> */}
      </div>
    </>
  );
}
