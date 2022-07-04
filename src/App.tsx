import { useState } from 'react'
import myImage from './assets/astronauta.jpg';

export function App() {
  return (
    <div className="min-h-[100vh] flex flex-col items-center justify-center bg-black text-white">
      <div className="p-6 rounded-md bg-zinc-900">
        <div className="flex items-center gap-6">
          <img src={myImage} alt="Astronauta usando notebook" className="rounded-full w-20" />
          <h1 className="text-xl font-light">@i_am__danyy</h1>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-center">know me:</h2>
          <ul className="font-light">
            <li>
              i love electric guitar
            </li>
            <li>
              rock 80/90s {'<3'}
            </li>
            <li>
              developer with love
            </li>
            <li>
              slash is my reference
            </li>
          </ul>
        </div>
        <footer className="text-center mt-4 font-thin text-opacity-70">under development 🛠️</footer>
      </div>
    </div>
  )
}