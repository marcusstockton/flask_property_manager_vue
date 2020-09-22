<template lang="html">
  <section class="auth-register">
    <div>
      <h2>Register</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="username">Username</label>
          <input
            type="text"
            v-model="username"
            name="username"
            class="form-control"
            :class="{ 'is-invalid': submitted && !username }"
          />
          <div v-show="submitted && !username" class="invalid-feedback">
            Username is required
          </div>
        </div>
        <div class="form-group">
          <label for="emailaddress">Email Address</label>
          <input
            type="email"
            v-model="emailaddress"
            name="emailaddress"
            class="form-control"
            :class="{ 'is-invalid': submitted && !emailaddress }"
          />
        </div>

        <div class="form-group">
          <label for="firstname">First Name</label>
          <input
            type="text"
            v-model="firstname"
            name="firstname"
            class="form-control"
            :class="{ 'is-invalid': submitted && !firstname }"
          />
        </div>

        <div class="form-group">
          <label for="lastname">Last Name</label>
          <input
            type="text"
            v-model="lastname"
            name="lastname"
            class="form-control"
            :class="{ 'is-invalid': submitted && !lastname }"
          />
        </div>

        <div class="form-group">
          <label for="dateofbirth">Date Of Birth</label>
          <input
            type="text"
            v-model="dateofbirth"
            name="dateofbirth"
            class="form-control"
            :class="{ 'is-invalid': submitted && !dateofbirth }"
          />
        </div>

        <div class="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            v-model="password"
            name="password"
            class="form-control"
            :class="{ 'is-invalid': submitted && !password }"
          />
          <div v-show="submitted && !password" class="invalid-feedback">
            Password is required
          </div>
        </div>
        <div class="form-group">
          <label htmlFor="password">Password2</label>
          <input
            type="password"
            v-model="password2"
            name="password"
            class="form-control"
            :class="{ 'is-invalid': submitted && !password2 }"
          />
          <div v-show="submitted && !password" class="invalid-feedback">
            Password is required
          </div>
        </div>
        <div class="form-group">
          <button class="btn btn-primary" :disabled="loggingIn">Login</button>
          <img
            v-show="loggingIn"
            src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
          />
        </div>
      </form>
    </div>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'auth-register',
    props: [],
    mounted () {

    },
    data () {
      return {
      username: '',
      emailaddress: '',
      firstname: '',
      lastname: '',
      dateofbirth: '',
      password: '',
      password2: '',
      submitted: false
    };
    },
    methods: {
      handleSubmit() {
        this.submitted = true;
        const { username, emailaddress, firstname, lastname, dateofbirth, password } = this;
        const { dispatch } = this.$store;
        if (username && password) {
          dispatch('user/login', { username, emailaddress, firstname, lastname, dateofbirth, password });
        }
      }
    },
    computed: {

    }
}
</script>

<style scoped></style>
