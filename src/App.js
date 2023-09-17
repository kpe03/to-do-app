import {useState} from 'react';

function App() {
  return (
      <Header />
  );
}
function Header() {
  return(
    <header>
      <h2>To Do List</h2>
    </header>
  )
}


function ItemsTable({ items }) {
  const rows = [];

  items.forEach((item) => {
    
      rows.push(
        <ItemRows />
      );
  });
}


function ItemRows( { item }) {
  //get props from the user and display in row
  const name = item.name;
  

  return(
    <tr>
      <td>
        <input type="checkBox" id="task"></input>
      </td> 
      <td>{name}</td>
      <td></td>
    </tr>
  );
}

function ListCategoryRow() {
  //probably completed/uncompleted for now

}

// entire component of list
function ToListWidget({ items }){
  //table: completed, title, date
  const [completed, setCompleted] = useState(false);
  const [currentItems, setCurrentItems] = useState();
  const [typingState, setTypingState] = useState('typiing');
  const [newTask, setNewTask] = useState('');

  // handle submit
  
  return(
    <div>

    </div>
  )
}

function AddListItems() {
  //input bar, "+"/"add" button

  function handleTextareaChange(e) {
    setNewTask(e.target.Value);
  }

  return(
    <>
    <form onSubmit={handleSubmit}>
    {/* input */}
    <textarea
      value={answer}
      onChange={handleTextareaChange}
      disabled={status === 'submitting'}
      />
      <br />
      {/* button */}
      <button disabled={
        newTask.length === 0 ||
        status === 'submitting'
      }> Add Task
      </button>
      </form>
    </>
  );
}

export default App;
