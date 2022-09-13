<template>
  <form id="form__webform" class="container form__webform" @submit.prevent>
    <div class="form-row form-group">
      <label class="col-sm-4 col-form-label" for="area_of_interest"
        >Area of Interest <span class="required">*</span></label
      >
      <div class="col-sm-8">
        <select
          class="form-control"
          id="area_of_interest"
          name="area_of_interest"
          v-model="state.area_of_interest"
        >
          <option disabled="" selected="" value="">
            -- Select a your Area of Interest --
          </option>
          <option value="volunteer">Volunteer</option>
          <option value="newsletter">Newsletter</option>
          <option value="annual_report">Annual Report</option>
          <option value="blog">Blog</option>
          <option value="others">Others</option>
        </select>
      </div>
      <div class="feedback" v-if="v$.area_of_interest.$error">
        {{ v$.area_of_interest.$errors[0].$message }}
      </div>
    </div>

    <div class="form-row form-group">
      <label class="col-sm-4 col-form-label" for="fullname"
        >Full Name <span class="required">*</span></label
      >
      <div class="col-sm-8">
        <input
          type="text"
          class="form-control"
          id="fullname"
          name="fullname"
          placeholder="e.g. Adam Smith"
          v-model="state.fullname"
        />
      </div>
      <div class="feedback" v-if="v$.fullname.$error">
        {{ v$.fullname.$errors[0].$message }}
      </div>
    </div>

    <div class="form-row form-group">
      <label class="col-sm-4 col-form-label" for="email"
        >Email <span class="required">*</span></label
      >
      <div class="col-sm-8">
        <input
          type="email"
          class="form-control"
          id="email"
          name="email"
          placeholder="e.g. adam.smith@email.com"
          v-model="state.email"
        />
      </div>
      <div class="feedback" v-if="v$.email.$error">
        {{ v$.email.$errors[0].$message }}
      </div>
    </div>

    <div class="form-row form-group">
      <label class="col-sm-4 col-form-label" for="phone"
        >Mobile Phone <span class="required">*</span></label
      >
      <div class="col-sm-8">
        <input
          type="text"
          class="form-control"
          id="phone"
          name="phone"
          placeholder="e.g. 010-1234567"
          v-model="state.phone"
        />
      </div>
      <div class="feedback" v-if="v$.phone.$error">
        {{ v$.phone.$errors[0].$message }}
      </div>
    </div>

    <div class="form-row form-group">
      <label class="col-sm-4 col-form-label" for="state"
        >Address (State/Town) <span class="required">*</span></label
      >
      <div class="col-sm-8">
        <select
          class="form-control"
          id="state"
          name="state"
          v-model="state.state"
        >
          <option disabled="" selected="" value="">-- Select a State --</option>
          <option value="johor">Johor</option>
          <option value="kedah">Kedah</option>
          <option value="kelantan">Kelantan</option>
          <option value="melaka">Melaka</option>
          <option value="negeri-sembilan">Negeri Sembilan</option>
          <option value="pahang">Pahang</option>
          <option value="pulau-pinang">Pulau Pinang</option>
          <option value="perak">Perak</option>
          <option value="perlis">Perlis</option>
          <option value="sabah">Sabah</option>
          <option value="sarawak">Sarawak</option>
          <option value="selangor">Selangor</option>
          <option value="terengganu">Terengganu</option>
          <option value="kuala-lumpur">W.P. Kuala Lumpur</option>
          <option value="all-states">All States</option>
        </select>
      </div>
    </div>

    <div class="form-row form-group">
      <label class="col-sm-4 col-form-label" for="subject"
        >Enquiry Subject <span class="required">*</span></label
      >
      <div class="col-sm-8">
        <select
          class="form-control"
          id="subject"
          name="subject"
          v-model="state.subject"
        >
          <option disabled="" selected="" value="">
            -- Select your Subject --
          </option>
          <option value="collaboration">Collaboration</option>
          <option value="programs">Programs</option>
          <option value="donation">Donation</option>
          <option value="other">Others</option>
        </select>
      </div>
    </div>

    <div class="form-row form-group">
      <label class="col-sm-4 col-form-label" for="focus"
        >Area of Focus <span class="required">*</span></label
      >
      <div class="col-sm-8">
        <select
          class="form-control"
          id="focus"
          name="focus"
          v-model="state.focus"
        >
          <option disabled="" selected="" value="">
            -- Select your Focus --
          </option>
          <option value="education">Education</option>
          <option value="community">
            Community Well-being &amp; Development
          </option>
          <option value="environment">Environment</option>
        </select>
      </div>
    </div>

    <div class="form-row form-group">
      <label class="col-sm-4 col-form-label" for="message">Message</label>
      <div class="col-12">
        <textarea
          class="form-control message"
          id="message"
          name="message"
          rows="4"
          placeholder="Please leave your message here."
          maxlength="500"
          v-on:keyup="getMessageLength"
          v-model="state.message"
        ></textarea>
      </div>
      <small id="remain">{{ getMessageRemainingLength }} Characters</small>
    </div>

    <div class="form-row form-group">
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          id="pdpa"
          name="pdpa"
          v-model="state.pdpa"
        />
        <label class="form-check-label" for="pdpa">
          Personal Data Protection Act (PDPA) - Permission to collect data
          <span class="required">*</span>
        </label>
        <div class="invalid-feedback">You must agree before submitting.</div>
      </div>
    </div>

    <div class="form-row form-group">
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          id="newsletter"
          name="newsletter"
          v-model="state.newsletter"
        />
        <label class="form-check-label" for="newsletter">
          I would like to receive updates from Yayasan PETRONAS.
        </label>
      </div>
    </div>

    <div class="form-row form-group">
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          id="accurate"
          name="accurate"
          v-model="state.accurate"
        />
        <label class="form-check-label" for="accurate">
          The information provided is accurate. <span class="required">*</span>
        </label>
        <div class="invalid-feedback">You must agree before submitting.</div>
      </div>
    </div>

    <button type="submit" class="btn btn-primary" @click="submitForm">
      Submit
    </button>
    <pre class="my-4">{{ state }}</pre>
  </form>
</template>

<script>
import { reactive, computed } from "@vue/composition-api";

import useValidate from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  maxLength,
  numeric,
} from "@vuelidate/validators";

export default {
  setup() {
    const state = reactive({
      area_of_interest: "true",
      fullname: "true",
      email: "email@email.com",
      phone: "true",
      state: "true",
      subject: "true",
      focus: "true",
      message: "true",
      pdpa: "true",
      newsletter: "true",
      accurate: "true",
    });
    const rules = computed(() => {
      return {
        area_of_interest: { required },
        fullname: {
          required,
          minLength: minLength(4),
          maxLength: maxLength(255),
        },
        email: { required, email },
        phone: { required, numeric },
        state: { required },
        subject: { required },
        focus: { required },
        message: "",
        pdpa: { required },
        newsletter: {},
        accurate: { required },
      };
    });
    const v$ = useValidate(rules, state);
    return { state, v$ };
  },
  data() {
    return {
      messageLength: 0,
      messageMax: 500,
    };
  },
  methods: {
    submitForm() {
      this.v$.$validate();
      if (this.v$.$errors.length > 0) {
        console.log("there errors");
        console.log(this.v$);
      }
    },
    getMessageLength(e) {
      this.messageLength = e.target.value.length;
    },
  },
  computed: {
    getMessageRemainingLength() {
      return this.messageMax - this.messageLength;
    },
  },
};
</script>

<style lang="scss" scoped>
// @use "~src/scss/style-webform.scss";
</style>