<div class="container py-5">
  <div class="row g-5">  
    <div class="col-3" v-for="album in albumsArray">
      <div class="card h-100">
        <img :src="album.poster" :alt="album.author" class="mx-2 mt-2">

        <div class="text-light text-center pt-3 pb-2">
          <h4>{{album.title}}</h4>
          <p>{{album.author}}</p>
          <p>{{album.year}}</p>
        </div>
      </div>
    </div>
  </div>
</div>