import { refProps } from './types';

export default function Menu({ aRef, pRef, cRef, handleClick }: refProps) {
  const base =
    'cursor-pointer hover:font-bold hover:tracking-widest hover:text-emerald-400 transition-all duration-400';

  return (
    <div className='flex gap-5 items-end py-2 px-5 sm:gap-10'>
      <div
        onClick={() => aRef && handleClick?.(aRef)}
        className={base}>
        about
      </div>
      <div
        onClick={() => pRef && handleClick?.(pRef)}
        className={base}>
        projects
      </div>
      <div
        onClick={() => cRef && handleClick?.(cRef)}
        className={base}>
        contact
      </div>
    </div>
  );
}
