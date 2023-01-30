import dogWalking from 'src/data/dog_walking.gif';
import './loader.scss';

const Loader = () => (
  <div className="loader">
    <img src={dogWalking} alt="" />
    <p className="loader-info">
      Veuillez patienter svp...
    </p>
  </div>
  
);

export default Loader;
