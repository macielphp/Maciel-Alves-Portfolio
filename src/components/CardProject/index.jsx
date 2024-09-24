import Picture from '../Picture';
import './style.css';
import ProjectoAssociacaoPicture from './assets/picture-default.jpg' 
import AncorButton from '../AncorButton';
import { GoCodeSquare } from "react-icons/go";

const technologies = ['HTML', 'SCSS', 'JS', 'React JS', 'Vite JS', 'Python', 'Flask', 'Node JS'];


const CardProject = () => {

    return(
        <div className='card-roject'>
            <div className='card-project__header'>
                <Picture 
                    className='card-project__header__image'
                    imageSrc={ProjectoAssociacaoPicture}
                    imageAlt={'Card project image '} />
            </div>
            <div className='card-project__stack'>
                {technologies.map((tech, index) => (
                    <span key={index} className='card-project__stack__tech'>{tech}</span>
                ))}
            </div>
            <div className='card-project__body'>
                <h3>Associação Beneficente</h3>
                <p>Stock management of a beneficient association</p>
                <AncorButton href={'https://github.com/macielphp/Projeto_Associacao'} icon={ GoCodeSquare }>GitHub</AncorButton>

            </div>
        </div>
    )
}

export default CardProject;