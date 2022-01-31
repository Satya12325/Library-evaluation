
const BooksDAta = async ()=>{
    try {
        const res = await fetch("http://localhost:3000/books")
        const data = await res.json()
        console.log(data)
        booksdata(data)
    }
   catch (err){
       console.log(err)
   }
}
BooksDAta();
const books = document.getElementById("books");

function booksdata(data){
     
   // books.innerHTML = "";
    books.innerHTML = data.map((item)=>{
        return `
        <div class="books">
        <p>${item.id}</p>
            <h1>Books Name : ${item.book}</h1>
            <h3>Autho: ${item.author}</h3>
            <li>${item.comments[0]}</li>
            <li>${item.comments[1]}</li>
         </div>
        `
    })
}

//document.getElementById('submit').addEventListener("submit",addPost)


const addPost = () => {
   
    let books = document.getElementById('name').value;
    let author = document.getElementById('author').value;
    let comments = document.getElementById('comments').value;
    fetch(`http://localhost:3000/books`,{
        method: 'POST',
        headers:{
            "Accept": "application/json, text/plain, */*",
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
            book: books,
            author: author,
            comments: comments
        })
    })
    .then((res)=>{
        res.json()
    })
    .then((res)=>{
        console.log(res)
    })
}