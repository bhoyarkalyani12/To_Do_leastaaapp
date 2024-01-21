import React,{useState} from 'react';
import ToDoLists from "./ToDoLists"
const App = () =>{
    
  const [inputList, setInputList] = useState("buy apple");
  const [Item, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItem = () => {
     setItems((oldItems) =>{
       return [...oldItems, inputList];
     }) ; 

     };
     
     const deletItems = () =>{
      console. log("deleted");
   };
  return(
    <>
<div className='main_div'>
   <div className='center-div'>
     <br/>
     <h1>TO DO LIST</h1><br/>
     <input type="text" placeholder='Add a items' onChange={itemEvent}/>
     <button onClick={listOfItem}>+</button>
     <ol>
       {/* <li> {inputList} </li> */}

       {Item.map((itemval, index)=>{
      return <ToDoLists
      key={index} id ={index}
       text={itemval}
       onselect={deletItems} />;
       })}
       </ol>
      </div>
   </div>
    </>
  );
  };

export default App;





