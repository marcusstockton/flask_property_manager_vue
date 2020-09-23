<template lang="html">
  <section class="portfolio-portfolio-detail">
    <p>PortfolioId: {{ portfolioId }}</p>
    <PropertyList
      v-if="portfolioId"
      v-bind:portfolioId="portfolioId"
    ></PropertyList>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'PortfolioDetail',
    props: [],
    mounted () {
      this.portfolioId = this.$route.params.portfolioId;
    },
    data () {
      return {
        portfolioId: ""
      }
    },
    methods: {

    },
    computed: {

    },
    components: {
      PropertyList: () => import('@/components/property/property-list.vue')
    }
}
</script>

<style scoped></style>
