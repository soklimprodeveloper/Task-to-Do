// DOM dailog form
const formCreateUrgentTask = document.getElementById("task-dialog-urgent");
const formCreateDailyTask = document.getElementById("task-dialog-daily");
const formCreateFreeTask = document.getElementById("task-dialog-free");

const formDeleteUrgentTask = document.getElementById("form-delete-urgent");
const formDeleteDailyTask = document.getElementById("form-delete-daily");
const formDeleteFreeTask = document.getElementById("form-delete-free");

// Dom container urgent task
const containerUrgentTask = document.getElementById("tasks-urgent");
const containerDailyTask = document.getElementById("tasks-daily");
const containerFreeTask = document.getElementById("tasks-free");

// button action 
const btnCreateUrgent = document.getElementById("create-urgent");
const btnCreateDaily = document.getElementById("create-daily");
const btnCreateFree = document.getElementById("create-free");

const btnOkeyUrgent = document.getElementById("okey-urgent");
const btnOkeyDaily = document.getElementById("okey-daily");
const btnOkeyFree = document.getElementById("okey-free");

// title dialog task
const titleUrgent = document.getElementById("title-urgent");
const titleDaily = document.getElementById("title-daily");
const titleFree = document.getElementById("title-free");

// Store all tasks
let taskUrgents = [];
let taskDailys = [];
let taskFrees = [];

// Store all task done 
var doneUrgents = [];
var doneDailys = [];
var doneFrees = [];


// Edit all tasks
let storeEditUrgentTask = null;
let storeEditDailyTask = null;
let storeEditFreeTask = null;

// Show element function
function showElement(element){
    element.style.display = "block";
}

// Hide element function 
function hideElement(element){
    element.style.display = "none";
}

// localStorage task urgents
function storeUrgentTask(){
    localStorage.setItem("taskUrgents", JSON.stringify(taskUrgents));
}

// localStorage done task urgents
function storeDoneUrgentTask(){
    localStorage.setItem("doneUrgents",JSON.stringify(doneUrgents));
}

// localStorage task daily
function storeDailyTask(){
    localStorage.setItem("taskDailys", JSON.stringify(taskDailys));
}

// localStorage done task daily
function storeDoneDailyTask(){
    localStorage.setItem("doneDaily",JSON.stringify(doneDailys));
}

// localStorage task free
function storeFreeTask(){
    localStorage.setItem("taskFree", JSON.stringify(taskFrees));
}

// localStorage done task free
function storeDoneFreeTask(){
    localStorage.setItem("doneFree",JSON.stringify(doneFrees));
}

// load urgent task
function loadUrgentTask() {
    let urgentTaskStorage = JSON.parse(localStorage.getItem("taskUrgents"));
    if (urgentTaskStorage !== null) {
      taskUrgents = urgentTaskStorage;
    }
}

// load done urgent task
function loadDoneUrgentTask(){
    let urgentTaskDone = JSON.parse(localStorage.getItem("doneUrgents"))
    if (urgentTaskDone !== null){
        doneUrgents = urgentTaskDone;
    }
}

// load daily task
function loadDailyTask() {
    let dailyTaskStorage = JSON.parse(localStorage.getItem("taskDailys"));
    if (dailyTaskStorage !== null) {
      taskDailys = dailyTaskStorage;
    }
}

// load done daily task
function loadDoneDailyTask(){
    let dailyTaskDone = JSON.parse(localStorage.getItem("doneDaily"));
    if (dailyTaskDone !== null){
        doneDailys = dailyTaskDone;
    }
}

// load free task
function loadFreeTask(){
    let freeTaskStorage = JSON.parse(localStorage.getItem("taskFree"));
    if (freeTaskStorage != null){
        taskFrees = freeTaskStorage;
    }
}

// load done free task
function loadDoneFreeTask(){
    let freeTaskDone = JSON.parse(localStorage.getItem("doneFree"))
    if (freeTaskDone !== null){
        doneFrees = freeTaskDone;
    }
}

