<template>
  <Profile :user="user" />
</template>

<script>
import Profile from '../components/Profile.vue';
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

      const response = await fetch(`https://api.github.com/users/${text}`);

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
