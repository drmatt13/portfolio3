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
{'js': `const initialState = {
  navOpen: false,
  logoTransparent: false,
  miniSocial: false,
  about: false,
  background: 0
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'OPEN_NAV':
      if (!state.navOpen) return { ...state, navOpen: true }
      return state;
    case 'CLOSE_NAV':
      if (state.navOpen) return { ...state, navOpen: false }
      return state;
    case 'IS_TRANSPARENT':
      return {
        ...state,
        navOpen: false,
        logoTransparent: true
      }
    case 'IS_NOT_TRANSPARENT':
      return {
        ...state,
        navOpen: false,
        logoTransparent: false
      }
    case 'SELECT_BACKGROUND':
      return {
        ...state,
        background: action.payload
      }


    default:
      return state;
  }
}`}
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
{'js': `import { combineReducers } from 'redux'
import globalReducer from './globalReducer'

export default combineReducers({
  global: globalReducer
});`}
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
{'js': `import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import combineReducers from './reducers/combineReducers'

const initialState = {};

const middleware = [thunk];

const store = createStore(
  combineReducers, 
  initialState, 
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;`}
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
{'js': `import store from '../store';

export const openNav = () => {
  store.dispatch({
    type: 'OPEN_NAV'
  });
}

export const closeNav = () => {
  store.dispatch({
    type: 'CLOSE_NAV'
  });
}

export const logoTransparent = (bool) => {
  if (bool) {
    store.dispatch({
      type: 'IS_TRANSPARENT'
    });
  } else {
    store.dispatch({
      type: 'IS_NOT_TRANSPARENT'
    });
  }
}

export const selectBackground = (i) => {
  store.dispatch({
    type: 'SELECT_BACKGROUND',
    payload: i
  });
}`}
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
{'js': `import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store} >
      <Component />
    </Provider>
  )
}`}
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
{'js': `import { memo } from 'react';

//redux
import { connect } from 'react-redux';

const Component = memo(({global: {navOpen, logoTransparent, background}}) => {

  return (
    <>
      component
    </>
  )
});

const mapStateToProps = state => ({
  global: state.global
});

export default connect(mapStateToProps)(Component);`}
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
{'js': `import { useEffect } from 'react';

//redux
import { openNav, closeNav, selectBackground } from '../../actions/globalActions';

const Component = () => {

  useEffect(() => {
    openNav();
  }, []);

  return (
    <>
      component
    </>
  )
});

export default Component;`}
],
// output
[],
//render
{'render': false}
],

];

module.exports = data;