import '../Styles/audioPlayer.css'

export default function audioPlayer() {
    return (
        <span className='audio-container'>
            <iframe style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/artist/2aNfx0rDD2GB5a2M3hQaD1?utm_source=generator" width="100%" height="152" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </span>
    );
}