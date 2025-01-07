import styled from 'styled-components'
import Header from '../components/Header'
import SocialsLineY from '../components/SocialsLineY';
import Title from '../components/Title';
import Footer from '../components/Footer';
import SkillCard from '../components/SkillCard';
import { useData } from '../DataContext';


const AboutmeStyled = styled.div`
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
function AboutMe(){
    const { skills } = useData();
    return (
        <AboutmeStyled>
            <Header />
            <SocialsLineY />
            <MainStyled>
                <Title titleType="h2" titleText="About-me" preSymbol="/"/>
                <section className='section-skills'>
                    <div>
                        <div className="center-images"></div>
                    </div>
                    <div>
                        {skills.map((skill, index) => (
                            <SkillCard key={index} titleText={skill.title} skills={skill.skills}/>))}
                    </div>
                </section>
            </MainStyled>
            <Footer />
        </AboutmeStyled>
    )

}

export default AboutMe;

