/* eslint-disable max-len */
import React from 'react';
import avatars from '../../../assets/avatars.svg';
// import styles from './Avatars.css';

export const Avatars = ({ onChange }) => {
  return (
    <>
      <h4>Choose your avatar</h4>
      <div>
        <label>
          <input type="radio" name="avatar" value="monster" onChange={onChange} />
          <svg overflow="visible"> 
            <use href={avatars + '#monster'} />
          </svg>
        </label>
        <label>
          <input type="radio" name="avatar" value="wizardHoodie" onChange={onChange} />
          <svg overflow="visible"> 
            <use href={avatars + '#wizard-hoodie'} />
          </svg>
        </label>
        <label>
          <input type="radio" name="avatar" value="goddess" onChange={onChange} />
          <svg overflow="visible"> 
            <use href={avatars + '#goddess'} />
          </svg>
        </label>
      </div>
    </>
  );
};
