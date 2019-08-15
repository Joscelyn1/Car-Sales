import React from "react";
import { connect } from "react-redux";
import { removeFeature } from "../actions/index.js";
import { Button } from "shards-react";

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <Button
        theme="danger"
        onClick={() => {
          props.removeFeature({
            id: props.feature.id,
            name: props.feature.name,
            price: props.feature.price
          });
        }}
      >
        X
      </Button>
      {props.feature.name}
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
  { removeFeature }
)(AddedFeature);
