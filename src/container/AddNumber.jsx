import AddNumber from "../components/AddNumber";
import { connect } from "react-redux";
import store from "../store";

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (size) => {
      dispatch({ type: "INCREMENT", size: size });
    },
  };
};

export default connect(null, mapDispatchToProps)(AddNumber);
