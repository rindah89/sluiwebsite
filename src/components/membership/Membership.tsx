import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Membership = () => {
  const responsive2 = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <div
      style={{
        margin: "0 4rem 6rem 4rem",
        overflow: "hidden",
      }}
    >
      <Carousel
        responsive={responsive2}
        autoPlay
        infinite
        arrows={false}
        autoPlaySpeed={2000}
      >
        {Array(8)
          .fill("a")
          .map((_, index) => {
            const source = index === 0 ? "logo" : `logo${index + 1}`;
            // const link =
            //   index === 5
            //     ? "https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/how-to-participate/org-details/885163219"
            //     : "";
            return (
              <div
                style={{
                  height: "100%",
                  display: "grid",
                }}
                key={index}
              >
                <img
                  src={`/logos/${source}.webp`}
                  alt="logo"
                  width={80}
                  height={"auto"}
                  style={{
                    alignSelf: "center",
                  }}
                />
              </div>
            );
          })}
      </Carousel>
    </div>
  );
};

export default Membership;
