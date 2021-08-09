import { createStore } from "redux";

export default createStore((state, action) => {
  //state값이 undefined 라는건 최초의 값이 아직 정의되어있지 않은상태를 말합니다. 즉 최초의 실행입니다.
  if (state === undefined) {
    return { number: 0 };
  }
  if (action.type === "INCREMENT") {
    return { ...state, number: state.number + Number(action.size) };
  }
  return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
