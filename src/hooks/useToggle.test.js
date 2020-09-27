import { useToggle } from './useToggle';
import { renderHook, act } from '@testing-library/react-hooks'

describe('userForm test', () => {

    const initialState = false;

    test('test initial state', () => {
        const { result } = renderHook(() => useToggle(initialState));
        const [value] = result.current;
        expect(value).toBeFalsy();
    });

    test('handle open', () => {
        const { result } = renderHook(() => useToggle(initialState));
        const [, handleOpen] = result.current;

        act(() => {
            handleOpen();
        });

        const [value] = result.current;
        expect(value).toBeTruthy();
    });

    test('handle close', () => {
        const { result } = renderHook(() => useToggle(initialState));
        const [, , handleClose] = result.current;

        act(() => {
            handleClose();
        });

        const [value] = result.current;
        expect(value).toBeFalsy();
    });


});
