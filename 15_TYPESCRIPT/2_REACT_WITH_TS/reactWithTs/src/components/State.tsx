import React, { useState, ChangeEvent } from "react";

const State = () => {
  const [text, setText] = useState<string | number | null>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <hr />     
        <h1>State</h1>
        <p>O texto é: {text}</p>
        <input type="text" onChange={handleChange} />            
    </div>
  );
};

export default State;