<script>
    export let data
    import Moviebadge from "$lib/components/moviebadge/moviebadge.svelte";
    import { Button } from 'flowbite-svelte';

    console.log(data);
</script>

{#each data.movies as movie}
    <Moviebadge movie={movie} />
{/each}

<Button color="blue" class="w-full">Load More...</Button>
