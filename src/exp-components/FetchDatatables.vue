<template>
  <table id="myTable"></table>
</template>
<script>
import PropertyPriceByStates from "../datas/property_price_by_states.csv?raw";

import { DataTable } from "simple-datatables";

export default {
  mounted() {
    this.PropertyPriceByStates = this.csvJSON(PropertyPriceByStates);

    // https://github.com/fiduswriter/Simple-DataTables/wiki
    const dataTable = new DataTable("#myTable", {
      fixedHeight: true,
      data: {
        headings: Object.keys(this.PropertyPriceByStates[0]),
        data: this.PropertyPriceByStates.map((item) => Object.values(item)),
      },
      perPage: 999
    });
  },
  data() {
    return {
      PropertyPriceByStates,
    };
  },
  methods: {
    csvJSON(csv) {
      var lines = csv.split("\n");
      var result = [];
      // NOTE: If your columns contain commas in their values, you'll need
      // to deal with those before doing the next step
      var headers = lines[0].split(",");
      for (var i = 1; i < lines.length; i++) {
        var obj = {};
        var currentline = lines[i].split(",");
        for (var j = 0; j < headers.length; j++) {
          obj[headers[j]] = currentline[j].trim().replace(/\s/g, "");
        }
        result.push(obj);
      }
      return result;
      //   return JSON.stringify(result);
    },
  },
};
</script>
<style >
@import "simple-datatables/src/style.css";
</style>