import './style.css'
import { BsArrowDown } from "react-icons/bs";
const ViewAll = () => {
    return (
        <div className='view-all'>
            <button className='view-all__button'>View all</button>
            <BsArrowDown  color='var(--white)' />
        </div>

    )
}

export default ViewAll;