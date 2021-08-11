import './character.css'

const Character = ({ gender, name, origin, species, status, image }) => {
  const { name: originName } = origin;
  return (
    <div className="character" >
      <div className="character__image" style={{ background: `url(${image})` }} />
      <div className="character__details" >
        <ul>
          <li className="details__name" >{ name }</li>
          { (originName && originName !== 'unknown') && <li>{ originName }</li>}
          { (gender && gender !== '') && <li>{ gender }</li>}
          <li>{ species }</li>
        </ul>
        <div className={`details__status ${status.toLowerCase()}`} >
          { status === 'Alive' && 'Live' }
          { status === 'Dead' && 'Dead' }
        </div>
      </div>
    </div>
  );
};

export default Character;