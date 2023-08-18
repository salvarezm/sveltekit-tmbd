<script lang="ts">
    export let movie:Movie;
</script>

<div class="bg-white flex w-full my-4 h-36 rounded overflow-hidden shadow-md">
    <img class="" src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`} alt="Movie Poster"/>
    <div class="pt-4 px-2">
        <h2 class="font-semibold">{movie.title}</h2>
        <span class="font-light">{movie.release_date}</span>

        <p class="text-xs pt-4">{movie.overview.substring(0, 100)}...</p>
    </div>
</div>