const DEFAULTVALUE = {
  champs: [],
  isFetch: true,
};

const data = (state = DEFAULTVALUE, action) => {
  switch (action.type) {
    case 'REQUEST':
      return {
        ...state,
        isFetch: true,
      };
    case 'SUCCESS': {
      return {
        champs: action.data,
        isFetch: true,
      };
    }
    case 'RESULTS': {
      return {
        ...state,
        champs: action.champs,
        isFetch: false,
      };
    }
    default: return state;
  }
};

export default data;
