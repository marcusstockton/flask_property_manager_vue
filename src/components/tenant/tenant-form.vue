<template lang="html">
  <section class="tenant-tenant-form">
    <h1>tenant-tenant-form Component</h1>
    <p>PortfolioId: {{ portfolioId }}</p>
    <p>PropertyId: {{ propertyId }}</p>
    <p>TenantId: {{ tenantId }}</p>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'TenantForm',
    props: [],
    mounted () {
      this.portfolioId = this.$route.params.portfolioId;
      this.propertyId = this.$route.params.propertyId;
      this.tenantId = this.$route.params.tenantId;
    },
    data () {
      return {
        portfolioId: "",
        propertyId: "",
        tenantId: ""
      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped></style>
