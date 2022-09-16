<template>
  <section id="faq">
    <div class="container">
      <div class="row justify-content-center">
        <h1 class="text-center">
          <span class="text-uppercase">Frequently Asked Questions</span>
        </h1>
        <p class="h2 text-center">On the BOLD Programme</p>
        <div class="col-md-10 col-lg-8">
          <Accordion
            id="bold_programme"
            :faq="faqs.bold_programme"
            class="mb-5"
          />

          <h2 class="my-3 text-center">
            Volunteer Tutor Application and Requirements
          </h2>
          <Accordion
            id="application_requirements"
            :faq="faqs.application_requirements"
            class="mb-5"
          />

          <h2 class="my-3 text-center">Volunteer Tutor Expectations</h2>
          <Accordion
            id="tutor_expectations"
            :faq="faqs.tutor_expectations"
            class="mb-5"
          />

          <h2 class="my-3 text-center">Volunteer Tutor Management</h2>
          <Accordion
            id="tutor_management"
            :faq="faqs.tutor_management"
            class="mb-5"
          />

          <h2 class="my-3 text-center">Others</h2>
          <Accordion id="others" :faq="faqs.others" class="mb-4" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Accordion from "@/components/Accordion.vue";

export default {
  components: {
    Accordion,
  },
  data() {
    return {
      faqs: {
        bold_programme: [
          {
            question: "What is BOLD?",
            answer:
              "Sentuhan Ilmu Bridging the Online Learning Divide, or BOLD, is a comprehensive intervention programme to address learning loss among high-needs students, caused by COVID-19. BOLD will provide 2,000 high-needs children from B40 communities with Internet-enabled devices, digital modules, and immediate learning support through volunteer tutors.",
          },
          {
            question: "How does the programme work?",
            answer: `<p>The BOLD Programme will provide 2,000 children with internet-enabled devices and a structured learning support programme. The learning support programme is based on MYReaders' Literacy Toolkit which is set in the Malaysian context and structured to help children build up foundational skills step-by-step through Phonics, Reading Fluency, and Comprehension.</p>
            <p>To facilitate the learning support programme, a total of 1,600 volunteer tutors will be recruited and trained to deliver one-to-one remediation remotely via WhatsApp or phone calls using the MYReaders Literacy Toolkit that contains practical tools to provide effective literacy intervention.</p>`,
          },
          {
            question: "How long is the programme duration?",
            answer:
              "The BOLD Programme will provide students with 28 weeks of reading support and we require our volunteer tutors to commit to a minimum of 15 weeks (14 reading sessions + 1 introductory session). We gladly welcome you to volunteer beyond the 15 weeks with the same child. ",
          },
          {
            question: "How will students' progress be measured?",
            answer:
              "Students' progress in reading is measured through pre-reading and post-reading assessments. Assessments measuring each student's growth in word recognition, reading fluency, and comprehension scores will be carried out virtually by trained assessors. We will also be capturing growth in students' interest in learning through surveys.",
          },
          {
            question: "Who are we?",
            answer: `
            <h4>Yayasan PETRONAS</h4>
            <p>Yayasan PETRONAS is the owner of the BOLD Programme. We are a Corporate Social Responsibility (CSR) arm of PETRONAS. Our mission is to enrich lives for a sustainable future. We aim to deliver sustainable impact, improving the quality of life and socio-economic outcomes for communities across Malaysia through our focus areas in Education, Community Well-being and Development, and the Environment.</p>
            <h4>MYReaders</h4>
            <p>MYReaders is the implementation partner of Yayasan PETRONAS for BOLD. We are a non-profit organisation, registered under the Registrar of Societies Malaysia (ROS, No. PPM-014-10-11122015) on 11 December 2015. Our purpose is to enable children to achieve agency through literacy. Our mission is to empower children, through communities, by providing structured and sustainable reading programmes.</p>`,
          },
        ],
        application_requirements: [
          {
            question: "When can I apply and when is the deadline?",
            answer: `<p>Application can be made through <a href="http://www.bit.ly/BOLDVolunteer" target="_blank">bit.ly/BOLDVolunteer</a> from November 2021 until 31st January 2022.</p>`,
          },
          {
            question:
              "Who should apply to be a volunteer tutor? / What are the requirements to be a volunteer tutor for the programme?",
            answer: `<p>If you are an individual who wishes to address the current learning    needs of children and create long-term impact among B40 communities, BOLD offers a fully supported opportunity to do so.</p>
              <p>We are looking for individuals based anywhere in Malaysia who:</p>
              <ul>
                <li>Are patient and able to work with children</li>
                <li>Are familiar with WhatsApp & Google Drive</li>
                <li>Are physically and emotionally able to commit to reading with a child for 90 minutes a week, for 14 weeks (in a span of 4 months)</li>
                <li>Are proficient in English and able to communicate in BM and/or first language of community served</li>
                <li>Have no criminal record, especially pertaining to the safety of children</li>
              </ul>`,
          },
          {
            question:
              "Do I need to submit an application or a resume to volunteer?",
            answer: `You are only required to apply via the given link: <a href="http://www.bit.ly/BOLDVolunteer" target="_blank">bit.ly/BOLDVolunteer</a></p>`,
          },
          {
            question: "Do I need to know how to teach?",
            answer:
              "No, you will be required to complete a Volunteer Tutors' Training Module where you will be equipped with how to use the provided MYReaders teaching modules. These modules are designed to make it easy for volunteers with no teaching background to teach a child.",
          },
          {
            question: "Will I need to undergo a background check?",
            answer:
              "If you sign up as a volunteer tutor, you will be required to complete a series of self-declaration questions and provide your consent for the organiser to conduct a background check, if necessary.",
          },
          {
            question: "What's in it for me?",
            answer:
              "This volunteering experience will give you the opportunity to create meaningful impact in the life of a child, while broadening your own worldview, as you journey with them over the course of 15 weeks. In addition, you will gain transferable skills to teach any child how to read, endorsed with an e-certificate by Yayasan PETRONAS.",
          },
          {
            question:
              "How will I know if I'm successfully selected as a volunteer tutor?",
            answer: `<p>You will receive an acceptance email from <a href="mailto:volunteer@petronas.com.my" target="_blank">volunteer@petronas.com.my</a> and you are required to confirm your availability for training and the programme. If you do not receive any email from BOLD within 20 business days of your application, your application may be considered unsuccessful.</p>`,
          },
        ],
        tutor_expectations: [
          {
            question: "What am I expected to do as a volunteer tutor?",
            answer: `<p>To ensure that the learning support provided to students is of high-quality, all volunteer tutors are expected to complete a 1.5 hour self-paced Volunteer Tutor Training Module, attend a one-hour tutorial session, and participate in the official virtual onboarding session.</p>
            <p>Upon completion of the above training, you will need to commit to a minimum of 15 consecutive weeks (14 reading sessions + 1 introductory session) with your assigned child. Each weekly reading session will be 1.5 hours, and volunteer tutors are highly encouraged to spend some time preparing for the session beforehand.</p>`,
          },
          {
            question:
              "How will I be supported to carry out my duties as a volunteer tutor?",
            answer:
              "If selected, you will be provided with adequate training through a self-paced Volunteer Tutor Training Module and a hands-on tutorial session to enable you to practice in a safe environment. Details on this training will be provided once you are selected as a volunteer tutor. Throughout the programme, you will be assigned to a lead coordinator who will provide you with the necessary support, when needed.",
          },
          {
            question: "Will my performance be monitored as a volunteer tutor?",
            answer: `<p>Each volunteer tutor will be assigned to a Programme Coordinator who will monitor and track volunteer tutors' and students' progress on a weekly basis to offer feedback and support.</p>
            <p>To ensure that we are accountable to our beneficiaries, a feedback/complaints mechanism will be established with the students and their parents, which may include feedback on their respective volunteer tutors.</p>`,
          },
          {
            question:
              "Can I claim benefits or expenses paid while volunteering?",
            answer:
              "Volunteer tutors will not be paid or be reimbursed for expenses incurred for the programme. As all BOLD activities will be conducted virtually, we do not expect volunteer tutors to incur significant expenses, aside from internet/mobile data and phone calls.",
          },
        ],
        tutor_management: [
          {
            question: "Is there a set day and time for the reading sessions?",
            answer:
              "The set day and time will be decided in discussion with our school partners based on the students' schedules. You can state your availability in the registration form and we will try our best to match you accordingly.",
          },
          {
            question:
              "Can I reschedule my reading session if I have an emergency?",
            answer:
              "Yes, we understand that some circumstances cannot be avoided. Do inform your lead coordinator as soon as possible and they will coordinate with the parents to reschedule.",
          },
          {
            question: "Can I drop out from BOLD in case of an emergency?",
            answer:
              "In the event it is absolutely unavoidable, please inform your lead coordinator as far in advance as possible along with a valid reason. You will be required to ensure all commitments prior to your dropping out are completed in order to ease the transition for the child and the programme.",
          },
        ],
        others: [
          {
            question:
              "If I have further questions about volunteering with BOLD programme, who can I talk to?",
            answer:
              "Please email us at volunteer@petronas.com.my for any further enquiries.",
          },
          {
            question:
              "I don't want to volunteer. Is there any other way I can support the programme?",
            answer:
              "Please share this volunteering opportunity with those in your network who may be keen to volunteer",
          },
          {
            question:
              "Is there an opportunity to volunteer for other Yayasan PETRONAS' programmes?",
            answer:
              "You may indicate your interest to be kept on our mailing list and stay tuned for a call to sign up as volunteer for other programmes through volunteer@petronas.com.my.",
          },
          {
            question:
              "How can I provide feedback on my volunteering experience?",
            answer: `<p?We take your feedback seriously. If you face problems with any part of the volunteering process, you may share them directly with your lead coordinator. If you are not fully satisfied with the response given by your coordinator, you may extend the feedback to volunteer@petronas.com.my.</p>
            <p>Your feedback will be reviewed promptly by Yayasan PETRONAS and MYReaders and handled with full confidentiality. We will acknowledge your feedback within 10 business days and revert with an official response soon after.</p>`,
          },
        ],
      },
    };
  },
};
</script>