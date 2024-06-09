/* import AudioPlayer from './audioPlayer'*/
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphones } from '@fortawesome/free-solid-svg-icons';
import { faSpotify,faApple, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Dropdown from 'rc-dropdown';
import Menu, { Item as MenuItem, Divider } from 'rc-menu';
import 'rc-dropdown/assets/index.css';
import '../Styles/navBar.css';

const logoPath = process.env.PUBLIC_URL + '/assets/logos/long-logo-white.png'

export default function NavBar() {

    const onSelect = ({key}) => {
        console.log(`${key} selected`)
    }

    const onVisibleChange = (visible) => {
        console.log(visible)
    }

    const listenMenu = (
        <Menu onSelect={onSelect} className='rc-menu'>
            <MenuItem key='Spotify' className='menu-item'>
                <a href='https://open.spotify.com/artist/2aNfx0rDD2GB5a2M3hQaD1?si=UpoTPP-EQbWPforV_1T4DQ'>
                <FontAwesomeIcon icon={faSpotify} className='nav-item'/>Spotify
                </a></MenuItem>
            <MenuItem key='AppleMusic' className='menu-item'>
                <a href='https://music.apple.com/us/artist/order-66/1672684466'>
                <FontAwesomeIcon icon={faApple} className='nav-item'/>Apple Music
                </a></MenuItem>
            <MenuItem key='Youtube' className='menu-item'>
                <a href='https://music.youtube.com/channel/UC82iNSSn3ZwkAsy8oqWbSPA?feature=share'>
                <FontAwesomeIcon icon={faYoutube} className='nav-item'/>Youtube Music
                </a></MenuItem>
        </Menu>
    )

    function on() {
        document.getElementById('overlay').style.visibility = 'visible'
    }
    
    return (
        <div className='nav-container'>
            <div className='nav-bar'>
                <span className='left-item'> { /* Options for listening and social media */ }
                    <Dropdown
                        className='nav-item'
                        trigger={['click']}
                        overlay={listenMenu}
                        animation='slide-up'
                        onVisibleChange={onVisibleChange}
                    >
                        <button><FontAwesomeIcon icon={faHeadphones} /></button>
                    </Dropdown>
                </span>
                <Link to='/'> 
                    <img className='nav-item logo' src={logoPath} alt={ 'Order 66 logo'}></img> { /* Brand Logo */ }
                </Link>
                <span className='right-item'> { /* Site Navigation */ }
                    <Link className='nav-item' onClick={on}>Contact</Link>
                    <Link className='nav-item' to='/media'>Media</Link>
                </span>
            </div>
        </div>
    );
}