// Create urgent task
function onCreateUrgent(){

    if(storeEditUrgentTask != null){
        let editTaskUrgent = taskUrgents[storeEditUrgentTask];
        editTaskUrgent.title = document.getElementById("urgent-task-title").value;
        editTaskUrgent.date = document.getElementById("urgent-task-date").value;
        editTaskUrgent.time = document.getElementById("urgent-task-time").value;

        // check value null
        if((editTaskUrgent.title !="") && (editTaskUrgent.date !="") && (editTaskUrgent.time !="")){
            // Set to localStorage
            storeUrgentTask();

            // display
            displayUrgentTask();

            hideElement(formCreateUrgentTask);
            // reload page
            window.location.reload();
        }
        else{
            alert("You are missing input your task! Please! input it.");
        }

    }else{
        let newUrgentTask = {};
        let urgentTitle = document.getElementById("urgent-task-title").value;
        let urgentDate = document.getElementById("urgent-task-date").value;
        let urgentTime = document.getElementById("urgent-task-time").value;

        if((urgentTitle != "") && (urgentDate != "") && (urgentTime != "")){
            newUrgentTask.title = urgentTitle;
            newUrgentTask.date = urgentDate;
            newUrgentTask.time = urgentTime;

            taskUrgents.push(newUrgentTask);

            // Set to localStorage
            storeUrgentTask();

            // display
            displayUrgentTask();

            hideElement(formCreateUrgentTask);
            // reload page
            window.location.reload();
            
        }
        else{
            alert("You are missing input your task! Please! input it.");
        } 
    }

    
}

// Cancel edit task urgent
function onCancelEditUrgent(){
    hideElement(formCreateUrgentTask);
    window.location.reload();
}

// Cancel edit task daily
function onCancelEditDaily(){
    hideElement(formCreateDailyTask);
    window.location.reload();
}

// Cancel edit task free
function onCancelEditFree(){
    hideElement(formCreateFreeTask);
    window.location.reload();
}

// show message urgent task
function showMessageUrgent(){
    showElement(formDeleteUrgentTask);
}

// show message daily task
function showMessageDaily(){
    showElement(formDeleteDailyTask);
}

// show message free task
function showMessageFree(){
    showElement(formDeleteFreeTask);
}


// Edit urgent task
function editUrgent(event){
    //  Get the task index
    let toEditUrgentTask = event.target.parentElement.parentElement.dataset.index;
    storeEditUrgentTask = toEditUrgentTask;

    let taskUrgent = taskUrgents[toEditUrgentTask];
    document.getElementById("urgent-task-title").value = taskUrgent.title;
    document.getElementById("urgent-task-date").value = taskUrgent.date;
    document.getElementById("urgent-task-time").value = taskUrgent.time;
    titleUrgent.textContent = "Edit your urgent tasks";
    btnCreateUrgent.textContent = "Update";
    showElement(formCreateUrgentTask);
}

// Set to done for urgent task
function urgentDone(event){
    // get index
    let index = event.target.parentElement.parentElement.parentElement.dataset.index;
    
    let doneUrgent = taskUrgents[index];
    // add to doneUrgents

    doneUrgents.push(doneUrgent);
    
    // remove task
    taskUrgents.splice(index,1);
    
    // store agin
    storeUrgentTask();
    
    // store task done
    storeDoneUrgentTask();
    
    // display agin
    displayUrgentTask();
}


// Delete task urgent
function urgentDelete(event){
    // get index
    let index = event.target.parentElement.parentElement.parentElement.dataset.index;

    // remove task
    taskUrgents.splice(index,1);

    // store agin
    storeUrgentTask();

    // display agin
    displayUrgentTask();
    hideElement(formDeleteUrgentTask);
}

