import './TeamList.scss';
import { TeamCard } from '../TeamCard/TeamCard';

export const TeamList: React.FC  = () => {
  return (
    <div className='team-list_block'>
      <h1 className="title">
        Working with GET request
      </h1>
      <div className='card-grid-container'>
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </div>
      
    </div>
    
  )
}