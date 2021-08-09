import DisplayNumber from "../components/Display";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  number: state.number,
});

const mapDispatchToProps = () => {};

export default connect(mapStateToProps)(DisplayNumber);

// export default function () {
//   const [number, setNumber] = useState("0");

//   //store가 변할 때마다 호출합니다.
//   //store의 number 값을 setNumber로 getState를 이용해 받아옵니다.
//   //(getState는 현재 state를 호출하는 store 내장함수입니다.
//   store.subscribe(() => {
//     setNumber(store.getState().number);
//   });
//   return <DisplayNumber number={number} />;
// }
