<template>
  <div class="flex flex-col gap-8">
    <SearchBar :search="SearchHandler" />
    <div class="flex gap-2">
      <h4 v-if="toggle">
        <button
          class="rounded-full inline-block p-2 px-3 border border-black hover:bg-red-600 hover:text-white transition-all ease-in-out"
          @click="sortby1('stars', 'toggle')"
        >
          Rating ↓
        </button>
      </h4>
      <h4 v-else="toggle">
        <button
          class="rounded-full inline-block p-2 px-3 border border-black hover:bg-red-600 hover:text-white transition-all ease-in-out"
          @click="sortby2('stars', 'toggle')"
        >
          Rating ↑
        </button>
      </h4>
      <h4 v-if="toggle1">
        <button
          class="rounded-full inline-block p-2 px-3 border border-black hover:bg-red-600 hover:text-white transition-all ease-in-out"
          @click="sortby1('date', 'toggle1')"
        >
          Date ↓
        </button>
      </h4>
      <button v-else="toggle1">
        <button
          class="rounded-full inline-block p-2 px-3 border border-black hover:bg-red-600 hover:text-white transition-all ease-in-out"
          @click="sortby2('date', 'toggle1')"
        >
          Date ↑
        </button>
      </button>
    </div>

    <StoryblokComponent v-for="blok in data" :key="blok._uid" :blok="blok" />
  </div>
</template>

<script>
import pkg from "lodash";
const { orderBy } = pkg;
export default {
  props: ["blok"],
  data: function () {
    return {
      data: this.blok.body,
      toggle: true,
      toggle1: true,
    };
  },
  methods: {
    SearchHandler(keyword) {
      this.data = this.blok.body.filter((el) =>
        (el.product + el.fullName)
          .replaceAll(" ", "")
          .toLowerCase()
          .includes(keyword.toLowerCase())
      );
    },
    sortby1(element, toggle) {
      this.data = orderBy(this.blok.body, element, "asc");
      this[toggle] = false;
    },
    sortby2(element, toggle) {
      this.data = orderBy(this.blok.body, element, "desc");
      this[toggle] = true;
    },
  },
};
</script>
