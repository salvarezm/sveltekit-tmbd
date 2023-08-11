<script>
    import Logo from "$lib/images/svelte-welcome.png";
    import Logo2 from "$lib/images/svelte-logo.svg"
</script>

<nav class="bg-sky-950 text-white ">
    <ul class="flex flex-row gap-5">
        <li><img src={Logo2} /></li>
        <li><a href="/movies">Peliculas</a></li>
        <li><a href="/series">Series</a></li>
        <li><a href="/person">Personas</a></li>
      </ul>
</nav>

<div class="box-border h-32 w-32 p-4 border-4 ...">
    <!-- ... -->
  </div>