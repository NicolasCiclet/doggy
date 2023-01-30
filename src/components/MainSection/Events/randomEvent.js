import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { useDispatch, useSelector } from 'react-redux';

import '../Users/random.scss';

// I get the props from the spread operator
const RandomEvent = () => {
  const events = useSelector((state) => state.event.eventsToDisplay);

  // const dispatch = useDispatch();
  // console.log(user);
  // console.log(useSelector((state) => state.user.eventsToDisplay));
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
        {events.map((event) => (
          <div key={event.id}>
            <img src={event.picture} alt="" />
            <div className="overlay">
              <h2 className="overlay__title">{event.name}</h2>
              <p className="overlay__text">{event.difficulty}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default RandomEvent;
