import React from 'react';

import './App.css';
import CurrentTime from './components/CurrentTime';

function App() {
    return (
        <>
            <header className='App'>
                <h1>Alarm App</h1>
            </header>
            <section>
                <CurrentTime />
            </section>
        </>
    );
}

export default App;
