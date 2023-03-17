<template>
  <div class="profile">
    <div class="img">
      <img :src="user.avatar_url" alt="avatar" style="width: 250px" />
    </div>
    <div style="textalign: left">
      <h1>{{ user.name }}</h1>
      <h2>{{ user.login }}</h2>
      <p>{{ user.bio }}</p>
      <p>
        <img
          src="../assets/twitter.svg"
          alt="twitter_icon"
          style="width: 20px; paddingright: 1rem; color: white"
        />
        {{ user.twitter_username }}
        <!-- <Link to="/errorBoundary" className="smallButton"> Error </Link> -->
      </p>
      <div>
        <!-- <Link to="/repositories" className="button btnGreen"> repositories </Link> -->
        <a :href="user.html_url" className="button btnYellow"> visit profile </a>
        <!-- <Link to="/donaldTrump" className="button btnBlue"> Donald Trump </Link> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  props: {
    user: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.profile {
  display: flex;
}
.img {
  margin: 1rem;
}
h3 {
  margin: 40px 0 0;
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
