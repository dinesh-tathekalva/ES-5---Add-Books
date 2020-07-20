class Book {
    constructor(title, author, isbn) {
        this.title = title
        this.author = author
        this.isbn = isbn
    }
}

class UI {
    addBookToList(book) {
        const list = document.querySelector('#book-list')
        const row = document.createElement('tr')
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="" class='delete'>X</a></td> `

        list.appendChild(row)
    }

    showAlert(message, className) {
        //create div
        const div = document.createElement('div')
        div.className = `alert ${className}`
        div.appendChild(document.createTextNode(message))
        const container = document.querySelector('.container')
        const form = document.querySelector('#book-form')
        container.insertBefore(div, form)
        setTimeout(function () {
            document.querySelector('.alert').remove()
        }, 3000)
    }

    deleteBook(target){
        if (target.className === 'delete') {
            target.parentElement.parentElement.remove()
        }
    }

    clearFields(){
        document.querySelector('#title').value = ''
        document.querySelector('#author').value = ''
        document.querySelector('#isbn').value = ''
    }

}


//Event Listensers
document.querySelector('#book-form').addEventListener('submit', function(e){
    console.log('Submitted')
    const title = document.querySelector('#title').value,
     author = document.querySelector('#author').value,
     isbn = document.querySelector('#isbn').value

     //Instantiate book
     const book = new Book(title, author, isbn)

     //Instantiate UI
     const ui = new UI()

     //Validation
     if(title === '' || author === '' || isbn === ''){
        ui.showAlert('Please fill in all the fields', 'error')
    }else{
        ui.addBookToList(book)

        ui.clearFields()

        ui.showAlert('Book Added!', 'success')

     }
     console.log(book)
     e.preventDefault()
})

document.querySelector('#book-list').addEventListener('click', function(e){
    console.log('tested')
    const ui = new UI()
    ui.deleteBook(e.target)
    if (e.target.className === 'delete') {
        ui.showAlert('Book Removed!', 'success')
    }
    // ui.showAlert('Book Removed!', 'success')
    e.preventDefault()
})


