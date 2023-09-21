import Image from "next/image";
import playButton from "../../assets/images/play_button.svg";

export default function HeroHome() {
  return (
    <>
      <div className="container hero-container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-4 d-flex justify-content-center">
            <Image
              className="hero-image-logo"
              priority
              src={playButton}
              alt="Play Button Logo"
            />
          </div>
          <div className="col">
            <div className="h1 text-white hero-header-resp">
              Find your movies here!
            </div>
            <div className="hero-standard-font text-white">
              Explore our gallery full of exciting films from all around the
              globe only your yor entertainments. No hidden charges or
              disturbing ads.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
