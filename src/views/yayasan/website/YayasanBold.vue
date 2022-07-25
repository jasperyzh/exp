<template>
  <section id="yayasan-bold" class="yayasan-bold">
    <section class="container">
      <div class="row">
        <div class="col offset-lg-1">
          <h1 class="py-4">
            Sentuhan Ilmu Bridging the
            <br />Online Learning Divide (BOLD) Programme
          </h1>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <figure>
            <img
              class="d-block mx-auto"
              src="@/client/petronas-yayasan/bold-child.jpg"
              alt="BOLD child at learning"
            />
          </figure>
        </div>
        <div class="col-lg-6 align-self-center">
          <p>
            Sentuhan Ilmu Bridging the Online Learning Divide, or BOLD, is a
            comprehensive intervention programme under Yayasan PETRONAS with its
            implementation partner, MYReaders to address learning loss among
            high-needs students, caused by COVID-19. BOLD will provide 2,000
            high-needs children from B40 communities with Internet-enabled
            devices, digital modules, and devices and a structured learning
            support programme with volunteer tutors.
          </p>
          <p>
            The learning support programme is based on MYReaders’ Literacy
            Toolkit which is set in the Malaysian context and structured to help
            children build up foundational skills step-by-step through Phonics,
            Reading Fluency, and Comprehension.
          </p>
          <p>
            To facilitate the learning support programme, a total of 1,600
            volunteer tutors will be recruited and trained to deliver one-to-one
            remediation remotely via WhatsApp using the MYReaders Literacy
            Toolkit that contains practical tools to provide effective literacy
            intervention.
          </p>
        </div>
      </div>
    </section>
    <section class="container">
      <div class="row">
        <div class="col-lg-5 text-lg-end">
          <h2 class="rellax" data-rellax-speed="0" data-rellax-desktop-speed="-0.6">Why BOLD?</h2>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-6 offset-lg-5">
          <hr class="hr__desktop" />
          <p>
            We are facing the biggest challenge in education and cannot just
            rely on schools to help our children. As individuals, we have a key
            role to play in helping these children gain foundational literacy
            effectively, through programmes which are structured and
            sustainable.
          </p>
          <p>
            Children from low-income communities are disproportionately affected
            by learning loss due to COVID- 19. We need to be particularly
            concerned for children who are now in their foundational years. For
            students who are in Year 3 this year, missing out on school for just
            three months may result in 72% of students falling so far behind
            that by Form 4 they may drop out or not be able to learn anything in
            school.
          </p>
          <p>
            As members of society, we need to act urgently and collectively to
            address the long-term negative effects of COVID-19 on Education.
          </p>
        </div>
      </div>
    </section>
    <section class="container">
      <div class="row">
        <div class="col-lg-5 text-lg-end">
          <h2 class="rellax" data-rellax-speed="0" data-rellax-desktop-speed="-0.7">BOLD Goals</h2>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-6 offset-lg-5">
          <hr class="hr__desktop" />
          <p>
            Sentuhan Ilmu Bridging the Online Learning Divide (BOLD) will
            provide 2,000 underprivileged students with internet-enabled digital
            devices to engage in remote or hybrid learning and assist students
            with immediate learning support.
          </p>
          <p>
            These actions will enable high needs students to participate in
            learning, catch up with their peers, and address learning losses
            caused by COVID-19 for a Malaysia where all students have equitable
            access to education.
          </p>
        </div>
      </div>
    </section>

    <section class="container">
      <div class="row">
        <div class="col-lg-5 text-lg-end">
          <h2 class="rellax" data-rellax-speed="0" data-rellax-desktop-speed="-0.8">
            BOLD <br class="d-none d-lg-block" />Target Outcomes
          </h2>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-6 offset-lg-5">
          <hr class="hr__desktop" />
          <p>Our collective effort is set to create high social impact.</p>
          <p>
            Together, we will enable these high needs students to address their
            learning loss and pursue long terms quality learning, through:
          </p>
          <ul class="list-unstyled">
            <li class="my-4 h4">
              <strong
                >Increasing their reading proficiency through growing their word
                recognition and reading fluency skills.</strong
              >
            </li>
            <li class="my-4 h4">
              <strong
                >Increasing their interest in STEM and scientific thinking
                skills</strong
              >
            </li>
          </ul>
        </div>
      </div>
    </section>
  </section>
</template>
<script>
import "https://cdn.jsdelivr.net/gh/dixonandmoe/rellax@master/rellax.min.js";
export default {
  mounted() {
    // Accepts any class name
    var rellax = new Rellax(".rellax");
  },
};
</script>
<style lang="scss" scoped>
@use "@/scss/style-yayasan" as *;

hr.hr__desktop {
  display: none;
  @media (min-width:1201px){
    display: block;
    background-color: $primary;
  }
}
</style>