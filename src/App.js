import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Form from './components/Form';

function App() {

    // We destructure useState function into "state" and "setState" variables using destructuring notation for dictionaries
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });


    return (
        <div className="App bg-light">
            {/* Setting a grid system on Bootstrap to horizontally center the Form and Results components */}
            <div className ="row justify-content-center">
                <div className="col-4">
                    {/* For the Form component we pass "state" and "setState" variables into the props attributes "inputs" and "setInputs" */}
                    <Form inputs={state} setInputs={setState}></Form>
                </div>
            </div>
        </div>
    );
}

export default App;
