import React, { useState } from "react";
import { connect } from "react-redux";
import { addFeature } from "../actions/index.js";
import { Button } from "shards-react";
const AdditionalFeature = props => {
  return (
    <li className="list-item">
      {/* Add an onClick that will let you add a feature to your car */}
      <Button
        onClick={() => {
          props.addFeature({
            id: props.feature.id,
            name: props.feature.name,
            price: props.feature.price
          });
        }}
      >
        Add
      </Button>
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
