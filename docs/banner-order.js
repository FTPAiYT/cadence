// A shuffled bag shows each image once per round, without a repeated boundary.
((root) => {
  function createOrder(ids, first, random = Math.random) {
    const unique = [...new Set(ids)];
    function shuffle(values) {
      const result = [...values];
      for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
      }
      return result;
    }
    let last = first, bag = shuffle(unique.filter(id => id !== first));
    return () => {
      if (!unique.length) return undefined;
      if (!bag.length) {
        bag = shuffle(unique);
        if (bag.length > 1 && bag[0] === last) [bag[0], bag[1]] = [bag[1], bag[0]];
      }
      last = bag.shift();
      return last;
    };
  }
  if (typeof module === 'object' && module.exports) module.exports = createOrder;
  else root.CadenceBannerOrder = createOrder;
})(typeof window === 'undefined' ? globalThis : window);
