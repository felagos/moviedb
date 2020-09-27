import { useForm } from './useForm';
import { renderHook, act } from '@testing-library/react-hooks'

describe('userForm test', () => {

    const initialState = {
        search: ""
    };

    test('test initial state', () => {
        const { result } = renderHook(() => useForm(initialState));
        const [value] = result.current;
        expect(value).toEqual(initialState);
    });

    test('test change state', () => {
        const { result } = renderHook(() => useForm(initialState));
        const [, handleChange] = result.current;

        act(() => {
            const evt = {
                target: { name: "search", value: "busqueda" }
            };
            handleChange(evt);
        });

        const [value] = result.current;
        expect(value).toEqual({ search: "busqueda" });
    });

});
