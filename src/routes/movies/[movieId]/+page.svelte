<script lang="ts">
    export let data:Movie;
</script>

<div class="w-full h-48" style={`background-repeat: no-repeat;background-size: cover;background-position: calc((((100vw / 2.222222) - 20px) / 1.5) / 2) 0;background-image: url(https://www.themoviedb.org/t/p/w1000_and_h450_multi_faces${data.backdrop_path});`}>
    <div class="w-full h-full" style="background-image: linear-gradient(to right, rgba(52.5, 178.5, 220.5, 1) 20%, rgba(52.5, 178.5, 220.5, 0) 50%);">
        <div class="p-4">
            <img class="relative w-24 h-34 " src={`https://www.themoviedb.org/t/p/w220_and_h330_face${data.poster_path}`} alt="movie logo" />
        </div>
    </div>
</div>