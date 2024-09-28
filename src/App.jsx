import Header from './components/Header';
import { useEffect, useState } from "react";
import ProfileBanner from './components/ProfileBanner';
import SocialsLineY from './components/SocialsLineY'; 
import Quote from './components/Quote';
import Title from './components/Title';
import CardProject from './components/CardProject';
import './App.css'



function App() {
  
  const [projects, setProjects] = useState([])
  const [profile, setProfile] = useState({})
  const [quote, setQuote] = useState([])
  const [about, setAbout] = useState([])

  useEffect(() => {
    const gistUrl = 'https://gist.githubusercontent.com/macielphp/d17682882ed9b54e077fedaf2e4ea059/raw/621780de918d9798477696ca974e32006d0bd5ed/gistfile1.txt';
  
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
      
      <Title titleType='h2' titleText='project' showViewAll='true' />

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
      <section className='section-p'>
        <Title titleType='h2' titleText='about-me'/>
        <ProfileBanner
          description={about.professionalSummary}
          imageUrl="public/beautiful-office-space-cartoon-style.jpg"
          callToActButtonText={'Read More'}
          borderColor={'var(--primary)'}
          ancorButtonTo={'https://www.youtube.com/@MultiplyWithMaciel'}
        />
        
      </section>
   
    </>
  )
}

export default App
