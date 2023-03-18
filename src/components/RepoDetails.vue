<template>
  <div className="repoDetails">
    <span>{{ singleRepo.name }}</span>
    <span>
      Has isuues: <span v-if="singleRepo.has_issues">&#x2713;</span> <span v-else>&#x2717;</span>
    </span>
    <span>forked:<span v-if="singleRepo.fork">&#x2713;</span> <span v-else>&#x2717;</span> </span>
    <span>
      Has downloads: <span v-if="singleRepo.has_downloads">&#x2713;</span>
      <span v-else>&#x2717;</span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'SingleRepo',
  props: {
    singleRepo: Object,
  },

  data() {
    return {
      current: 1,
      pageSize: 5,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.repoDetails {
  width: 100%;
  background-color: rgb(247, 247, 31);
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
}
</style>
