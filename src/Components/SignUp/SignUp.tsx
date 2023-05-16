import { Inputs } from './Inputs/Inputs';
import { RadioForm } from './Radiobuttons/RadioForm';
import './SignUp.scss';

import React from 'react';

export const SignUp: React.FC = () => {
  return (
    <div className="signup-container">
      <h1 className="signup-title">Working with POST request</h1>
      <Inputs />
      <RadioForm />
      <button className='button-sign-up' disabled>Sign up</button>
    </div>
  )
}
