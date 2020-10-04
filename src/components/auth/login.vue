<template>
  <div class="md-layout md-gutter md-alignment-top-center">
    <form @submit.prevent="handleSubmit">
      <md-card>
        <div>
          Username: test@test.com<br />
          Password: test
        </div>
        <md-card-header>
          <div class="md-title">Log In</div>
        </md-card-header>
        <md-card-content class="md-layout md-gutter">
          <md-field :class="getValidationClass('username')">
            <label for="username">Username</label>
            <md-input
              name="username"
              id="username"
              autocomplete="username"
              v-model="form.username"
              :disabled="sending"
            />
            <span class="md-error" v-if="!$v.form.username.required"
              >The username is required</span
            >
            <span class="md-error" v-else-if="!$v.form.username.minlength"
              >Invalid username</span
            >
          </md-field>
          <md-field :class="getValidationClass('password')">
            <label for="password">Password</label>
            <md-input
              name="password"
              id="password"
              autocomplete="password"
              v-model="form.password"
              :disabled="sending"
            />
            <span class="md-error" v-if="!$v.form.password.required"
              >The password is required</span
            >
            <span class="md-error" v-else-if="!$v.form.password.minlength"
              >Invalid password</span
            >
          </md-field>

          <md-snackbar
            md-position="center"
            :md-duration="4000"
            :md-active.sync="hasFormErrors"
          >
            <span>{{ this.$store.state.alert.message }}</span>
            <md-button class="md-primary">Ok</md-button>
          </md-snackbar>
        </md-card-content>
        <md-card-actions>
          <md-button type="submit" class="md-primary" :disabled="loggingIn"
            >Login</md-button
          >
        </md-card-actions>
      </md-card>
    </form>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  data: () => ({
    form: {
      username: null,
      password: null
    },
    userSaved: false,
    sending: false,
    formError: false
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
      }
    }
  },
  computed: {
    loggingIn() {
      return this.$store.state.authentication.status.loggingIn;
    },
    hasFormErrors() {
      if (
        this.$store.state.alert.message &&
        this.$store.state.alert.message != ""
      ) {
        return true;
      }
      return false;
    }
  },
  created() {
    // reset login status
    this.$store.dispatch("authentication/logout");
  },
  methods: {
    handleSubmit() {
      this.$v.$touch();
      this.submitted = true;
      this.formError = false;
      const username = this.form.username;
      const password = this.form.password;
      const { dispatch } = this.$store;
      if (username && password && !this.$v.$invalid) {
        dispatch("authentication/login", { username, password });
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
  }
};
</script>
