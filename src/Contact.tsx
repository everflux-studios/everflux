import { refProps } from './types';

export default function Contact({ cRef }: refProps) {
  return (
    <div
      ref={cRef}
      className='h-screen w-full'>
      contact
    </div>
  );
}
