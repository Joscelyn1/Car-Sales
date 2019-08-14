import React, { useState } from "react";
import { connect } from "react-redux";
import { addFeature } from "../actions/index.js";
const AdditionalFeature = props => {
  const [feature, setFeature] = useState();
  console.log(props, "additionalfeature props");
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        onClick={() => {
          props.addFeature(feature);
          setFeature("");
        }}
        className="button"
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car,
    additionalPrice: state.additionalPrice,
    store: state.store
  };
};

export default connect(
  mapStateToProps,
  { addFeature }
)(AdditionalFeature);
