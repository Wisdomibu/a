const textWrapper = document.querySelector(".textWrapper");
const addBtn = document.querySelector("#addBtn");
const input = document.querySelectorAll("input");
const bookList=[{}];
// const myArrayString =JSON.stringify("bookList")

const add = () => {
  console.log("button was clicked");
  let title = input[0].value;
  let author = input[1].value;

  if(title!=="" && author!==""){
    createElem(title, author);
    bookList.push(title, author);
console.log(bookList)

  }
  input[0].value="";
  input[1].value=""

  console.log(title, author)

//   localStorage.setItem("mySaved", myArrayString);
//   const myArrParse = localStorage.getItem("mySaved");
//   const storage=JSON.parse(myArrParse);
//   console.log(storage)
};




addBtn.addEventListener("click", add);

function createElem(title, author) {
  const h3 = document.createElement("h3");
  h3.innerText = title;

  const p = document.createElement("p");
  p.innerText = author;

  const button = document.createElement("button");
  button.innerText = "Remove";

  const line = document.createElement("div");
  line.className = "line";

  const childDiv = document.createElement("div")

  button.addEventListener('click', ()=>{
    childDiv.style.display ="none"
  })
  childDiv.append(h3, p, button, line)
  textWrapper.append(childDiv);
}
