import './legal.scss';

const LegalMentions = () => (
  <div className="mention">
    <div className="mention-content">
      <h1 className="mention-content-h1">Mentions Légales</h1>
      <h2 className="mention-content-h2">Identité de l'éditeur du site :</h2>
      <p className="mention-content-p">
        Bourriquen Marine
      </p>
      <p className="mention-content-p">
        Niclet Nicolas
      </p>
      <p className="mention-content-p">
        Rialland Christophe
      </p>
      <h2 className="mention-content-h2">Informations concernant l'entreprise :</h2>
      <p className="mention-content-p">
        Pour l'instant, point d'entreprise. Ce projet est créé dans le cadre de la
        formation "Développeur web et web mobile" dispensée par l'école O'Clock.
      </p>
      <h2 className="mention-content-h2">Propriété intellectuelle :</h2>
      <p className="mention-content-p">
        Toutes les images utilisées lors de ce projet sont soit libre de droit
        soit appartenant aux éditeurs du site.
      </p>
      <h2 className="mention-content-h2">Mentions relatives à l’hébergement du site :</h2>
      <p className="mention-content-p">
        Pour l'instant, point d'hébergement.
      </p>
    </div>
  </div>
);

export default LegalMentions;
