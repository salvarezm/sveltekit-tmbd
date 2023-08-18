import { json } from '@sveltejs/kit';
import {buildApiUrl} from '$lib/api';
import { API_URL, API_KEY } from '$env/static/private';

export async function load() { 
    const response = await fetch(buildApiUrl("movie/popular"));
    const movies:MovieList = await response.json();
    return {
        movies: movies.results
    }
}