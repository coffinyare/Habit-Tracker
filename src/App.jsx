import React, { useState } from "react";

function App() {
  const [newHabit, setNewHabit] = useState("");

  const [habits, setHabits] = useState([
    {
      name: "Coding",
      completed: false,
    },
    {
      name: "Exercise",
      completed: false,
    },
  ]);

  function handleChange(event) {
    const value = event.target.value;
    setNewHabit(value);
  }

  function handleAddHabit(event) {
    event.preventDefault();

    setHabits((prevHabits) => {
      return [
        ...prevHabits,
        {
          name: newHabit,
          completed: false,
        },
      ];
    });

    setNewHabit("");
  }

  function handleToggleHabit(index) {
    setHabits((prevHabits) => {
      return prevHabits.map((habit, habitIndex) => {
        if (habitIndex === index) {
          return {
            ...habit,
            completed: !habit.completed,
          };
        }

        return habit;
      });
    });
  }

  function handleDeleteHabit(index) {
    setHabits((prevHabits) => {
      return prevHabits.filter(
        (_, habitIndex) => habitIndex !== index
      );
    });
  }

  return (
    <>
      <form onSubmit={handleAddHabit}>
        <h1>Habit Tracker</h1>

        <input
          onChange={handleChange}
          value={newHabit}
          type="text"
          placeholder="Enter a new habit..."
        />

        <button type="submit">Add habit</button>
      </form>

      {habits.map((habit, index) => {
        return (
          <p key={index}>
            <input
              type="checkbox"
              checked={habit.completed}
              onChange={() => handleToggleHabit(index)}
            />

            {habit.name}

            <button onClick={() => handleDeleteHabit(index)}>
              Delete
            </button>
          </p>
        );
      })}
    </>
  );
}

export default App;

