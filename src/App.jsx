import Header from './components/Header';
import { useEffect, useState } from "react";
import ProfileBanner from './components/ProfileBanner';
import SocialsLineY from './components/SocialsLineY'; 
import Quote from './components/Quote';
import Title from './components/Title';
import CardProject from './components/CardProject';
import './App.css'
import SkillCard from './components/SkillCard';
import ContactBox from './components/ContactBox';
import Paragraph from './components/Paragraph';
import Footer from './components/Footer';

function App() {
  
  const [projects, setProjects] = useState([])
  const [profile, setProfile] = useState({})
  const [quote, setQuote] = useState([])
  const [about, setAbout] = useState([])
  const [skills, setSkills] = useState([])
  const [contact, setContact] = useState([])

  useEffect(() => {
    const gistUrl = 'https://gist.githubusercontent.com/macielphp/d17682882ed9b54e077fedaf2e4ea059/raw/944dae7892d79d3c426458ee907e96e70d683abb/gistfile1.txt';
  
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

          if (data.contact && data.contact.length > 0){
            setContact(data.contact[0]);
          } else{
            console.log('No contact info was found.');
            setContact({ 
              paragraphText: "contact phrase.",
              emailTo: "mailto:emailaddress@gmail.com",
              emailAddress: "emailaddress@gmail.com"
             })
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
      
      <Title titleType='h2' titleText='projects' showViewAll='true' asideLine='true'/>
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
      <Title titleType='h2' titleText='skills' asideLine='true'/>
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

      <Title titleType='h2' titleText='about-me' asideLine='true'/>
    
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
      <Title titleType='h2' titleText='contact-me' asideLine='true'/>
      <section className="section-p">
        <Paragraph pSize="16px" pColor="var(--gray)" pFontFamily="var(--font-family)">
          {contact.paragraphText}
        </Paragraph>
        <ContactBox
          titleType="h3"
          titleSize="16px"
          titleText="Message me here!"
          emailTo={contact.emailTo}
          emailAddress={contact.emailAddress}
        />
      </section>
      <Footer />
    </>
  )
}

export default App
