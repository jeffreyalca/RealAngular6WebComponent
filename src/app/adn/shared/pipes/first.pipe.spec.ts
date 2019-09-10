import { FirstPipe } from '@app/shared/pipes/first.pipe';

describe('Pipe: First', () => {
  let pipe: FirstPipe;

  beforeEach(() => {
    pipe = new FirstPipe();
  });

  it('should return the first value of an array', () => {
    expect(pipe.transform([1, 2, 3])).toBe(1);
    expect(pipe.transform([])).toBeUndefined();
  });

  it('should return original value if invalid param is given', () => {
    expect(pipe.transform('some string')).toBe('some string');
    expect(pipe.transform(1)).toBe(1);
    expect(pipe.transform(null)).toBeNull();
    expect(pipe.transform(undefined)).toBeUndefined();
  });
});
