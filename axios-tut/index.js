const axios = require('axios')
const readline = require('readline-sync')

const getBooks = async() => {
    try{
        const response = await axios.get('http://localhost:3000/books')
        console.log(response.data)
    }catch(err){
        cosole.error(err.message)
    }
    console.log(`request status code: ${response.status} status text ${response.statusText}`)  ;
}

const getBookById = async (id) => {
    try{
        const response = await axios.get(`http://localhost:3000/books/` + 3)
        console.log(response.data)
    }catch(err){
        console.error(err.message)
    }
}
const getBookByName = async (name) => {
    try{
        const response = await axios.get(`http://localhost:3000/books?name=` + name)
        if (Object.is(response.data,[])){
            console.log("not found");

        }
        if (response.data == "[]"){
            console.log("not found");
        }
        console.log(response.data)
        console.log(Object.is(response.data,"[]"))
    }catch(err){
        console.error(err.message)
    }

}

const addBooks = async(booksInfo) => {
    console.log(addBooks);
    response = await axios.post('http://localhost:3000/books', booksInfo)
    console.log(response.data)
    // console.log(`request status code: ${response.status} status text ${response.statusText}`)  ;
}
const deleteBook = async(id) => {
    try{

        response = await axios.delete('http://localhost:3000/books/' + id)
        console.log(response.data);
        console.log(`data deleted at # id ${id}`)
    }
    catch(err){
        if (err.response.status === 404) {
            console.log(`data not found at # id ${id}`);
        }
        else{
            console.log(`something happened with # id ${id}`);1
        }
    }
}
const updateBook = async(id,booksInfo) => {
    try{
        const response = await axios.put("http://localhost:3000/books/" + id , booksInfo)
        console.log(response.data);
        console.log(`succesfully updated book with id :${id}`);
    }
    catch(err){
        if (err.response == 404){
            console.log(`request status : ${response.status} ${response.statusText}`);
            console.log(response.data);
        }
        else{
            console.log("something went wrong with the request");
        }

    }
}
// const patchBook = () => {
//     try{
//         const response = await axios.patch

//     }
//     catch{

//     }
// }



const patchBook = async(id,booksInfo) => {
    try{
        const response = await axios.patch("http://localhost:3000/books/" + id , booksInfo)
        console.log(response.data);
        console.log(`succesfully updated book with id :${id}`);
    }
    catch(err){
        if (err.response == 404){
            console.log(`request status : ${response.status} ${response.statusText}`);
            console.log(response.data);
        }
        else{
            console.log("something went wrong with the request");
        }

    }
}
// getBooks()
const x =(async function choice() {
    while (true){
        userChoice = readline.questionInt(`Enter your choice:
        1--get all books.
        2--get a particular book.
        3--add a book.
        4--update a book.
        5--remove a book.
        ---------
        `
        )
        if (userChoice === 1){
            await getBooks()
        }
        else if (userChoice === 2){
            const bookParticular = readline.questionInt(`Enter----
            1.for id
            2.for name
            ----`)
            if (bookParticular ==1){

                await getBookById(bookParticular);
            }
            else if (bookParticular == 2){
                let bookname = readline.question("enter book name: ")
                await getBookByName(bookname); 

            }
        // else if (userChoice === 3){
        //     console.log("add books");
        //         await getBooks()
        //     }
        }
        else if (userChoice === 3){
            console.log("add books");
                await addBooks({"name":"ram charit"})
        }
        else if (userChoice === 4){
            console.log("update books");
            await getBook()
        }
    }
})

x()








// const main = async() => {
//     await deleteBook(1)
//     await getBooks()

// }

// main()
// patchBook(1,   {"name": "vikas gautam","prifessions":"teacher"})


//
// const test = async() => {
//     const instance = axios.create({
//         baseURL: 'http://localhost:3000/',
//         timeout: 1000
// })
// const resp = await instance.get('/books')
// console.log(resp.data)
// }
// test()

// const instance = axios.create({
//     baseURL: 'http://localhost:3000/',
//     timeout: 1000
// })
// (async function a(){
//     const resp = await instance.get('/books')
//     console.log(resp.data)
// })();

// x = async() => {
//     const resp = await instance.get('/books')
//     console.log(resp.data)
// }
// x()