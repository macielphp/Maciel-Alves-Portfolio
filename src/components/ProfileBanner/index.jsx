/* eslint-disable react/prop-types */
import Picture from '../Picture';
import './style.css';
import AncorButton from '../AncorButton';

const ProfileBanner = ({ title, description, callToActButtonText, imageUrl, imageAlt, borderColor, ancorButtonTo  }) => {
    return (
        <section className="profile-banner">
            
            <div className="profile-banner__text-content">
                <h1 className="text-content__title">
                   <span className='title__highlight'>{title}</span>
                </h1>
                
                <p className="text-content__description">
                    {description}
                </p>
                <AncorButton href={ancorButtonTo} borderColor={borderColor}>
                    {callToActButtonText}
                </AncorButton>
            </div>

            <div className="profile-banner__image-content">
                <div className='background-dots'></div>
                <Picture 
                    imageUrl={imageUrl} 
                    imageAlt={imageAlt}
                />
            </div>
        </section>
    );
};

export default ProfileBanner;
