// Import the React and React-DOM libraries
import React from 'react'
import ReactDOM from 'react-dom'

// Create React Component
const App = function() {
    return (
        <div>
            <label>
                Enter Name:
            </label>
            <input id="name" type="text" />
            <button style={{backgroundColor:'blue', color:'white'}}>Submit</button>
        </div>
    )
}

// Display React component on the Screen
ReactDOM.render(
    <App />,
    document.querySelector("#root")
)