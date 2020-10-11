<template lang="html">
  <section class="property-property-form">
    <h1>property-property-form Component</h1>
    <p>PortfolioId: {{ portfolioId }}</p>
    <p>PropertyId: {{ propertyId }}</p>
    <form novalidate class="md-layout" @submit.prevent="validateProperty">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Property</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('purchase_price')">
                <label for="purchase_price">Purchase Price</label>
                <md-input
                  name="purchase_price"
                  id="purchase_price"
                  type="number"
                  v-model="form.purchase_price"
                  :disabled="sending"
                />
                <span class="md-error" v-if="!$v.form.purchase_price.required"
                  >The Purchase Price is required</span
                >
                <span
                  class="md-error"
                  v-else-if="!$v.form.purchase_price.minlength"
                  >Invalid Purchase Price</span
                >
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('purchase_date')">
                <label for="purchase_date">Date of Purchase</label>
                <md-input
                  name="purchase_date"
                  id="purchase_date"
                  v-model="form.purchase_date"
                  type="date"
                  :disabled="sending"
                />
                <span class="md-error" v-if="!$v.form.purchase_date.required"
                  >The last name is required</span
                >
                <span
                  class="md-error"
                  v-else-if="!$v.form.purchase_date.minlength"
                  >Invalid last name</span
                >
              </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('gender')">
                <label for="monthly_rental_price">Monthly Rental Price</label>
                <md-input
                  name="monthly_rental_price"
                  id="monthly_rental_price"
                  type="number"
                  v-model="form.monthly_rental_price"
                  :disabled="sending"
                />
                <span
                  class="md-error"
                  v-if="!$v.form.monthly_rental_price.required"
                  >The last name is required</span
                >
                <span
                  class="md-error"
                  v-else-if="!$v.form.monthly_rental_price.minlength"
                  >Invalid last name</span
                >
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('address.line_1')">
                <label for="address_line_1">Address Line 1</label>
                <md-input
                  id="address_line_1"
                  name="address_line_1"
                  autocomplete="line1"
                  v-model="form.address.line_1"
                  :disabled="sending"
                />
                <span class="md-error" v-if="!$v.form.address.line_1.required"
                  >The age is required</span
                >
                <span
                  class="md-error"
                  v-else-if="!$v.form.address.line_1.maxlength"
                  >Invalid age</span
                >
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('address.line_2')">
                <label for="address_line_2">Address Line 2</label>
                <md-input
                  id="address_line_2"
                  name="address_line_2"
                  autocomplete="line2"
                  v-model="form.address.line_2"
                  :disabled="sending"
                />
                <span class="md-error" v-if="!$v.form.address.line_2.required"
                  >The age is required</span
                >
                <span
                  class="md-error"
                  v-else-if="!$v.form.address.line_2.maxlength"
                  >Invalid age</span
                >
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('address.line_2')">
                <label for="address_line_3">Address Line 2</label>
                <md-input
                  id="address_line_3"
                  name="address_line_3"
                  autocomplete="line3"
                  v-model="form.address.line_3"
                  :disabled="sending"
                />
                <span class="md-error" v-if="!$v.form.address.line_3.required"
                  >The age is required</span
                >
                <span
                  class="md-error"
                  v-else-if="!$v.form.address.line_3.maxlength"
                  >Invalid age</span
                >
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('address.post_code')">
                <label for="address_post_code">Post Code</label>
                <md-input
                  id="address_post_code"
                  name="address_post_code"
                  autocomplete="post_code"
                  v-model="form.address.post_code"
                  :disabled="sending"
                />
                <span
                  class="md-error"
                  v-if="!$v.form.address.post_code.required"
                  >The post_code is required</span
                >
                <span
                  class="md-error"
                  v-else-if="!$v.form.address.post_code.maxlength"
                  >Invalid post_code</span
                >
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('address.town')">
                <label for="town">Town</label>
                <md-input
                  id="address_town"
                  name="address_town"
                  autocomplete="town"
                  v-model="form.address.town"
                  :disabled="sending"
                />
                <span class="md-error" v-if="!$v.form.address.town.required"
                  >The town is required</span
                >
                <span
                  class="md-error"
                  v-else-if="!$v.form.address.town.maxlength"
                  >Invalid town</span
                >
              </md-field>
            </div>
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('address.city')">
                <label for="city">City</label>
                <md-input
                  id="address_city"
                  name="address_city"
                  autocomplete="city"
                  v-model="form.address.city"
                  :disabled="sending"
                />
                <span class="md-error" v-if="!$v.form.address.city.required"
                  >The city is required</span
                >
                <span
                  class="md-error"
                  v-else-if="!$v.form.address.city.maxlength"
                  >Invalid city</span
                >
              </md-field>
            </div>
          </div>
        </md-card-content>

        <md-progress-bar md-mode="indeterminate" v-if="sending" />

        <md-card-actions>
          <md-button type="submit" class="md-primary" :disabled="sending"
            >Create property</md-button
          >
        </md-card-actions>
      </md-card>

      <md-snackbar :md-active.sync="propertySaved"
        >The property was saved!</md-snackbar
      >
    </form>
    <md-button @click="$router.go(-1)">Back</md-button>
  </section>
</template>

<script lang="js">
  import { validationMixin } from 'vuelidate'
  import {
    required,
    //minLength,
    maxLength,
    //minValue,
    numeric
  } from 'vuelidate/lib/validators'

  export default  {
    name: 'PropertyForm',
    mixins: [validationMixin],
    props: [],
    mounted () {
      this.portfolioId = this.$route.params.portfolioId;
      this.propertyId = this.$route.params.propertyId;
    },
    data () {
      return {
        sending: false,
        propertySaved: false,
        portfolioId: "",
        propertyId: "",
        form: {
          purchase_price: null,
          purchase_date: null,
          monthly_rental_price: null,
          address:{
            line_1: null,
            line_2: null,
            line_3: null,
            post_code: null,
            town: null,
            city: null
          }
        },
      }
    },
    validations: {
      form: {
        purchase_price: {
          required,
          numeric,
          //minValue(greaterThanZero)
        },
        purchase_date: {
          required,
          // minLength: minLength(3)
        },
        monthly_rental_price: {
          required,
          numeric,
          //minValue(greaterThanZero)
        },
         address:{
            line_1: {
              required,
              // minLength: minLength(3)
            },
            line_2: {
              // optional
            },
            line_3: {
              // optional
            },
            post_code: {
              required,
              maxLength: maxLength(10)
            },
            town: {
              // optional
            },
            city: {
              // optional
            }
          }
      }
    },
    methods: {
      getValidationClass (fieldName) {
        const field = this.$v.form[fieldName]

        if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          }
        }
      },
      saveProperty () {
        this.sending = true
        // Instead of this timeout, here you can call your API
        window.setTimeout(() => {
          this.userSaved = true
          this.sending = false
        }, 1500)
      },
      validateProperty () {
        this.$v.$touch()

        if (!this.$v.$invalid) {
          this.saveProperty()
        }
      }
    },
    computed: {

    }
}
</script>

<style scoped>
.md-progress-bar {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
}
</style>
