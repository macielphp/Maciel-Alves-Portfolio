import Header from './components/Header';
import IntroBanner from './components/IntroBanner';
import SocialsLineY from './components/SocialsLineY'; 
import Quote from './components/Quote';
import Title from './components/Title';

function App() {
  
  return (
    <>
      <Header />
      <SocialsLineY />
      <IntroBanner />
      <Quote 
        quote='With great power comes great electricity bill.'
        author='Dr. Who'
      />
      <Title titleText='project' showViewAll='true' />
    </>
  )
}

export default App
