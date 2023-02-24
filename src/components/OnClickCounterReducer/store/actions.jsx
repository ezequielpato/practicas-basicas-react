export const initialState = {
  count: 0
}

export const reducer = (state, action) => {
  switch(action.type){
    case 'INCREMENT':
      return { count: state.count + action.payload }
    case 'DECREMENT':
      return { count: state.count - action.payload }
    case 'RESET':
      return { count: state.count = 0 }
    default:
      throw new Error('No action founded')
  }
}