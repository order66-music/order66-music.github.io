import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import AudioPlayer from './audioPlayer';
import '../Styles/socialBar.css'

export default function socialBar() {
    return (
    <div className='social-bar-container'>
        <ul className='social-bar-ul'>
            <li className='social-bar-li'>
                <a href='https://www.facebook.com/order66music'>
                    <FontAwesomeIcon icon={faFacebook} className='social-bar-item' />
                </a>
            </li>
            <li className='social-bar-li'>
                <a href='https://www.instagram.com/order66band/'>
                    <FontAwesomeIcon icon={faInstagram} className='social-bar-item' />
                </a>
            </li>
        </ul>
        <AudioPlayer />
    </div>
    );
}