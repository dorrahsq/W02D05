$(".wrapper").append(
  `<input class = "addinput" ><button id='addBtn'> Add to list  </button>`
);
$("body").append(`<div class= "div3"> <ul class = "Ulist"> to </ul> </div>`);
$("body").append(`<div class = "counter">   </div>`);
$("body").append(`<div class = "counter0">  You have 1 todos left  </div>`);
$("body").append(
  `<div class= "div2"> <button id = "clearAll"> Clear List  </button>  <button id = "clearC"> Clear Completed  </button> </div>`
);

let ToDoList = [{ name: "Sleep", isCompeleted: false }];

let counter;

const addToList = () => {
  //   console.log($(".addinput").val());
  if ($(".addinput").val().length && $(".addinput").val().trim().length) {
    let object = { name: $(".addinput").val(), isCompeleted: false };
    ToDoList.push(object);
    counter = ToDoList.length;
    console.log(counter);
    $(`.addinput`).val("");
    renderList();
  }
};

$("#addBtn").click(addToList);

const clearAllList = () => {
  ToDoList.length = 0;
  console.log(ToDoList);
  renderList();
};

$("#clearAll").click(clearAllList);

const deleteListItem = (i) => {
  ToDoList.splice(i, 1);
  renderList();
};

const updateListItem = (i) => {
  let mesage = prompt(" enter the new toDO list ");
  ToDoList[i].name = mesage;
  renderList();
};

const changestyle = (i) => {
  if (ToDoList[i].isCompeleted == false) {
    console.log(ToDoList);
    ToDoList[i].isCompeleted = true;
    renderList();
  } else {
    $("#complateli-" + i).addClass("uncompleteTaskB");
    console.log("turnd to false");
    ToDoList[i].isCompeleted = false;
  }
  renderList();
};

const ClearCompleted = () => {
  let newarray = ToDoList.filter((value) => value.isCompeleted == false);
  console.log(newarray);
  ToDoList = newarray;
  renderList();
};

const renderList = () => {
  $(".Ulist").html("");
  for (let i = 0; i < ToDoList.length; i++) {
    $(".Ulist").append(
      `<li class = "liitem" id="complateli-${i}" > ${ToDoList[i].name}  <i id="deleteB-${i}" class="fas fa-times"></i>  <i id="updateB-${i}" class="fas fa-pen"></i> </li>`
    );
    $("#deleteB-" + i).click(() => {
      deleteListItem(i);
    });
    $("#updateB-" + i).click(() => {
      updateListItem(i);
    });
    $("#complateli-" + i).click(() => {
      changestyle(i);
    });
    if (ToDoList[i].isCompeleted) {
      $("#complateli-" + i).addClass("completeTaskB");
    }
  }
  let e = ToDoList.filter((value) => value.isCompeleted == false);
  counter = e.length;
  console.log(counter);
  $(".counter0").html(`You have ${counter} todos left`);
};

$("#clearC").click(ClearCompleted);
renderList();
