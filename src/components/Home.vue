<template>
  <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
  <Profile :user="user" />
</template>

<script>
import Profile from './Profile.vue';
export default {
  name: 'Home',
  components: {
    Profile,
  },

  data() {
    return {
      user: {},
    };
  },
  mounted() {
    const githubFetch = async (text) => {
      // setLoading(true);

      const response = await fetch(`https://api.github.com/users/${text}`); //task find how to use .env here

      if (response.status === 404) {
        window.location = '/notFound';
      } else {
        await response.json().then((data) => {
          // setLoading(false);
          this.user = data;
          console.log(this.user);
          // setUrl(data.repos_url);
        });
      }
    };
    githubFetch('Md-coder');
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
