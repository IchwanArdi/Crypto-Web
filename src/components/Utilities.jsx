import imgAlpha from '../assets/alpha.jpg';
import utilities1 from '../assets/bitcoin.png';
import utilities2 from '../assets/currency.png';

function Utilities() {
  return (
    <>
      <div className="boxUtilites">
        <div className="utilities" data-aos="zoom-in-up" data-aos-easing="ease-in-out" data-aos-duration="450" data-aos-offset="400">
          <img src={imgAlpha} alt="alpha" className="utilitiesImg" />
        </div>
        <div className="utilitiesList" data-aos="zoom-in-down" data-aos-easing="ease-in-out" data-aos-duration="450" data-aos-offset="300">
          <span>Alpha Utilities</span>
          <br />
          <br />
          <hr />
          <div className="boxImg">
            <img src={utilities1} alt="img utilities" className="img" />
            ALPHA Bot
          </div>
          <div className="boxImg">
            <img src={utilities2} alt="img utilities" className="img" />
            ALPHA Swap
          </div>
        </div>
      </div>
    </>
  );
}

export default Utilities;
