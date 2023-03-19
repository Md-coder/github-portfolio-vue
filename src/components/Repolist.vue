<template>
  <nav style="display: block">
    <router-link to="/">
      <button class="button" style="background-color: yellow">Home</button>
    </router-link>
  </nav>
  <div>
    <ul>
      <router-link to="/repositories/repo_details">
        <li
          class="list linkList"
          v-for="(repo, index) in paginated"
          :key="index"
          @click="fixSingleRepo(repo)"
        >
          <!-- <Link className="linkList" to="repoDetails"> -->
          <span>{{ repo.full_name }}</span>
          <span style="display: flex">
            <img src="../assets/fork.svg" alt="fork_icon" style="paddingright: 5px; color: white" />
            {{ repo.forks }}
          </span>
          <!-- </Link> -->
        </li>
      </router-link>
    </ul>
    <nav class="pagination is-right" role="navigation" aria-label="pagination">
      <ul class="pagination-list">
        <li>
          <button @click="prev" class="button">Prev</button>
        </li>
        <li>
          <span class="pagination-link go-to has-text-orange" aria-label="Goto page 1">{{
            current
          }}</span>
        </li>
        <li>
          <button @click="next()" class="button">Next</button>
        </li>
      </ul>
    </nav>
    <SingleRepo v-show="Object.keys(repo).length !== 0" :singleRepo="repo" />
  </div>
</template>

<script>
import SingleRepo from './RepoDetails.vue';
export default {
  name: 'RepoList',
  components: {
    SingleRepo,
  },
  props: {
    repos: Array,
  },

  data() {
    return {
      current: 1,
      pageSize: 5,
      repo: {},
    };
  },

  computed: {
    indexStart() {
      return (this.current - 1) * this.pageSize;
    },
    indexEnd() {
      return this.indexStart + this.pageSize;
    },
    paginated() {
      return this.repos.slice(this.indexStart, this.indexEnd);
    },
  },

  methods: {
    prev() {
      if (this.current > 1) {
        this.current--;
      }
    },
    next() {
      if (this.current < this.pageSize) {
        this.current++;
      }
    },
    //     isInLastPage() {
    //       return this.current == 5;
    //     },
    fixSingleRepo(repo) {
      this.repo = repo;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
:root {
  --main-bg-color: rgb(247, 247, 31);
  --secondary-bg-color: rgb(1, 65, 25);
  --secondary-blue-color: rgb(22, 122, 189);
}
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
  margin-right: 1rem;
  font-size: 16px;
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
  background-color: var(--secondary-bg-color);
}
.btnBlue {
  background-color: var(--secondary-blue-color);
}

.btnYellow {
  background-color: var(--main-bg-color);
  color: black;
}
.list {
  list-style: none;
  background-color: #42b983;
  margin-bottom: 1rem;
  width: 100%;
  padding: 15px 20px;
}

.linkList {
  text-decoration: none;
  color: white;
  display: flex;
  justify-content: space-between;
}
</style>
