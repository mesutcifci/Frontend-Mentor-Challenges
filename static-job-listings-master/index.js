let title = Array.from(document.querySelectorAll('.job__title'));
let appearJob = new Set(document.querySelectorAll('.job'));
let hidden = new Set();

let filterContainer = document.querySelector(".filter");
let filterWrapper = document.querySelector(".filter__wrapper");
let filterItemsContainer = document.querySelector(".filter__items-container");



// Add click event to all title elements
title.forEach((element, index, array) => {
   

   element.addEventListener("click", () => {
      let clickedItemText = element.textContent.toLocaleLowerCase();
      createDatasetObject(clickedItemText, appearJob);
      showFilterArea();
      addFilterItems(element);
   })

});


// Get data attributes of each job and assign to property of datasetObject 
function createDatasetObject(clickedItemText, object) {
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


      parseDataset(datasetObject, element, clickedItemText);
   }
}


// parse datasetObject values
function parseDataset(datasetObject, element, clickedItemText) {
   let dataStatus;

   for (let prop in datasetObject) {
      for (let datasetValue of datasetObject[prop]) {

         if (datasetValue == clickedItemText) {
            dataStatus = true;
            return;
         } else {
            dataStatus = false;
         }
      }
   }


   if (dataStatus == false) {
      hideItem(element);
   }

}


// Hide job elements
function hideItem(element) {
   element.classList.add("js-hide");
   hidden.add(element);
   appearJob.delete(element);
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

      for(let job of appearJob) {
         hideItem(job);
      }

      let clickedItemText = removeButton.parentNode.textContent.toLowerCase();

      
      deleteFilterElement(clickedItemText);

   });
}


// When click remove button delete the button
function deleteFilterElement(text) {
   for(let element of filterItemsContainer.children) {
      if(element.textContent.toLowerCase() == text) {
         filterItemsContainer.removeChild(element);
      }
   }
}  