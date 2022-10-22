<template>
  <form>
    <div :class="{ error: v$.firstName.$errors.length }">
      <input v-model="state.firstName">

      <button type="submit" @click.prevent="testsubmit">submit</button>
      <pre>{{state.firstName}}</pre>

      <div>
        <p>error here</p>
        <div v-if="v$.firstName.$error">Name field has an error.</div>
        <div class="input-errors" v-for="error of v$.firstName.$errors" :key="error.$uid">
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>
    </div>
    <pre>
    {{state}}

    {{v$}}
  </pre>
  </form>
</template>
<script setup>
import { reactive, ref, computed } from 'vue' // or '@vue/composition-api' in Vue 2.x
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

// Vuelidate
// import "https://cdn.jsdelivr.net/npm/vue-demi";
// import "https://cdn.jsdelivr.net/npm/@vuelidate/core";
// import "https://cdn.jsdelivr.net/npm/@vuelidate/validators";
const state = reactive({
  firstName: '',
  lastName: '',
  contact: {
    email: ''
  }
})

const rules = {
  firstName: { required }, // Matches state.firstName
  lastName: { required }, // Matches state.lastName
  contact: {
    email: { required, email } // Matches state.contact.email
  }
}
const v$ = useVuelidate(rules, state)

console.log(v$);

function testsubmit() {
  console.log(v$, state);

}

</script>