<template>
  <div class="search-bar">
    {{ search(keyword) }}
    <input
      v-model="keyword"
      type="text"
      id="search"
      placeholder="search...Product or Name"
    />
    <font-awesome-icon
      :icon="['fas', 'magnifying-glass']"
      class="search-bar-icon"
    />
  </div>
</template>

<script>
export default {
  props: ["search"],
  data: function () {
    return {
      keyword: "",
    };
  },
};
</script>

<style lang="scss">
@import "../assets/scss/variables";

.search-bar {
  position: relative;

  input {
    width: 100%;
    border: 1px solid $black;
    border-radius: $xlg;
    padding: $sm $md;

    &:focus {
      border: 1px solid $black;
      border-radius: $xlg;
    }
  }

  &-icon {
    position: absolute;
    top: $md;
    right: $lg;
    font-size: 18px;
  }
}
</style>
