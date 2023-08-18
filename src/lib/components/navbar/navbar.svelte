<script>
    import Logo from "$lib/images/svelte-welcome.png";
    import Logo2 from "$lib/images/svelte-logo.svg"
</script>

<nav class="bg-sky-950 text-white ">
    <div class="container mx-auto">
        <ul class="flex flex-row gap-5 w-5/6 mx-auto">
            <li><a href="/"><img src={Logo2} alt="logo" class="w-8 h-8"/></a></li>
            <li><a href="/movies">Peliculas</a></li>
            <li><a href="/series">Series</a></li>
            <li><a href="/person">Personas</a></li>
          </ul>
    </div>
</nav>
