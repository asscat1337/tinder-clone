import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./store/store";


const container = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(container)

root.render(
    <Provider store={store}>
        <App/>
    </Provider>
)

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
