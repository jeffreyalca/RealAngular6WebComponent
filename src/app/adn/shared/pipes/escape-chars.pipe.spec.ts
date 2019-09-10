import { EscapeCharsPipe } from './escape-chars.pipe';

describe('Pipe: Escape Chars', () => {
  let pipe: EscapeCharsPipe;

  beforeEach(() => {
    pipe = new EscapeCharsPipe();
  });

  it('should escape special characters', () => {
    expect(pipe.transform('string!@#$%ˆˆ*()[]/><')).toBe(
      'string!@#\\$%ˆˆ\\*\\(\\)\\[\\]\\/><',
    );
  });

  it('should work with empty strings', () => {
    expect(pipe.transform('')).toBe('');
  });

  it('should throw with invalid value', () => {
    expect(() => pipe.transform(undefined)).toThrow();
    expect(() => pipe.transform(null)).toThrow();
    expect(() => pipe.transform(null)).toThrowError('Input must be a string.');
  });
});
