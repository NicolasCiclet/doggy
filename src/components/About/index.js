import playing from './playing.jpg';
import './about.scss';

const About = () => (
  <div className="about">
    <div className="about-content">
      <h1 className="about-content-h1">Qui sommes-nous ?</h1>
      <p className="about-content-p">
        Trois dev juniors aimants <strong>les animaux</strong>, <strong>les promenades</strong>,
        <strong> le lien social</strong> et surtout ... <strong>le code</strong> !
      </p>
      <h2 className="about-content-h2">dO'ggy : pourquoi ?</h2>
      <p className="about-content-p">
        Lorsqu'on acquiert un chien, on se retrouve face à nombre de
        <strong> problématiques</strong> et responsabilités en termes
        <strong> d'éducation et de soin</strong>.
      </p>
      <p>
        On peut se sentir seul et démuni face à certaines d'entre elles, comme la sociabilisation
        des chiens qui nécessitent des compagnons de balade consentants, ou le fait de trouver
        un bon professionnel.
      </p>
      <p className="about-content-p">
        <strong>DO’ggy</strong> a pour but de mettre en relation les propriétaires de chiens:
      </p>
      <ul>
        <li>&#10687; <strong>Créer du lien</strong> avec d'autres passionnés présents
          dans la même région.
        </li>
        <li>&#10687; Recensement des différents <strong>professionnels</strong> du monde
          animal.
        </li>
        <li>&#10687; Recensement d'itinéraires de <strong>balades</strong> à côté de chez vous.</li>
        <li>&#10687; Création <strong>d'événements</strong> auxquels convier ses amis pour
          réaliser dessorties à plusieurs.
        </li>
      </ul>
      <h2 className="about-content-h2">dO'ggy : pour qui ?</h2>
      <p className="about-content-p">
        <span className="heart">&hearts;</span>
        Pour tous les amoureux des animaux !
        <span className="heart">&hearts;</span>
      </p>
      <p className="about-content-p">
        Les propriétaires de chiens désireux d'en rencontrer d'autres, d'étendre leurs connaissances
        en chemins de balade ou à la recherche de professionnels du monde animal.
      </p>
    </div>
    <div className="about-photo">
      <img className="about-photo-img" src={playing} alt="playing session with dogs" />
    </div>
  </div>
);

export default About;
