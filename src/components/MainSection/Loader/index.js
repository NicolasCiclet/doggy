import dogWalking from 'src/data/dog_walking.gif';
import dogWalking2 from 'src/data/dog_walking2.gif';
import './loader.scss';

const Loader = () => (
  <div className="loader">
    <img src={dogWalking2} alt="" />
    <p className="loader-info">
      Veuillez patienter svp...
    </p>
  </div>
);

export default Loader;
