<script>
    import "../app.css";
    import Navbar from "$lib/components/navbar/navbar.svelte";
</script>


<Navbar />

<div class="container mx-auto w-11/12 py-2">
    <slot />
</div>

