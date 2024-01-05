'use client'
import Spline from '@splinetool/react-spline'

export default function App() {
  return (
    <>
      <div className="absolute inset-0 flex items-center justify-center">
        <Spline
          className="absolute inset-0 z-0"
          scene="https://prod.spline.design/LQ7rrY2LazKjkAJ1/scene.splinecode"
        />
        <div className="text-center relative z-10 w-full">
          <h1 className="absolute -top-[100px] left-1/2 -translate-x-1/2 text-7xl uppercase w-full">
            maylogger channel
          </h1>
          <a
            className="block w-fit mx-auto text-xl bg-slate-100/10 py-5 p-10 rounded-full hover:bg-slate-100 hover:text-slate-700 transition-colors backdrop-blur-[3px]"
            href="https://youtube.com/@maylogger/"
          >
            Watch Now
          </a>
        </div>
      </div>
    </>
  )
}
