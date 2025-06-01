import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import { useRef, RefObject } from 'react';

export default function App() {
  const aRef = useRef<HTMLDivElement>(null);
  const pRef = useRef<HTMLDivElement>(null);
  const cRef = useRef<HTMLDivElement>(null);
  const handleClick = (r: RefObject<HTMLElement | null>) => {
    r.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='font-mon min-h-screen flex flex-col justify-between w-full'>
      <Header
        aRef={aRef}
        pRef={pRef}
        cRef={cRef}
        handleClick={handleClick}
      />
      <Content
        aRef={aRef}
        pRef={pRef}
        cRef={cRef}
      />
      <Footer />
    </div>
  );
}
