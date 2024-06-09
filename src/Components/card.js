import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import '../Styles/card.css'

export default function Card(props) {
    return (
        <div className='card-container'>
            <h1>{props.title}</h1>
            <ul>
                {props.listItems}
            </ul>
            <span>
                <a src={props.downloadAll} className='download-all'>
                    <FontAwesomeIcon icon={faDownload} />
                </a>
            </span>
        </div>
    )
}