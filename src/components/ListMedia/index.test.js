import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { ListMedia } from './index';

import '@testing-library/jest-dom';

const title = "titulo";
const mediasMovies = [
    { poster_path: "", original_title: "Movie", title: "Movie", release_date: "2020-02-12" },
    { poster_path: "", original_title: "Movie 2", title: "Movie 2", release_date: "2020-02-15" }
];
const mediasIframes = [
    { name: "nombre", key: "" },
    { name: "nombre 2", key: "" }
];

describe('ListMedia Test', () => {

    beforeEach(cleanup);

    test('render - type movies', () => {
        const { getByText, getAllByTestId } = render(<ListMedia data={mediasMovies} title={title} type="movie" />);
        const h2 = getByText(new RegExp(title), "i");
        const cards = getAllByTestId("card-media");

        expect(h2).toBeInTheDocument();
        expect(cards.length).toEqual(mediasMovies.length);
    });

    test('render - type iframe', () => {
        const { getByText, container } = render(<ListMedia data={mediasIframes} title={title} type="iframes" />);
        const h2 = getByText(new RegExp(title), "i");
        const iframes = container.querySelectorAll("iframe");

        expect(h2).toBeInTheDocument();
        expect(iframes.length).toEqual(mediasIframes.length);
    });

    test('render - empty', () => {
        const { getByText } = render(<ListMedia data={[]} title={title} type="movie" />);
        const text = getByText(/No se encontraron resultados/i);

        expect(text).toBeInTheDocument();
    });

});
