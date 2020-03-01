<template>
  <v-container>
    <v-alert type="warning" :value="alert">
      Please fill name,email and pawwrord
    </v-alert>
    <v-form @submit.prevent="submit">
      <v-text-field
        v-model="name"
        :rules="nameRules"
        :counter="10"
        label="Name"
        required
      ></v-text-field>
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>
      <v-text-field
        v-model="password"
        :rules="passwordRules"
        label="Password"
        type="password"
        required
      ></v-text-field>
      <v-btn class="success" type="submit">Submit</v-btn>
    </v-form>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => v.length <= 10 || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ],
    password: "",
    passwordRules: [v => !!v || "Password is required"],
    alert: false
  }),
  methods: {
    submit() {
      if (!this.name && !this.email && !this.password) {
        this.alert = true;
      }
      console.log(
        `Name is ${this.name} and Email is ${this.email} and Password is ${this.password}`
      );
    }
  }
};
</script>
