import React from 'react';
import { connect } from 'react-redux';
import { add } from '../actions/index';

const AdditionalFeature = props => {
  console.log('additonal feature',props )
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={()=> props.add(props.feature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(null, {add})(AdditionalFeature);
