const initialState = {
    token: null,
    userName: null,
    isAuthenticated: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        'isAuthenticated': true,
        'token': action.payload.token,
        'userName': action.payload.userName
      };
    case 'LOGOUT_USER':
      return {
        ...state,
        'isAuthenticated': false,
        'token': null,
        'userName': null
      };
    default:
      return state;
  }
};
