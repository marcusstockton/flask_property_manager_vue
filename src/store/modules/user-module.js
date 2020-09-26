import { userService } from "../../services/user.service";
import router from "../../router";

export const user = {
  namespaced: true,
  actions: {
    register(
      { dispatch, commit },
      { username, emailaddress, firstname, lastname, dateofbirth, password }
    ) {
      commit("registerRequest", {
        username,
        emailaddress,
        firstname,
        lastname,
        dateofbirth
      });
      userService
        .register(
          username,
          emailaddress,
          firstname,
          lastname,
          dateofbirth,
          password
        )
        .then(
          // returns a token, username, userid, so...punt off to log in?
          user => {
            // Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MDEyNDg1NzMsImlhdCI6MTYwMTE2MjE2OSwic3ViIjo2LCJ1c2VybmFtZSI6InJvc2llQHRoZWhhdC5jb20ifQ.pjn9LRn9fnZHDxTdtN3F7UZHE37ttSpOXtt5yE0CQw4"
            // message: "Successfully registered."
            // status: "success"
            // user_id: "9e65fe68-34c1-4526-a1d0-35e281f1eb4d"
            // user_name: "rosie@thehat.com"
            commit("loginSuccess", user);
            router.push("/");
          },
          error => {
            commit("registerFailure", error);
            dispatch("alert/error", error, { root: true });
          }
        );
    }
  },
  mutations: {
    registerRequest(
      state
      //   username,
      //   emailaddress,
      //   firstname,
      //   lastname,
      //   dateofbirth
    ) {
      state.status = { registering: true };
    },
    registerFailure(state) {
      state.status = {};
    },
    // loginRequest(state, user) {
    //   state.status = { loggingIn: true };
    //   state.user = user;
    // },
    loginSuccess(state, user) {
      state.status = { loggedIn: true };
      state.user = user;
    }
    // loginFailure(state) {
    //   state.status = {};
    //   state.user = null;
    // },
    // logout(state) {
    //   state.status = {};
    //   state.user = null;
    // }
  }
};
