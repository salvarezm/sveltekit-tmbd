<script lang="ts">
    export let movie:MovieBrief;
    import { goto } from '$app/navigation';
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="bg-white flex w-full my-4 h-36 rounded overflow-hidden shadow-md" on:click={() => {goto(`/movies/${movie.id}`)}}>
    <img class="" src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`} alt="Movie Poster"/>
    <div class="pt-4 px-2">
        <h2 class="font-semibold">{movie.title}</h2>
        <span class="font-light">{movie.release_date}</span>

        <p class="text-xs pt-4">{movie.overview.substring(0, 100)}...</p>
    </div>
</div>