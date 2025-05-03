import Content from './Content';
import Footer from './Footer';
import Header from './Header';

export default function App() {
  return (
    <div className='font-mon min-h-screen w-screen flex flex-col justify-between'>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
