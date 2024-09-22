import Header from './components/Header';
import IntroBanner from './components/IntroBanner';
import SocialsLineY from './components/SocialsLineY'; 
import Quote from './components/Quote';

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
    
    </>
  )
}

export default App
