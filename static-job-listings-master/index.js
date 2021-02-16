let title = Array.from(document.querySelectorAll('.job__title'));
let appearJob = new Set(document.querySelectorAll('.job'));
let hidden = new Set();

let filterContainer = document.querySelector(".filter");
let filterWrapper = document.querySelector(".filter__wrapper");
let filterItemsContainer = document.querySelector(".filter__items-container");



function clickRemoveButton(removeButton) {
   removeButton.addEventListener("click", () => {
      let clickedItemText = removeButton.parentNode.textContent.toLowerCase();
      createDatasetObject(clickedItemText, true);
   });
}

function insertRemoveButton(element) {
   let removeButton = document.createElement("span");
   removeButton.classList.add("remove-button");

   clickRemoveButton(removeButton);

   element.appendChild(removeButton);
}

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

function showFilterArea() {
   filterContainer.classList.add("js-margin");
   filterWrapper.classList.add("js-filter");
}

function hideItem(element) {
   element.classList.add("js-hide");
   hidden.add(element);
   appearJob.delete(element);
}

function parseDataset(datasetObject, element, clickedItemText, direction) {
   let dataStatus;

   for (let prop in datasetObject) {
      for (let datasetValue of datasetObject[prop]) {

         if (datasetValue == clickedItemText) {
            dataStatus = true;
            if (direction) {
               hideItem(element);
            }
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


function createDatasetObject(clickedItemText, direction = false) {
   let datasetObject = {
      role: null,
      level: null,
      languages: null,
      tools: null,
   }
   for (let element of appearJob) {
      datasetObject.role = element.dataset.role.split(" ");
      datasetObject.level = element.dataset.level.split(" ");
      datasetObject.languages = element.dataset.languages.split(" ");
      datasetObject.tools = element.dataset.tools.split(" ");


      parseDataset(datasetObject, element, clickedItemText, direction);


   }
}



title.forEach((element, index, array) => {

   element.addEventListener("click", () => {
      let clickedItemText = element.textContent.toLocaleLowerCase();
      createDatasetObject(clickedItemText);
      showFilterArea();
      addFilterItems(element);
   })

});




