import React from 'react';
import Lane from './Lane';
import LaneActions from '../actions/LaneActions';

const Lanes = ({lanes}) => (
  <div className="lanes">
    {lanes.map(lane => (
      <Lane key={lane.id} className="lane" lane={lane} onMove={LaneActions.moveLane}/>
    ))}
  </div>
);

Lanes.propTypes = {
  lanes: React.PropTypes.array
};

Lanes.defaultProps = {
  lanes: []
};

export default Lanes;
