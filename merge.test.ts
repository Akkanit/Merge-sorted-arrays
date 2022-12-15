import { merge } from './merge'; // Import the component you want to test

describe('merge', () => {
    it('should merge two sorted arrays with shuffles', () => {
      const arr1 = [1, 3, 5, 7];
      const arr2 = [2, 4, 6, 8];
      const expectedResult = [1, 2, 3, 4, 5, 6, 7, 8];
      expect(merge(arr1, arr2)).toEqual(expectedResult);
    });
    it('should merge two sorted arrays with no shuffles', () => {
        const arr1 = [1, 2, 3, 4];
        const arr2 = [5, 6, 7, 8];
        const expectedResult = [1, 2, 3, 4, 5, 6, 7, 8];
        expect(merge(arr1, arr2)).toEqual(expectedResult);
    });
    it('should merge two equal sorted arrays', () => {
        const arr1 = [1, 2, 3, 4];
        const arr2 = [1, 2, 3, 4];
        const expectedResult = [1, 1, 2, 2, 3, 3, 4, 4];
        expect(merge(arr1, arr2)).toEqual(expectedResult);
    });
    it('should merge two sorted arrays with negative values included', () => {
        const arr1 = [-10, 5, 5, 8];
        const arr2 = [-8, 6, 6, 8];
        const expectedResult = [-10, -8, 5, 5, 6, 6, 8, 8];
        expect(merge(arr1, arr2)).toEqual(expectedResult);
    });
    it('should merge two sorted arrays with unequal length', () => {
        const arr1 = [-10, -9, -8, -7, -3];
        const arr2 = [-6, -2, 1];
        const expectedResult = [-10, -9, -8, -7, -6, -3, -2, 1];
        expect(merge(arr1, arr2)).toEqual(expectedResult);
    });
  });