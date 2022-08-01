export default function Movies() {
    return(
        <>
            <div className="my-4 p-3">
                <h3 className="text-xl">Trending Movies</h3>
                <div className="movie p-2 flex overflow-x-auto scroll-smooth">
                    <div className="mx-2 shrink-0">
                        <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/49WJfeN0moxb9IPfGn8AIqMGskD.jpg" className="rounded-xl" />
                        <div className="p-2">
                            <h4>The Cabinet of Dr. Caligari</h4>
                            <h5>Mar 08, 1964</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}