<template>
  <div class="container">
    <div class="row">
      <h1>{{ site.title }}</h1>
      <p>
        <small>{{ site.date }}</small>
      </p>
    </div>
    <div class="row my-4">
      <div class="col">
          <h2>Import .json &amp; parse into table</h2>
        <div v-html="htmlTable"></div>
      </div>
    </div>
    <div class="row my-4">
      <div class="col">
          <h2>Import .csv, papaparse into json, &amp; parse into table</h2>
        <div v-html="testTable"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import "https://cdn.jsdelivr.net/npm/simple-datatables@latest";

import { reactive, ref, onMounted, onBeforeMount } from "vue";

import Papa from "papaparse";

import NormalCsv from "@/assets/mdec-list_of_msc_company_31dec2021.csv?raw";
import MdecWebsiteMeta from "@/assets/mdec-company_website.json";

const site = reactive({
  title: "Csv DataTable",
  date: "220418",
});
const htmlTable = ref("");

const testTable = ref("");

onBeforeMount(() => {
  htmlTable.value = htmlTableGenerator2(MdecWebsiteMeta);

  Papa.parse(NormalCsv, {
    complete: function (result) {
      console.log("Finished:", result.data);
      if (result.data && result.data.length > 0) {
        testTable.value = testTableGenerator(result.data);
      }
    },
  });
});
onMounted(async () => {
  const table = new simpleDatatables.DataTable("#csv-table", {
    // searchable: false,
    // fixedHeight: true,
  });
  const test_table = new simpleDatatables.DataTable("#csv-test-table", {
    // searchable: false,
    // fixedHeight: true,
  });
});

function htmlTableGenerator2(content) {
  /* let html =
    '<table id="csv-table" class="table table-condensed table-hover table-striped">'; */

  if (content.length == 0 || typeof content[0] === "undefined") {
    // return null;
    console.log("content.length", content.length);
  } else {
    console.log("content.length", content.length);
  }

  var cols = [];

  for (var i = 0; i < content.length; i++) {
    for (var k in content[i]) {
      if (cols.indexOf(k) === -1) {
        // Push all keys to the array
        cols.push(k);
      }
    }
  }

  // Create a table element
  var table = document.createElement("table");

  // Create table row tr element of a table
  var tr = table.insertRow(-1);

  for (var i = 0; i < cols.length; i++) {
    // Create the table header th element
    var theader = document.createElement("th");
    theader.innerHTML = cols[i];

    // Append columnName to the table row
    tr.appendChild(theader);
  }

  // Adding the data to the table
  for (var i = 0; i < content.length; i++) {
    // Create a new row
    let trow = table.insertRow(-1);
    for (var j = 0; j < cols.length; j++) {
      var cell = trow.insertCell(-1);

      // Inserting the cell at particular place
      cell.innerHTML = content[i][cols[j]];
    }
  }

  // Add the newly created table containing json data
  /* var el = document.getElementById("table");
            el.innerHTML = "";
            el.appendChild(table); */
  table.classList.add(
    "table",
    "table-condensed",
    "table-hover",
    "table-striped"
  );
  table.setAttribute("id", "csv-table");

  return table.outerHTML;
}
function testTableGenerator(content) {
  let html =
    '<table id="csv-test-table" class="table table-condensed table-hover table-striped">';

  if (content.length == 0 || typeof content[0] === "undefined") {
    return null;
  } else {
    const header = content[0];
    const data = content.slice(1);

    html += "<thead>";
    html += "<tr>";
    header.forEach(function (colData) {
      html += "<th>" + colData + "</th>";
    });
    html += "</tr>";
    html += "</thead>";
    html += "<tbody>";

    data.forEach(function (row) {
      if (header.length === row.length) {
        html += "<tr>";
        row.forEach(function (colData) {
          html += "<td>" + colData + "</td>";
        });
        html += "</tr>";
      }
    });

    html += "</tbody>";
    html += "</table>";

    return html;
  }
}
</script>


<style scoped>
@import "https://cdn.jsdelivr.net/npm/simple-datatables@latest/dist/style.css";
</style>