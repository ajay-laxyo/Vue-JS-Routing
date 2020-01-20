<template>
  <div id="margin-shift">
    <div style="background-color: cyan" align="center">
    	<h2> Our Blogs </h2>
    	<h3> this is aur Blogs </h3>
    </div>
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/vue-resource@1.5.1"></script>
<script>
export default {
  data () {
    return {
      msg: 'Welcome this is home page '
    }
  },
  created(){
  	this.$http.get("http://jsonplaceholder.typicode.com/posts").then(function(response){
  		console.log(response);
  	});
  }
}
</script>

<style>

</style>
