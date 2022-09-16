<template>
  <div class="container">
    <div class="row">
      <div class="col-auto mx-auto">
        <h1>{{ NAME }}</h1>
        <p>
          <small>{{ DATE }}</small>
        </p>
        <p>
          Useable by Google Calendar, Outlook.com, Office 365. The rest need ICS
          Calendar File, use
          <a href="https://ical.marudot.com/" target="_blank"
            >iCalendar Event Maker</a
          >
          to create .ics file
        </p>

        <!-- <button @click="copyText">Copy</button> -->
      </div>
      <div class="col-8 mx-auto">
        <p>variables:</p>
        <pre style="white-space: pre-wrap; word-wrap: break-word">
rru: {{ rru }}
startdt: {{ startdt }}
enddt: {{ enddt }}
google_date: {{ google_date }}
path: {{ path }}
location: {{ location }}
subject: {{ subject }}
body_details: {{ body_details }}
        </pre>
      </div>
      <div class="col-12 text-center my-1">
        <a
          href="https://campaigns.litmus.com/_email/test/newnewyork.ics"
          class="btn btn-warning btn-lg"
          ><!--[if mso
            ]><i
              style="
                letter-spacing: 25px;
                mso-font-width: -100%;
                mso-text-raise: 30pt;
              "
            >
            </i><!
          [endif]--><span style="mso-text-raise: 15pt"
            >Add to your Calendar</span
          ><!--[if mso
            ]><i style="letter-spacing: 25px; mso-font-width: -100%"> </i><!
        [endif]--></a>
      </div>
      <div class="col-12 text-center my-1">
        <a
          :href="`https://outlook.office.com/calendar/0/deeplink/compose?body=${body_details}&enddt=${enddt}&location=${location}&path=${path}&rru=${rru}&startdt=${startdt}&subject=${subject}`"
          target="_blank"
          class="btn btn-warning btn-sm mx-1"
          >Outlook.com</a
        >

        <a
          :href="`https://outlook.office.com/calendar/0/deeplink/compose?body=${body_details}&enddt=${enddt}&location=${location}&path=${path}&rru=${rru}&startdt=${startdt}&subject=${subject}`"
          target="_blank"
          class="btn btn-warning btn-sm mx-1"
          >Office 365</a
        >

        <a
          :href="`https://calendar.google.com/calendar/render?action=TEMPLATE&dates=${google_date}&details=${body_details}&location=${location}&text=${subject}`"
          target="_blank"
          class="btn btn-warning btn-sm mx-1"
          ref="add_to_gcalendar_button"
          >Google</a
        >
      </div>
      <div class="col-auto mx-auto my-3">
        <button @click="copyButtonHtml">
          Copy Google Calendar Button in HTML format
        </button>
      </div>
    </div>
    <div class="row my-3">
      <div class="col-8 mx-auto">
        <Note :note="NOTE" />
      </div>
      <div class="col">
        <a
          class="btn btn-info"
          href="https://calendar.google.com/calendar/r/eventedit?text=My+Custom+Event&dates=20180512T230000Z/20180513T030000Z&details=For+details,+link+here:+https://example.com/tickets-43251101208&location=Garage+Boston+-+20+Linden+Street+-+Allston,+MA+02134"
          >Add to Calendar: Google</a
        >
        <pre>
220322: - Button.vue
Update Feb 2018:    
New base url: https://calendar.google.com/calendar/r/eventedit

ext (name of the event)

dates (ISO date format, startdate/enddate - must have both start and end time)
an event w/ start/end times: 20131208T160000/20131208T180000
all day events, you can use 20131208/20131209 - end date must be +1 day to whatever you want the end date to be.

ctz (timezone such as America/New_York - leave blank to use the user's default timezone. Highly recommended to include this in almost all situations. For example, a reminder for a video conference: if three people in different timezones clicked this link and set a reminder for their "own" Tuesday at 10:00am, this would not work out well.)

details (url encoded event description/details)

location (url encoded location of the event - make sure it's an address google maps can read easily)

add (comma separated list of emails - adds guests to your new event)

the old url structure above now redirects here
supports https
deals w/ timezones better
accepts + for space in addition to %20 (urlencode vs rawurlencode in php - both work)
        </pre>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
const NAME = "Calendar Button Generator";
const DATE = "220418";

const NOTE = `
- [How to Create an “Add to Calendar” Link for Your Emails](https://www.litmus.com/blog/how-to-create-an-add-to-calendar-link-for-your-emails/)

next:
1. find out how to change the date/time values
2. add input to change the button values on the fly: +sanitize and encode
3. generate .ICS file?
`;

const rru = "addevent";
const startdt = "2022-01-12T18%3A00%3A00%2B00%3A00";
const enddt = "2022-01-12T20%3A00%3A00%2B00%3A00";
const google_date = "20220112T180000Z%2F20220112T200000Z";
const path = "%2Fcalendar%2Faction%2Fcompose";
const body_details =
  "Learn%20all%20about%20the%20rules%20of%20the%20Motorway%20and%20how%20to%20access%20the%20fast%20lane.%0A%0Ahttps%3A%2F%2Fen.wikipedia.org%2Fwiki%2FGridlock_%28Doctor_Who%29";
const location = "New%20Earth";
const subject = "Also%20Welcome%20to%20the%20Motorway";

const open = "<button>";
const text = "helloworld";
const close = "</button>";
const outputButton = computed(() => open + text + close);

const clone = ref(null);
const add_to_gcalendar_button = ref(null);

function copyButtonHtml() {
  // document.execCommand("copy"); // legacy
  let copyText = add_to_gcalendar_button.value.outerHTML;
  console.dir(copyText.outerHTML);
  navigator.clipboard.writeText(copyText).then(
    () => console.log("copyText(); clipboard successfully set - ", copyText),
    () => console.log("copyText(); clipboard write failed")
  );
}
</script>