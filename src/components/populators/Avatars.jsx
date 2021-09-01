/* eslint-disable max-len */
import React from 'react';
import styles from './Avatars.css';
import monster from '../../../assets/png/004-monster.png';
import youngWizard from '../../../assets/png/054-wizard.png';
import goblin from '../../../assets/png/031-goblin.png';
import skullWizard from '../../../assets/png/045-wizard.png';
import octopus from '../../../assets/png/034-sea-monster.png';

export const Avatars = ({ onChange }) => {
  return (
    <>
      <h4>Choose your avatar</h4>
      <div>
        <label className={styles.label}>
          <input type="radio" name="avatar" value="monster" className={styles.radioButton} defaultChecked onChange={onChange} />
          <img className={styles.img} src={monster} />
        </label>
        <label className={styles.label}>
          <input type="radio" name="avatar" value="youngWizard" className={styles.radioButton} onChange={onChange} /> 
          <img className={styles.img} src={youngWizard} />
        </label>
        <label className={styles.label}>
          <input type="radio" name="avatar" value="goblin" className={styles.radioButton} onChange={onChange} />
          <img className={styles.img} src={goblin} />
        </label>
        <label className={styles.label}>
          <input type="radio" name="avatar" value="skullWizard" className={styles.radioButton} onChange={onChange} />
          <img className = {styles.img} src={skullWizard} />
        </label>
        <label className={styles.label}>
          <input type="radio" name="avatar" value="octopus" className ={styles.radioButton} onChange={onChange} />
          <img className={styles.img} src={octopus} />
        </label>
      </div>
    </>
  );
};
