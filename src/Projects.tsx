import { refProps } from './types';

export default function Projects({ pRef }: refProps) {
  return (
    <div
      ref={pRef}
      className='h-screen w-full'>
      projects
    </div>
  );
}
