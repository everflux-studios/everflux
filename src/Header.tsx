import Menu from './Menu';
import logo from './assets/logo.svg';
import { refProps } from './types';

export default function Header({ aRef, pRef, cRef, handleClick }: refProps) {
  return (
    <header className='bg-violet-300 flex justify-between p-2px'>
      <img
        src={logo}
        alt='logo'
        className='w-20 my-2 mx-5 sm:w-30'
      />
      <Menu
        aRef={aRef}
        pRef={pRef}
        cRef={cRef}
        handleClick={handleClick}
      />
    </header>
  );
}
