let main = document.getElementsByTagName("main")[0];
let appearJob;
let hiddenJob = [];
let jobTitles = [];

const getData = async callback => {
  let requestUrl = "./data.json"

  let response = await new Promise(resolve => {
    let request = new XMLHttpRequest()
    request.open("GET", requestUrl, true)
    request.responseType = "json"
    request.onload = () => {
      resolve(request.response)
    }
    request.onerror = () => {
      resolve(undefined)
      console.error("Error during XMLHttpRequest")
    }
    request.send()
  })

  return response;

}

getData().then(
  resolve => {
    populateMain(resolve);
  }
).then(
  resolve => {
    appearJob = Array.from(document.getElementsByClassName("job"));
    jobTitles = Array.from(document.getElementsByClassName("job__title"));
    makeClickable(jobTitles);
  }
);

function populateMain(data) {

  for (let info of data) {
    main.insertAdjacentHTML("beforeend",

      `<div id="template" class="job">

        <img src="${info.logo}" alt="" class="job__company-logo">
  
        <div class="job__info">
  
          <div class="job__container job__container--first">
            <span class="job__company-name">${info.company}</span>
            ${info.new ? '<span class="job__status">New</span>' : ''}
            ${info.featured ? '<span class="job__status">Featured</span>' : ''}
          </div>
  
          <h3 class="job__name">${info.position}</h3>
  
          <div class="job__container job__container--second">
            <span class="job__date">${info.postedAt}</span>
            <span class="dot"></span>
            <span class="job__work-type">${info.contract}</span>
            <span class="dot"></span>
            <span class="job__location">${info.location}</span>
          </div>
        </div>
  
        <div class="job__title-container">
          <span class="job__title">${info.role}</span>
          <span class="job__title">${info.level}</span>
          ${info.languages.map(element => `<span class="job__title">${element}</span>`).join(" ")}
          ${info.tools.map(element => `<span class="job__title">${element}</span>`).join(" ")}
        </div>
  
      </div>`

    );
  }

}

function makeClickable(elements) {
  elements.forEach( element => {
    element.addEventListener('click', startFiltering);
  });
}

function startFiltering(element) {
  let clickedItemText = element.target.textContent;
  for(job of appearJob) {
    let status = parseJob(job.children[2], clickedItemText);
    if(status == false) {
      hideItem(job);
    }
  }

}

function parseJob(element, clickedItemText) {
  let status = false;
  for(let title of element.children) {
    if(title.textContent == clickedItemText) {
      status = true;
      return status;
    }
  }
  return status;
}

function hideItem(job) {
  job.classList.add("js-hide");
  let index = appearJob.indexOf(job);
  if(index > -1) {
    appearJob.splice(index, 1);
  }
  hiddenJob.push(job);
}

getData(populateMain);


