import { useState } from "react";

const userCred = [
  {
    username: "James",
    password: "James@123",
  },

  {
    username: "Jack",
    password: "Jack@123",
  },
];

export default function App() {
  return (
    <div className="app">
      <ToDOList />
    </div>
  );
}

function ToDOList() {
  const [login, setLogin] = useState(false);
  return (
    <>
      <NavBar onLogin={setLogin} />
      {login && <Login />}
    </>
  );
}

function NavBar({ onLogin }) {
  return (
    <nav className="nav-bar">
      <ul>
        <li onClick={() => onLogin(false)}>Home</li>
        <li>About US</li>
        <li onClick={() => onLogin((login) => !login)}>Login</li>
        <li>Sign Up</li>
        <li>Contact US</li>
      </ul>
    </nav>
  );
}

function Button({ children }) {
  return <button>{children}</button>;
}

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleLogin() {
    setUserName(userName);
    setPassword(password);
    console.log(userName, password);
  }

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>LOGIN</h3>
      <label>Username</label>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />

      <label>Passowrd</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleLogin}>Login</Button>
    </form>
  );
}
