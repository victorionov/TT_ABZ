import { User } from '../../@types/User';
import { createUser } from '../../api/users';
import { Inputs } from './Inputs/Inputs';
import { RadioForm } from './Radiobuttons/RadioForm';
import './SignUp.scss';

import React, { useState } from 'react';

export const SignUp: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  const handleSignUp = async () => {
    try {
      if (user !== null) {
        const createdUser = await createUser(user);
      console.log('Created user:', createdUser);
      
      setUser(null);
      }
      
      
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div className="signup-container">
      <h1 className="signup-title">Working with POST request</h1>
      <Inputs />
      {/* <RadioForm setUser={setUser}/> */}
  
    </div>
  )
}
