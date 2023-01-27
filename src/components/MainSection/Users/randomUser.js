import { useDispatch, useSelector } from 'react-redux';

import './user-page.scss';

// I get the props from the spread operator
const RandomUser = () => {

  const users = useSelector((state) => state.user.usersToDisplay);

  const dispatch = useDispatch();
  // console.log(user);
  // console.log(useSelector((state) => state.user.usersToDisplay));
  return (
    
  );
};

export default RandomUser;
