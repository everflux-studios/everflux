import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import { refProps } from './types';

export default function Content({ aRef, pRef, cRef }: refProps) {
  return (
    <main className='grow bg-emerald-50'>
      <About aRef={aRef} />
      <Projects pRef={pRef} />
      <Contact cRef={cRef} />
    </main>
  );
}
