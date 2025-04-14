import React, { useState, useEffect } from "react";

// 1(i) Without JSX
const HelloWithoutJSX = () => React.createElement("h1", null, "Hello, React!");

// 1(ii) With JSX
const HelloWithJSX = () => <h1>Hello, React!</h1>;

// 1(iii) Message stored in a variable
const message = "Welcome to React!";
const HelloMessage = () => <h1>{message}</h1>;

// 2. Render a list of fruits dynamically
const FruitList = () => {
  const fruits = ["Apple", "Banana", "Cherry"];
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
};

// 3. Styled message using inline CSS
const StyledMessage = () => {
  const style = { color: "blue", fontSize: "20px", fontWeight: "bold" };
  return <p style={style}>This is a styled message.</p>;
};

// 4. Sum of squares of two numbers
const SumOfSquares = ({ a, b }) => {
  return <p>Sum of squares: {a * a + b * b}</p>;
};

// 5. Conditional rendering of greeting
const Greeting = ({ isMorning }) => {
  return <h1>{isMorning ? "Good Morning" : "Good Evening"}</h1>;
};

// 6. Display current day of the week
const CurrentDay = () => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return <p>Today is {days[new Date().getDay()]}</p>;
};

// 7. Check if a number is prime
const PrimeCheck = ({ number }) => {
  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  return (
    <p>
      {number} is {isPrime(number) ? "a prime number" : "not a prime number"}.
    </p>
  );
};

// 8. Temperature Converter (Class Component)
class TemperatureConverter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { celsius: "", fahrenheit: "" };
  }
  handleCelsiusChange = (e) => {
    const celsius = e.target.value;
    this.setState({
      celsius,
      fahrenheit: celsius ? (celsius * 9) / 5 + 32 : "",
    });
  };
  handleFahrenheitChange = (e) => {
    const fahrenheit = e.target.value;
    this.setState({
      fahrenheit,
      celsius: fahrenheit ? ((fahrenheit - 32) * 5) / 9 : "",
    });
  };
  render() {
    return (
      <div>
        <input
          type="number"
          value={this.state.celsius}
          onChange={this.handleCelsiusChange}
          placeholder="Celsius"
        />
        <input
          type="number"
          value={this.state.fahrenheit}
          onChange={this.handleFahrenheitChange}
          placeholder="Fahrenheit"
        />
      </div>
    );
  }
}

// 9. Reverse a string and check if it's a palindrome
const StringReverse = ({ text }) => {
  const reversed = text.split("").reverse().join("");
  const isPalindrome = text.toLowerCase() === reversed.toLowerCase();
  return (
    <p>
      Reversed: {reversed} ({isPalindrome ? "Palindrome" : "Not a Palindrome"})
    </p>
  );
};

// 10. Generate random number on button click
const RandomNumber = () => {
  const [number, setNumber] = useState(null);
  return (
    <div>
      <button onClick={() => setNumber(Math.floor(Math.random() * 100) + 1)}>
        Generate Random Number
      </button>
      {number !== null && <p>Random Number: {number}</p>}
    </div>
  );
};

// 11. Check if a year is a leap year
const LeapYearCheck = ({ year }) => {
  const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  return (
    <p>
      {year} is {isLeap ? "a leap year" : "not a leap year"}.
    </p>
  );
};

// 12. UserGreeting class component
class UserGreeting extends React.Component {
  render() {
    return <h1>Hello, Tarunika Anand!</h1>;
  }
}

// Main App Component
const App = () => {
  useEffect(() => {
    document.title = "23BCE1203"; // Set the page title
  }, []);

  return (
    <div>
      <h1>23BCE1203</h1>
      <HelloWithoutJSX />
      <HelloWithJSX />
      <HelloMessage />
      <FruitList />
      <StyledMessage />
      <SumOfSquares a={3} b={4} />
      <Greeting isMorning={true} />
      <CurrentDay />
      <PrimeCheck number={7} />
      <TemperatureConverter />
      <StringReverse text="React" />
      <RandomNumber />
      <LeapYearCheck year={2024} />
      <UserGreeting />
    </div>
  );
};

export default App;
