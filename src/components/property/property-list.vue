<template lang="html">
  <section class="property-property-list">
    <h1>property-property-list Component</h1>
    <p>PortfolioId: {{ portfolioId }}</p>

    <md-table v-model="propertyList" md-card>
      <!-- <md-table-toolbar>
          <div class="md-toolbar-section-start">
            <h1 class="md-title">Portfolio's</h1>
          </div>
          <md-field md-clearable class="md-toolbar-section-end">
            <md-input
              placeholder="Search by name..."
              v-model="search"
              @input="searchOnTable"
            />
          </md-field>
        </md-table-toolbar> 
        <md-table-empty-state
          md-label="No properties found"
          :md-description="
            `No properties found for this '${search}' query. Try a different search term or create a new user.`
          "
        >
          <md-button class="md-primary md-raised" @click="newPortfolio"
            >Create New Portfolio</md-button
          >
        </md-table-empty-state>-->

      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{
          item.id
        }}</md-table-cell>
        <md-table-cell md-label="Purchase Price" md-sort-by="purchase_price">{{
          item.purchase_price
        }}</md-table-cell>
        <md-table-cell
          md-label="Monthly Rental"
          md-sort-by="monthly_rental_price"
          >{{ item.monthly_rental_price }}</md-table-cell
        >
        <md-table-cell md-label="Purchased Date" md-sort-by="purchase_date">{{
          item.purchase_date
        }}</md-table-cell>
        <md-table-cell md-label="Address" md-sort-by="address">{{
          addressBuilder()
        }}</md-table-cell>
        <md-table-cell md-label="Postcode" md-sort-by="postcode">{{
          item.address.post_code
        }}</md-table-cell>
        <md-table-cell md-label="Town" md-sort-by="town">{{
          item.address.town
        }}</md-table-cell>
        <md-table-cell md-label="City" md-sort-by="city">{{
          item.address.city
        }}</md-table-cell>
        <md-table-cell md-label="# Tenants" md-sort-by="tenants">{{
          item.tenants.length
        }}</md-table-cell>
      </md-table-row>
    </md-table>
  </section>
</template>

<script lang="js">

  import {PropertyService} from '../../services/property.service'

  export default  {
    name: 'PropertyList',
    props: ['portfolioId'],
    mounted () {
      let vm = this;
      PropertyService.getProperties(vm.portfolioId).then((result)=>{
        this.propertyList = result.data;
      })
    },
    data () {
      return {
        propertyList:[]
      }
    },
    methods: {

    },
    calculated(){
    },
    computed: {
      // Build the address up in here...
      addressBuilder:function(){
        return this.item.address.line_1 + ' ' + this.item.address.line_2 + ' ' + this.item.address.line_3
      }
    },
    created() {
      //console.log(this.portfolioId)
    }
}
</script>

<style scoped></style>
