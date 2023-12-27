import { useEffect, useState } from "react";

import "./Home.scss";

// const computerChoices: string[] = ["rock", "paper", "scissor"];

const mapping = ["✊", "🖐", "✌️"];

const Home = () => {
  const [rounds, setRounds] = useState(-1);
  const [userShow, setUserShow] = useState("");
  // const [computerShow, setComputerShow] = useState("");
  const [userCount, setUserCount] = useState(0);
  const [computerCount, setComputerCount] = useState(0);
  const [matchResult, setMatchResult] = useState("Let's play");
  const computerRandomChoice = Math.floor(Math.random() * mapping.length);

  const computerShow = mapping[computerRandomChoice];
  // console.log(computerRandomChoice);
  // console.log(computerShow);
  const chooseRounds = (event) => {
    setRounds(event.target.value);
  };
  // console.log(rounds);

  const handClick = (event) => {
    // console.log(rounds);

    // console.log(userShow);
    const computerShow = mapping[computerRandomChoice];
    if (rounds > 0) {
      // if (computerRandomChoice === 0) {
      //   setComputerShow("✊");
      // } else if (computerRandomChoice === 1) {
      //   setComputerShow("🖐");
      // } else if (computerRandomChoice === 2) {
      //   setComputerShow("✌️");
      // }
      console.log(computerShow);
      setUserShow(event.target.textContent);
      if (
        (userShow === "✊" && computerShow === "🖐") ||
        (userShow === "🖐" && computerShow === "✌️") ||
        (userShow === "✌️" && computerShow === "✊")
      ) {
        setComputerCount(computerCount + 1);
        setMatchResult(`${computerShow}beats ${userShow}, You lose!`);
      } else if (
        (computerShow === "✊" && userShow === "🖐") ||
        (computerShow === "🖐" && userShow === "✌️") ||
        (computerShow === "✌️" && userShow === "✊")
      ) {
        setUserCount(userCount + 1);
        setMatchResult(`${userShow}beats ${computerShow}, You win!`);
      } else {
        setMatchResult(`It was a draw! You both chose ${userShow}`);
      }
    } else if (rounds === 0) {
      if (userCount > computerCount) {
        setMatchResult("You win!");
      } else if (userCount < computerCount) {
        setMatchResult("You lose!");
      } else if (userCount === computerCount) {
        setMatchResult("draw!");
      }
    } else if (rounds < 0) {
      setMatchResult("Please choose Rounds!");
    }
    setRounds(rounds - 1);
  };

  return (
    <section>
      <h1>Rock || Paper || Scissor</h1>
      <div className="rounds">
        <p>How many rounds?</p>
        <div className="round">
          <div>
            <input
              type="radio"
              name="rounds"
              value={5}
              onChange={chooseRounds}
            />
            <label>5</label>
          </div>
          <div>
            <input
              type="radio"
              name="rounds"
              value={10}
              onChange={chooseRounds}
            />
            <label>10</label>
          </div>
          <div>
            <input
              type="radio"
              name="rounds"
              value={15}
              onChange={chooseRounds}
            />
            <label>15</label>
          </div>
          <div>
            <input
              type="radio"
              name="rounds"
              value={20}
              onChange={chooseRounds}
            />
            <label>20</label>
          </div>
        </div>
      </div>
      <div className="counts">
        <p>You</p>
        <span>{userShow}</span>
        <p>{userCount}</p>
        <p>:</p>
        <p>{computerCount}</p>
        <span>{computerShow}</span>
        <p>Computer</p>
      </div>
      <h1>{matchResult}</h1>
      <div>
        <button value="✊" onClick={handClick}>
          ✊
        </button>
        <button onClick={handClick}>🖐</button>
        <button onClick={handClick}>✌</button>
      </div>
      <p>MAKE YOUR MOVE.</p>
      <button>Restart</button>
    </section>
  );
};

export default Home;
