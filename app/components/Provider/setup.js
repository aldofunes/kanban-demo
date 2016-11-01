import storage from '../../libs/storage';
import persist from '../../libs/persist';
import NoteStore from '../../stores/NoteStore';
import LaneStore from '../../stores/LaneStore';

const setup = (alt) => {
  alt.addStore('NoteStore', NoteStore);
  alt.addStore('LaneStore', LaneStore);

  persist(alt, storage(localStorage), 'app');
};

export default setup;
