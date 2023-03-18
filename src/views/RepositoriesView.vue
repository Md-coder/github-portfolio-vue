<template>
  <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
  <div class="repositories">
    <RepoList :repos="repos" />
  </div>
</template>

<script>
import RepoList from '../components/Repolist.vue';
export default {
  name: 'RepositoriesView',
  components: {
    RepoList,
  },

  data() {
    return {
      repos: [],
    };
  },
  mounted() {
    const githubFetch = async (text) => {
      // setLoading(true);

      const response = await fetch(`https://api.github.com/users/Md-coder/repos`); //task find how to use .env here

      if (response.status === 404) {
        window.location = '/notFound';
      } else {
        await response.json().then((data) => {
          // setLoading(false);
          this.repos = data;
          console.log(this.repos);
          // setUrl(data.repos_url);
        });
      }
    };
    githubFetch();
  },
};
</script>

<style></style>
