import { buildApiUrl } from '$lib/api';
import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const { movieId } = params;
    const response = await fetch(buildApiUrl(`movie/${movieId}`));
    const movie:Movie = await response.json();
    console.log(movie)
    return movie;
}