const persist = (alt, storage, storageName) => {
  try {
    alt.bootstrap(storage.get(storageName));
  }
  catch (error) {
    console.error('Failes to bootstrap data', error);
  }

  alt.FinalStore.listen(() => {
    if (!storage.get('debug')) {
      storage.set(storageName, alt.takeSnapshot());
    }
  });
};

export default persist;
