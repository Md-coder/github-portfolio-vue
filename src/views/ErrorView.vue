<template>
  <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
  <div></div>
</template>

<script>
export default {
  name: 'ErrorPage',

  mounted() {
    const githubFetch = async (text) => {
      setLoading(true);
      const response = await fetch(`${GITHUB_URL}/users/${text}`, {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      });

      if (response.status === 404) {
        window.location = '/notFound';
      } else {
        await response.json().then((data) => {
          setLoading(false);
          console.log(data);
        });
      }
    };
    throw new Error('Simulated Error');
  },
};
</script>

<style></style>
