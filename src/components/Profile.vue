<template>
  <nav style="display: block">
    <router-link to="/">
      <button class="button" style="background-color: yellow">Home</button>
    </router-link>
  </nav>
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
      </p>
      <div>
        <router-link to="/repositories">
          <button class="button btnGreen">Repositories</button>
        </router-link>
        |
        <router-link to="/putin"> <button class="button btnBlue">Putin</button> </router-link>|
        <!-- <Link to="/repositories" className="button btnGreen"> repositories </Link> -->
        <a :href="user.html_url">
          <button class="button btnYellow">visit profile</button>
        </a>
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
.button {
  /* Green */
  border: 2px;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin-right: 0.5rem;
  font-size: 16px;
  cursor: pointer;
  color: rgb(1, 65, 25);
}
.smallButton {
  /* Green */
  border: none;
  color: white;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin-left: 1rem;
  font-size: 10px;
  background-color: rgb(94, 4, 4);
}

.btnGreen {
  background-color: #42b983;
}
.btnBlue {
  background-color: skyblue;
}

.btnYellow {
  background-color: yellowgreen;
  color: black;
}
</style>
