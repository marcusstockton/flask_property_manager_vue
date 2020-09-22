<template lang="html">
  <section class="tenant-tenant-list">
    <h1>tenant-tenant-list Component</h1>
    <p>PortfolioId: {{ portfolioId }}</p>
    <p>PropertyId: {{ propertyId }}</p>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'TenantList',
    props: [],
    mounted () {
      this.portfolioId = this.$route.params.portfolioId;
      this.propertyId = this.$route.params.propertyId;
    },
    data () {
      return {
        portfolioId: "",
        propertyId: ""
      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped></style>
