const inputBox = document.querySelector('#input-box');
const list2Container = document.querySelector('#list2-container');
const inprogressContainer = document.querySelector('#inprogress-container');
const reviewContainer = document.querySelector('#review-container');
const doneContainer = document.querySelector('#done-container');

function addTask(){
  if(inputBox.value == '') {
    alert("Please enter a task!");
  }
  else{
    let li = document.createElement('li');
    li.innerHTML = inputBox.value;
    list2Container.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);
  }
  inputBox.value = '';
  saveData()
}
list2Container.addEventListener('click', function(e){
    if(e.target.tagName == 'LI'){
        e.target.classList.toggle('checked');
        saveData()
    }
    else if(e.target.tagName == 'SPAN'){
        e.target.parentElement.remove();
        saveData()
    }
}, false);

inprogressContainer.addEventListener('click', function(e){
    if(e.target.tagName == 'LI'){
        e.target.classList.toggle('checked');
        saveData()
    }
    else if(e.target.tagName == 'SPAN'){
        e.target.parentElement.remove();
        saveData()
    }
}, false);

reviewContainer.addEventListener('click', function(e){
    if(e.target.tagName == 'LI'){
        e.target.classList.toggle('checked');
        saveData()
    }
    else if(e.target.tagName == 'SPAN'){
        e.target.parentElement.remove();
        saveData()
    }
}, false);

doneContainer.addEventListener('click', function(e){
    if(e.target.tagName == 'LI'){
        e.target.classList.toggle('checked');
        saveData()
    }
    else if(e.target.tagName == 'SPAN'){
        e.target.parentElement.remove();
        saveData()
    }
}, false);

function saveData(){
  localStorage.setItem("data", list2Container.innerHTML);

}
function saveProgress(){
    localStorage.setItem("prog-data", inprogressContainer.innerHTML);
}
function saveReview(){
    localStorage.setItem("rev-data", reviewContainer.innerHTML);
}
function saveDone(){
    localStorage.setItem("done-data", doneContainer.innerHTML);
}
function showTask(){
    list2Container.innerHTML = localStorage.getItem("data");
}
function clearAll(){
  localStorage.clear();
  list2Container.innerHTML = '';
}

showTask();
