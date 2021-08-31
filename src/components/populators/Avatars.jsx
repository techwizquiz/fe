/* eslint-disable max-len */
import React from 'react';
import styles from './Avatars.css';

export const Avatars = ({ onChange }) => {
  return (
    <>
      <h4>Choose your avatar</h4>
      <div>
        <label className={styles.label}>
          <input type="radio" name="avatar" value="monster" className ={styles.radioButton} defaultChecked onChange={onChange} />
          <img className = {styles.img} src="https://image.flaticon.com/icons/png/128/2332/2332630.png" />
        </label>
        <label className={styles.label}>
          <input type="radio" name="avatar" value="youngWizard" className ={styles.radioButton} onChange={onChange} /> 
          <img className = {styles.img} src="https://image.flaticon.com/icons/png/128/2332/2332873.png" />
        </label>
        <label className={styles.label}>
          <input type="radio" name="avatar" value="goblin" className ={styles.radioButton} onChange={onChange} />
          <img className = {styles.img} src="https://image.flaticon.com/icons/png/128/2332/2332770.png" />
        </label>
        <label className={styles.label}>
          <input type="radio" name="avatar" value="skullWizard" className ={styles.radioButton} onChange={onChange} />
          <img className = {styles.img} src="https://image.flaticon.com/icons/png/512/2332/2332835.png" />
        </label>
        <label className={styles.label}>
          <input type="radio" name="avatar" value="octopus" className ={styles.radioButton} onChange={onChange} />
          <img className = {styles.img} src="https://image.flaticon.com/icons/png/128/2332/2332784.png" />
        </label>
      </div>
    </>
  );
};
