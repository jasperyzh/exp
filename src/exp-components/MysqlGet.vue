<template>
  <h2>MysqlGet</h2>
  <ReferenceList :list="references" />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      references: [
        {
          title: "VUE JS CRUD + Node.js + Express + MySQL Example",
          link: "https://www.tutsmake.com/vue-js-crud-node-js-express-mysql-example/",
        },
        {
          title:
            "Vue.js + Node.js + Express + MySQL example: Build a full-stack CRUD Application",
          link: "https://www.bezkoder.com/vue-js-node-js-express-mysql-crud-example/",
        },
        {
          title: "How To Use MySQL With Node & Express",
          link: "https://www.terlici.com/2015/08/13/mysql-node-express.html",
        },
        {
          title:
            "which database suits my application mysql or mongodb ? using Node.js , Backbone , Now.js",
          link: "https://stackoverflow.com/questions/10110035/which-database-suits-my-application-mysql-or-mongodb-using-node-js-backbone",
        },
      ],
    };
  },
});
</script>