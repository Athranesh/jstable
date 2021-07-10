import { useState } from 'react';

const App = () => {
  const [input, setInput] = useState('');
  const [code, setCode] = useState('');

  const onClick = () => {
    console.log(input);
  };

  return (
    <div>
      <textarea onChange={(e) => setInput(e.target.value)} />
      <div>
        <button onClick={onClick}>Submit</button>
      </div>

      <pre>{}</pre>
    </div>
  );
};

export default App;
