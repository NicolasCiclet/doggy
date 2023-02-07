import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { useSelector } from 'react-redux';

import '../Users/random.scss';

// I get the props from the spread operator
const RandomEvent = () => {
  // const events = useSelector((state) => state.event.eventsToDisplay);
  const randomEvents = useSelector((state) => state.event.randomEventsToDisplay);
  const url = useSelector((state) => state.nav.url);

  return (
    <div className="random">
      <h1>Découvrez des évènements, des balades</h1>
      <Carousel
        autoPlay
        interval={3000}
        infiniteLoop
        showThumbs={false}
        // thumbWidth={120}
        showIndicators={false}
        showStatus={false}
      >
        {randomEvents.map((event) => (
          <div key={event.id}>
            <img src={`${url}assets/images/${event.picture}`} alt="" />
            <div className="overlay">
              <h2 className="overlay__title">{event.name}</h2>
              {/* <p className="overlay__text">{event.difficulty}</p> */}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default RandomEvent;
