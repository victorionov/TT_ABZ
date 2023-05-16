import React from 'react';
import './App.scss';
import { Header } from './Components/Header/Header';
import { FirstPage } from './Components/FirstPage/FirstPage';
import { TeamList } from './Components/TeamList/TeamList';
import { SignUp } from './Components/SignUp/SignUp';

export const App: React.FC = () => {
  return (
    <div className='app_body'>
      <Header />
      <FirstPage />
      <TeamList />
      <SignUp />
    </div>
  );
}
