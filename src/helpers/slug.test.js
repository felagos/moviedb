import slugify from 'slugify';
import { slug } from './slug';

describe("slug helper", () => {

    test('generate slug url', () => {
        const slugUrl = slug("text", "-");
        const expected = slugify("text", "-");
        expect(slugUrl).toEqual(expected);
    });

});