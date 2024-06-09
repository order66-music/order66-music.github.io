import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import '../Styles/contactForm.css';

function off() {
    document.getElementById('overlay').style.visibility = 'hidden'
}

export default function ContactForm(){
    return (
        <div className='form-container'>
            <form className='form'>
                <div className='titles'>
                    <div className='pageTitle title'><span onClick={off}><FontAwesomeIcon icon={faCircleXmark}/></span>Contact Us</div>
                    <div className='secondaryTitle title'>Please fill this form to contact us.</div>
                </div>
                <input type='text' className='name formEntry' placeholder='Name' required /> 
                <input type='text' className='email formEntry' placeholder='Email' required /> 
                <textarea type='text' className='message formEntry' placeholder='Message' required />
                <button className='submit formEntry'>Submit</button> 
            </form>
        </div>
    );
}

/* content form reference - https://codepen.io/shantedenise/pen/GYyxWV */