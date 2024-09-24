/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import Picture from '../Picture';
import './style.css'; 
import AncorButton from '../AncorButton';
import { GoCodeSquare } from "react-icons/go";
import defaultImage from './assets/default-image.png'

const CardProject = ({ title, description, technologies, githubUrl, imageUrl, imageAlt }) => {
    const [validImageUrl, setValidImageUrl] = useState(defaultImage)

    useEffect(() => {
        const img = new Image();
        img.src= imageUrl;

        img.onload = () => {
            setValidImageUrl(imageUrl)
        }

        img.onerror = () => {
            setValidImageUrl(defaultImage)
            console.error('Failed to load image:', imageUrl)
        }
    })

    return(
        <div className='card-roject'>
            <div className='card-project__header'>
                <Picture 
                    className='card-project__header__image'
                    imageSrc={validImageUrl}
                    imageAlt={imageAlt} />
            </div>
            <div className='card-project__stack'>
                {technologies.map((tech, index) => (
                    <span key={index} className='card-project__stack__tech'>{tech}</span>
                ))}
            </div>
            <div className='card-project__body'>
                <h3>{title}</h3>
                <p>{description}</p>
                <AncorButton href={githubUrl} icon={ GoCodeSquare }>GitHub</AncorButton>

            </div>
        </div>
    )
}

export default CardProject;