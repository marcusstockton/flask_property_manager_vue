<template lang="html">
  <section class="portfolio-portfolio-form">
    <form novalidate class="md-layout" @submit.prevent="validateForm">
      <md-card class="example-card">
        <md-card-header>
          <div class="md-title">Create Portfolio</div>
        </md-card-header>
        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="name">Portfolio Name</label>
                <md-input
                  name="name"
                  id="name"
                  v-model="form.name"
                  :disabled="sending"
                />
                <span class="md-error" v-if="!$v.form.name.required"
                  >The name is required</span
                >
                <span class="md-error" v-else-if="!$v.form.name.minlength"
                  >Invalid name</span
                >
              </md-field>
            </div>
          </div>
        </md-card-content>
        <md-card-actions>
          <md-button type="submit" class="md-primary" :disabled="sending"
            >Create</md-button
          >
        </md-card-actions>
      </md-card>
      <div class="line-break"></div>
      <md-button
        style="display: inline-block;"
        class="md-raised"
        @click="$router.go(-1)"
        >Back</md-button
      >
    </form>
  </section>
</template>

<script lang="js">
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";
import {PortfolioService} from '../../services/portfolio.service'


  export default  {
    mixins: [validationMixin],
    name: 'PortfolioForm',
    props: [],
    mounted () {

    },
    data: () => ({
      form: {
        name: null,
      },
      sending: false,
    }),
validations: {
    form: {
      name: {
        required,
        minLength: minLength(3)
      },
    }
  },
    methods: {
      savePortfolio () {
        this.sending = true;
        PortfolioService.createPortfolio(this.form.name).then((response)=>{
           this.sending = false;
           this.$router.push(`/portfolios/${response.id}`);
      })

      },
      validateForm () {
        this.$v.$touch()

        if (!this.$v.$invalid) {
          this.savePortfolio()
        }
      }
    },
    computed: {

    }
}
</script>

<style scoped>
.example-card {
  margin: auto;
  margin-top: 5%;
  width: 30vw;
}
.line-break {
  width: 100%;
}
</style>
