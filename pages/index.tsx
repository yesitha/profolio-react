
import { GetStaticProps } from 'next';
import Head from 'next/head';
import About from '../components/About';
import ContactMe from '../components/ContactMe';
import Education from '../components/Education';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import {  Educations, PageInfo, Project, Skill, Social } from '../typing';
import { fetchEducation } from '../utils/fetchEducation';
import { fetchPageInfo } from '../utils/fetchPageInfo';
import { fetchProjects } from '../utils/fetchProjects';
import { fetchSkills } from '../utils/fetchSkills';
import { fetchSocials } from '../utils/fetchSocials';


type Props = {

  pageInfo:PageInfo;
  educations:Educations[];              
  skills:Skill[];
  projects:Project[];
  socials:Social[];
}
const Home = ({pageInfo,educations,projects,skills,socials}:Props) => {
return (
    <div className=" h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scroll-smooth sm:scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#FFE55C]/60 bg-[rgb(36,36,36)] text-white">
      <Head>
        <title>Yesitha's Profile</title>
      </Head>

      {/*Header*/}
      <Header socials={socials}/>
      {/*Hero*/}
      <section id='hero' className="snap-start">
      <Hero pageInfo={pageInfo}/>
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
  const pageInfo:PageInfo = await fetchPageInfo();
  const educations:Educations[]= await fetchEducation();
  const skills:Skill[] = await fetchSkills();
  const projects:Project[]= await fetchProjects();
  const socials:Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      educations,
      skills,
      projects,
      socials,

    },
    revalidate:10,
  };
};