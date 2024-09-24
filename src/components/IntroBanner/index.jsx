import Button from '../Button';
import Picture from '../Picture';
import './style.css';
import MacielPicture from './assets/maciel-picture.png';

const IntroBanner = () => {
    return (
        <section className="intro-banner">
            
            <div className="intro-banner__text-content">
                <h1 className="text-content__title">
                    Maciel is a <span className='title__highlight'>front-end developer</span>
                </h1>
                
                <p className="text-content__description">
                    He crafts responsive websites where technologies meet creativity.
                </p>
                <Button 
                    bordercolor='var(--primary)' 
                    onClick={() => console.log('Button clicked!')}
                >
                    Contact me!
                </Button>
            </div>

            <div className="intro-banner__image-content">
                <div className='background-dots'></div>
                <Picture 
                    imageSrc={MacielPicture} 
                    imageAlt={'Photo of Maciel from the waist up, wearing black plastic glasses, dressed in a black shirt, with a light yellow background.'}
                />
            </div>
        </section>
    );
};

export default IntroBanner;
