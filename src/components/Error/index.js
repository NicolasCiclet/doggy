import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import error from 'src/data/404.jpg';
import { showError } from '../../actions/nav';
import './error.scss';

const Error = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showError(true));
  }, []);
  return (
    <div className="error-page">
      <div className="error-left">
        <p className="error-text">
          <span className="error404">404 <br /></span>
          Page not found
        </p>
      </div>
      <div className="error-right">
        <img className="error-img" src={error} alt="Little dog with error message" />
      </div>
    </div>
  );
};

export default Error;
