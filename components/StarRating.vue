<template>
    <div class="rating-stars-container">
        <div v-for="fas in fullStars" :key="blok.fullName">
            <font-awesome-icon :icon="[fas, 'star']" class="rating-stars" />
        </div>
        <div v-if="emptyStars" v-for="far in emptyStars" :key="blok.fullName">
            <font-awesome-icon :icon="[far, 'star']" class="rating-stars" />
        </div>
        {{ blok.stars }}
    </div>
</template>

<script>
    export default {
        name: 'StarRating',
        props: ['blok'],
        data: function() {
            return {
                fullStars: [],
                emptyStars: []
            }
        },
        created() {
            // Render the stars icon according to the scores
            if (this.blok.stars == 5) {
                for(let i = 0; i < this.blok.stars; i++) {
                    this.fullStars.push('fas')
                }
            } else {
                for(let i = 0; i < this.blok.stars; i++) {
                    this.fullStars.push('fas')
                }
                for(let i = 0; i < (5 - this.blok.stars); i++) {
                    this.emptyStars.push('far')
                }
            }
        }
    }
</script>

<style lang="scss">
    @import '../assets/scss/variables';

    .rating-stars {
        color: #FACC15;

        &-container {
            display: flex;
            align-items: center;
            gap: $xs;
        }
    }
</style>