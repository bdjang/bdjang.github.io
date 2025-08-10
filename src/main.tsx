import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'

// 8.10.25: TypeScript requires you to check that rootElement is not null before using it. Makes code safer and type-correct
const rootElement = document.getElementById('root');

if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
    )
}