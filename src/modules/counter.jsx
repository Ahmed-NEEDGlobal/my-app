"use client";
import React, { useState } from "react";

const CounterModule = ({ setList }) => {
  const [show, setShow] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [counter, setCounter] = useState(0);
  const [activeTab, setActiveTab] = useState(1);

  function increment() {
    setCounter((prev) => prev + 1);
    console.log();
  }

  function decrement() {
    if (counter > 0) {
      setCounter(counter - 1);
      console.log("dec");
    }
  }

  console.log(firstName);
  console.log(counter);

  const onSubmit = (e) => {
    e.preventDefault();
    setList((list) => [...list, firstName]);
    setFirstName("");
  };

  return (
    <div className="flex flex-col container max-w-xl mx-auto" id="firstName">
      <button onClick={() => setShow(!show)}>Switch</button>

      <form onSubmit={onSubmit}>
        {show ? (
          <input
            placeholder="First Name"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        ) : null}
        <button>Submit</button>
      </form>
      <p>Output: </p>
      <div>First Name: {firstName}</div>
      <div className="bg-white p-4 shadow-2xl border rounded-md">
        <div className="flex space-x-2">
          <button onClick={() => setActiveTab(1)}>Tab 1</button>
          <button onClick={() => setActiveTab(2)}>Tab 2</button>
          <button onClick={() => setActiveTab(3)}>Tab 3</button>
        </div>
        {activeTab === 1 ? (
          <div>Tab 1 Content</div>
        ) : activeTab === 2 ? (
          <div>Tab 2 Content</div>
        ) : activeTab === 3 ? (
          <div>Tab 3 Content</div>
        ) : null}
      </div>
    </div>
  );
};

export default CounterModule;
