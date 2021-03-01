let main = document.getElementsByTagName("main")[0];

let filterContainer = document.querySelector(".filter");
let filterWrapper = document.querySelector(".filter__wrapper");
let filterItemsContainer = document.querySelector(".filter__items-container");

let appearJob;
let hiddenJob = new Set();
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
    appearJob = new Set(document.getElementsByClassName("job"));
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
  elements.forEach(element => {

    element.addEventListener('click', () => {
      let clickedItemText = element.textContent;

      let data = {
        elements: appearJob,
        text: clickedItemText,
        direction: false,
      }

      startFiltering(data, hideItem);
      showFilterArea();
      addFilterItems(element, clickedItemText);

    });

  });
}

function startFiltering(data, callback) {
  console.log(data)
  for (job of data.elements) {
    let status = parseJob(job.children[2], data.text);
    if (status == data.direction) {
      callback(job);
    }
  }

}


function parseJob(element, clickedItemText) {
  let status = false;
  for (let title of element.children) {
    if (title.textContent == clickedItemText) {
      status = true;
      return status;
    }
  }
  return status;
}

function hideItem(job) {
  job.classList.add("js-hide");
  appearJob.delete(job);
  hiddenJob.add(job);
}

function showFilterArea() {
  filterContainer.classList.add("js-margin");
  filterWrapper.classList.add("js-filter");
}

function addFilterItems(element, clickedItemText) {
  let clone = element.cloneNode(true);

  for (let items of filterItemsContainer.children) {
    if (items.textContent == clickedItemText) {
      return;
    }
  }

  insertRemoveButton(clone, clickedItemText);

  filterItemsContainer.appendChild(clone);

}

function insertRemoveButton(element, clickedItemText) {
  let removeButton = document.createElement("span");
  removeButton.classList.add("remove-button");

  clickRemoveButton(removeButton, clickedItemText);
  element.appendChild(removeButton);
}


function clickRemoveButton(removeButton, clickedItemText) {
  removeButton.addEventListener("click", () => {

    for (let job of appearJob) {
      hideItem(job);
    }

    deleteFilterElement(clickedItemText);

  });
}

function deleteFilterElement(clickedItemText) {

  for (let element of filterItemsContainer.children) {
    if (element.textContent == clickedItemText) {
      filterItemsContainer.removeChild(element);
    }
  }

  reverseFiltering();

}

function reverseFiltering() {
  let filterItems = filterItemsContainer.children;
  let itemText = filterItems[0].textContent;

  let data = {
    elements: hiddenJob,
    text: itemText,
    direction: true,
  }

  startFiltering(data, showItem);

  checkFilterItems(filterItems);


}


function showItem(element) {
  element.classList.remove("js-hide");
  appearJob.add(element);
  hiddenJob.delete(element);
}

function checkFilterItems(filterItems) {

  let data = {
    elements: appearJob,
    text: null,
    direction: false,
  }

  for (let counter = 1; counter < filterItems.length; counter++) {
    let text = filterItems[counter].textContent;
    data.text = text;
    startFiltering(data, hideItem);
  }

}

getData(populateMain);


