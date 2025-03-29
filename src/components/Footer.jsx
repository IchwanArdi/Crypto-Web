import icon from '../assets/icon.avif';
import icon2 from '../assets/alpha2.jpg';

function Footer() {
  return (
    <div className="footer">
      <div className="imgIcon">
        <img src={icon} alt="alpha icon" className="iconBack" />
        <img src={icon} alt="alpha icon" className="iconUp" data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-duration="500" data-aos-offset="300" />
        <p>
          Not just another coin - this is <br />
          dominance redefined.
        </p>
        <footer>© 2025 ALPHA COIN</footer>
      </div>
      <div className="img">
        <img src={icon2} alt="alpha icon" className="iconFooter" />
      </div>
    </div>
  );
}

export default Footer;
