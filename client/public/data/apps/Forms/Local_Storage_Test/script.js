const form = document.getElementById('form');
const temp = document.getElementById('text');
form.addEventListener('submit', writeToTempStorage);

const tempData = document.querySelector('.temp-data');
const storedData = document.querySelector('.stored-data');

const storageBtn = document.querySelector('.storage-btn');
storageBtn.addEventListener('click', writeToLocalStorage);

//create array to hold data thatll get converted into json format and into a created storage variable
let data = [];

//create storage variable array and check if we have local storage to access for start of page
let localStorageText = JSON.parse(localStorage.getItem('local_storage_test_data'));
//if no storage found set default string into html element
if (localStorageText == null) {
  storedData.innerHTML = 'No local storage found';
}
//if storage found set html element to string within created array
else {
  storedData.innerHTML = localStorageText[0];
}

//write in some temp data to a paragraph element
function writeToTempStorage(e) {
  //prevent page from refreshing when using form submit
  e.preventDefault();

  //if form empty send out alert
  if(text.value.trim() == '') {
    alert('Please enter text');
  }
  //else overwrite string html element for tempData
  else {
    tempData.innerHTML = `${text.value}`;
  }
}

//copy and transfer the tempData paragraph element to localStorage paragraph element
function writeToLocalStorage() {
  //clear data array
  data = [];
  //push tempData string into the array
  data.push(`${tempData.innerHTML}`);
  //update the local storage
  updateLocalStorage();
}

function updateLocalStorage() {
  storedData.innerHTML = `${data[0]}`;
  localStorage.setItem('local_storage_test_data', JSON.stringify(data));
}
