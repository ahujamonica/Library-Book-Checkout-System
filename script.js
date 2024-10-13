
const MAX = 5;
let queue = [];
let front = -1;
let rear = -1;

// Function to check if the queue is full
function isFull() {
    return (rear === MAX - 1);
}

// Function to check if the queue is empty
function isEmpty() {
    return (front === -1 || front > rear);
}

// Function to add a book to the queue (enqueue)
function enqueue() {
    const bookInput = document.getElementById("bookInput");
    const bookName = bookInput.value.trim();

    // Check if the input is empty
    if (!bookName) {
        displayMessage("Please enter a book name.");
        return;
    }

    if (isFull()) {
        displayMessage("Queue is full! Cannot check out more books.");
        return;
    }

    if (front === -1) {
        front = 0;
    }

    rear++;
    queue[rear] = bookName;
    bookInput.value = "";  // Clear the input field
    displayMessage(`Checked out: ${bookName}`);
    displayBooks();
}

// Function to remove a book from the queue (dequeue)
function dequeue() {
    if (isEmpty()) {
        displayMessage("Queue is empty! No books to return.");
        return;
    }

    const returnedBook = queue[front];
    front++;
    displayMessage(`Returned: ${returnedBook}`);
    displayBooks();
}

// Function to display the list of checked-out books
function displayBooks() {
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = "";

    if (isEmpty()) {
        bookList.innerHTML = "<li>No books are checked out.</li>";
        return;
    }

    for (let i = front; i <= rear; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = queue[i];
        bookList.appendChild(listItem);
    }
}

// Function to display messages (e.g., errors or success messages)
function displayMessage(msg) {
    const messageElement = document.getElementById("message");
    messageElement.textContent = msg;
    setTimeout(() => {
        messageElement.textContent = "";
    }, 3000);  // Clear the message after 3 seconds
}
