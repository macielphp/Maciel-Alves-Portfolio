/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import Picture from '../Picture';
import './style.css'; 
import AncorButton from '../AncorButton';
import { GoCodeSquare } from "react-icons/go";
import defaultImage from './assets/default-image.png'

const CardProject = ({ 
    title, 
    description, 
    technologies = [], // Default to an empty array
    gitHubUrl, 
    imageUrl, 
    imageAlt,
}) => {
    const [validImageUrl, setValidImageUrl] = useState(defaultImage);

    useEffect(() => {
        if (imageUrl) {
            const img = new Image();
            img.src = imageUrl;

            img.onload = () => {
                setValidImageUrl(imageUrl);
            };

            img.onerror = () => {
                setValidImageUrl(defaultImage);
                console.error('Failed to load image:', imageUrl);
            };
        } else {
            setValidImageUrl(defaultImage);
        }
    }, [imageUrl]);

    return (
        <div className='card-project'>
            <div className='card-project__header'>
                <Picture 
                    className='card-project__header__image'
                    imageUrl={validImageUrl}
                    imageAlt={imageAlt} />
            </div>
            <div className='card-project__stack'>
                {technologies.length > 0 ? (
                    technologies.map((tech, index) => (
                        <span key={index} className='card-project__stack__tech'>{tech}</span>
                    ))
                ) : (
                    <span className='card-project__stack__tech'>No technologies listed</span>
                )}
            </div>
            <div className='card-project__body'>
                <h3>{title}</h3>
                <p>{description}</p>
                <AncorButton href={gitHubUrl} icon={GoCodeSquare} borderColor={'var(--gray)'}>GitHub</AncorButton>
            </div>
        </div>
    );
};

export default CardProject;