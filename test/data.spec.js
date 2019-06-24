require('../src/data.js');


describe('example', () => {
  it('is a function', () => {
    expect(typeof example.example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example.example()).toBe('example');
  });
});

describe('filter', () => {
  it('is a function', () => {
    expect(typeof example.filter).toBe("function");
  });
  it('returns `filter`', () => {
    expect(example.filter()).toBe("filter");
  });
});

describe('order', () => {
  it('is a function', () => {
    expect(typeof example.order).toBe("function");
  });
  it('returns `filter`', () => {
    expect(example.order()).toBe("order");
  });
});

describe('statistics', () => {
  it('is a function', () => {
    expect(typeof example.statistics).toBe("function");
  });
  it('returns `filter`', () => {
    expect(example.statistics()).toBe("statistics");
  });
});
