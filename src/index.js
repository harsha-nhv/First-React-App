// Import the React and React-DOM libraries
import React from 'react'
import ReactDOM from 'react-dom'

// Create React Component
const App = function() {
    const button = "Click here!!"
    return (
        <div>
            <label className="label">
                Enter Name:
            </label>
            <input id="name" type="text" />
            <button style={{backgroundColor:'blue', color:'white'}}>
                {button}
            </button>
        </div>
    )
}

// Display React component on the Screen
ReactDOM.render(
    <App />,
    document.querySelector("#root")
)