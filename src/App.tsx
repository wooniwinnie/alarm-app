import React from 'react';

import './App.css';
import AlarmTime from './components/AlarmTime';
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
            <section>
                <AlarmTime />
            </section>
        </>
    );
}

export default App;
