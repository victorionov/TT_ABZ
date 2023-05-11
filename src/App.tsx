import React from 'react';
import './App.scss';
import { Header } from './Components/Header/Header';
import { SignIn } from './Components/SignIn/SignIn';
import { TeamList } from './Components/TeamList/TeamList';

export const App: React.FC = () => {
  return (
    <div className='app_body'>
      <Header />
      <SignIn />
      <TeamList />
    </div>
  );
}
