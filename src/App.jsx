import Header from './components/Header';
import { useEffect, useState } from "react";
import IntroBanner from './components/IntroBanner';
import SocialsLineY from './components/SocialsLineY'; 
import Quote from './components/Quote';
import Title from './components/Title';
import CardProject from './components/CardProject';
import './App.css'

function App() {
  
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const gistUrl = 'https://gist.githubusercontent.com/macielphp/d17682882ed9b54e077fedaf2e4ea059/raw/157903d729d2a0ef0c722eb4c739d6451417a60d/gistfile1.txt';
  
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
      <IntroBanner />
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
          />
        ))}
      </section>
    </>
  )
}

export default App
