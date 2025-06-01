import { refProps } from './types';

export default function Contact({ cRef }: refProps) {
  return (
    <div
      ref={cRef}
      className='h-screen w-full flex flex-col justify-center items-center px-8 text-center bg-lime-50'>
      <h1 className='font-bold text-2xl tracking-widest text-lime-400'>
        contact
      </h1>
      <p>
        contact us at{' '}
        <a
          href='mailto:hello@everfluxstudios.com'
          className='text-lime-500 hover:tracking-widest no-underline hover:underline decoration-double underline-offset-4 transition-all transition-400'>
          hello@everfluxstudios.com
        </a>
      </p>
    </div>
  );
}
