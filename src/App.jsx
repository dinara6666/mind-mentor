import React from 'react';
import Hero from './components/hero/Hero';
import Card from './components/card/Card';
import Hero2 from './components/hero2/Hero2';

const App = () => {
    return (
        <div>
            <div>
                <Hero/>
                <Card/>
                <Hero2/>
            </div>
        </div>
    );
};

export default App;