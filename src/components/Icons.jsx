import icon1 from '../assets/icons/dextool.avif';
import icon2 from '../assets/icons/dexscreen.avif';
import icon3 from '../assets/icons/coingeco.avif';
import icon4 from '../assets/icons/coinbase.svg';

function Icons() {
  const icons = [icon1, icon2, icon3, icon4];

  return (
    <div className="boxIcons">
      {icons.map((icon, index) => (
        <img key={index} src={icon} alt={`icon-${index + 1}`} className="icon" />
      ))}
    </div>
  );
}

export default Icons;
