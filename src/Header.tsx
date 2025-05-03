import Menu from './Menu';
import logo from './assets/logo.svg';

export default function Header() {
  return (
    <header className='bg-violet-300 flex justify-between p-2px'>
      <img
        src={logo}
        alt='logo'
        className='w-20 my-3 mx-6 sm:w-35'
      />
      <Menu />
    </header>
  );
}
