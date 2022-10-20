import React, { ChangeEvent, useState } from "react";

import { Radio, RadioButton, RadioGroup } from "./components";

function App() {
  const handleChange = (value: string) => {
    const info = { selected: value };

    fetch("http://localhost:4000/test", {
      method: "POST",
      // mode: "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className='App'>
      <Radio name='test' label='Test' />

      <RadioGroup
        label='Anschlussart'
        defaultValue='wifi'
        onChange={handleChange}
      >
        <RadioButton value='accessTypeCoax' label='Kabel (KOAX)' />
        <RadioButton value='accessTypeFiber' label='Glasfaser (Fiber)' />
      </RadioGroup>
    </div>
  );
}

export default App;
