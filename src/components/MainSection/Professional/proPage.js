import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { findUser } from '../../../selectors/user';

// I get the props from the spread operator
const ProPage = () => {
  const { id } = useParams();
  const url = useSelector((state) => state.nav.url);
  // This function has been created for user, but it can be used in the same way for another entity
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

            <h2 className="eventboard-info-title">Profession:</h2>
            <span className="eventboard-info">{professional.category.name} -</span>
            <span className="eventboard-info"> {professional.category.description}</span>

            <h2 className="eventboard-info-title">Téléphone:</h2>
            <span className="eventboard-info">{professional.phone}</span>

            <h2 className="eventboard-info-title">Email:</h2>
            <span className="eventboard-info">{professional.email}</span>

            <h2 className="eventboard-info-title">Ville:</h2>
            <span className="eventboard-info">{professional.city}</span>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProPage;
