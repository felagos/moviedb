import { countMedias } from './helpers';

describe('helpers test', () => {
    
    test('countMedias test', () => {
        const data = [
            {media_type: "movie"},
            {media_type: "movie"},
            {media_type: "tv"}
        ]; 
        const results = countMedias(data);
        expect(results.totalMovies).toEqual(2);
        expect(results.totalTvShows).toEqual(1);
    });   
    
    test('countMedias test - with type movie', () => {
        const data = [
            {media_type: ""},
            {media_type: ""},
            {media_type: ""}
        ]; 
        const results = countMedias(data, "movie");
        expect(results.totalMovies).toEqual(3);
    }); 
    
    test('countMedias test - with type tv', () => {
        const data = [
            {media_type: ""},
            {media_type: ""},
            {media_type: ""}
        ]; 
        const results = countMedias(data, "tv");
        expect(results.totalTvShows).toEqual(3);
    }); 
    
});
