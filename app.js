let addButton = document.querySelector(".addButton")

//inputs
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const checkboxInput = document.querySelector("#checkbox");
const submit = document.querySelector("#submit");

//table elements
const table = document.querySelector("table");

const myLibrary = [];


function Book(title, author, pages, read){ 
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const addBookToLibrary = () => {
    let title = titleInput.value;
    let author = authorInput.value;
    let pages = pagesInput.value;
    let read = getReadValue();
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

const showBook = () => {
    for(i = 0; i < myLibrary.length; i++){
        const tr = document.createElement("tr");
        table.appendChild(tr);
        table.append(tr);
    }
    for (let i =)
}


submit.addEventListener("click", () => {
    addBookToLibrary();
    showBook();
    console.log(myLibrary);
});

const getReadValue = () => {
    if(checkbox.value == true){
        return "gelezen";
        }
    else{
        return "niet gelezen";
    }
}
// console.log(book1);
Book.prototype.showBook = function() { 
    // const td = document.createElement("td");
    // trElement.appendChild(td);
    // trElement.prepend(td);
    //  td.innerHTML = book1.title;
}

// Book.prototype.addBook = Object.create( )


// for(i = 0; i < myLibrary.length; i++){

//     myLibrary.forEach(({title, author}) => trElement.innerHTML = title, trElement.innerHTML = author);     
// }

