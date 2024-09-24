import Header from './components/Header';
import { useEffect, useState } from "react";
import ProfileBanner from './components/ProfileBanner';
import SocialsLineY from './components/SocialsLineY'; 
import Quote from './components/Quote';
import Title from './components/Title';
import CardProject from './components/CardProject';
import './App.css'
import AncorButton from './components/AncorButton';

function App() {
  
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const gistUrl = 'https://gist.githubusercontent.com/macielphp/d17682882ed9b54e077fedaf2e4ea059/raw/f4e4e8ea495a385b3ccbcd4804baaa526d511033/gistfile1.txt';
  
    fetch(gistUrl)
      .then(response => {
        console.log('Resposta bruta:', response);
        return response.text(); // Usar 'text' para ver o conteúdo como string
      })
      .then(text => {
        console.log('Conteúdo bruto:', text); // Mostra o JSON como texto
        try {
          const data = JSON.parse(text); // Tenta fazer o parse do texto
          setProjects(data.project);
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
        title={'Maciel is a front-end developer'}
        description={'He crafts responsive websites where technologies meet creativity'}
        callToActButtonText={'Contact me!!'}
        imageSrc={'../public/test.png'}
        imageAlt={'Photo of Maciel from the waist up, wearing black plastic glasses, dressed in a black shirt, with a light yellow background.'}
        borderColor={'var(--primary)'}
      />
      <Quote 
        quote='With great power comes great electricity bill.'
        author='Dr. Who'
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

      <Title titleType='h2' titleText='skills'/>
      <p>I am a self-taught student who transforms knowledge into practice through projects like the Beneficent Association and Human Development. Determined to learn from challenges, I seek knowledge beyond Front-end development to always know a little more, as I am sure that curiosity, continuous learning, teaching, and discipline in execution make me a promising candidate to integrate and contribute meaningfully to a team of developers.</p>
      <AncorButton>Read more </AncorButton>
   
    </>
  )
}

export default App
