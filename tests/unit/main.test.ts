import { hello } from '../../src/main';

describe('hello', () => {
    it('should be a function', () => {
        expect(hello).toBeInstanceOf(Function);
    });
    it('should result in hello world', () => {
        expect(hello()).toEqual('Hello world');
    });
});
