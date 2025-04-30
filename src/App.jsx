import './i18n';
import Header from './components/Header';
import { useEffect, useState } from "react";
import ProfileBanner from './components/ProfileBanner';
import SocialsLineY from './components/SocialsLineY'; 
import Quote from './components/Quote';
import Title from './components/Title';
import CardProject from './components/CardProject';
import './App.css'
import SkillCard from './components/SkillCard';
import ContactBox from './components/ContactBox';
import Paragraph from './components/Paragraph';
import Footer from './components/Footer';
import { useTranslation } from 'react-i18next';
import imgMaciel from './assets/maciel-picture.png'
import GIST_URL from './config/gistConfig.js'

function App() {
  const { t, i18n } = useTranslation();
  const [projects, setProjects] = useState([]);
  const [profile, setProfile] = useState({});
  const [quote, setQuote] = useState({});
  const [about, setAbout] = useState({});
  const [skills, setSkills] = useState([]);
  const [contact, setContact] = useState({});
  const savedLanguage = localStorage.getItem("language") || "en"; 
  const [language, setLanguage] = useState(savedLanguage);

  useEffect(() => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  }, [language, i18n]);


  useEffect(() => {
    const loadData = async () => {
      const gistUrl = GIST_URL;
      try {
        const response = await fetch(gistUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const text = await response.text();
        if (!text) {
          throw new Error('Response text is empty');
        }
        let data;
        try {
          data = JSON.parse(text);
        } catch (e) {
          throw new Error(`Failed to parse JSON${e}`);
        }
        const localizedData = data[language] || data['pt']; 
     
        if (!localizedData) {
          throw new Error(`No data found for language: ${language}`);
        }

        setProfile(localizedData.profile || {
          title: 'Title not available',
          description: 'Description not available',
          callToActButtonText: 'Call to Action Text not available',
          imageSrc: 'Image URL not available',
          imageAlt: 'Image alt text not available'
        });

        if (localizedData.phrases && localizedData.phrases.length > 0) {
          setQuote(localizedData.phrases[0]); 
        } else {
          console.log('No quote found.');
          setQuote({ quote: 'Quote not available.', author: 'Unknown author' });
        }
        setProjects(localizedData.projects || []);

        if (localizedData.about) {
          setAbout(localizedData.about);
        } else {
          console.log('No "about" data found.');
          setAbout({
            professionalSummary: 'Professional summary not available.',
            imageUrl: 'URL not available',
            imageAlt: 'Image alt text not available'
          });
        }
        setSkills(localizedData.skills || []);

        if (localizedData.contact) {
          setContact(localizedData.contact);
        } else {
          console.log('No contact info was found.');
          setContact({ 
            paragraphText: "contact phrase.",
            emailTo: "mailto:emailaddress@gmail.com",
            emailAddress: "emailaddress@gmail.com"
          });
        }
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      }
    };

    loadData();
  }, [language]);

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Header language={language} setLanguage={setLanguage} />
      <SocialsLineY />
      <ProfileBanner 
        title={profile.title}
        description={profile.description}
        callToActButtonText={profile.callToActButtonText}
        imageUrl={imgMaciel}
        imageAlt={profile.imageAlt}
        borderColor={'var(--primary)'}
        ancorButtonTo={'mailto:macielalvescontato@gmail.com'}
        marginTop="70px"
      />
      <Quote 
        quote={quote.quote || t('quote.quote')}
        author={quote.author || t('quote.author')}
      />
      
      <Title titleType='h2' titleText={t('titles.project')} showViewAll='true' asideLine='true'/>
      <section className='section'>
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <CardProject
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              gitHubUrl={project.gitHubUrl}
              imageUrl={project.imageUrl}
              imageAlt={project.imageAlt}
              borderColor={'var(--gray)'}
            />
          ))
        ) : (
          <p>No projects available</p>
        )}
      </section>

      <Title titleType='h2' titleText={t('titles.skill')} asideLine='true'/>

      <section className='section-skills'>
        <div className='section-skills__icons'>
          <div className="center-images"></div>
        </div>
        <div className="section-skills__container">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              titleText={skill.title}
              skills={skill.skills}
            />
          ))}
        </div>
      </section>

      <Title titleType='h2' titleText={t('titles.about-me')} asideLine='true'/>
    
      <section className='section-p'>
        <ProfileBanner
          description={about.professionalSummary}
          // If the riched the 768px in width, so this prop will no longer exist
          imageUrl={isSmallScreen ? null : "../beautiful-office-space-cartoon-style.jpg"}
          imageAlt="AI Image generated and downloaded from Freepick"
          callToActButtonText={t("buttons.read-more")}
          borderColor={'var(--primary)'}
          ancorButtonTo={'https://www.youtube.com/@MultiplyWithMaciel'}
        />
        
      </section>
      <Title titleType='h2' titleText={t('titles.contact-me')} asideLine='true'/>
      <section className="section-p">
        <Paragraph pSize="16px" pColor="var(--gray)" pFontFamily="var(--font-family)">
          {contact.paragraphText}
        </Paragraph>
        <ContactBox
          titleType="h3"
          titleSize="16px"
          titleText={t("buttons.email")}
          emailTo={contact.emailTo}
          emailAddress={contact.emailAddress}
        />
      </section>
      <Footer />
    </>
  )
}

export default App;