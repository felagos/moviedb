import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { MediaCard } from './index';
import { castToMonthDay, slug } from '../../helpers';

import '@testing-library/jest-dom';

describe('MediaCard test', () => {
    const item = { poster_path: "imagen.jpg", original_title: "item titulo", title: "titulo", release_date: "2020-02-12", id: Date.now() };

    afterEach(cleanup);

    test('should render', () => {
        const { getByAltText, getByText } = render(<MediaCard item={item} />);

        expect(getByAltText(item.original_title)).toBeInTheDocument();
        expect(getByText(item.title)).toBeInTheDocument();
        expect(getByText(castToMonthDay(item.release_date))).toBeInTheDocument();
    });

    test('trigger push history', () => {
        const history = {
            ...createMemoryHistory(),
            push: jest.fn()
        }
        const { getByTestId } = render(
            <Router history={history}>
                <MediaCard item={item} />
            </Router>
        );
        const type = "movie";
        const url = `/detail/${type}/${slug(item.id + "-" + (item.title || item.original_name))}`;
        const card = getByTestId("card-media");

        fireEvent.click(card);

        expect(history.push).toHaveBeenCalledWith(url, { id: item.id, type });
    });

});