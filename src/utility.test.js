import { convert } from './utility';

describe('testing number to word converter utility function', () => {
  it('should return unit word', () => {
    expect(convert(7)).toEqual('seven');
  });
  it('should return tenth placed word', () => {
    expect(convert(42)).toEqual('forty-two');
  });
  it('should return word format of number in hundred', () => {
    expect(convert(111)).toEqual('one hundred and eleven');
  });
  it('should return word format of number in thousands', () => {
    expect(convert(2001)).toEqual('two thousand one');
  });
  it('should return word format of number in thousands and hundred', () => {
    expect(convert(17999)).toEqual(
      'seventeen thousand nine hundred and  ninety-nine'
    );
  });
});
