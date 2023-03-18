<template>
  <div>
    <h1 style="color: black; display: block">!Oops Page Not Found</h1>
    <router-link to="/">
      <button class="button btnYellow">Home</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>

<style>
.button {
  /* Green */
  border: 2px;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin-right: 1rem;
  font-size: 16px;
  color: rgb(1, 65, 25);
}
.btnYellow {
  background-color: rgb(247, 247, 31);
  color: black;
}
</style>
