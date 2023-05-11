import './TeamCard.scss';

export const TeamCard: React.FC  = () => {
  return (
    <div className="card">
      <img className='photo' src="/photo.webp" alt="Person portriet" />
      <h2 className='person-name'>Salvador Stewart</h2>
      <div className='person-info'>
        <p className='person-info--position'>Frontend developer</p>
        <p className='person-info--email'>Frontend developer@gmail.com</p>
        <p className='person-info--phone'>+38 (098) 278 44 24</p>
      </div>
      
    </div>
  )
}