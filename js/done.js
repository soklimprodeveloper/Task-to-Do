
// Dom container task
const containerUrgentTask = document.getElementById("tasks-urgent");
const containerDailyTask = document.getElementById("tasks-daily");
const containerFreeTask = document.getElementById("tasks-free");


// Variable store done task
var doneUrgents = [];
var doneDailys = [];
var doneFrees = [];

// load done urgent task
function loadDoneUrgentTask(){
    let urgentTaskDone = JSON.parse(localStorage.getItem("doneUrgents"))
    if (urgentTaskDone !== null){
        doneUrgents = urgentTaskDone;
    }
}

// load done daily task
function loadDoneDailyTask(){
    let dailyTaskDone = JSON.parse(localStorage.getItem("doneDaily"));
    if (dailyTaskDone !== null){
        doneDailys = dailyTaskDone;
    }
}

// load done free task
function loadDoneFreeTask(){
    let freeTaskDone = JSON.parse(localStorage.getItem("doneFree"))
    if (freeTaskDone !== null){
        doneFrees = freeTaskDone;
    }
}



// store done urgent task
function storeDoneUrgentTask(){
    localStorage.setItem("doneUrgents",JSON.stringify(doneUrgents));
}

// store done daily task
function storeDoneDailyTask(){
    localStorage.setItem("doneDaily",JSON.stringify(doneDailys));
}

// store done free task
function storeDoneFreeTask(){
    localStorage.setItem("doneFree",JSON.stringify(doneFrees));
}

// delete function urgent
function urgentDelete(event){
    // get index
    let index = event.target.parentElement.parentElement.parentElement.dataset.index;

    // remove task
    doneUrgents.splice(index,1);

    // store again 
    storeDoneUrgentTask();

    // display agin
    displayDoneUrgentTask();
}

// delete function daily
function dailyDelete(event){
    // get index
    let index = event.target.parentElement.parentElement.parentElement.dataset.index;

    // remove task
    doneDailys.splice(index,1);

    // store again 
    storeDoneDailyTask();

    // display agin
    displayDoneDailyTask();
}

// delete function free
function freeDelete(event){
    // get index
    let index = event.target.parentElement.parentElement.parentElement.dataset.index;

    // remove task
    doneFrees.splice(index,1);

    // store again 
    storeDoneFreeTask();

    // display agin
    displayDoneFreeTask();
}

// Display urgent tasks done
function displayDoneUrgentTask(){
    // remove the content task urgent create new one task
    let contentDoneUrgentTask = document.getElementById("content-task-urgent");
    contentDoneUrgentTask.remove();
    contentDoneUrgentTask = document.createElement("div");
    contentDoneUrgentTask.id = "content-task-urgent";
    containerUrgentTask.appendChild(contentDoneUrgentTask);

    // Create div task urgent
    for(let index = 0; index < doneUrgents.length; index++){
        let doneUrgent = doneUrgents[index];
        
        // create div task
        let cardUrgentDone = document.createElement("div");
        cardUrgentDone.className = "task";
        cardUrgentDone.dataset.index = index;
        contentDoneUrgentTask.appendChild(cardUrgentDone);

        // create div title and append to div task 
        let divTitle = document.createElement("div");
        divTitle.className = "title";
        cardUrgentDone.appendChild(divTitle)

        // create title and action done
        let title = document.createElement("p");
        title.className = "title-done"
        title.textContent = doneUrgent.title;
        divTitle.appendChild(title);


        // create body card
        let divBody = document.createElement("div");
        divBody.className = "datetime";
        cardUrgentDone.appendChild(divBody);

        // create date
        let deadLine = document.createElement("span");
        deadLine.className = "date-done";
        deadLine.textContent = "Deadline :" + doneUrgent.date;
        divBody.appendChild(deadLine);

        // create time
        let time = document.createElement("span");
        time.className = "time-done";
        time.textContent = "Time :" + doneUrgent.time;
        divBody.appendChild(time);

        // create delete
        let deleteIcon = document.createElement("span");
        let iconDelete = document.createElement("i");
        iconDelete.className = "fa fa-trash-o";
        iconDelete.setAttribute("title","Delete Task");
        iconDelete.addEventListener("click",urgentDelete)
        deleteIcon.appendChild(iconDelete);
        divBody.appendChild(deleteIcon);
    }
}

