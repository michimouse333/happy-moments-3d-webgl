/**
 * @file src/utils/animationUtils.ts
 * @description This module provides utility functions for animation calculations.
 */

/**
 * @namespace animationUtils
 * @description Contains utility functions for animation calculations.
 */
export const animationUtils = {
  /**
   * Linearly interpolates between two values based on a progress value.
   *
   * @param {number} progress - The progress of the animation (0 to 1).
   * @param {number} startValue - The starting value.
   * @param {number} endValue - The ending value.
   * @returns {number} The interpolated value.  Returns startValue if any input is invalid.
   *
   * @example
   * // Returns 50
   * animationUtils.interpolate(0.5, 0, 100);
   *
   * @example
   * // Returns 25
   * animationUtils.interpolate(0.25, 0, 100);
   */
  interpolate: (function () {
    const memo: {
      progress?: number;
      startValue?: number;
      endValue?: number;
      result?: number;
    } = {};

    return function (
      progress: number,
      startValue: number,
      endValue: number
    ): number {
      if (
        typeof progress !== 'number' ||
        typeof startValue !== 'number' ||
        typeof endValue !== 'number'
      ) {
        console.error(
          'Invalid input: progress, startValue, and endValue must be numbers. Returning startValue.'
        );
        return startValue;
      }

      if (progress < 0 || progress > 1) {
        console.warn(
          'Progress value is outside the range of 0 to 1. Clamping to the range.'
        );
        progress = Math.max(0, Math.min(1, progress));
      }

      if (
        memo.progress === progress &&
        memo.startValue === startValue &&
        memo.endValue === endValue &&
        memo.result !== undefined
      ) {
        return memo.result;
      }

      const interpolatedValue = startValue + (endValue - startValue) * progress;

      memo.progress = progress;
      memo.startValue = startValue;
      memo.endValue = endValue;
      memo.result = interpolatedValue;

      return interpolatedValue;
    };
  })(),
};