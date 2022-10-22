<template>
  <section id="vue-form-validation" class="my-5">
    <div class="container">
      <div class="row">
        <h2>Vue PHP Submit</h2>
        <ul>
          <li>
            <a
              href="https://stackoverflow.com/questions/20392036/send-data-to-mysql-with-ajax-jquery-php"
              >https://stackoverflow.com/questions/20392036/send-data-to-mysql-with-ajax-jquery-php</a
            >
          </li>
        </ul>

        <!-- error-vuelidate -->
        <pre>error-vaelidate</pre>
        <pre>{{ name }}</pre>
        <label>
          <input v-model="name" @blur="v$.name.$touch" />
          <div v-if="v$.name.$error">Name field has an error.</div>
        </label>
      </div>
      <!-- forms -->
      <div class="row">
        <div class="col-md-6">
          <pre class="border p-2">{{ form_data }}</pre>
        </div>

        <div class="col-md-6 order-md-1">
          <h4 class="mb-3">Contact Form</h4>
          <form
            class="needs-validation"
            novalidate=""
            @submit.prevent="test_submit"
          >
            <!-- action="http://localhost/wabisabi/submit.php"
            method="POST" -->
            <div class="mb-3">
              <label for="full_name">Full name</label>
              <input
                type="text"
                class="form-control"
                id="full_name"
                name="full_name"
                placeholder="e.g. Adam Smith"
                v-model="form_data.full_name"
                required=""
              />
              <div class="invalid-feedback">Valid full name is required.</div>
            </div>

            <div class="mb-3">
              <label for="mobile">Mobile Phone</label>
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  id="mobile"
                  name="mobile"
                  placeholder="e.g. 010-123 1234"
                  v-model="form_data.mobile"
                  required=""
                />
                <div class="invalid-feedback" style="width: 100%">
                  Your mobile number is required.
                </div>
              </div>
            </div>

            <div class="mb-3">
              <label for="email"
                >Email <span class="text-muted">(Optional)</span></label
              >
              <input
                type="email"
                class="form-control"
                id="email"
                name="email"
                placeholder="e.g. adam@email.com"
                v-model="form_data.email"
                required=""
              />
              <div class="invalid-feedback">
                Please enter a valid email address.
              </div>
            </div>

            <hr class="mb-4" />

            <div class="custom-control custom-checkbox">
              <input
                type="checkbox"
                class="custom-control-input"
                id="agreement"
                name="agreement"
                v-model="form_data.agreement"
              />
              <label class="custom-control-label" for="agreement"
                >Agreements</label
              >
            </div>

            <hr class="mb-4" />

            <button class="btn btn-primary btn-lg btn-block" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import axios from "axios";

import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return { v$: useVuelidate() };
  },
  name: "VuePhpSubmit",
  /*   setup() {
        
    }, */
  methods: {
    async test_submit() {
      let res = await axios.post(
        "http://localhost/wabisabi/submit.php",
        this.form_data
      );
      console.log(res.data);
    },
  },
  data() {
    return {
      name: "",
      form_data: {
        full_name: "Adam Smith Roger",
        email: "placeholder@email.com",
        mobile: "+601322  21234",
        agreement: 0,
      },
    };
  },
  validations() {
    return {
      name: { required },
      form_data: {
        full_name: { required }, // Matches this.full_name
        email: { required, email },
        mobile: { required }, // Matches this.mobile
      },

      // contact: {
      //   email: { required, email }, // Matches this.contact.email
      // },
    };
  },
});
</script>
<style lang="scss" scoped>
</style>