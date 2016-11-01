const storage = (storage) => ({
  get(key) {
    try {
      return JSON.parse(storage.getItem(key));
    }
    catch (error) {
      return null;
    }
  },
  set(key, value) {
    storage.setItem(key, JSON.stringify(value));
  }
});

export default storage;