/* eslint-disable max-len */
import React from 'react';
// import styles from './Avatars.css';

export const Avatars = ({ onChange }) => {
  return (
    <>
      <h4>Choose your avatar</h4>
      <div>
        <label>
          <input type="radio" name="avatar" value="monster" onChange={onChange} />
          <img src="https://image.flaticon.com/icons/png/128/2332/2332630.png" />
        </label>
        <label>
          <input type="radio" name="avatar" value="youngWizard" onChange={onChange} /> 
          <img src="https://image.flaticon.com/icons/png/128/2332/2332873.png" />
        </label>
        <label>
          <input type="radio" name="avatar" value="goddess" onChange={onChange} />
          <img src="https://image.flaticon.com/icons/png/128/2332/2332754.png" />
        </label>
      </div>
    </>
  );
};
