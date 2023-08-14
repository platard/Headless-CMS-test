<template>
  <div class="container mx-auto px-8 md:w-8/12 sm:w-full">
    <header class="reviewDetails-header">
      <NuxtLink to="/" class="flex items-center">
        <font-awesome-icon
          :icon="['fas', 'chevron-left']"
          class="reviewDetails-header-icon"
        />
        <span>Back</span>
      </NuxtLink>
      <h1 class="text-center font-bold my-10 reviewDetails-header-title">
        Review Details
      </h1>
    </header>
    <div v-for="blok in story.body">
      <!-- Render the Details only when the uid is matched -->
      <div v-if="blok._uid === _uid" class="reviewDetails-details-container">
        <div class="reviewDetails-details-item">
          <h3>Full Name</h3>
          <p>{{ blok.fullName }}</p>
        </div>
        <div class="reviewDetails-details-item">
          <h3>Order date</h3>
          <p>
            {{ new Date(blok.date).getFullYear() }}/{{
              new Date(blok.date).getMonth()
            }}/{{ new Date(blok.date).getDate() }}
          </p>
        </div>
        <div class="reviewDetails-details-item">
          <h3>Product Name</h3>
          <p>{{ blok.product }}</p>
        </div>
        <div class="reviewDetails-details-item">
          <h3>Rating</h3>
          <StarRating :blok="blok" />
        </div>
        <div class="reviewDetails-details-item">
          <h3>Review</h3>
          <p>{{ blok.review }}</p>
        </div>
        <div class="reviewDetails-details-item">
          <h3>Image</h3>
          <div class="reviewDetails-details-img">
            <img :src="blok.image.filename" :alt="blok.product" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      _uid: "",
      story: "",
    };
  },

  async created() {
    // Got the _uid from URL
    this._uid = this.$route.params._uid;
    // Retreived the data from storyblok and avoid data did not respond
    try {
      const resp = await fetch(
        "https://api-us.storyblok.com/v2/cdn/stories/home?version=draft&token=akxvYagdc08ae9dX5zmrrAtt"
      );
      const data = await resp.json();
      if (!resp.ok) return;
      this.story = data.story.content;
    } catch (err) {
      console.log(err);
    }
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/variables";

.reviewDetails {
  &-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &-icon {
      font-size: $lg;
      margin-right: $md;
    }

    &-title {
      flex-grow: 1;
    }
  }

  &-details {
    &-container {
      display: flex;
      flex-direction: column;
      gap: $xlg;
      margin-bottom: 50px;

      h3 {
        font-weight: $semiBold;
      }
    }

    &-item {
      display: flex;
      flex-direction: column;
      gap: $md;
    }

    &-img {
      display: flex;
      justify-content: center;

      img {
        margin-top: $md;
        border-radius: $xlg;
      }
    }
  }
}
</style>
