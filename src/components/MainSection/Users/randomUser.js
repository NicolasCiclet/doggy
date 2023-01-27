import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { useDispatch, useSelector } from 'react-redux';

import './random-user.scss';

// I get the props from the spread operator
const RandomUser = () => {

  const users = useSelector((state) => state.user.usersToDisplay);

  const dispatch = useDispatch();
  // console.log(user);
  // console.log(useSelector((state) => state.user.usersToDisplay));
  return (
    <Carousel
      autoPlay
      interval={3000}
      infiniteLoop
      thumbWidth={120}
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
  );
};

export default RandomUser;
