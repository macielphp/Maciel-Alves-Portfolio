import styled from 'styled-components'
import Header from '../components/Header'
import Title from '../components/Title';
import Footer from '../components/Footer';
import CardProject from '../components/CardProject';
import SocialsLineY from '../components/SocialsLineY';

import FilterBar from '../components/filterBar';
import { useEffect, useState } from "react";

const WorksStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`
const MainStyled = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 120px;
  width: 100%;
`

function Works() {
  const [projects, setProjects] = useState([])
  const [filteredProjects, setFilteredProjects] = useState([])

  useEffect(() => {
    const gistUrl = 'https://gist.githubusercontent.com/macielphp/d17682882ed9b54e077fedaf2e4ea059/raw/944dae7892d79d3c426458ee907e96e70d683abb/gistfile1.txt';

    fetch(gistUrl)
      .then(response => response.text())
      .then(text => {
        try{
          const data = JSON.parse(text);
          const projectsData = data.projects || [];

          setProjects(projectsData);
          setFilteredProjects(projectsData) //Inicialize filtered projects with all projects.
        }
        catch(error) {
          console.error('Erro ao buscar os dados:', error);
        }
      })
      .catch(error => console.error('Erro ao buscar os dados:', error))
  }, []);

  const handleSearch = (query) => {
    const lowercasedQuery = query.toLowerCase();
    const filtered = projects.filter((project) =>
      project.title.toLowerCase().includes(lowercasedQuery) ||
      project.description.toLowerCase().includes(lowercasedQuery) ||
      project.technologies.some((tech) => 
        tech.toLowerCase().includes(lowercasedQuery) 
      )
    );
    setFilteredProjects(filtered);
  }

  return (
    <WorksStyled>
       <Header />
       <SocialsLineY />
       <MainStyled>
        <Title titleType="h2"
          titleText="Works"
          preSymbol="/"
          />
        <FilterBar handleSearch={handleSearch} />
        <section className="section">
          {filteredProjects.map((project, index) => (
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
       </MainStyled>
        <Footer />
    </WorksStyled>
  );
}
export default Works;