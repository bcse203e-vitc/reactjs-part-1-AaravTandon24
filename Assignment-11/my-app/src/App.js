import React, { useState, useEffect } from "react";

function Header() {
  return <h1>Welcome to My Website</h1>;
}

function Footer() {
  return <p>© 2025 My Website</p>;
}

function Welcome() {
  return <h1>Welcome to React!</h1>;
}

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function DynamicGreeting() {
  const name = "Alice";
  const currentTime = new Date().getHours();
  const greeting = currentTime < 12 ? "Good Morning" : "Good Evening";
  return (
    <h2>
      {greeting}, {name}!
    </h2>
  );
}

function FruitList() {
  const fruits = ["Apple", "Banana", "Cherry"];
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}

function ConditionalGreeting() {
  const isLoggedIn = false;
  return <h2>{isLoggedIn ? "Welcome Back!" : "Please Log In"}</h2>;
}

function StyledHeading() {
  const myStyle = { color: "blue", fontSize: "20px" };
  return <h2 style={myStyle}>Styled Heading</h2>;
}

function ClickMe() {
  function handleClick() {
    alert("Button clicked!");
  }
  return <button onClick={handleClick}>Click Me</button>;
}

function CurrentTime() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const timer = setInterval(
      () => setTime(new Date().toLocaleTimeString()),
      1000
    );
    return () => clearInterval(timer);
  }, []);
  return <h2>Current Time: {time}</h2>;
}

function ProfilePicture() {
  return <img src="goker.jpeg" alt="Profile" />;
}

function UserList() {
  const users = ["Alice", "Bob", "Charlie"];
  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>{user}</li>
      ))}
    </ul>
  );
}

function Info() {
  return (
    <>
      <h3>Title</h3>
      <p>This is a description.</p>
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

function AgeChecker() {
  const [age, setAge] = useState("");
  return (
    <div>
      <input
        type="number"
        placeholder="Enter your age"
        onChange={(e) => setAge(e.target.value)}
      />
      <p>{age >= 18 ? "You are an adult" : "You are a minor"}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Welcome />
      <Greeting name="Alice" />
      <DynamicGreeting />
      <FruitList />
      <ConditionalGreeting />
      <StyledHeading />
      <ClickMe />
      <CurrentTime />
      <ProfilePicture />
      <UserList />
      <Info />
      <Counter />
      <AgeChecker />
      <Footer />
    </div>
  );
}

export default App;