// Display urgent tasks
function displayUrgentTask(){
    // remove the content task urgent create new one task
    let contentUrgentTask = document.getElementById("content-task-urgent");
    contentUrgentTask.remove();
    contentUrgentTask = document.createElement("div");
    contentUrgentTask.id = "content-task-urgent";
    containerUrgentTask.appendChild(contentUrgentTask);

    // Create div task urgent
    for(let index = 0; index < taskUrgents.length; index++){
        let taskUrgent = taskUrgents[index];
        
        // create div task
        let cardUrgent = document.createElement("div");
        cardUrgent.className = "task";
        cardUrgent.dataset.index = index;
        cardUrgent.addEventListener("click",editUrgent);
        contentUrgentTask.appendChild(cardUrgent);

        // create div title and append to div task 
        let divTitle = document.createElement("div");
        divTitle.className = "title";
        cardUrgent.appendChild(divTitle)

        // create title and action done
        let title = document.createElement("p");
        title.textContent = taskUrgent.title;
        divTitle.appendChild(title);

        let done = document.createElement("span");
        let iconDone = document.createElement("i");
        iconDone.className = "fa fa-check-square";
        iconDone.setAttribute("title","Set to Done");
        iconDone.addEventListener("click",urgentDone);
        done.appendChild(iconDone);
        divTitle.appendChild(done);

        // create body card
        let divBody = document.createElement("div");
        divBody.className = "datetime";
        cardUrgent.appendChild(divBody);

        // create date
        let deadLine = document.createElement("span");
        deadLine.className = "date";
        deadLine.textContent = "Deadline :" + taskUrgent.date;
        divBody.appendChild(deadLine);

        // create time
        let time = document.createElement("span");
        time.className = "time";
        time.textContent = "Time :" + taskUrgent.time;
        divBody.appendChild(time);

        // create delete
        let deleteIcon = document.createElement("span");
        let iconDelete = document.createElement("i");
        iconDelete.className = "fa fa-trash-o";
        iconDelete.setAttribute("title","Delete Task");
        iconDelete.addEventListener("click",showMessageUrgent);
        deleteIcon.appendChild(iconDelete);
        divBody.appendChild(deleteIcon);
    }
}

// Create daily task
function onCreateDaily(){

    if(storeEditDailyTask != null){
        let editTaskDaily = taskDailys[storeEditDailyTask];
        editTaskDaily.title = document.getElementById("daily-task-title").value;
        editTaskDaily.date = document.getElementById("daily-task-date").value;
        editTaskDaily.time = document.getElementById("daily-task-time").value;

        // check null value input
        if ((editTaskDaily.title !="" ) && (editTaskDaily.date !="") &&(editTaskDaily.time !="")){
            // Set to localStorage
            storeDailyTask();

            // display
            displayDailyTask();

            hideElement(formCreateDailyTask);
            // reload page
            window.location.reload();
        }
        else{
            alert("You are missing input your task! Please! input it.");
        }
        

    }
    else{
        let newDailyTask = {};
        let dailyTitle = document.getElementById("daily-task-title").value;
        let dailyDate = document.getElementById("daily-task-date").value;
        let dailyTime = document.getElementById("daily-task-time").value;

        if((dailyTitle != "") && (dailyDate != "") && (dailyTime != "")){
            newDailyTask.title = dailyTitle;
            newDailyTask.date = dailyDate;
            newDailyTask.time = dailyTime;

            taskDailys.push(newDailyTask);

            // Set to localStorage
            storeDailyTask();

            // display
            displayDailyTask();

            hideElement(formCreateDailyTask);
            // reload page
            window.location.reload();
            
        }
        else{
            alert("You are missing input your task! Please! input it.");
        } 
    }

}

// Edit daily task
function editDaily(event){
    //  Get the task index
    let toEditDailyTask = event.target.parentElement.parentElement.dataset.index;
    storeEditDailyTask = toEditDailyTask;

    let taskDaily = taskDailys[toEditDailyTask];
    document.getElementById("daily-task-title").value = taskDaily.title;
    document.getElementById("daily-task-date").value = taskDaily.date;
    document.getElementById("daily-task-time").value = taskDaily.time;
    titleDaily.textContent = "Edit your daily tasks";
    btnCreateDaily.textContent = "Update";
    showElement(formCreateDailyTask);
}

