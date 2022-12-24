import type { NextPage } from 'next';
import Head from 'next/head';
import About from '../components/About';
import Education from '../components/Education';
import Header from '../components/Header';
import Hero from '../components/Hero';

const Home: NextPage = () => {
return (
    <div className=" h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scroll-smooth sm:scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#FFE55C]/60 bg-[rgb(36,36,36)] text-white">
      <Head>
        <title>Yesitha's Profile</title>
      </Head>

      {/*Header*/}
      <Header/>
      {/*Hero*/}
      <section id='hero' className="snap-start">
      <Hero/>
      </section>
      {/*About*/}
      <section id='about' className='snap-center'>
        <About/>
      </section>
      {/*Experience*/}
      <section id='Education Qualifications' className='snap-center'>
        <Education/>
      </section>
      {/*Skills*/}
      {/*Projects*/}
      {/*Contact Me*/}
  </div>
  );
};

export default Home;