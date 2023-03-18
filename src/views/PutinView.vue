<template>
  <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
  <div></div>
</template>

<script>
export default {
  name: 'Putin',

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
    githubFetch('Putinnnssssssz');
  },
};
</script>

<style></style>
