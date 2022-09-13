<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h2>PORTFOLIO</h2>
        <a href="https://www.w3schools.com/howto/howto_js_portfolio_filter.asp"
          >https://www.w3schools.com/howto/howto_js_portfolio_filter.asp</a
        >
      </div>
    </div>
    <div class="row my-3">
      <div id="myBtnContainer">
        <button
          class="btn btn-secondary active"
          @click="filterSelection('all')"
        >
          Show all
        </button>
        <button class="btn btn-secondary" @click="filterSelection('nature')">
          Nature
        </button>
        <button class="btn btn-secondary" @click="filterSelection('cars')">
          Cars
        </button>
        <button class="btn btn-secondary" @click="filterSelection('people')">
          People
        </button>
      </div>
    </div>
    <div class="row row-cols-4">
      <div
        :class="`col d-none gallery__item ${item.tag}`"
        v-for="(item, index) in content"
        :key="`item-${index}`"
      >
        <div class="content">
          <img
            :src="placeholder_images[index]"
            :alt="item.title"
            style="width: 100%"
          />
          <p class="m-0">
            <small>{{ item.tag }}</small>
          </p>
          <h4>{{ item.title }}</h4>
          <p>Lorem ipsum dolor.. {{ item.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

function filterSelection(c) {
  console.log("filterselection", c);
  var x, i;
  x = document.getElementsByClassName("gallery__item");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    x[i].classList.add("d-none");
    if (x[i].className.indexOf(c) > -1) {
      x[i].classList.remove("d-none");
    }
  }
}

onMounted(() => {
  //   this.filterSelection("all"); // Execute the function and show all columns
  filterSelection("all");

  // Add active class to the current button (highlight it)
  var btnContainer = document.getElementById("myBtnContainer");
  var btns = btnContainer.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace("active", "");
      this.className += " active";
    });
  }
});

defineProps(["placeholder_images"]);
/* 
const img_placeholder = [
  "https://images.pexels.com/photos/12823101/pexels-photo-12823101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/12292899/pexels-photo-12292899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/12507122/pexels-photo-12507122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/12531215/pexels-photo-12531215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/10990030/pexels-photo-10990030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/5611139/pexels-photo-5611139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/12701332/pexels-photo-12701332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/12422390/pexels-photo-12422390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/12640456/pexels-photo-12640456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
]; */

const content = [
  {
    title: "hello world",
    tag: "nature",
  },
  {
    title: "hello world",
    tag: "nature",
  },
  {
    title: "hello world",
    tag: "cars",
  },
  {
    title: "hello world",
    tag: "cars",
  },
  {
    title: "hello world",
    tag: "cars",
  },
  {
    title: "hello world",
    tag: "people",
  },
  {
    title: "hello world",
    tag: "people",
  },
  {
    title: "hello world",
    tag: "people",
  },
];
</script>

<style>
.content {
  padding: 1rem;
}
.content img {
  aspect-ratio: 1/1;
  object-fit: cover;
  max-width: 220px;
}
</style>