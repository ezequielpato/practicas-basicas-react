// Estado inicial del store
export const initialState = {
  count: 0,
  showText: false
}

// Funcion reducer con sus actions
export const reducer = (state, action) =>{
  // ###### Switch form
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1, showText: state.showText }
    case 'TOGGLESHOWTEXT':
      return { count: state.count, showText: !state.showText }
    default:
      throw new Error('No action founded')
  }

  // ################## If form
  // if (action.type === 'INCREMENT') {
  //   return { count: state.count + 1, showText: state.showText }
  // }
  // if (action.type === 'TOGGLESHOWTEXT') {
  //   return { count: state.count, showText: !state.showText }
  // }
}