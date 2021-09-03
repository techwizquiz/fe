/* eslint-disable max-len */
import React, { Component } from 'react';
import styles from './AboutUs.css';
import tpain from '../../assets/png/tpain.jpg';
import zach from '../../assets/png/zach.jpg';
import cpain from '../../assets/png/cpain.png';
import angel from '../../assets/png/angel.jpg';

export default class AboutUs extends Component {
  render() {
    return (
      <div className={styles.aboutUs}>

        <h1 className={styles.header}>About Us</h1>

        <div className={styles.rows}>
          <div className={styles.person}>
            <h2>Zach</h2>
            <img className={styles.img} src={zach} />
            <p className={styles.description}>Zach is a full stack software engineer with a passion for clean functional design. He really enjoyed working on this project as a way of giving back to the tech community.
            </p>
            <a href="https://github.com/ZachMGaines">GitHub</a>
            <a href="https://www.linkedin.com/in/zachgaines/">LinkedIn</a>
          </div>
          <div className={styles.person}>
            <h2>Christiane</h2>
            <img className={styles.img} src={cpain} />
            <p className={styles.description}>Christiane is a full-stack software engineer originally from Philadelphia and living in Portland, OR. When she’s not playing Tech Wiz Quiz you can find her in the garden.
            </p>
            <a href="https://github.com/cmmerritt">GitHub</a>
            <a href="https://www.linkedin.com/in/christiane-merritt/">LinkedIn</a>
          </div>
          <div className={styles.person}>
            <h2>Taylor</h2>
            <img className={styles.img} src={tpain} />
            <p className={styles.description}>Taylor is a full stack software engineer with a life long love of learning. He knows from first hand experience what a monumental challenge learning to code is and wanted to create a tool to help better facilitate the learning process.
            </p>
            <a href="https://github.com/taylor-tokareff">GitHub</a>
            <a href="https://github.com/alchemycodelab/alchemy_class_projects/blob/master/March-2021-Cohort/www.linkedin.com/in/taylor-tokareff">LinkedIn</a>
          </div>
          <div className={styles.person}>
            <h2>Angel</h2>
            <img className={styles.img} src={angel} />
            <p className={styles.description}>
              Angel is a full stack developer with dreams of building a better world through code. Through bettering accessibility via code, Angel hopes to use his newfound skillset to help people everywhere.

            </p>
            <a href="https://github.com/AngelDOrtiz">GitHub</a>
            <a href="https://www.linkedin.com/in/angel-ortiz/">LinkedIn</a>
          </div>
        </div>
      </div>
    );
  }
}
