/* eslint-disable max-len */
import React, { useState } from 'react';
import { useSetWinLose } from '../../services/SessionProvider';


const Answers = ({ a, b, c, d, answer }) => {

  const [selectedChoice, setSelectedChoice] = useState(null);

  const { setWinLose, winLose } = useSetWinLose();


  const choice = (e) => {
    console.log('selectedCHOICE', selectedChoice, 'HAHAHAHA', answer);
    // setSeenQuestionIds: add new id to array of ids in state
    if (selectedChoice === answer) {
      setWinLose('win');
    } else {
      setWinLose('lose');
    }
    console.log('helllllo', winLose);
  };


  return (
    <>
      <div>
        <label><input type="radio" name="answer" value="a" onClick={({ target }) => setSelectedChoice(target.value)} key={a} />A: <pre>{a}</pre></label>

        <label><input type="radio" name="answer" value="b" onClick={({ target }) => setSelectedChoice(target.value)} key={b} />B: <pre>{b}</pre></label>

        <label><input type="radio" name="answer" value="c" onClick={({ target }) => setSelectedChoice(target.value)} key={c} />C: <pre>{c}</pre></label>

        <label><input type="radio" name="answer" value="d" onClick={({ target }) => setSelectedChoice(target.value)} key={d} />D: <pre>{d}</pre></label>

        {/* <button onClick={choice}>Submit</button> */}
        <button onClick={choice}>Submit</button>

      </div>

    </>
  );

};

export default Answers;

