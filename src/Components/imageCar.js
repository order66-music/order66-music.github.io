import members from '../JSON/members.json';
import '../Styles/imageCar.css';

let fullMembers = []

for(let i = 0; i < members.length; i++) {
    fullMembers.push(
    <div key={members[i].name+"Div"} style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + members[i].full})`,
        }}>
        <div className='content'>
            <h2>{members[i].name}</h2>
            <span>{members[i].job.toUpperCase()}</span>
        </div>
    </div>
    )
}

export default function ImageCar() {
    return (
        <div className='image-carousel'>
            <div className='container'>
                {fullMembers}

            </div>
            <div className='link-bar'>
            </div>
        </div>
    )
}

/* Carousel Reference - https://codepen.io/kristen17/pen/wvPebxy */