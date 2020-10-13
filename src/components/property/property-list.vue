<template lang="html">
  <section id="property-property-list">
    <p>PortfolioId: {{ portfolioId }}</p>
    <!-- https://vuematerial.io/components/table -->
    <div id="propertiesTable">
      <md-table v-model="propertyList" md-card>
        <md-table-toolbar>
          <div class="md-toolbar-section-start">
            <h1 class="md-title">Properties</h1>
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
          :md-description="`No property found for this '${search}' query. Try a different search term or create a new property.`"
        >
          <md-button class="md-primary md-raised" @click="newProperty"
            >Create New Property</md-button
          >
        </md-table-empty-state>
        <md-table-row
          slot="md-table-row"
          slot-scope="{ item }"
          @click="goToProperty(portfolioId, item.id)"
        >
          <md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{
            item.id
          }}</md-table-cell>
          <md-table-cell
            md-label="Purchase Price"
            md-numeric
            md-sort-by="purchase_price"
            >{{ item.purchase_price }}</md-table-cell
          >
          <md-table-cell
            md-label="Monthly Rental Price"
            md-numeric
            md-sort-by="monthly_rental_price"
            >{{ item.monthly_rental_price }}</md-table-cell
          >
          <md-table-cell md-label="Address">{{
            addressBuilder(item.address)
          }}</md-table-cell>
          <md-table-cell md-label="Postcode">{{
            item.address.post_code
          }}</md-table-cell>
          <md-table-cell md-label="Town">{{ item.address.town }}</md-table-cell>
          <md-table-cell md-label="City" md-sort-by="address.city">{{
            item.address.city
          }}</md-table-cell>
          <md-table-cell md-label="# Tenants">{{
            item.tenants.length
          }}</md-table-cell>
        </md-table-row>
      </md-table>
    </div>
    <md-button @click="$router.go(-1)">Back</md-button>
  </section>
</template>

<script lang="js">

  import {PropertyService} from '../../services/property.service'

  const toLower = text => {
    return text.toString().toLowerCase()
  }

  const searchByName = (items, term) => {
    if (term) {
      return items.filter(item => toLower(item.name).includes(toLower(term)))
    }

    return items
  }

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
        search:'',
        propertyList:[]
      }
    },
    methods: {
      searchOnTable () {
        this.searched = searchByName(this.propertyList, this.search)
      },
      newProperty(){
        console.log("Create new property");
        this.$router.push({ name: 'propertyCreate'} );
      },
      goToProperty: function(portfolioId, propertyId){
        this.$router.push({ name: 'propertyDetails' , params: { portfolioId: portfolioId, propertyId: propertyId }} );
      },
    },
    calculated(){
    },
    computed: {
      // Build the address up in here...
      addressBuilder:function(){
        return address => `${address.line_1} ${address.line_2} ${address.line_3}`;
      }
    },
    created() {
      //console.log(this.portfolioId)
    }
}
</script>

<style scoped>
#property-property-list {
  padding: 1rem;
}

#propertiesTable {
  width: 75% !important;
  margin: auto;
}
</style>
