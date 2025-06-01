import { refProps } from './types';

export default function About({ aRef }: refProps) {
  return (
    <div
      ref={aRef}
      className='h-screen w-full flex flex-col justify-center items-center px-8 text-center'>
      <h1 className='font-bold text-2xl tracking-widest text-emerald-400'>
        about
      </h1>
      <p>we’re a tiny studio that loves making apps and browser extensions.</p>
    </div>
  );
}
