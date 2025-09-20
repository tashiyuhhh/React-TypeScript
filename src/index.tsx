import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Connect React app to <div id="root"></div> in index.html
const root = ReactDOM.createRoot(
document.getElementById('root') as HTMLElement
);
root.render(
<React.StrictMode>
<App />
</React.StrictMode>
);
