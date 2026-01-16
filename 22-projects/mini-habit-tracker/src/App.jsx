import { useState } from "react";

const App = () => {
  const [habits, setHabits] = useState([]);
  const [inputText, setInputText] = useState("");

  const habitList = document.querySelector(".habitList");
  const addHabit = document.querySelector(".addHabit");

  addHabit.addEventListener("click", function (e) {
    console.log(e);
  });

  return (
    <div>
      <div className="header">
        <h1>Mini Habit Tracker</h1>
        <p>Track your daily habits..</p>
      </div>
      <div className="newHabit">
        <input
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
        <button
          className="addHabit"
          onClick={() => {
            // setHabits({ inputText });
            // const habitId = Math.floor(Math.random() * 1000) + 1;
          }}
        >
          Add Habit
        </button>
      </div>
      <div className="middle">
        <div className="progress-bar"></div>
        <div className="resetDiv">
          <button>Reset Habits</button>
        </div>
      </div>

      <div className="habitList">
        <input type="checkbox" />
        <p>Drinking 4L Water</p>
      </div>
    </div>
  );
};

export default App;
