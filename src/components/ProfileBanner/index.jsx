/* eslint-disable react/prop-types */
import Picture from '../Picture';
import './style.css';
import AncorButton from '../AncorButton';

const ProfileBanner = ({ title, description, callToActButtonText, imageUrl, imageAlt, borderColor, ancorButtonTo, marginTop = "0px"  }) => {
    const bannerClass = imageUrl ? 'profile-banner' : 'profile-banner no-image';
    return (
        <section className={bannerClass}>
            <div className="profile-banner__text-content" style={{ marginTop }}>
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

            {/* Renders only if the user gives a value to the imageUrl component's props */}
            {imageUrl && (
                <div className="profile-banner__image-content">
                    <div className='background-dots'></div>
                    <Picture 
                        imageUrl={imageUrl} 
                        imageAlt={imageAlt || "imagem padrão"}
                    />
                </div>
            )}
        </section>
    );
};

export default ProfileBanner;
