const inputBox = document.querySelector('#input-box');
const listContainer = document.querySelector('#list-container');

function addTask(){
  if(inputBox.value == '') {
    alert("Please enter a task!");
  }
  else{
    let li = document.createElement('li');
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    list2Container.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);
  }
  inputBox.value = '';
  saveData()
}

listContainer.addEventListener('click', function(e){
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
  localStorage.setItem("data", listContainer.innerHTML);

}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
function clearAll(){
  localStorage.clear();
  listContainer.innerHTML = '';
}

showTask();
