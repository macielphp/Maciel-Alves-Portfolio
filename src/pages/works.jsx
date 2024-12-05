import styled from 'styled-components'
import Header from '../components/Header'
import Title from '../components/Title';
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
`

function Works() {
  return (
    <WorksStyled>
       <Header />
       <MainStyled>
        <Title titleType="h2"
          titleText="Works"
          preSymbol="/"
          />
       </MainStyled>

    </WorksStyled>
  );
}
export default Works;