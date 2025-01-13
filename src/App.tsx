import { useAuthenticator } from '@aws-amplify/ui-react';
//import { useEffect, useState } from "react";
// import type { Schema } from "../amplify/data/resource";
// import { generateClient } from "aws-amplify/data";

//const client = generateClient<Schema>();

function App() {
  //const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);
  const { user, signOut } = useAuthenticator();
  // useEffect(() => {
  //   client.models.Todo.observeQuery().subscribe({
  //     next: (data) => setTodos([...data.items]),
  //   });
  // }, []);

  // function createTodo() {
  //   client.models.Todo.create({ content: window.prompt("Todo content") });
  // }

    
  // function deleteTodo(id: string) {
  //   client.models.Todo.delete({ id })
  // }

  return (
    <main>
      <h2>Good day, {user?.signInDetails?.loginId}!</h2>
      <p>Please select from the following In Boise Valley contact forms.</p>
      
      {/* <button onClick={createTodo}>+ new</button>
      <ul>
        {todos.map((todo) => (
          <li 
          onClick={() => deleteTodo(todo.id)}
          key={todo.id}>
            {todo.content}
            </li>
        ))}
      </ul> */}

  

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <button onClick={() => (window.location.href = 'https://share.hsforms.com/1D07L5sB0Tw25Wcg0o_bNzgd2tdw')}>Closed Buyer Contact</button>
          <button onClick={() => (window.location.href = 'https://share.hsforms.com/1UAU59i7QRJWcbBIftjzBswd2tdw')}>Showing Agent Contact</button>
          <button onClick={() => (window.location.href = 'https://share.hsforms.com/1VGW1mu_KRlq7cp9vxcPU_Qd2tdw')}>Prospect Contact</button>
        </div>
        <button onClick={signOut} style={{ marginTop: '40px' }}>Sign out</button>
      </div>


    </main>
  );
}

export default App;
