<template lang="html">
  <section class="property-property-detail">
    <h1>property-property-detail Component</h1>
    <p>PortfolioId: {{ portfolioId }}</p>
    <p>PropertyId: {{ propertyId }}</p>
    <div v-if="loading">
      <md-progress-spinner id="spinner" md-mode="indeterminate" />
    </div>
    <div v-else>
      <p>{{ property }}</p>
    </div>
    <md-button @click="$router.go(-1)">Back</md-button>
  </section>
</template>

<script lang="js">
  import {PropertyService} from '../../services/property.service'

  export default  {
    name: 'PropertyDetail',
    props: [],
    mounted () {
      this.portfolioId = this.$route.params.portfolioId;
      this.propertyId = this.$route.params.propertyId;
      if(this.portfolioId && this.propertyId){
        this.loading=true;
        PropertyService.getPropertyById(this.portfolioId, this.propertyId).then((result)=>{
          this.property = result.data;
          this.loading = false;
        });
      }
    },
    data () {
      return {
        portfolioId: "",
        propertyId: "",
        property:{},
        loading: false,
      }
    },
    methods: {

    },
    computed: {

    },
}
</script>

<style scoped></style>
