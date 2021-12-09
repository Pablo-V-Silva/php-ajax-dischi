new App = new Vue({
  el: '#app',
  data: {
    albumsArray: null,
  },

  mounted() {
    axios
      .get('./api/albums-array.php')
      .then(function (response) {
        console.log(response);
      })
  }
})