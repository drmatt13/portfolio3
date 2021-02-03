// replace `${i}` --> \`   \$   {i}   \`

const data = [

// card ----------------------------------------------------- >
[
//html
[],
//css
[],
//js
[
{'js': `import { createContext } from 'react';

const Context = createContext();

export default Context;`
}
],
// output
[],
//render
{'render': false}
],

// card ----------------------------------------------------- >
[
//html
[],
//css
[],
//js
[
{'js': `import { useReducer, useCallback } from 'react';

// import context
import Context from "./Context";

// define reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'OPEN':
      return {
        navOpen: true
      };
    default:
      return state;
  }
}

const State = props => {

  const initialState = {
    logoTransparent: false,
    navOpen: false,
    miniSocial: false,
    about: false
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const openNav = useCallback(
    () => {
      dispatch({type: 'OPEN'});
    },
    [],
  )

  //return provider
  return (
    <Context.Provider value={{
      state,
      openNav
    }}>
      { props.children }
    </Context.Provider>
  );
}

export default State;`
}
],
// output
[],
//render
{'render': false}
],


// card ----------------------------------------------------- >
[
//html
[],
//css
[],
//js
[
{'js': `// context
import State from './context/State'

const App = () => {

  return (
    <State>
      <Component />
    </State>
  )
}

export default App;`
}
],
// output
[],
//render
{'render': false}
],


// card ----------------------------------------------------- >
[
//html
[],
//css
[],
//js
[
{'js': `import { useContext } from 'react';

import Context from '../../context/Context';

const Component = () => {

  //initialize context
  const {state: {navOpen}} = useContext(Context);

  return (
    <>
      component
    </>
  )
}

export default Component;`
}
],
// output
[],
//render
{'render': false}
],


];

module.exports = data;