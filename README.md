# Library Book Checkout System
# Overview
The Library Book Checkout System is a web-based application that manages book checkouts and returns using the queue data structure. This system ensures a "first-in, first-out" (FIFO) method for processing book checkouts, helping librarians and users manage book transactions efficiently.

# Features
1. Add Books to Checkout (Enqueue): Users can input book titles to add them to the queue for checkout.
2. Return Books (Dequeue): Books are returned in the order they were checked out.
3. View Current Queue: Displays a list of all books currently checked out in the order of processing.
4. Error Handling: Displays appropriate messages when the queue is full, empty, or when invalid input is provided.
5. Responsive Design: The system is designed to work on both desktop and mobile devices.
   
# How It Works
The system simulates a simple library checkout process using the following logic:
# Enqueue (Check Out Book):
1. Users input a book title and press the "Check Out" button.
2. The system checks if the queue has space (maximum capacity: 5 books).
3. the book is added to the queue and displayed in the "Checked-out Books" list if space is available.

# Dequeue (Return Book):
1. Users click the "Return Book" button to return the book that was checked out first.
2. The system removes the book from the front of the queue and updates the list of checked-out books.

# Queue Management:
1. The queue uses an array with front and rear pointers to manage the order of book checkouts and returns.
2. The system provides feedback if a user tries to check out a book when the queue is full or returns a book when the queue is empty.

# Queue Logic
1. isFull(): Checks if the queue has reached its maximum capacity (5 books).
2. isEmpty(): Checks if there are no books currently checked out or if all books have been returned.
3. enqueue(): Adds a book to the queue for checkout.
4. dequeue(): Removes a book from the queue and marks it as returned.
5. displayBooks(): Updates and displays the current list of books in the queue.

#  Usage
1. Add a book: Enter a book name in the input field and press "Check Out."
2. Return a book: Click "Return Book" to remove the first book from the checkout list.
3. View checked-out books: The list of checked-out books is displayed dynamically below the form.
4. Error Handling: Messages are displayed for invalid input, empty queues, or full queues.

# Example

1. Entered "The Great Gatsby" and clicked "Check Out":
   - Message: "Checked out: The Great Gatsby"
   - Display: Checked-out Books: "The Great Gatsby"
   
2. Entered "1984" and clicked "Check Out":
   - Message: "Checked out: 1984"
   - Display: Checked-out Books: "The Great Gatsby, 1984"

3. Clicked "Return Book":
   - Message: "Returned: The Great Gatsby"
   - Display: Checked-out Books: "1984"
   
#  Technologies Used
1. HTML: Structure of the web page.
2. CSS: Styling and responsive layout.
3. JavaScript: Logic for queue management, input validation, and dynamic updates to the user interface.

# Future Enhancements
1. Implement local storage to persist data across sessions.
2. Add a search feature to find specific books in the queue.
3. Extend functionality to handle multiple users and book catalogues.
4. Add animations or visual feedback for enqueue and dequeue actions.

# License
This project is licensed under the MIT License - see the LICENSE file for details.
