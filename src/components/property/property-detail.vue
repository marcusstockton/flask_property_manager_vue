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

      <md-card>
        <md-card-header>
          <div class="md-title">Details</div>
        </md-card-header>
        <md-card-content>
          <p>{{ property.purchase_price }}</p>
          <p>{{ property.purchase_date }}</p>
          <p>{{ property.monthly_rental_price }}</p>
        </md-card-content>
        <md-card-actions>
          <md-button>Action</md-button>
          <md-button>Action</md-button>
        </md-card-actions>
      </md-card>

      <md-card>
        <md-card-header>
          <div class="md-title">Address</div>
        </md-card-header>
        <md-card-content>
          <p>{{ property.address.line_1 }}</p>
          <p>{{ property.address.line_2 }}</p>
          <p>{{ property.address.line_3 }}</p>
          <p>{{ property.address.post_code }}</p>
          <p>{{ property.address.town }}</p>
          <p>{{ property.address.city }}</p>
        </md-card-content>
        <md-card-actions>
          <md-button>Action</md-button>
          <md-button>Action</md-button>
        </md-card-actions>
      </md-card>
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

<style scoped>
.md-card {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
</style>
