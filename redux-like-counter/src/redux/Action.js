import { DECREMENT, INCREMENT } from "./ActionType";

export const incrementLike = () => {
    return { type: INCREMENT };
};

export const decrementLike = () => {
    return { type: DECREMENT };
};