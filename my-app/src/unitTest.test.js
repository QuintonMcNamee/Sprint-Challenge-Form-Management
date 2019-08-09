import { iHateThisProject } from './unitTest';

describe('unitTest', () => {
  describe('iHateThisProject', () => {
    it('should return the sum of 2 numbers', () => {
      //expect
      expect(iHateThisProject(1, 2)).toBe(3);
    });
  });
});
