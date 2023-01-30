// https://www.npmjs.com/package/react-responsive-carousel
// I use yarn add react-responsive-carousel

// the doc tells us to copy this import
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { useDispatch, useSelector } from 'react-redux';

import './random.scss';

const RandomUser = () => {
  const users = useSelector((state) => state.user.usersToDisplay);

  // const dispatch = useDispatch();
  // console.log(user);
  // console.log(useSelector((state) => state.user.usersToDisplay));
  return (
    <div className="random">
      <h1>Rencontrez d'autres passionnés</h1>
      <Carousel
      // Options
        autoPlay
        interval={3000}
        infiniteLoop
        showThumbs={false}
        // thumbWidth={80}
        showIndicators={false}
        showStatus={false}
      >
        {users.map((user) => (
          <div key={user.id}>
            <img src={user.userPicture} alt="" />
            <div className="overlay">
              <h2 className="overlay__title">{user.firstname}</h2>
              <p className="overlay__text">{user.bio}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default RandomUser;
