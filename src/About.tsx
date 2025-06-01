import { refProps } from './types';

export default function About({ aRef }: refProps) {
  return (
    <div
      ref={aRef}
      className='h-screen w-full'>
      about
    </div>
  );
}
