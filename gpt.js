import React from "react";
import { useState } from "react";

const HomeScreen = () => {
  return (
    <div>
      <h1>Welcome to the Home Screen!</h1>
      <h0>Created by: Shaheera Kamin</h0>
    </div>
  );
};

const PersonalInfoScreen = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [birthplace, setBirthplace] = useState("");

  return (
    <div>
      <h1>Personal Information</h1>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <select id="age" value={age} onChange={(e) => setAge(e.target.value)}>
          <option value="">Select an age</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
        </select>
      </div>
      <div>
        <label htmlFor="birthplace">Birthplace:</label>
        <input
          type="text"
          id="birthplace"
          value={birthplace}
          onChange={(e) => setBirthplace(e.target.value)}
        />
      </div>
    </div>
  );
};

const App = () => {
  const [currentScreen, setCurrentScreen] = useState("home");

  const navigateTo = (screen) => {
    setCurrentScreen(screen);
  };

  return (
    <div>
      <div style={{ backgroundColor: "#f0f0f0" }}>
        <button onClick={() => navigateTo("home")}>Home</button>
        <button onClick={() => navigateTo("info")}>Info</button>
      </div>
      {currentScreen === "home" ? <HomeScreen /> : <PersonalInfoScreen />}
    </div>
  );
};

export default App;
