import profilePic from './assets/profile.jpg'

function Card() {
  return (
   <div className="card">
    <img className='card-image' src={profilePic} alt="Profile Picture "></img>
    <h2 className='card-title'> Nikita Vaid</h2>
    <p className='card-text'> I am a Computer Science Student </p>
   </div>
  );
}

export default Card;
