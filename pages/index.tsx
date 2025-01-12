
import { GetStaticProps } from 'next';
import Head from 'next/head';
import About from '../components/About';
import ContactMe from '../components/ContactMe';
import Education from '../components/Education';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import {  Educations, Project, Skill, Social } from '../typing';
import { fetchEducation } from '../utils/fetchEducation';

import { fetchProjects } from '../utils/fetchProjects';
import { fetchSkills } from '../utils/fetchSkills';
import { fetchSocials } from '../utils/fetchSocials';


type Props = {


  educations:Educations[];              
  skills:Skill[];
  projects:Project[];
  socials:Social[];
}
const Home = ({educations,projects,skills,socials}:Props) => {
return (
    <div className=" h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scroll-smooth sm:scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#FFE55C]/60 bg-[rgb(36,36,36)] text-white">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="content-language" content="en"/>
        <meta name="keywords" content="Yesitha,Sathsara,Athukorala,Yesitha Sathsara,Yesitha Athukorala"/>
        <meta name="author" content="Yesitha Sathsara Athukorala"/>
        <meta name="publisher" content="Yesitha Sathsara Athukorala"/>
        <meta name="copyright" content="Yesitha Sathsara Athukorala"/>
        <meta name="description" content="I am Yesitha Sathsara Athukorala, a 25-year-old undergraduate at the University of Moratuwa in Sri Lanka. I am currently pursuing a BCS(Hons) in Information Technology and am dedicated to continuously improving my skills and knowledge in the field.I enjoy taking on challenges and achieving my goals. I am particularly interested in the opportunity to learn new technologies and find solutions in the field of IT. In my free time, I enjoy swimming and am passionate about finding solutions in the field of IT."/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"></meta>
        <title>Yesitha Sathsara Athukorala's Profile</title>
      </Head>

      {/*Header*/}
      <Header socials={socials}/>
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
        <Education educations={educations}/>
      </section>
      {/*Skills*/}
      <section id='skills' className='snap-center'>
        <Skills skills={skills}/>
      </section>
      {/*Projects*/}

      <section id='projects' className='snap-center'>
        <Projects projects={projects}/>
      </section>
      {/*Contact Me*/}
      <section id='contactME' className='snap-center'>
        <ContactMe/>
      </section>
  </div>
  );
};

export default Home;
export const getStaticProps :GetStaticProps<Props> = async () => {
  
  const educations:Educations[]= await fetchEducation();
  const skills:Skill[] = await fetchSkills();
  const projects:Project[]= await fetchProjects();
  const socials:Social[] = await fetchSocials();

  return {
    props: {
      educations,
      skills,
      projects,
      socials,

    },
    revalidate:10,
  };
};