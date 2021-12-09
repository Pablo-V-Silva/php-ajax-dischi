const app = new Vue({
  el: '#app',
  data: {
    albumsArray: null,
  },

  mounted() {
    axios
      .get('./api/albums-array.php')
      .then(response => {
        this.albumsArray = response.data;

        console.log(this.albumsArray);
      }).catch(error => {
        console.log(error);
      });

  }
})