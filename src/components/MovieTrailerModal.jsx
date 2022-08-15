/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { Fragment, useState, useEffect } from 'react'
import { Dialog,Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { useSelector, useDispatch } from 'react-redux'
import { setMovieTrailerModal } from '../store/mainStore'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function MovieTrailerModal({ movie }) {
  const isMovieTrailerModalOpen = useSelector(state => state.mainStore.isMovieTrailerModalOpen)
  const dispatch = useDispatch()
  const [trailerId, setTrailerId] = useState("")
  const opts = {
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const openMovieTrailerModal = () => {
    dispatch(setMovieTrailerModal())
  }
  const onReady = (event) => {
    event.target.playVideo();
  }
  const getTrailerID = async (movie) => {
    const trailerID = await movieTrailer(`${movie?.title || movie?.name }`, {id: true })
    setTrailerId(trailerID)
  }
  useEffect(() => {
    getTrailerID(movie)
  }, [movie])

  return (
    <Transition.Root show={isMovieTrailerModalOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={openMovieTrailerModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="hidden fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity md:block" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-stretch md:items-center justify-center min-h-full text-center md:px-2 lg:px-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              enterTo="opacity-100 translate-y-0 md:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 md:scale-100"
              leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            >
              <Dialog.Panel className="flex text-base text-left transform transition w-full md:max-w-2xl md:px-4 md:my-8 lg:max-w-4xl">
                <div className="w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                  <button
                    type="button"
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                    onClick={() => openMovieTrailerModal()}
                  >
                    <span className="sr-only">Close</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  <div className="w-full">
                    <h3 className='banner_title my-4 text-gray-400'>{movie?.title || movie?.name } - Trailer</h3>
                    <YouTube videoId={`${trailerId}`} opts={opts} onReady={onReady}/>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
