import Header from './components/Header';
import IntroBanner from './components/IntroBanner';
import SocialsLineY from './components/SocialsLineY'; 
import Quote from './components/Quote';
import Title from './components/Title';
import CardProject from './components/CardProject';
import './App.css'


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
      <Title titleType='h2' titleText='project' showViewAll='true' />
      <section className='section'>
        <CardProject/>

        <CardProject/>
        <CardProject/>
      </section>
    </>
  )
}

export default App
