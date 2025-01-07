/* eslint-disable react-refresh/only-export-components */
import styled from 'styled-components'
import Header from '../components/Header'
import SocialsLineY from '../components/SocialsLineY';
import Title from '../components/Title';
import Footer from '../components/Footer';



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
    return (
        <AboutmeStyled>
            <Header />
            <SocialsLineY />
            <MainStyled>
                <Title titleType="h2"
                        titleText="About-me"
                        preSymbol="/"
                        />
            </MainStyled>
            <Footer />
        </AboutmeStyled>
    )

}

export default AboutMe;

