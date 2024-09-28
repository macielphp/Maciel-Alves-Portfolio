import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './style.css'
const SocialsLineY = () => {
    return (
        <div className='SocialsLineY'>
            <div className='SocialsLineY__icons'>
                <a href="https://github.com/macielphp" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon sx={{ fontSize: 30, color: 'var(--gray)' }}  />
                </a>
                <a href="https://linkedin.com/in/imacielalves" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon sx={{fontSize: 30, color: 'var(--gray)' }}  />
                </a>
                <a href="https://www.youtube.com/@MultiplyWithMaciel" target="_blank" rel="noopener noreferrer">
                    <YouTubeIcon sx={{fontSize: 30, color: 'var(--gray)' }}  />
                </a>
            </div>
        </div>
    )
}

export default SocialsLineY;