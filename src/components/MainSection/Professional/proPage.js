import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { findUser } from '../../../selectors/user';

import './pro-page.scss';

// I get the props from the spread operator
const ProPage = () => {
  const { id } = useParams();
  const url = useSelector((state) => state.nav.url);
  const professional = useSelector((state) => findUser(state.pro.professionalsApi, id));
  console.log(professional);

  return (
    <div className="eventboard">
      <div className="eventboard-container">
        <div className="eventboard-header">
          <h1 className="eventboard-h1">{professional.name}</h1>
        </div>
        <div className="eventboard-main">
          <div className="eventboard-main-photo">
            <img className="eventboard-photo" src={`${url}assets/images/${professional.picture}`} alt="evenement" />
          </div>
          <div className="eventboard-main-infos">

            {/* <h2 className="eventboard-info-title">Description:</h2>
            <span className="eventboard-info">{professional.description}</span> */}

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProPage;
