import './TeamList.scss';
import { TeamCard } from '../TeamCard/TeamCard';
import React, { useEffect, useState } from 'react';
import { User } from '../../@types/User';
import { fetchUsers } from '../../api/users';
import { error } from 'console';


export const TeamList: React.FC  = React.memo(() => {
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState(1);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetchUsers(page).then((data: User[]) => {
      setUsers((prevUsers) => ([...prevUsers, ...data]));
    })
    .catch(() => {
      setHasError(true);
    })

  }, []);

  useEffect(() => {
    if (page === 1) {

      return;
    }

    fetchUsers(page).then((data: User[]) => {
      setUsers((prevUsers) => ([...prevUsers, ...data]));
    })
    .catch(() => {
      setHasError(true);
    })
  }, [page]);

  const handleMoreUsers = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className='team-list_block'>
      <h1 className="title">
        Working with GET request
      </h1>
      <div className='card-grid-container'>
        {users.map((user: User) => (
          <TeamCard key={user.id} user={user}/>
        ))}
      </div>
      <button className='button-more' onClick={handleMoreUsers}>Show more</button>
    </div>
  )
});
