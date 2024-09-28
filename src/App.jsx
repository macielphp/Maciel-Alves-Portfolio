import Header from './components/Header';
import { useEffect, useState } from "react";
import ProfileBanner from './components/ProfileBanner';
import SocialsLineY from './components/SocialsLineY'; 
import Quote from './components/Quote';
import Title from './components/Title';
import CardProject from './components/CardProject';
import './App.css'
import SkillCard from './components/SkillCard';



function App() {
  
  const [projects, setProjects] = useState([])
  const [profile, setProfile] = useState({})
  const [quote, setQuote] = useState([])
  const [about, setAbout] = useState([])
  const [skills, setSkills] = useState([])

  useEffect(() => {
    const gistUrl = 'https://gist.githubusercontent.com/macielphp/d17682882ed9b54e077fedaf2e4ea059/raw/5bd3a6f7277ec2c34d35527ff8a900110a1ddd31/gistfile1.txt';
  
    fetch(gistUrl)
      .then(response => response.text())
      .then(text => {
        try {
          const data = JSON.parse(text); 

          setProfile(data.profile || {
            title: 'Título não disponível',
            description: 'Descrição não disponível',
            callToActButtonText: 'Texto não disponível',
            imageSrc: 'URL não disponível',
            imageAlt: 'Texto alternativo não disponível'
          });
          
          if (data.phrases && data.phrases.length > 0) {
            setQuote(data.phrases[0]); 
          } else {
            console.log('Nenhuma citação encontrada.');
            setQuote({ quote: 'Citação não disponível.', author: 'Autor desconhecido' });
          }
          setProjects(data.projects || []);
       
          if (data.about && data.about.length > 0){
            setAbout(data.about[0])
          } else{
            console.log('Nenhum dado de "about" encontrado.');
            setAbout({
              professionalSummary: 'Resumo profissional não disponível.',
              imageUrl: 'URL não disponível',
              imageAlt: 'Texto alternativo não disponível'
            });
          }
          setSkills(data.skills || []);

        } catch (error) {
          console.error('Erro ao fazer o parse do JSON:', error);
        }
      })
      .catch(error => console.error('Erro ao buscar os dados:', error));
  }, []);

  return (
    <>
      <Header />
      <SocialsLineY />
      <ProfileBanner 
        title={profile.title}
        description={profile.description}
        callToActButtonText={profile.callToActButtonText}
        imageUrl={profile.imageUrl}
        imageAlt={profile.imageAlt}
        borderColor={'var(--primary)'}
        ancorButtonTo={'mailto:macielalvescontato@gmail.com'}
      />
      <Quote 
        quote={quote.quote}
        author={quote.author}
      />
      
      <Title titleType='h2' titleText='projects' showViewAll='true' />
      <section className='section'>
        {projects.map((project, index) => (
          <CardProject
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            githubUrl={project.githubUrl}
            imageUrl={project.imageUrl}
            imageAlt={project.imageAlt}
            borderColor={'var(--gray)'}
          />
        ))}
      </section>
      <Title titleType='h2' titleText='skills' />
      <section className='section-skills'>
        <div>
          <div className="center-images"></div>
        </div>
        <div>
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              titleText={skill.title}
              skills={skill.skills}
            />
          ))}
        </div>
      </section>

      <Title titleType='h2' titleText='about-me'/>
      <section className='section-p'>
        <ProfileBanner
          description={about.professionalSummary}
          imageUrl={"../beautiful-office-space-cartoon-style.jpg"}
          imageAlt="AI Image generated and downloaded from Freepick"
          callToActButtonText={'Read More'}
          borderColor={'var(--primary)'}
          ancorButtonTo={'https://www.youtube.com/@MultiplyWithMaciel'}
        />
        
      </section>
   
    </>
  )
}

export default App
