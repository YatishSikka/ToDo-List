import React, { useState, useEffect } from 'react';
import { Todo } from './Todo';
function App() {
  let initList;
  if (localStorage.getItem("List") === null) {
    initList = [];
  }
  else {
    initList = JSON.parse(localStorage.getItem("List"));
  }


  const deleteItem = (item) => {
    setList(List.filter((e) => {
      return e !== item;
    }));

    localStorage.setItem("List", JSON.stringify(List));
  }

  const addItem = (desc) => {
    let sno;
    if (List.length === 0) {
      sno = 0;
    }
    else {
      sno = (List[List.length - 1].sno) + 1;
    }
    const mylist = {
      sno: sno,
      desc: desc
    }
    setList(() => {
      return [...List, mylist];
    });

  }

  const [List, setList] = useState(initList);
  useEffect(() => {
    localStorage.setItem("List", JSON.stringify(List));
  }, [List])

  return (
    <div className="App">
      <Todo list={List} deleteItem={deleteItem} addItem={addItem} />
    </div>
  );
}

export default App;
