import { fetchCv } from "./services/fetchCv.js";

const workExperienceEl = document.getElementById("work-experience");

async function printCv() {
  let cvArray = await fetchCv();

  cvArray.forEach(function(item) {
    const workExperienceHtml = `
    <article class="work-ex-article">
      <div class="work">
        <h3>${item.title}</h3>
        <p class="workload">${item.employment_type}</p>
      </div>
      <div class="office">
        <img src="./assets/img/icons/office.svg" class="icon" alt="office icon">
        <p>${item.workspace}</p>
      </div>
      <div class="loc-cal">
        <div class="location">
          <img src="./assets/img/icons/location.svg" class="icon" alt="location icon">
          <p>${item.location}</p>
        </div>
        <div class="calendar">
          <img src="./assets/img/icons/calendar.svg" class="icon" alt="calendar icon">
          <p>${item.duration}</p>
        </div>
      </div>
    </article>
    `
    workExperienceEl.innerHTML += workExperienceHtml;
  })
}

printCv();
