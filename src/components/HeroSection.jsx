import video from '../assets/UtOtrFD5JHoC65eU9JdYbO2rCE.mp4';

function HeroSection() {
  return (
    <div className="HeroSection" data-aos="fade-up" data-aos-duration="1000">
      <video autoPlay loop muted playsInline className="video-background">
        <source src={video} type="video/mp4" />
        Browser tidak mendukung video.
      </video>
      <div className="boxIconsText">
        <span className="text">
          Alpha is not just a coin, <br /> it's a movement.
        </span>
      </div>
    </div>
  );
}

export default HeroSection;
