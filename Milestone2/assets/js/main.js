new App = new Vue({
  el: '#app',
  data: {
    albumsArray: null,
  },

  mounted() {
    axios
      .get('./api/albums-array.php')
      .then(response => {
        console.log(response);
      }).catch(error => {
        console.log(error);
      });
  }
});