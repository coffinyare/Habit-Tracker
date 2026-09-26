import React,{  useState  } from "react";

function App(){
  const [newHabit, setNewHabit]=useState("")
  const [habits, setHabits]=useState([
    {
       name: "coding",
        completed:false,

    },
    {
       name: "",
       completed:true,
    }
  ]);
  
  
  


  function handleChange(event){
    const value=event.target.value;
    setNewHabit(value);

  }

  function handleAddHabit(event){
    event.preventDefault();
    setHabits((pervHabits)=>{

      return[...pervHabits, 
        {
          name: newHabit,
          completed:false
        }
      ]
    })
    setNewHabit("")


  }

  function handleToggleHabit(index){
      setHabits((pervHabits)=>{
        return pervHabits.map((habit, habiIndex)=>{
          if(habiIndex === index){
            return{
              ...habit, 
              completed: !habit.completed,
            }
          }
          return habit;

        })
      })
  }

  function handleDeleteHabit(index){
    setHabits(pervHabits=>{
      return pervHabits.filter((_ , habitIndex)=>{
        return habitIndex !== index;
      })
    })
  }
function handleEditHabit(index) {
  const newName = window.prompt(
    "Enter new habit name:",
    habits[index].name
  );

  if (!newName || newName.trim() === "") {
    return;
  }

  setHabits((prevHabits) => {
    const updatedHabits = [...prevHabits];

    updatedHabits[index] = {
      ...updatedHabits[index],
      name: newName,
    };

    return updatedHabits;
  });
}





  return(
    <>
    <form onSubmit={handleAddHabit}>
          <h1>Habit Tracker</h1>
          <input onChange={handleChange} value={newHabit} type ="text" placeholder="Add a new habit" />
          <button  type="submit">Add habit</button>




    </form>

    
      {habits.map((habit, index)=>{
        return (
          <p 
          key={index}>
            <input type="checkbox"  
            checked={habit.completed}
             onChange={()=>{handleToggleHabit(index)}} /> 
             {habit.name}    
          
            <button
              type="button"
               onClick={() => handleEditHabit(index)}>
                 Edit
               </button>
             <button onClick={() => handleDeleteHabit(index)}>
              Delete
            </button> 
             </p>
            
        )
      })
    }
    
</>
  )
}



export default App;