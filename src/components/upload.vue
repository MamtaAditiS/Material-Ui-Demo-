<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-bind:style="{ color : 'grey' }">
        <Dropzone/>
    </div>
    <button class="btn btn-success">Upload Files</button>

  </div>
</template>

<script>
import Dropzone from 'react-dropzone'
export default {
  name: 'upload',
  data () {
    return {
      msg: 'Welcome to Vue.js File Uploader'
    }
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
</style>
