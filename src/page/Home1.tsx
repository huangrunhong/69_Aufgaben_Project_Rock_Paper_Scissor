import { useState } from "react";
import "./Home.scss";

const choices: string[] = ["rock", "paper", "scissor"];

// type Choice = "rock" | "paper" | "scissor";

interface GameState {
  rounds: number;
  userChoice?: string;
  computerChoice?: string;
  userScore: number;
  computerScore: number;
  result: string;
}

const mapping = {
  rock: "✊",
  paper: "🖐",
  scissor: "✌",
};

const Home1 = () => {
  const [state, setState] = useState<GameState>({
    rounds: 5,
    userScore: 0,
    computerScore: 0,
    result: "Let's play",
  });

  const chooseRounds = (event) =>
    setState({
      rounds: event.target.value,
      userChoice: state.userChoice,
      computerChoice: state.computerChoice,
      userScore: state.userScore,
      computerScore: state.computerScore,
      result: state.result,
    });

  const handClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const userChoice = event.currentTarget.value;
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let computerScore = state.computerScore;
    let userScore = state.userScore;
    let result = state.result;

    if (state.rounds > 0) {
      if (
        (userChoice === "rock" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "scissor") ||
        (userChoice === "scissor" && computerChoice === "rock")
      ) {
        computerScore = state.computerScore + 1;
        result = "You lose. Try again";
      } else if (
        (computerChoice === "rock" && userChoice === "paper") ||
        (computerChoice === "paper" && userChoice === "scissor") ||
        (computerChoice === "scissor" && userChoice === "rock")
      ) {
        userScore = state.userScore + 1;
        result = "You win!";
      } else {
        result = "Draw";
      }
    } else if (state.rounds === 0) {
      if (state.userScore > state.computerScore) {
        result = "You win, try it again!";
      } else if (state.userScore < state.computerScore) {
        result = "You lose, try it again!";
      } else {
        result = "Draw, try it again!";
      }
    }

    setState({
      rounds: state.rounds - 1,
      userChoice: userChoice,
      computerChoice: computerChoice,
      userScore: userScore,
      computerScore: computerScore,
      result: result,
    });
  };

  const restart = () => {
    setState({
      rounds: 5,
      userChoice: "",
      computerChoice: "",
      userScore: 0,
      computerScore: 0,
      result: "Let's play",
    });
  };

  return (
    <section>
      <h1>Rock - Paper - Scissor</h1>
      <div className="rounds">
        <p>How many rounds?</p>
        <div className="round">
          <div>
            <input
              type="radio"
              name="roundss"
              value={5}
              onChange={chooseRounds}
            />
            <label>5</label>
          </div>
          <div>
            <input
              type="radio"
              name="roundss"
              value={10}
              onChange={chooseRounds}
            />
            <label>10</label>
          </div>
          <div>
            <input
              type="radio"
              name="roundss"
              value={15}
              onChange={chooseRounds}
            />
            <label>15</label>
          </div>
          <div>
            <input
              type="radio"
              name="roundss"
              value={20}
              onChange={chooseRounds}
            />
            <label>20</label>
          </div>
        </div>
      </div>
      <div className="counts">
        <p>You</p>
        <span>{mapping[state.userChoice]}</span>
        <p className="score">{state.userScore}</p>
        <p>:</p>
        <p className="score">{state.computerScore}</p>
        <span>{mapping[state.computerChoice]}</span>
        <p>Computer</p>
      </div>
      <h1>{state.result}</h1>
      <div className="choiceButtons">
        <button value="rock" disabled={state.rounds <= 0} onClick={handClick}>
          ✊
        </button>
        <button value="paper" disabled={state.rounds <= 0} onClick={handClick}>
          🖐
        </button>
        <button
          value="scissor"
          disabled={state.rounds <= 0}
          onClick={handClick}
        >
          ✌
        </button>
      </div>
      <p>MAKE YOUR MOVE.</p>
      <button className="restartBtn" onClick={restart}>
        Restart
      </button>
    </section>
  );
};

export default Home1;
