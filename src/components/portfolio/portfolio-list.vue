<template lang="html">
  <section id="portfolio-list">
    <flex-row>
      <h1>portfolio-list Component</h1>
    </flex-row>
    <flex-row>
      <div id="portfolioTable">
        <md-table v-model="searched" md-sort="name" md-sort-order="asc" md-card>
          <md-table-toolbar>
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
            md-label="No portfolio's found"
            :md-description="`No portfolio found for this '${search}' query. Try a different search term or create a new portfolio.`"
          >
            <md-button class="md-primary md-raised" @click="newPortfolio"
              >Create New Portfolio</md-button
            >
          </md-table-empty-state>

          <md-table-row
            slot="md-table-row"
            slot-scope="{ item }"
            @click="goToPortfolio(item.id)"
          >
            <md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{
              item.id
            }}</md-table-cell>
            <md-table-cell
              md-label="Name"
              id="name"
              md-sort-by="name"
              md-numeric
              >{{ item.name }}</md-table-cell
            >
            <md-table-cell
              md-label="# Properties"
              md-sort-by="property_count"
              md-numeric
              >{{ item.property_count }}</md-table-cell
            >
            <md-table-cell
              md-label="Total Monthly Income"
              md-sort-by="total_income"
              md-numeric
              >{{ item.total_income }}</md-table-cell
            >
          </md-table-row>
        </md-table>
        <md-button
          class="md-primary md-raised"
          v-if="portfolioList.length > 0"
          @click="newPortfolio"
          >Create New Portfolio</md-button
        >
      </div>
    </flex-row>
  </section>
</template>

<script lang="js">
 import {PortfolioService} from '../../services/portfolio.service'

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
    name: 'PortfolioList',
    props: [],
    mounted () {
      PortfolioService.getPortfolios().then((result)=>{
        this.portfolioList = [...result.data];
        this.searched = [...this.portfolioList];
      })
    },
    data () {
      return {
        search:'',
        portfolioList:[],
      }
    },
    methods: {
      goToPortfolio: function(portfolioId){
        this.$router.push({ name: 'portfolioDetails' , params: { portfolioId: portfolioId }} );
      },

      newPortfolio(){
        console.log("Create new portfolio");
        this.$router.push({ name: 'portfolioCreate'} );
      },

      searchOnTable () {
        this.searched = searchByName(this.portfolioList, this.search)
      }
    },
    computed: {
    },
    created() {
    }
}
</script>

<style scoped>
#portfolio-list {
  padding: 1rem;
}

#portfolioTable {
  width: 75% !important;
  margin: auto;
}
</style>
