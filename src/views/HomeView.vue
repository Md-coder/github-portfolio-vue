<template>
  <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
  <ErrorBoundary>
    <Profile :user="user" />
  </ErrorBoundary>
</template>

<script>
import Profile from '../components/Profile.vue';
import ErrorBoundary from '../components/ErrorBoundary.vue';
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
          console.log(data.repos_url);
        });
      }
    };
    githubFetch('Md-coder');
  },
};
</script>

<style></style>
