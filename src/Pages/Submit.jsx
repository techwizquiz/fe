/* eslint-disable max-len */
import React, { Component } from 'react';
import styles from './Submit.css';

export default class Submit extends Component {
  render() {
    return (
      <div>
        <form>

          <label>Question</label>git
          <input></input>

          <label>Possible Answer</label>
          <input></input>
          <input type="radio" id="correct-A" name="correct-A" value="correct-A"></input>
          <label>Correct Answer?</label>

          <label>Possible Answer</label>
          <input></input>
          <input type="radio" id="correct-B" name="correct-B" value="correct-B"></input>
          <label>Correct Answer?</label>


          <label>Possible Answer</label>
          <input></input>
          <input type="radio" id="correct-C" name="correct-C" value="correct-C"></input>
          <label>Correct Answer?</label>


          <label>Possible Answer</label>
          <input></input>
          <input type="radio" id="correct-D" name="correct-D" value="correct-D"></input>
          <label>Correct Answer?</label>












        </form>
      </div >
    );
  }
}
