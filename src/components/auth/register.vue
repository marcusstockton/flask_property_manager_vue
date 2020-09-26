<template>
  <div class="login-form-flex">
    <form @submit.prevent="handleSubmit" class="md-layout" novalidate>
      <md-card class="example-card">
        <md-card-header>
          <div class="md-title">Register</div>
        </md-card-header>
        <md-card-content class="md-layout md-gutter">
          <md-field :class="getValidationClass('username')">
            <label for="username">User name</label>
            <md-input
              name="username"
              id="username"
              autocomplete="username"
              v-model="form.username"
              :disabled="sending"
            />
            <span class="md-helper-text">Your username</span>
            <span class="md-error" v-if="!$v.form.username.required"
              >The username is required</span
            >
            <span class="md-error" v-else-if="!$v.form.username.minlength"
              >Invalid username</span
            >
          </md-field>

          <md-field :class="getValidationClass('emailaddress')">
            <label for="emailaddress">Email Address</label>
            <md-input
              type="email"
              name="emailaddress"
              id="emailaddress"
              autocomplete="emailaddress"
              v-model="form.emailaddress"
              :disabled="sending"
            />
            <span class="md-error" v-if="!$v.form.emailaddress.required"
              >The email address is required</span
            >
            <span class="md-error" v-else-if="!$v.form.emailaddress.minlength"
              >Invalid email address</span
            >
            <span class="md-error" v-else-if="!$v.form.emailaddress.email"
              >Email is invalid</span
            >
          </md-field>

          <md-field :class="getValidationClass('firstname')" class="column-50">
            <label for="firstname">First Name</label>
            <md-input
              name="firstname"
              id="firstname"
              autocomplete="firstname"
              v-model="form.firstname"
              :disabled="sending"
            />
          </md-field>
          <md-field :class="getValidationClass('lastname')" class="column-50">
            <label for="lastname">Last Name</label>
            <md-input
              name="lastname"
              id="lastname"
              autocomplete="lastname"
              v-model="form.lastname"
              :disabled="sending"
            />
          </md-field>

          <md-field :class="getValidationClass('dateofbirth')">
            <label for="dateofbirth">Date Of Birth</label>
            <md-input
              type="date"
              name="dateofbirth"
              id="dateofbirth"
              v-model="form.dateofbirth"
              :disabled="sending"
            />
          </md-field>

          <md-field :class="getValidationClass('password')">
            <label for="password">Password</label>
            <md-input
              type="password"
              name="password"
              id="password"
              v-model="form.password"
              :disabled="sending"
            />
            <span class="md-error" v-if="!$v.form.password.required"
              >The password is required</span
            >
          </md-field>
          <md-field :class="getValidationClass('password2')">
            <label for="password2">Confirm Password</label>
            <md-input
              type="password"
              name="password2"
              id="password2"
              v-model="form.password2"
              :disabled="sending"
            />
            <span v-if="!$v.form.password2.required"
              >Confirm Password is required</span
            >
            <span class="md-error" v-if="!$v.form.password2.sameAsPassword"
              >Passwords must match</span
            >
          </md-field>
        </md-card-content>
        <md-card-actions>
          <md-button type="submit" class="md-primary" :disabled="sending"
            >Register</md-button
          >
        </md-card-actions>
      </md-card>
    </form>
    <md-snackbar
      md-position="center"
      :md-duration="4000"
      :md-active.sync="this.$store.state.alert.message"
    >
      <span>{{ this.$store.state.alert.message }}</span>
      <md-button class="md-primary">Ok</md-button>
    </md-snackbar>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  name: "auth-register",
  props: [],
  mounted() {},
  data: () => ({
    sending: false,
    form: {
      username: null,
      emailaddress: null,
      firstname: null,
      lastname: null,
      dateofbirth: null,
      password: null,
      password2: null,
      submitted: false
    }
  }),
  validations: {
    form: {
      username: {
        required,
        minLength: minLength(3)
      },
      password: {
        required,
        minLength: minLength(3)
      },
      password2: {
        required,
        sameAsPassword: sameAs("password")
      },
      emailaddress: {
        required,
        email
      }
    }
  },
  methods: {
    handleSubmit() {
      this.$v.$touch();
      this.submitted = true;

      const {
        username,
        emailaddress,
        firstname,
        lastname,
        dateofbirth,
        password
      } = this.form;
      const { dispatch } = this.$store;
      if (!this.$v.$invalid) {
        dispatch("user/register", {
          username,
          emailaddress,
          firstname,
          lastname,
          dateofbirth,
          password
        });
      }
    },
    getValidationClass(fieldName) {
      const field = this.$v.form[fieldName];

      if (field) {
        return {
          "md-invalid": field.$invalid && field.$dirty
        };
      }
    }
  },
  computed: {}
};
</script>

<style scoped>
/* .registerView {
  background-color: blueviolet !important;
  display: flex !important;
  align-content: center;
} */
.login-form-flex {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  height: 100% !important;
}
.example-card {
  margin: auto;
  margin-top: 5%;
  width: 30vw;
}
.column-50 {
  min-width: 50%;
  flex: 1 0 50%;
}
</style>
