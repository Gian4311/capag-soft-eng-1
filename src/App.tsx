import React from 'react';
import logo from './logo.svg';
import './css/main.css';
import './css/App.css';
import "./css/grid.css"
    
function App() {

    return <>
        <nav className="grid">
            <section><img src="assets/img/logo.png"/></section>
            <button>Button</button>
            <button>Button</button>
            <button>Button</button>
        </nav>
        <main className="grid">
            <section>q</section>
            <section>f</section>
            <section>e</section>
        </main>
    </>;

}

export default App;
