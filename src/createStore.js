export default function createStore(reducer){
  let state;
  let listeners = [];

  function getState(){
    return state || reducer(undefined,{type:'default'});
  }

  function subscribe(callback){
    callback();
  }

  function dispatch(action) {
    state = reducer(state,action);
  }

  return {
    getState: getState,
    subscribe: subscribe,
    dispatch: dispatch
  }
}
