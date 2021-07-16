import './App.css';
import { AddUser } from './components/AddUser';
import { UsersList } from './components/UsersList';

function App() {
  return (
    <div className="App">
      <AddUser />
      <UsersList />
    </div>
  );
}

export default App;
