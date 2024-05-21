import React, { useState } from 'react';
import { DisplayTodo } from './displayTodo';
import { CompletedTodo } from './completedTodos';

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
  const [cTodo, setCTodo] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  const addTask = (e) => {
    e.preventDefault();
    if (task.trim() === '') return;

    setTodos([...todos, task]);
    setTask('');
  };

  const showTasks = () => {
    setShowCompleted(true);
  };

  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-lg-9 col-xl-7">
            <div className="card rounded-3">
              <div className="card-body p-4">
                <h4 className="text-center my-3 pb-3">To Do App</h4>

                <form
                  className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2"
                  onSubmit={addTask}
                >
                  <div className="col-12">
                    <input
                      value={task}
                      onChange={(e) => setTask(e.target.value)}
                      type="text"
                      placeholder="Enter your task"
                    />
                  </div>
                  <div className="d-flex">
                    <button type="submit" className="btn btn-primary">
                      Save
                    </button>
                    &nbsp;
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={showTasks}
                    >
                      Show Completed Tasks
                    </button>
                  </div>
                </form>

                <table className="table mb-4">
                  <thead>
                    <tr>
                      <th scope="col">No.</th>
                      <th scope="col">Todo item</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <DisplayTodo
                      myTodos={todos}
                      cTodo={cTodo}
                      setCTodos={setCTodo}
                      setTodos={setTodos}
                    />
                  </tbody>
                </table>

                {showCompleted && (
                  <CompletedTodo completedTodos={cTodo} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
