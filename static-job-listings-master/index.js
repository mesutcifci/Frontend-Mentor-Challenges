let main = document.getElementsByTagName("main")[0];

let title = Array.from(document.querySelectorAll('.job__title'));
let appearJob = new Set(document.querySelectorAll('.job'));
let hiddenJob = new Set();

let filterContainer = document.querySelector(".filter");
let filterWrapper = document.querySelector(".filter__wrapper");
let filterItemsContainer = document.querySelector(".filter__items-container");

let clearButton = document.querySelector(".filter__clear-button");


// Add click event to all title elements
title.forEach((element, index, array) => {

   element.addEventListener("click", () => {
      let clickedItemText = element.textContent.toLocaleLowerCase();
      createDatasetObject(clickedItemText, appearJob, "hide");
      showFilterArea();
      addFilterItems(element);
      manageBorder();
   })

});


// Get data attributes of each job and assign to property of datasetObject 
function createDatasetObject(clickedItemText, object, direction) {
   let datasetObject = {
      role: null,
      level: null,
      languages: null,
      tools: null,
   }
   for (let element of object) {
      datasetObject.role = element.dataset.role.split(" ");
      datasetObject.level = element.dataset.level.split(" ");
      datasetObject.languages = element.dataset.languages.split(" ");
      datasetObject.tools = element.dataset.tools.split(" ");


      parseDataset(clickedItemText, element, datasetObject, direction);
   }
}


// parse datasetObject values
function parseDataset(clickedItemText, element, datasetObject, direction) {
   let dataStatus;

   for (let prop in datasetObject) {
      for (let datasetValue of datasetObject[prop]) {

         if (datasetValue == clickedItemText) {
            dataStatus = true;
            if (direction == "show") {
               showItem(element);
            }
            return;
         } else {
            dataStatus = false;
         }

      }
   }


   if (dataStatus == false && direction == "hide") {
      console.log("dasdasd");
      hideItem(element);
   }

}


// Hide job elements
function hideItem(element) {
   element.classList.add("js-hide");
   hiddenJob.add(element);
   appearJob.delete(element);
}

// Add border left to first child of filtered job and remove border of other elements
function manageBorder() {

   console.log("manage");
   [...appearJob][0].classList.add("js-border");
   
   for(let counter = 1; counter < [...appearJob].length; counter++) {
      [...appearJob][counter].classList.remove("js-border");
   }

   for(let element of hiddenJob) {
      element.classList.remove("js-border");
   }
 
}


// Show job elements
function showItem(element) {
   element.classList.remove("js-hide");
   appearJob.add(element);
   hiddenJob.delete(element);
}

// When click title element show filter area
function showFilterArea() {
   filterContainer.classList.add("js-margin");
   filterWrapper.classList.add("js-filter");
}


// clone clicked title element and add to filter area
function addFilterItems(element) {
   let clone = element.cloneNode(true);

   for (let items of filterItemsContainer.children) {
      if (items.textContent == element.textContent) {
         return;
      }
   }

   insertRemoveButton(clone);
   filterItemsContainer.appendChild(clone);

}


// Add remove button to cloned element
function insertRemoveButton(element) {
   let removeButton = document.createElement("span");
   removeButton.classList.add("remove-button");

   clickRemoveButton(removeButton);
   element.appendChild(removeButton);
}


// Add click event to remove button
function clickRemoveButton(removeButton) {
   removeButton.addEventListener("click", () => {

      for (let job of appearJob) {
         hideItem(job);
      }

      let clickedItemText = removeButton.parentNode.textContent.toLowerCase();
      deleteFilterElement(clickedItemText);
      checkFilterItem();

   });
}


// When click remove button delete the button
function deleteFilterElement(text) {
   for (let element of filterItemsContainer.children) {
      if (element.textContent.toLowerCase() == text) {
         filterItemsContainer.removeChild(element);
      }
   }
}


// Check filter area is empty if empty hide filter area and show all jobs
function checkFilterItem() {

   if (filterItemsContainer.children.length > 0) {
      let clickedItemText = filterItemsContainer.children[0].textContent.toLowerCase();
      createDatasetObject(clickedItemText, hiddenJob, "show");

      if(filterItemsContainer.children.length > 1) {

         for(let counter = 1; counter < filterItemsContainer.children.length; counter++) {
            clickedItemText = filterItemsContainer.children[counter].textContent.toLowerCase();
            createDatasetObject(clickedItemText, appearJob, "hide");
         }

      }

      manageBorder();

   } else if (filterItemsContainer.children.length == 0) {
      hideFilterArea();
      resetFiltering();
      resetBorder();
   }
}

// Hide filter area
function hideFilterArea() {
   filterContainer.classList.remove("js-margin");
   filterWrapper.classList.remove("js-filter");
}

// Reset border to default view
function resetBorder() {

   for(let element of appearJob) {
      element.classList.remove("js-border");
   }   

   main.children[0].classList.add("js-border");
   main.children[1].classList.add("js-border");
   
}

// Reset filtering, move all jobs to inside of appearJob
function resetFiltering() {
   for (let job of hiddenJob) {
      showItem(job);
   }
}


clearButton.addEventListener("click", () => {
   clearFilterArea();
   hideFilterArea();
   resetFiltering();
   resetBorder();
})

function clearFilterArea() {
   for (let element of filterItemsContainer.children) {
      filterItemsContainer.removeChild(element);
   }
}

