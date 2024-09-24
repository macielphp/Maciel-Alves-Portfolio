/* eslint-disable react/prop-types */
import Picture from '../Picture';
import './style.css';
import AncorButton from '../AncorButton';

const ProfileBanner = ({ title, description, callToActButtonText, imageSrc, imageAlt, borderColor  }) => {
    return (
        <section className="profile-banner">
            
            <div className="profile-banner__text-content">
                <h1 className="text-content__title">
                    Maciel is a <span className='title__highlight'>{title}</span>
                </h1>
                
                <p className="text-content__description">
                    {description}
                </p>
                <AncorButton href={'mailto:macielalvescontato@gmail.com'} borderColor={borderColor}>
                    {callToActButtonText}
                </AncorButton>
            </div>

            <div className="profile-banner__image-content">
                <div className='background-dots'></div>
                <Picture 
                    imageSrc={imageSrc} 
                    imageAlt={imageAlt}
                />
            </div>
        </section>
    );
};

export default ProfileBanner;