// display daily task done
function displayDoneDailyTask(){
    // remove the content task urgent create new one task
    let contentDoneDailyTask = document.getElementById("content-task-daily");
    contentDoneDailyTask.remove();
    contentDoneDailyTask = document.createElement("div");
    contentDoneDailyTask.id = "content-task-daily";
    containerDailyTask.appendChild(contentDoneDailyTask);
 
    // Create div task urgent
    for(let index = 0; index < doneDailys.length; index++){
        let doneDaily = doneDailys[index];
         
        // create div task
        let cardDailyDone = document.createElement("div");
        cardDailyDone.className = "task";
        cardDailyDone.dataset.index = index;
        contentDoneDailyTask.appendChild(cardDailyDone);
 
        // create div title and append to div task 
        let divTitle = document.createElement("div");
        divTitle.className = "title";
        cardDailyDone.appendChild(divTitle)
 
        // create title and action done
        let title = document.createElement("p");
        title.className = "title-done"
        title.textContent = doneDaily.title;
        divTitle.appendChild(title);
 
 
        // create body card
        let divBody = document.createElement("div");
        divBody.className = "datetime";
        cardDailyDone.appendChild(divBody);
 
        // create date
        let deadLine = document.createElement("span");
        deadLine.className = "date-done";
        deadLine.textContent = "Deadline :" + doneDaily.date;
        divBody.appendChild(deadLine);
 
         // create time
        let time = document.createElement("span");
        time.className = "time-done";
        time.textContent = "Time :" + doneDaily.time;
        divBody.appendChild(time);
 
        // create delete
        let deleteIcon = document.createElement("span");
        let iconDelete = document.createElement("i");
        iconDelete.className = "fa fa-trash-o";
        iconDelete.setAttribute("title","Delete Task");
        iconDelete.addEventListener("click",dailyDelete)
        deleteIcon.appendChild(iconDelete);
        divBody.appendChild(deleteIcon);
     }
}

// display free task done
function displayDoneFreeTask(){
    // remove the content task urgent create new one task
    let contentDoneFreeTask = document.getElementById("content-task-free");
    contentDoneFreeTask.remove();
    contentDoneFreeTask = document.createElement("div");
    contentDoneFreeTask.id = "content-task-free";
    containerFreeTask.appendChild(contentDoneFreeTask);
 
    // Create div task urgent
    for(let index = 0; index < doneFrees.length; index++){
        let doneFree = doneFrees[index];
         
        // create div task
        let cardFreeDone = document.createElement("div");
        cardFreeDone.className = "task";
        cardFreeDone.dataset.index = index;
        contentDoneFreeTask.appendChild(cardFreeDone);
 
        // create div title and append to div task 
        let divTitle = document.createElement("div");
        divTitle.className = "title";
        cardFreeDone.appendChild(divTitle)
 
        // create title and action done
        let title = document.createElement("p");
        title.className = "title-done"
        title.textContent = doneFree.title;
        divTitle.appendChild(title);
 
 
        // create body card
        let divBody = document.createElement("div");
        divBody.className = "datetime";
        cardFreeDone.appendChild(divBody);
 
        // create date
        let deadLine = document.createElement("span");
        deadLine.className = "date-done";
        deadLine.textContent = "Deadline :" + doneFree.date;
        divBody.appendChild(deadLine);
 
         // create time
        let time = document.createElement("span");
        time.className = "time-done";
        time.textContent = "Time :" + doneFree.time;
        divBody.appendChild(time);
 
        // create delete
        let deleteIcon = document.createElement("span");
        let iconDelete = document.createElement("i");
        iconDelete.className = "fa fa-trash-o";
        iconDelete.setAttribute("title","Delete Task");
        iconDelete.addEventListener("click",freeDelete)
        deleteIcon.appendChild(iconDelete);
        divBody.appendChild(deleteIcon);
    }
}

loadDoneUrgentTask();
displayDoneUrgentTask();


loadDoneDailyTask();
displayDoneDailyTask();

loadDoneFreeTask();
displayDoneFreeTask();