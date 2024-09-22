import './style.css'
import PropTypes from 'prop-types';

const Quote = ( { quote, author })  => {
    return (
            <div className='quote'>
                <q className='quote__q'>{quote}</q>
                <p className='quote__author'>- {author}</p>
            </div>
    )
}

Quote.propTypes = {
    quote: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
}

export default Quote;