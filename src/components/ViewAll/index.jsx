import './style.css'
import { BsArrowDown } from "react-icons/bs";
import { useTranslation } from 'react-i18next';

const ViewAll = () => {
    const { t } = useTranslation();
    return (
        <div className='view-all'>
            <button className='view-all__button'>{t('buttons.view-all')}</button>
            <BsArrowDown  color='var(--white)' />
        </div>

    )
}

export default ViewAll;