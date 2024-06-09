import NavBar from '../Components/navBar';
import ImageCar from '../Components/imageCar';
import SocialBar from '../Components/socialBar';
import ContactForm from "../Components/contactForm";

export default function Home() {
    return (
        <div className="App">
            <div id='overlay'>
                <ContactForm />
            </div>
                <NavBar/>
                <ImageCar/>
                <SocialBar/>
        </div>
    )
} 