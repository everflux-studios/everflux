import { refProps } from './types';

export default function Menu({ aRef, pRef, cRef, handleClick }: refProps) {
  return (
    <div className='flex gap-5 items-end py-2 px-5 sm:gap-10'>
      <div onClick={() => aRef && handleClick?.(aRef)}>about</div>
      <div onClick={() => pRef && handleClick?.(pRef)}>projects</div>
      <div onClick={() => cRef && handleClick?.(cRef)}>contact</div>
    </div>
  );
}
