require('../src/data.js');



describe('filterType', () => {
  it('is a function', () => {
    expect(typeof example.filterType).toBe("function");
  });
  it('returns `filterType`', () => {
    expect(example.filter()).toBe("filterType");
  });
});

describe('sortData', () => {
  it('is a function', () => {
    expect(typeof example.sortData).toBe("function");
  });
  it('returns `sortData`', () => {
    expect(example.order()).toBe("sortData");
  });
});

describe('statistics', () => {
  it('is a function', () => {
    expect(typeof example.statistics).toBe("function");
  });
  it('returns `statistics`', () => {
    expect(example.statistics()).toBe("statistics");
  });
});
