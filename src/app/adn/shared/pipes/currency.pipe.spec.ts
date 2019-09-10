import { EcpCurrencyPipe } from './currency.pipe';

describe('Pipe: Currency (custom)', () => {
  let pipe: EcpCurrencyPipe;

  beforeEach(() => {
    pipe = new EcpCurrencyPipe();
  });

  it('should transform 999 to $999', () => {
    expect(pipe.transform(999)).toBe('$999');
  });

  it('should transform 1000 to $1k', () => {
    expect(pipe.transform(1000)).toBe('$1k');
  });

  it('should transform 10000 to $10k', () => {
    expect(pipe.transform(10000)).toBe('$10k');
  });

  it('should transform 12000 to $12k', () => {
    expect(pipe.transform(12000)).toBe('$12k');
  });

  it('should transform 100000 to $100k', () => {
    expect(pipe.transform(100000)).toBe('$100k');
  });

  it('should transform 1000000 to $1M', () => {
    expect(pipe.transform(1000000)).toBe('$1M');
  });

  it('should transform 10000000 to $10M', () => {
    expect(pipe.transform(10000000)).toBe('$10M');
  });

  it('should transform 100000000 to $100M', () => {
    expect(pipe.transform(100000000)).toBe('$100M');
  });

  it('should transform 1000000000 to $1B', () => {
    expect(pipe.transform(1000000000)).toBe('$1B');
  });

  it('should transform 1000000000 to $100B', () => {
    expect(pipe.transform(100000000000)).toBe('$100B');
  });

  it('should transform 10000000000 to $1T', () => {
    expect(pipe.transform(1000000000000)).toBe('$1T');
  });

  it('should throw with invalid input', () => {
    expect(() => pipe.transform(undefined)).toThrow();
    expect(() => pipe.transform(null)).toThrow();
    expect(() => pipe.transform(null)).toThrowError('Input must be a number');
  });
});
