import React from 'react';

export default function TodoTable(todos, deleteTodo) {
    return(
        <div>
           <table>
           <tbody>
          {
          todos.map((todo, index) => 
            <tr key={index}>
              <td>{todo.date}</td>
              <td>{todo.desc}</td>
              <td><button onClick={() => deleteTodo(index)}>Delete</button></td>
            </tr>
          )
          }
        </tbody>
      </table>
        </div>
    );
}