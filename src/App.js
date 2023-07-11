import React, { useState } from "react";
import styled from "styled-components";

const HomeButton = styled.button`
  cursor: pointer;
  background-color: #ab47bc;
  transition: ease background-color 250ms;
  color: white;
  padding: 8px 20px;
  border: none;
  border-radius: 4px;
  margin-right: 3px;
  &:hover {
    background-color: #8e24aa;
  }
`;

const InfoButton = styled.button`
  cursor: pointer;
  background-color: #ec407a;
  transition: ease background-color 250ms;
  color: white;
  padding: 8px 20px;
  border: none;
  border-radius: 4px;
  margin-right: 3px;
  &:hover {
    background-color: #d81b60;
  }
`;

function HomeScreen() {
  return (
    <div>
      <h1>Welcome to the Home Screen!</h1>
      <h0>Click the Info tab to input your Personal Information!</h0>
    </div>
  );
}

const PersonalInfoScreen = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [birthplace, setBirthplace] = useState("");

  return (
    <div>
      <h1>Personal Information</h1>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="age">Age: </label>
        <select id="age" value={age} onChange={(e) => setAge(e.target.value)}>
          <option value="">Select an age</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="21+">21+</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div>
        <label htmlFor="birthplace">Birthplace: </label>
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
      <div style={{ backgroundColor: "#b2ebf2" }}>
        <HomeButton onClick={() => navigateTo("home")}>Home</HomeButton>
        <InfoButton onClick={() => navigateTo("info")}>Info</InfoButton>
      </div>
      {currentScreen === "home" ? <HomeScreen /> : <PersonalInfoScreen />}
    </div>
  );
};

export default App;
