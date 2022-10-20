import React, { ChangeEvent, useState } from "react";

import { Radio, RadioButton } from "./components";
import { RadioGroupRebuild } from "./components/RadioGroup";

function App() {
  const [value, setValue] = useState<string>("english");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log("event: ", event.target.name, event.target);
    setValue(event.target.name);
  };

  return (
    <div className='App'>
      <RadioButton name='test' label='Test' />
      <Radio />
      <RadioGroupRebuild />
    </div>
  );
}

export default App;
