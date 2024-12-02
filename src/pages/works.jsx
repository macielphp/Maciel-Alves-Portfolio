import styled from 'styled-components'
import Header from '../components/Header'
import PagesTitle from '../components/PagesTitle';
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
`

function Works() {
  return (
    <WorksStyled>
       <Header />
       <MainStyled>
        <PagesTitle title="projects" />
       </MainStyled>

    </WorksStyled>
  );
}
export default Works;