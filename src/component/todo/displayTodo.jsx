import React from 'react';

export const DisplayTodo = ({myTodos,setTodos,cTodo,setCTodos}) => {

    const completedTodos =(item, index) =>{
        const copyTodos = [...myTodos];
        setCTodos([...cTodo ,item]);
        copyTodos.splice(index,1);
        setTodos(copyTodos);
    };

  const deleteTodos = (index) => {
    // console.log("index" , index);
    const copyTodos = [...myTodos];
    copyTodos.splice(index, 1);
    setTodos(copyTodos);
  };

  return (
    <>
      {myTodos.map((todo, index) => (
        <tr key={index}>
          <th scope="row">{index + 1}</th>
          <td>{todo}</td>
          <td>
            <button
              type="button"
              onClick={() => deleteTodos(index)}
              className="btn btn-danger"
            >
              Delete
            </button>
            <button
              type="button"
              onClick={() => completedTodos(todo, index)}
              className="btn btn-success ms-1"
            >
              Completed
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};
