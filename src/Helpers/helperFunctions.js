import { BOARD_SPECS } from "./gameConstants"
/* COORDINATE CONVERSIONS */
export function coordToIndex({y, x}) {
    return BOARD_SPECS.WIDTH * y + x;
}

export function indexToCoord(idx) {
    const y = Math.floor(idx / BOARD_SPECS.WIDTH);
    const x = idx % BOARD_SPECS.WIDTH;
    return {y, x};
}