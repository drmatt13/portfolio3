import store from '../store';

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
}
