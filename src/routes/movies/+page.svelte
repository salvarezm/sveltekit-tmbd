<script>
    export let data
    import Moviebadge from "$lib/components/moviebadge/moviebadge.svelte";

    console.log(data);
</script>

{#each data.movies as movie}
    <Moviebadge movie={movie} />
{/each}

