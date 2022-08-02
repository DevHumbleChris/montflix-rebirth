export default function Movies() {
  return (
    <>
      <div className="my-4 p-3">
        <h3 className="text-xl">Trending Movies</h3>
        {/* Loading  */}
        <div className="movie p-2 flex overflow-x-auto scroll-smooth">
          <div class="rounded-md p-4 max-w-sm w-64 shrink-0">
            <div class="animate-pulse flex space-x-4">
              <div class="flex-1 space-y-6 py-1">
                <div class="h-80 bg-slate-200 rounded"></div>
                <div class="space-y-3">
                  <div class="h-2 bg-slate-200 rounded"></div>
                  <div class="h-2 bg-slate-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="rounded-md p-4 max-w-sm w-64 shrink-0">
            <div class="animate-pulse flex space-x-4">
              <div class="flex-1 space-y-6 py-1">
                <div class="h-80 bg-slate-200 rounded"></div>
                <div class="space-y-3">
                  <div class="h-2 bg-slate-200 rounded"></div>
                  <div class="h-2 bg-slate-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="rounded-md p-4 max-w-sm w-64 shrink-0">
            <div class="animate-pulse flex space-x-4">
              <div class="flex-1 space-y-6 py-1">
                <div class="h-80 bg-slate-200 rounded"></div>
                <div class="space-y-3">
                  <div class="h-2 bg-slate-200 rounded"></div>
                  <div class="h-2 bg-slate-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="rounded-md p-4 max-w-sm w-64 shrink-0">
            <div class="animate-pulse flex space-x-4">
              <div class="flex-1 space-y-6 py-1">
                <div class="h-80 bg-slate-200 rounded"></div>
                <div class="space-y-3">
                  <div class="h-2 bg-slate-200 rounded"></div>
                  <div class="h-2 bg-slate-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="rounded-md p-4 max-w-sm w-64 shrink-0">
            <div class="animate-pulse flex space-x-4">
              <div class="flex-1 space-y-6 py-1">
                <div class="h-80 bg-slate-200 rounded"></div>
                <div class="space-y-3">
                  <div class="h-2 bg-slate-200 rounded"></div>
                  <div class="h-2 bg-slate-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="rounded-md p-4 max-w-sm w-64 shrink-0">
            <div class="animate-pulse flex space-x-4">
              <div class="flex-1 space-y-6 py-1">
                <div class="h-80 bg-slate-200 rounded"></div>
                <div class="space-y-3">
                  <div class="h-2 bg-slate-200 rounded"></div>
                  <div class="h-2 bg-slate-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Of Loading COntainer */}
        <div className="movie p-2 flex overflow-x-auto scroll-smooth">
          <div className="mx-2 shrink-0">
            <img
              src="https://www.themoviedb.org/t/p/w220_and_h330_face/49WJfeN0moxb9IPfGn8AIqMGskD.jpg"
              className="rounded-xl"
            />
            <div className="p-2">
              <h4>The Cabinet of Dr. Caligari</h4>
              <h5>Mar 08, 1964</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
