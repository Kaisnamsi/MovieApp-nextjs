import Image from "next/image";
import clockIcon from "../assets/images/clock_icon.svg";
import eyeIcon from "../assets/images/eye_icon.svg";

export default function DefaultCard({
  genre,
  title,
  duration,
  views,
  bgImage,
}) {
  const Dtitle = title ? title : "The Ring's Lord";
  const Dgenre = genre ? genre : "Fantasy";
  const Dduration = duration ? duration : "1 hour 20 minutes";
  const Dviews = views ? views : "21.3K";
  const DBackgroundImage = bgImage
    ? `url(${bgImage})`
    : "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%)";

  return (
    <>
      <div
        className="card pcariCard zoom-effect"
        // style={{
        //   background:
        //     "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%)",
        // }}
      >
        {bgImage && (
          <>
            <span className="span-body"></span>
            <div className="zoom-effect-wrapper">
              <img src={bgImage} className="card-img zoom-effect-img" />
            </div>
          </>
        )}

        <div
          className="card-img-overlay d-flex p-3 pt-4 pb-4 align-items-start flex-column"
          style={{ height: "100%" }}
        >
          <div className="row mb-auto">
            <div className="col">
              <div className="badge">{Dgenre}</div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="content-descriptions">
                <div className="content-duration me-4">
                  <Image
                    className="me-2"
                    priority
                    width={24}
                    height={24}
                    src={clockIcon}
                    alt="Duration"
                  />
                  <div className="regular-text text-white">{Dduration}</div>
                </div>
                <div className="content-views">
                  <Image
                    className="me-2"
                    priority
                    width={24}
                    height={24}
                    src={eyeIcon}
                    alt="Views"
                  />
                  <div className="regular-text text-white">
                    <span>{Dviews}</span> views
                  </div>
                </div>
              </div>
              <div className="content-title">
                <div className="h3 text-white fw-bold">{Dtitle}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