// Set to done for daily task
function dailyDone(event){
    // get index
    let index = event.target.parentElement.parentElement.parentElement.dataset.index;
    
    let doneDaily = taskDailys[index];
    // add to doneDailys

    doneDailys.push(doneDaily);
    
    // remove task
    taskDailys.splice(index,1);
    
    // store agin
    storeDailyTask();
    
    // store task done
    storeDoneDailyTask();
    
    // display agin
    displayDailyTask();
}

// Delete daily task
function dailyDelete(event){
    // get index
    let index = event.target.parentElement.parentElement.parentElement.dataset.index;

    // remove task
    taskDailys.splice(index,1);

    // store agin
    storeDailyTask();

    hideElement(formDeleteDailyTask);

    // display agin
    displayDailyTask();
}

// Display daily tasks
function displayDailyTask(){
    // remove the content task daily create new one task
    let contentDailyTask = document.getElementById("content-task-daily");
    contentDailyTask.remove();
    contentDailyTask = document.createElement("div");
    contentDailyTask.id = "content-task-daily";
    containerDailyTask.appendChild(contentDailyTask);

    // Create div task urgent
    for(let index = 0; index < taskDailys.length; index++){
        let taskDaily = taskDailys[index];
        
        // create div task
        let cardDaily = document.createElement("div");
        cardDaily.className = "task";
        cardDaily.dataset.index = index;
        cardDaily.addEventListener("click",editDaily);
        contentDailyTask.appendChild(cardDaily);

        // create div title and append to div task 
        let divTitle = document.createElement("div");
        divTitle.className = "title";
        cardDaily.appendChild(divTitle)

        // create title and action done
        let title = document.createElement("p");
        title.textContent = taskDaily.title;
        divTitle.appendChild(title);

        let done = document.createElement("span");
        let iconDone = document.createElement("i");
        iconDone.className = "fa fa-check-square";
        iconDone.setAttribute("title","Set to Done");
        iconDone.addEventListener("click",dailyDone);
        done.appendChild(iconDone);
        divTitle.appendChild(done);

        // create body card
        let divBody = document.createElement("div");
        divBody.className = "datetime";
        cardDaily.appendChild(divBody);

        // create date
        let deadLine = document.createElement("span");
        deadLine.className = "date";
        deadLine.textContent = "Deadline :" + taskDaily.date;
        divBody.appendChild(deadLine);

        // create time
        let time = document.createElement("span");
        time.className = "time";
        time.textContent = "Time :" + taskDaily.time;
        divBody.appendChild(time);

        // create delete
        let deleteIcon = document.createElement("span");
        let iconDelete = document.createElement("i");
        iconDelete.className = "fa fa-trash-o";
        iconDelete.setAttribute("title","Delete Task");
        iconDelete.addEventListener("click",showMessageDaily);
        deleteIcon.appendChild(iconDelete);
        divBody.appendChild(deleteIcon);
    }
}

// Create free task 
function onCreateFree(){
    if (storeEditFreeTask != null){
        let editTaskFree = taskFrees[storeEditFreeTask];
        editTaskFree.title = document.getElementById("free-task-title").value;
        editTaskFree.date = document.getElementById("free-task-date").value;
        editTaskFree.time = document.getElementById("free-task-time").value;

        if((editTaskFree.title !="") && (editTaskFree.date !="") && (editTaskFree.time !="")){
            // Set to localStorage
            storeFreeTask();

            // display
            displayFreeTask();

            hideElement(formCreateFreeTask);
            window.location.reload();
        }
        else{
            alert("You are missing input your task! Please! input it.");
        }

    }
    else{
        let newFreeTask = {};
        let freeTitle = document.getElementById("free-task-title").value;
        let freeDate = document.getElementById("free-task-date").value;
        let freeTime = document.getElementById("free-task-time").value;
        
        if((freeTitle != "") && (freeDate != "") && (freeTime != "")){
            newFreeTask.title = freeTitle;
            newFreeTask.date = freeDate;
            newFreeTask.time = freeTime;

            taskFrees.push(newFreeTask);


            // Set to localStorage
            storeFreeTask();

            // display
            displayFreeTask();

            hideElement(formCreateFreeTask);
            window.location.reload();
        }
        else{
            alert("You are missing input your task! Please! input it.");
        } 
    }
            
    
}

