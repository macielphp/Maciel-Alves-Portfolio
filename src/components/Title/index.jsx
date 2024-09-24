import React from 'react';  // Adiciona a importação de React
import ViewAll from '../ViewAll'
import './style.css'

// eslint-disable-next-line react/prop-types
const Title = ({ titleType='h2', titleText ,showViewAll = false }) => {
    return(
        
        <div className={`title-${showViewAll}`} >
            {React.createElement(titleType, {className: 'title-h2'}, titleText)}
            <div className="title-line"></div>
            {showViewAll && <ViewAll />}
        </div>
    )
}

export default Title
