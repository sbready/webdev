import React, { useContext, useReducer } from 'react';

const ThemeContext = React.createContext('dark');

const Hooks = props => {
    const [state, dispatch] = useReducer((state, action) => {
        switch (type) {
            case value:
                
                break;
        
            default:
                break;
        }
    })

    return (
        <ThemeContext.Provider value={{state, dispatch}}>
            <Component />
        </ThemeContext.Provider>
    )
}

const DiffComponent = () => {
    const {state, setState} = useContext(ThemeContext);

    return (
        <button className={state} onClick={() => setState('.light-mode')}>Dark</button>
    )
}