/* eslint-disable max-len */
import React, { useState } from 'react';
import styles from './Avatars.css';
import monster from '../../../public/assets/png/monster.png';
import youngWizard from '../../../public/assets/png/youngWizard.png';
import goblin from '../../../public/assets/png/goblin.png';
import skullWizard from '../../../public/assets/png/skullWizard.png';
import chimera from '../../../public/assets/png/chimera.png';

export const Avatars = ({ onChange }) => {

  return (
    <>
      <h4>Choose your avatar</h4>
      <div>
        <label className={styles.label}>
          <input type="radio" name="avatar" value="monster" defaultChecked className={styles.radioButton} onChange={onChange} />
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
          <input type="radio" name="avatar" value="chimera" className={styles.radioButton} onChange={onChange} />
          <img className={styles.img} src={chimera} />
        </label>
      </div>
    </>
  );
};
