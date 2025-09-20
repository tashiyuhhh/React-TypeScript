import React from 'react';
import MyButton from './MyButton';
function App() {
return (
<div style={{ padding: '20px' }}>
<h1>Hello React + TypeScript!</h1>
<MyButton title="Click Me" />
<MyButton title="Disabled Button" disabled={true} />
</div>
);
}
export default App;