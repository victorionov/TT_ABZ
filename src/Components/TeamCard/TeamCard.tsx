import { User } from '../../@types/User';
import './TeamCard.scss';
interface TeamCardProps {
  user: User;
}

export const TeamCard: React.FC<TeamCardProps>  = ({ user }) => {
  const {name, email, phone, position, photo} = user;


  return (
    <div className="card">
      <img className='photo' src={photo} alt="Person portrait" />
      <h2 className='person-name'>{name}</h2>
      <div className='person-info'>
        <p className='person-info--position'>{position}</p>
        <p className='person-info--email'>{email}</p>
        <p className='person-info--phone'>{phone}</p>
      </div>
      
    </div>
  )
}