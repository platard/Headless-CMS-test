<template>
  <div class="grid md:grid-cols-4 reviewCard-container">
    <div class="flex flex-col justify-center gap-3">
      <p class="font-semibold">{{ blok.fullName }}</p>
      <p class="reviewCard-date">
        {{ new Date(blok.date).getFullYear() }}/{{
          new Date(blok.date).getMonth() + 1
        }}/{{ new Date(blok.date).getDate() }}
      </p>
    </div>
    <div class="flex flex-col justify-center gap-3">
      <p class="font-semibold">{{ blok.product }}</p>
      <div class="flex gap-1 items-center">
        <StarRating :blok="blok" />
      </div>
    </div>
    <div class="reviewCard-img">
      <img :src="blok.image.filename" :alt="blok.product" />
    </div>
    <div class="reviewCard-btn">
      <NuxtLink :to="`/reviews/${blok._uid}`">
        <button>More Details</button>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "Review",
  props: ["blok"],
};
</script>

<style lang="scss">
@import "../assets/scss/variables";

.reviewCard {
  &-container {
    border: 1px solid $gray;
    border-radius: $xlg;
    padding: 40px;
    box-shadow: $box-shadow;
    gap: 51px;
  }

  &-date {
    color: $gray;
  }

  &-img {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: $lg;
    aspect-ratio: 1;
    overflow: hidden;

    img {
      // Enlarge the images without losing their aspect ratio
      min-height: 100%;
      object-fit: cover;
    }
  }

  &-btn {
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      background-color: $black;
      color: $white;
      border-radius: $xlg;
      padding: $sm $md;
    }
  }
}
</style>
