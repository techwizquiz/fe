/* eslint-disable max-len */
import React, { Component } from 'react';
import styles from './Submit.css';

export default class Submit extends Component {
  render() {
    return (
      <div className={styles.submitPage}>
        <form>
          <div className={styles.submit}>

            <div className={styles.fix}>
              <label>Question:</label>
              <input></input>
            </div>

            <div className={styles.fix}>
              <label>Possible Answer:</label>
              <input></input>
            </div>

            <div className={styles.fix}>
              <label>Correct Answer?</label>
              <input type="radio" id="correct-A" name="correct" value="correct-A"></input>
            </div>


            <div className={styles.fix}>
              <label>Possible Answer:</label>
              <input></input>
            </div>

            <div className={styles.fix}>
              <label>Correct Answer?</label>
              <input type="radio" id="correct-B" name="correct" value="correct-B"></input>
            </div>


            <div className={styles.fix}>
              <label>Possible Answer:</label>
              <input></input>
            </div>

            <div className={styles.fix}>
              <label>Correct Answer?</label>
              <input type="radio" id="correct-C" name="correct" value="correct-C"></input>
            </div>


            <div className={styles.fix}>
              <label>Possible Answer:</label>
              <input></input>
            </div>

            <div className={styles.fix}>
              <label>Correct Answer?</label>
              <input type="radio" id="correct-D" name="correct" value="correct-D"></input>
            </div>

            <div className={styles.fix}>
              <label>Programming Language:</label>
              <input></input>
            </div>

            <button>Submit</button>

          </div>
        </form>
      </div >
    );
  }
}
