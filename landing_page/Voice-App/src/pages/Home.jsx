
import '../App.css'

export default function Home() {
    return (
        <>
            <div className="landing-text">
                <h1><b>Surf</b> the web</h1>
                <h1>without having to lift a <b>finger.</b></h1>
            </div>

            <div className="landing-desc">Download now for a hands-off browsing experience, powered by speech recognition and AI.</div>

            <button href="/SpeechSurf.exe" download="SpeechSurf" className="download-btn">DOWNLOAD</button>

            <div className="browsing">
                <img src="/Browsing.gif" />
            </div>
        </>
    )
}