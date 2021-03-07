let main = document.getElementsByTagName("main")[0];

let filterContainer = document.querySelector(".filter");
let filterWrapper = document.querySelector(".filter__wrapper");
let filterItemsContainer = document.querySelector(".filter__items-container");

let clearButton = document.querySelector(".filter__clear-button");

let appearJob;
let hiddenJob = new Set();
let jobTitles = [];

// Get data from data.json file
function getData() {
  let requestUrl = "./data.json"

  let response = new Promise(resolve => {
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
  data => {
    populateMain(data);
    appearJob = new Set(document.getElementsByClassName("job"));
    jobTitles = Array.from(document.getElementsByClassName("job__title"));
    makeClickable(jobTitles);
  }
);



// create html elements with data from json
function populateMain(data) {
  let counter = 1;

  for (let info of data) {
    main.insertAdjacentHTML("beforeend",

      `<div id="template" class="job ${counter <= 2 ? 'js-border' : '' }" data-id=${counter}>

        <img src="${info.logo}" alt="" class="job__company-logo">
  
        <div class="job__info">
  
          <div class="job__container job__container--first">
            <span class="job__company-name">${info.company}</span>
            ${info.new ? '<span class="job__status">New!</span>' : ''}
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

    counter++;
  }
}



// Add click event to each job element
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



// Start filtering, data is an object includes 
// element list: could be appearJob or hiddenJob
// text: could be clicked element text content or something else
// direction: could be true or false
function startFiltering(data, callback) {

  for (job of data.elements) {

    // job.children[2] is job__title-container
    let status = parseJob(job.children[2], data.text);
    if (status == data.direction) {
      callback(job);
    }

  }

  manageBorder();
}



// Parses the elements and returns a boolean
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
  
  // if the clicked element exists in filter area, stop function
  for (let items of filterItemsContainer.children) {

    if (items.textContent == clickedItemText) {
      return;
    }

  }
  
  let clone = element.cloneNode(true);

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

    reverseFiltering();

  });
}



function deleteFilterElement(clickedItemText) {

  for (let element of filterItemsContainer.children) {
    if (element.textContent == clickedItemText) {
      filterItemsContainer.removeChild(element);
    }
  }

}



// Moves elements from hiddenJob to appearJob
function reverseFiltering() {
  let filterItems = filterItemsContainer.children;

  // if no item in filter area
  if (filterItems.length == 0) {
    resetFiltering();
    hideFilterArea();
    resetBorder();
    return;
  }

  // Gets text content of first filter item in filter area
  let itemText = filterItems[0].textContent;


  let data = {
    elements: hiddenJob,
    text: itemText,
    direction: true,
  }

  startFiltering(data, showItem);
  checkFilterItems(filterItems);

}



// Make all items appear
function resetFiltering() {
  for (let job of hiddenJob) {
    showItem(job);
  }
}



function hideFilterArea() {
  filterContainer.classList.remove("js-margin");
  filterWrapper.classList.remove("js-filter");
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



// Insert a border to the first element of appear elements 
// and remove from others
function manageBorder() {

  removeBorder(appearJob);

  let smallest = [...appearJob][0];

  for (let job of appearJob) {
    if (Number.parseInt(job.dataset.id) < Number.parseInt(smallest.dataset.id)) {
      smallest = job;
    }
  }

  insertBorder(smallest);

  removeBorder(hiddenJob);

}



function insertBorder(element) {
  element.classList.add("js-border");
}



function removeBorder(elements) {
  for(let job of elements) {
    job.classList.remove("js-border");
  }
}



function resetBorder() {

  removeBorder(appearJob);  

  main.children[0].classList.add("js-border");
  main.children[1].classList.add("js-border");
  
}



clearButton.addEventListener("click", () => {
  clearFilterArea();
  resetFiltering();
  hideFilterArea();
  resetBorder();
});



function clearFilterArea() {
  for (let element of Array.from(filterItemsContainer.children)) {
    filterItemsContainer.removeChild(element);
  }
}