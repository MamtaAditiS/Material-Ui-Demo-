<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <div class="row gallery" v-show="$upload.dropzone('product-gallery').active">
      <span class="text-span"> Drop files anywhere here to begin upload. </span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'upload',
  data () {
    return {
      msg: 'Welcome to Vue.js File Uploader'
    }
  },
  created : function () {
  }
}
</script>


<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.row.gallery {
  display: block !important;
  background-color: aliceblue;
  height: 250px;
  border-radius: 50px;
  position: relative;
}

.text-span {
  position: absolute;
    left: 450px;
    top: 100px;
  
}

</style>
