import React from 'react';

export const CompletedTodo = ({ completedTodos }) => {
  return (
    <div>
      <h4 className="my-3">Completed tasks</h4>
      <table className="table mb-4">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Task</th>
          </tr>
        </thead>
        <tbody>
          {completedTodos.map((todo, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{todo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
