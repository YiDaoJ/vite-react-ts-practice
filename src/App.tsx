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
      {/* <Radio name='testD' label='Test Disabled' disabled /> */}

      <RadioGroup
        label='Anschlussart'
        defaultValue='accessTypeCoax'
        onChange={handleChange}
        horizontal
      >
        <RadioButton value='accessTypeCoax' label='Kabel (KOAX)' />
        <RadioButton value='accessTypeFiber' label='Glasfaser (Fiber)' />
        <RadioButton value='accessUndefined' label='Test Disabled' disabled />
      </RadioGroup>
    </div>
  );
}

export default App;