// Edit task free
function editFree(event){
    //  Get the task index
    let toEditFreeTask = event.target.parentElement.parentElement.dataset.index;
    storeEditFreeTask = toEditFreeTask;

    let taskFree = taskFrees[toEditFreeTask];
    document.getElementById("free-task-title").value = taskFree.title;
    document.getElementById("free-task-date").value = taskFree.date;
    document.getElementById("free-task-time").value = taskFree.time;
    titleFree.textContent = "Edit your free tasks";
    btnCreateFree.textContent = "Update";
    showElement(formCreateFreeTask);
}

// Set to done for task free
function freeDone(event){
    // get index
    let index = event.target.parentElement.parentElement.parentElement.dataset.index;
    
    let doneFree = taskFrees[index];
    
    // add to doneFree 
    doneFrees.push(doneFree);
    
    // remove task
    taskFrees.splice(index,1);
    
    // store agin
    storeFreeTask();
    
    // store task done
    storeDoneFreeTask();
    
    // display agin
    displayFreeTask();
}

// Delete free task
function freeDelete(event){
    // get index
    let index = event.target.parentElement.parentElement.parentElement.dataset.index;

    // remove task
    taskFrees.splice(index,1);

    // store agin
    storeFreeTask();
    
    hideElement(formDeleteFreeTask);

    // display agin
    displayFreeTask();

}

// Display free tasks
function displayFreeTask(){
    // remove the content task free create new one task
    let contentFreeTask = document.getElementById("content-task-free");
    contentFreeTask.remove();
    contentFreeTask = document.createElement("div");
    contentFreeTask.id = "content-task-free";
    containerFreeTask.appendChild(contentFreeTask);

    // Create div task urgent
    for(let index = 0; index < taskFrees.length; index++){
        let taskFree = taskFrees[index];
        
        // create div task
        let cardFree = document.createElement("div");
        cardFree.className = "task";
        cardFree.dataset.index = index;
        cardFree.addEventListener("click",editFree);
        contentFreeTask.appendChild(cardFree);

        // create div title and append to div task 
        let divTitle = document.createElement("div");
        divTitle.className = "title";
        cardFree.appendChild(divTitle)

        // create title and action done
        let title = document.createElement("p");
        title.textContent = taskFree.title;
        divTitle.appendChild(title);

        let done = document.createElement("span");
        let iconDone = document.createElement("i");
        iconDone.className = "fa fa-check-square";
        iconDone.setAttribute("title","Set to Done");
        iconDone.addEventListener("click",freeDone);
        done.appendChild(iconDone);
        divTitle.appendChild(done);

        // create body card
        let divBody = document.createElement("div");
        divBody.className = "datetime";
        cardFree.appendChild(divBody);

        // create date
        let deadLine = document.createElement("span");
        deadLine.className = "date";
        deadLine.textContent = "Deadline :" + taskFree.date;
        divBody.appendChild(deadLine);

        // create time
        let time = document.createElement("span");
        time.className = "time";
        time.textContent = "Time :" + taskFree.time;
        divBody.appendChild(time);

        // create delete
        let deleteIcon = document.createElement("span");
        let iconDelete = document.createElement("i");
        iconDelete.className = "fa fa-trash-o";
        iconDelete.setAttribute("title","Delete Task");
        iconDelete.addEventListener("click",showMessageFree);
        deleteIcon.appendChild(iconDelete);
        divBody.appendChild(deleteIcon);
    }
}


// display in browser
loadUrgentTask();
displayUrgentTask();
loadDoneUrgentTask();


loadDailyTask();
displayDailyTask();
loadDoneDailyTask();

loadFreeTask();
displayFreeTask();
loadDoneFreeTask();


