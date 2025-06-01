import { refProps } from './types';

export default function Projects({ pRef }: refProps) {
  return (
    <div
      ref={pRef}
      className='h-screen w-full flex flex-col justify-center items-center px-8 text-center bg-cyan-50'>
      <h1 className='font-bold text-2xl tracking-widest text-cyan-400'>
        projects
      </h1>
      <p>coming soon...</p>
    </div>
  );
}
