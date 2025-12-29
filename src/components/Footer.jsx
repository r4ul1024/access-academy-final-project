import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="contact-info">
        <div className="footer-logo"><p>Home</p> <span>Q</span></div>
        <div className="footer-text"><p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p></div>
        <div className="footer-info">
          <div className="footer-info-item">
            <div><img src="../src/assets/icons/Call.png" alt="phone"/></div>
            <p>(055) 529-37-77</p>
          </div>

          <div className="footer-info-item">
            <div><img src="../src/assets/icons/Message.png" alt="msg"/></div>
            <p>r4ul1024@gmail.com</p>
          </div>

          <div className="footer-info-item">
            <div><img src="../src/assets/icons/Call.png" alt="location"/></div>
            <p>Baku, Azerbaijan</p>
          </div>
        </div>
      </div>

      <div className="map-container">
        <iframe title="Baku map" src="https://www.openstreetmap.org/export/embed.html?bbox=49.82%2C40.35%2C49.92%2C40.42&layer=mapnik&marker=40.4093%2C49.8671" width="100%" height="400"/>
      </div>
    </footer>
)
}
