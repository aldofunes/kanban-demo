import alt from '../libs/alt';

const LaneActions = alt.generateActions('create', 'update', 'delete', 'attachToLane', 'detachFromLane', 'moveNote', 'moveLane');

export default LaneActions;