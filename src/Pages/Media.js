import NavBar from "../Components/navBar";
import SocialBar from "../Components/socialBar";
import ContactForm from "../Components/contactForm";
import Card from "../Components/card";
import '../Styles/index.css';
import cards from '../JSON/media.json';

// Card props: title, listItems, listItemLinks downloadAll
// Images
    // Logos
        // order-66\public\assets\logos
    // Art
        //
    // Photos
        // order-66\public\assets\media\images
// Music - Informed consent usage
    // order66music.bandcamp.com/
// Video - Youtube.
    // All link
        //www.youtube.com/@Order66Music1
    // Music Video
        //youtu.be/Aqgas8_Kr0w

// Music
    // Bad Romance
        // https://order66music.bandcamp.com/track/bad-romance
    // Psycho Sluts From Hell
        // https://order66music.bandcamp.com/track/psycho-sluts-from-hell

export default function Media() {

    // creates list items
    const createLists = (listItems, links) => {
        let listItemElements = [];
        for( let i = 0; i < listItems.length; i++) {
            listItemElements.push(
                <li key={i}><a src={links[i]}>{listItems[i]}</a></li>
            );
        }
        return listItemElements;
    }

    // creates cards
    const createCards = (cards) => {
        let cardElements = [];
        for(let i = 0; i < cards.length; i++) {
            cardElements.push(
                <Card
                key = {i}   
                title={cards[i].title} 
                listItems={createLists(cards[i].listItems, cards[i].listItemsLinks)} 
                downloadAll={cards[i].downloadAll}
                /> 
            );
        }
        return cardElements;
    }

    return (
        <div className='App'>
            <div id='overlay'>
                <ContactForm />
            </div>
            <NavBar />
            <span className='cards'>
            {createCards(cards)}
            </span>
            <SocialBar />
        </div>
    );
}