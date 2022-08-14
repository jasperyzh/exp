<template>
  <div class="views thomson">
    <header class="header__important bg-primary text-light">
      <div class="container-fluid py-2">
        <div class="row justify-content-between">
          <div class="col-auto">
            <p><i class="bi bi-telephone-fill"></i> 1-800-555-1234</p>
          </div>
          <div class="col-auto">
            <a href="#">
              <i class="bi bi-eye text-light h5"></i>
            </a>
          </div>
        </div>
      </div>
    </header>
    <header class="header">
      <a class="logo" href="/">
        <!-- <img src="/theme/images/logo.svg" alt="" /> -->
        <!-- <img class="logo__text" src="/theme/images/logo-text.svg" alt="" /> -->
      </a>
      <nav class="header__navigation">
        <ul>
          <li class="active">
            <a href="/">Главная</a>
          </li>
          <li>
            <a href="/about.html">О больнице</a>
          </li>
          <li>
            <a href="/doctors.html">Врачи</a>
          </li>
          <li>
            <a href="/for-patients.html">Пациентам</a>
          </li>
          <li>
            <a href="/contacts.html">Контакты</a>
          </li>
        </ul>
      </nav>
      <input type="button" data-modal="search" class="search" />
      <input type="button" class="visually-impaired" />
      <a href="tel:+73842680033" class="phone">+7 (3842) <b>68 00 33</b></a>
      <div id="burger">
        <i></i>
      </div>
    </header>

    <main>
      <section id="masthead">
        <div class="container">
          <div class="row">
            <div class="col">
              <h1>TMC Fertility</h1>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div class="container">
          <div class="row">
            <div class="col">
              <h2>About TMC Fertility @ Thomson Hospital</h2>
              <img
                width="220"
                src="https://thomsonhospitals.com/wp-content/uploads/elementor/thumbs/TMC-Fertility-New-Logo-1-ohexhqyzfw41qvgja7mcs20kigc7ns58ibt4br9f2w.jpg"
                alt=""
              />
              <p>
                With over 25 years’ experience and the highest number of IVF
                babies produced in Malaysia, the name TMC Fertility is
                synonymous with successful fertility treatment. Our fertility
                treatment success is measured based on clinical pregnancies, as
                recommended by the Human Fertilization and Embryology Authority,
                UK.
              </p>
            </div>
          </div>
          <div class="col">
            <h3>
              <img
                src="https://thomsonhospitals.com/wp-content/uploads/2019/12/RTAC-Logo.jpg"
                alt=""
              />
            </h3>
            <p>
              TMC Fertility is one of the first centres in Malaysia to be
              certified by the Reproductive Technology Accreditation Committee,
              an international validation of our quality standards.
            </p>
          </div>
          <div class="col">
            <aside>
              <h3>Clinical Pregnancy</h3>
              <p>
                A clinical pregnancy is when the ultrasound scan shows a foetal
                heartbeat. This is different from a normal pregnancy rate which
                is determined by positive urine or blood test results. These
                results are not as accurate due to the medications taken during
                IVF treatment which disrupts hormonal levels in the bloodstream.
              </p>
            </aside>
          </div>
        </div>
      </section>
      <section id="about">
        <div class="container">
          <div class="row">
            <div class="col"></div>
          </div>
        </div>
      </section>
      <section id="about">
        <div class="container">
          <div class="row">
            <div class="col"></div>
          </div>
        </div>
      </section>
      <section id="about">
        <div class="container">
          <div class="row">
            <div class="col"></div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.header__important {
  p {
    margin-bottom: 0;
  }
}
</style>

<script>
export default {
  data() {
    return {
      specialties: [
        "Anaesthesiology",
        "Bariatric Surgery",
        "Breast & Endocrine Surgery",
        "Breast & Oncoplastic Surgery",
        "Cardiology",
        "Cardiothoracic Surgery",
        "Cardiovascular And Thoracic Surgery",
        "Clinical Psychology",
        "Clinical Haematology",
        "Colorectal Surgery",
        "Dermatology",
        "Endocrinology",
        "Emergency And Trauma Medicine",
        "Ent, Head & Neck Surgery",
        "Fertility Specialist",
        "Gastroenterology & Hepatology",
        "General Surgery",
        "Hand & Microsurgery",
        "Hepatobiliary Surgery",
        "Infectious Disease",
        "Intensive Care",
        "Internal Medicine",
        "Nephrology",
        "Neurology",
        "Neurosurgery",
        "Nuclear Medicine",
        "Obstetrics & Gynaecology",
        "Oncology",
        "Ophthalmology",
        "Orthopaedic Surgery",
        "Paediatrics",
        "Paediatric Cardiology",
        "Paediatrics Surgery",
        "Pathology",
        "Plastic & Reconstructive Surgery",
        "Psychiatry",
        "Radiology",
        "Radiology & Interventional Radiology",
        "Rehabilitation Medicine",
        "Respiratory Medicine",
        "Upper Gastrointestinal Surgery",
        "Urology",
        "Vascular & Endovascular Surgery",
      ],
      services: [
        "Latest Services",
        "TMC Fertility",
        "THKD COVID Care",
        "Accident & Emergency",
        "Centres Of Excellence & Clinics",
        "Dietetic Services",
        "International Patient Services",
        "Health Screening Centre",
        "Medical Technology & Facilities",
        "Rehabilitation Centre",
      ],
      patient_guide: [
        "Patient Education Guide",
        "Admission & Discharge",
        "General Facilities",
        "List Of Panel Insurance Tpa",
        "Parking",
        "Preparations for Health Screening",
        "Room Rates",
      ],
      about_us: [
        "About Thkd",
        "Awards",
        "Careers",
        "Expansion Plan",
        "Membership",
      ],
      medical_hub: ["Photo Gallery", "Podcast"],
      contact_us: [
        "Contact Information",
        "Enquiry",
        "Feedback",
        "Hospital Information",
      ],
    };
  },
};
</script>