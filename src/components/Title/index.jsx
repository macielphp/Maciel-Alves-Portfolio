import React from 'react';
import ViewAll from '../ViewAll'
import './style.css'

// eslint-disable-next-line react/prop-types
const Title = ({ titleType='h2', titleText ,showViewAll = false, preSymbol='#', asideLine="false" }) => {
    return(
        
        <div className={`title-${showViewAll}`} >
            <div className='title-container'>
                {React.createElement(
                    titleType, 
                    {className: 'title-h'}, 
                    <>
                        <span className="title-presymbol">{preSymbol}</span>
                        {titleText}
                    
                    </>
                )}
                <div className={`title-asideline-${asideLine}`}></div>
            </div>
            {showViewAll && <ViewAll />}
        </div>
    )
}

export default Title
