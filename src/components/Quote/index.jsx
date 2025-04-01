/* eslint-disable react/prop-types */
import './style.css'

const Quote = ( { quote, author })  => {
    return (
            <div className='quote'>
                <q className='quote__q'>{quote}</q>
                <p className='quote__author'>- {author}</p>
            </div>
    )
}

export default Quote;