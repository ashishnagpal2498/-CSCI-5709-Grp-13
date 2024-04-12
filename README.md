# CSCI 5709 Grp-13

Group project for 5709 Advanced Web services.

# Book Stack - v3

This version of our application have 85% of features completed. 

## Authors

1. Member 1

   - Name:- [Ashish Nagpal](ashish.nagpal@dal.ca)
   - Branch Name:- ashish-nagpal

2. Member 2

   - Name:- [Aiwin Charalil Manuel](aiwin.manuel@dal.ca)
   - Branch Name:- Aiwin_Charalil_Manuel

3. Member 3

   - Name:- [Jinal Dave](jinal.dave@dal.ca)
   - Branch Name:- jinal-dave

4. Member 4

   - [Abhinav Acharya Tirumala Vinjamuri](ab806657@dal.ca)
   - Branch Name:- Abhinav_Acharya

5. Member 5

   - Name:- [Arihant Dugar](arihant.dugar@dal.ca)
   - Branch Name:- arihant-dugar

6. Member 6
   - Name:- [Yogish Honnadevipura Gopalakrishna](yg926299@dal.ca)
   - Branch Name:- yogish

## Links

1. Gitlab Repo: https://git.cs.dal.ca/anagpal/csci-5709-grp-13/-/tree/main?ref_type=heads
2. Frontend Deployment Link - Netlify: https://bookstack-csci-group-13.netlify.app/
3. Backend Deployment Link - Render: https://bookstack-grp13.onrender.com

## Login Details for testing

### Admin login credentials
- Username: abhinava465@gmail.com
- Password: securepassword

### Reader login credentials
- Username: ab806657@dal.ca
- Password: pass@1234

# Installing

1. Clone the project repository by using the URL - https://git.cs.dal.ca/anagpal/csci-5709-grp-13

2. Go into the project directory and install the required dependency for frontend and backend application using ```npm install``` command.

3. Set up the environment variables by looking at the ``.env.example`` file

4. Once the dependencies are installed, start the development server by ```npm start``` command.

5. The server for frontend application will be running on port - 3000 [http://localhost:3000](http://localhost:3000). For backend the server will be running on port 8080.

# Deployment

This directory contains a stable deployement version of the application. The ```front-end``` is deployed on Netlify which we configured by adding a remote that pushes the code to GitHub. The ```backend``` is deployed on Render using the same process. We have employed ```MongoDB``` for the database.

Deployment for Frontend is made through **Netlify**. 
[![Netlify Status](https://api.netlify.com/api/v1/badges/c9aa70e1-579d-4e9f-9e3a-f00b2c17b318/deploy-status)](https://app.netlify.com/sites/bookstack-csci-group-13/deploys)

Deployment for backend server is done on **Render**. ![](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)

# Project Overview

## 1. Details

### Landing Page

This is where the users reach `/` land on when they access our site for the first time. This helps users familiarize with the website and makes it intuitive for them to navigate around the website; with that in mind, we developed the landing page with utmost care as it is the first page that the users see. As the saying goes, **First impression should be the best impression**, it is really crucial that we showcase everything in a visually attractive manner as this is the page where we want to introduce ourselves, and the application. The only way to do that is to make it visually appealing by using a cozy color scheme, well adjusted components, and a clean layout.

### Contact Us

This is where the users can reach out to us if they have any questions, feedback, or issues regarding our application. Contact us pages are essential for building trust and credibility with the users, as well as providing them with the best customer service possible. We want to make it easy and convenient for the users to contact us, so we offer multiple channels and options for them to choose from. We also want to show our personality and values, so we use friendly and engaging language that reflects our brand identity. The contact us page is the last impression that we leave on the users, so we want to make it a positive and memorable one.

### FAQ

This is where the users can find answers to the most common questions that they may have about our application. FAQ pages are useful for providing quick and clear information, reducing the need for customer support, and improving the user experience. We want to make our FAQ page as helpful and comprehensive as possible. We also want to make our FAQ page easy to navigate, so we organize the questions into categories and use an accordian for a question-and-answer format. The FAQ page is an opportunity for us to address any concerns or objections that the users may have, as well as to highlight the benefits and features of our application.

## 2. Late Fee System

Late Fee System is essentially supposed to penalize users who borrowed books from the library, but failed to return them before the due date. We have defined 2 tasks in this feature which will be talked about in the section below: Late fees can deny users from borrowing/ reserving books until they are cleared. The tasks for this feature involve functionalities for both readers and administrators. Readers are required to view the costs associated with each book that has not been returned, and raise a dispute if they find a charge unnacceptable. On the other hand, administrators have the responsibility to identify users who have incurred late fees. Once it has been confirmed that the readers have cleared these fees, the administrators should be able to clear them from the system, or notify them if they haven't cleared the fee yet. These tasks ensure a smooth operation of the book rental service and maintain a fair system for all users.

## 3. Notifications

Notifications are essential for reminding users or admins about various purposes. Admins can use the service to remind users regarding their uncleared late fees, update in availability of a book, etc., whereas the users can use the service to notify the admin if they have a dispute in their late fee, send an invoice/ confirmation of a successful book reservation. 

## 4. User Registration and Authentication

### Registration
- Users can register for a new account by providing their first name, last name, email, phone number, password, and confirm password.
- Form validation checks if the entered information meets the required criteria (e.g., valid email format, password complexity).
- Upon successful registration, users are redirected to the login page.
- Users will assume a role of 'user' by default.

### Login
- Users can log in to their account using their email and password.
- Form validation ensures that the entered email is in a valid format and that the password meets specific criteria (minimum length, alphanumeric characters, etc.).
- Upon successful login, users are redirected to their profile page.

### Profile
- Users can view and edit their profile information, including their first name, last name, email, and phone number.
- The profile page includes an option to upload a new profile picture.
- Users can delete their account, which requires confirmation.

### Password Reset
- Users who forget their password can request a password reset link by entering their registered email address.
- Form validation checks if the entered email is in a valid format.
- Upon successful submission, users receive a reset email with instructions on how to reset their password.

## 5. Book Library
``Book Library feature`` includes following tasks :-View All, Search Books, Filter Books, Sort by Name, Price.  

1. The user can view all the books available in the library and explore books.

2. Using filters, the user can narrow down the results.

3. User can also search the book by entering a keyword related to it.

4. Lastly, uer can sort the books based on names.

## 6. Book Management:

This Feature involves the management of all books within the Book Stack application. It includes functionalities such as viewing, editing, and deleting books from the system. Admin can search book from the list of books as well.

### Add Book:

- Admin can add new books using this functionality. They need to input essential details such as book title, author, genre, description, etc., to successfully add a book.

### Delete Book:

- With this feature, admin can delete books. Deleting a book removes it permanently from the system.

### Update Book:

- This task enables admin to update the details of existing books. Admin can modify information such as the book title, author, genre, description, etc., as needed.

### Update Reservation on Book Return:

- When a user returns a reserved book, this functionality helps admin update the reservation status of the book accordingly. It ensures that the book becomes available for reservation by other users.

### Apply Late Fees for Book:

- This task involves the application of late fees for books that are returned past their due date. Users are notified of the late fee and required to settle the amount before further borrowing privileges are granted.

## 7. Book Detail: 
This feature shows the detailed view of the book that is clicked by the reader from the listing screen under 'Books' option of nav bar. A user can see the full book details by clicking on the option under "About" section. This page also shows a section of recommendations that will list similar books. The reader can navigate back and forth from the book detail screen to the book recommendation screen. For easy usability, the pagination option is included. Below are the tasks included within this feature: 

### View Book detail 
To show all related details of the book; such as book name, description, author, etc. When the user is logged in and they have a late-fees associated, they won't be able to see the reserve button below the book image.

### Similar recommendations 

This section is enclosed within the bottom part of the page where the similar book to the current one is shown.

### View Rating & review

A reader can get better insights about the book content by checking the associated ratings and reviews for the currently viewing book using this option lablled as "View Rating and Review". The relevant sorting options are included for checking the most recent and the most relevant reviews.  

## 8. Book Feedback: 
This is another feature linked within the  book details page where users can share their reading experience with the rest of the community by adding reviews or rating to it. Following are the tasks included within this: 

- Reviews: A reader can submit their comment regarding the currently opened book using the input option available under "Do you want to rate and review this book?".
- Rating: A reader can also rate a book using the same section and submit the details.

## 9. Add to Cart
The "Add to Cart" feature facilitates the process of purchasing books. Initially, the system checks whether the user has logged in. If not, the user is redirected to the login page. Once logged in, the user can navigate from the dashboard to the book details page. Here, they can review the desired book and, if they choose to purchase it, they can click on the "add to cart" button. Upon clicking this button, the system adds the book to the shopping cart and confirms the action with a prompt stating "Book added to Cart successfully." This feature provides a user-friendly approach to selecting and securing books for purchase.

## 10. Reserve Book 

## 11. Favorites


## Built With

1. [React](https://legacy.reactjs.org/docs/getting-started.html/) - The web framework used
2. [npm](https://docs.npmjs.com//) - Dependency Management
3. [Tailwind CSS](https://tailwindcss.com/) - Styling Framework
4. [NodeJS](https://nodejs.org/en) - Javascript runtime environment for building fast and scalable web applications
5. [ExpressJS](https://expressjs.com/) - Node framework for building REST apis
6. [React Bootstrap](https://react-bootstrap.netlify.app/) - Styling Framework
7. [ExpressJS](https://expressjs.com/) 


# Sources Used

## Frontend 

### Learning Materials

To have understanding of HTML and CSS concepts and refresh the knowledge on the topics we checked following videos :-
1. [Advanced HTML/CSS Concepts Crash Course](https://www.youtube.com/watch?v=XhqEuyWjbdo) - *codedamn*

2. [Flexbox CSS In 20 Minutes](https://www.youtube.com/watch?v=JJSoEo8JSnc) - *Traversy Media*

Using the above materials, we learnt about HTML5 semantics, CSS selectors, pseudo selectors and flex boxes.

### Code 

### 1.  book-library.css

*Lines 110 - 118*

```css
.book-shelf {
    position: absolute;
    bottom: 40px;
    width: 60%;
    background: linear-gradient(30deg,rgba(254,228,175,255), #996443); /* Used here */
    padding: 5px;
    text-align: center;
    box-shadow: 0px 10px 5px rgba(0, 0, 0, 0.4);
} 

```

The code above was created by adapting the code in [Mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient) as shown below: 

```css
background: linear-gradient(#e66465, #9198e5);
background: linear-gradient(45deg, blue, red)

```

- The code was used by studying about linear-gradient CSS function and then implementing according to requirement of the assignment.

- The above code was used because we wanted to implement the book shelf having a real visual of how actually the shelf looks like.

- We combined the above 2 linear-gradient functions provided and used background having gradient effect along with rotation at 30 degree.

### 2. filters.css

*Lines 161 - 168 and 185 - 189*

```css
.search-box input:not(:placeholder-shown):not(:focus)+label {
    opacity: 0;
    pointer-events: none;
}
...
...
.search-box input:not(:placeholder-shown)~#remove-search {
    opacity: 1;
    cursor: pointer;
    pointer-events: all;
}
```

The code above was created by adapting the code in [StackOverflow](https://stackoverflow.com/a/61130966) as shown below: 

```css
input:not(:placeholder-shown) {
  border: 1px solid red;
}
```

- The query was present on stackoverflow as ``` Detect if an input has text in it using CSS -- on a page We am visiting and do not control? ```. We skimmed through all the answers and used the best possible answer for my requirement.

- We had a requirement that the remove text button and search label should be visible and not visible based on the text present in the input box. 

- We modified the code to use specifically for label and remove-search icon in combination with *CSS selectors*.

### 3. FilterBtn.js, Search.js

*Lines 7 and 40 respectively*

```html
<!-- Filter Icon -->
<span id='filter-icon'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="filter"><path d="M2 7h.142a3.981 3.981 0 0 0 7.716 0H30a1 1 0 0 0 0-2H9.858a3.981 3.981 0 0 0-7.716 0H2a1 1 0 0 0 0 2zm4-3a2 2 0 1 1-2 2 2 2 0 0 1 2-2zm24 11h-.142a3.981 3.981 0 0 0-7.716 0H2a1 1 0 0 0 0 2h20.142a3.981 3.981 0 0 0 7.716 0H30a1 1 0 0 0 0-2zm-4 3a2 2 0 1 1 2-2 2 2 0 0 1-2 2zm4 7H19.858a3.981 3.981 0 0 0-7.716 0H2a1 1 0 0 0 0 2h10.142a3.981 3.981 0 0 0 7.716 0H30a1 1 0 0 0 0-2zm-14 3a2 2 0 1 1 2-2 2 2 0 0 1-2 2z"></path></svg> </span>

<!-- Search Icon -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="search"><g data-name="Layer 2"><path d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z" data-name="search"></path></g></svg>

```
The code above was created by adapting the code in [Iconscout](https://iconscout.com/icons/cross) having multiple icons options. 


```html
<svg></svg>
```

- The icons code was present on the site available.
- We wanted to display the icons to make the UI user friendly.
- We modified the code by adding appropriate CSS on the ``HTML`` element.

### 4. FilterMenu.js

*Lines 25 and 47 respectively*

```js
 useEffect(() => {
        axios.get(`${backend_url}/books/genres`)
            .then(response => {
                if (response.data.status) {
                    const fetchedGenres = response.data.data.map(genre => genre.name);
                    setGenres(fetchedGenres);
                }
            })
            .catch(error => {
                console.error("Error fetching genres:", error);
            });

        axios.get(`${backend_url}/books/authors`)
            .then(response => {
                if (response.data.status) {
                    const fetchedAuthors = response.data.data.map(author => author.name);
                    setAuthors(fetchedAuthors);
                }
            })
            .catch(error => {
                console.error("Error fetching authors:", error);
            });
    }, []);
```

The code above was created by adapting the code in [blog.logrocket](https://blog.logrocket.com/useeffect-react-hook-complete-guide/#:~:text=This%20may%20sound%20strange%20initially,UI%20because%20they%20run%20asynchronously) as shown below:
```js
 useEffect(() => {
    console.log("useEffect local storage");
    const persistedTitle = localStorage.getItem("title");
    setTitle(persistedTitle || []);
  }, []);
```

- The code was used to have an understanding on different use-case of useEffect Hook.
- We used the code because we wanted to make the call only once when the component mounts in React.
- We used the empty square brackets and called the genres and authors API to fetch all the available filters using axios.

### 5. BookDetail.js
Path: \frontend\src\components\Books\BookDetail.js

*Lines 168-173, 256-263*

```js
<Button
 onClick={() => callReservation()}
  className="resever-btn"
>
  Reserve
</Button>
...
<Button
  onClick={() => {
    addRating();
  }}
  className="resever-btn"
>
  Submit
</Button>                          

```

The code above was created by adapting the code in [Bootstrap Button](https://getbootstrap.com/docs/4.0/components/buttons/) after thoroughly studying the original source as shown below: 

```js
<button class="btn btn-primary" type="submit">Button</button>

```

- [Bootstrap Buttons](https://getbootstrap.com/docs/4.0/components/buttons/)'s code is used as reference to create button designs.

### 6. BookDetail.js
Path: \frontend\src\components\Books\BookDetail.js

*Lines 483-646*

```js
<Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            {}
            <Modal.Title>Customer Ratings & Reviews</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modalReviewBody">
            <div className="d-flex align-items-center gap-2">
              <h2 className="">
                {ratingArray.length > 0 &&
                  (
                    ratingArray.reduce((acc, val) => {
                      var objreating =
                        acc + parseFloat(val.noOfStars.toFixed(1));
                      return objreating;
                    }, 0) / ratingArray.length
                  ).toFixed(1)}
              </h2>

              <div className="d-flex align-items-center gap-2">
                <Rating
                  stop={5}
                  readonly
                  initialRating={ratingRatio}
                  emptySymbol={
                    <FontAwesomeIcon
                      icon={regularStar}
                      size="1x"
                      className="medium"
                    />
                  }
                  fullSymbol={
                    <FontAwesomeIcon
                      icon={solidStar}
                      size="1x"
                      className="medium"
                      style={{ color: "#f5c842" }}
                    />
                  }
                />
              </div>
              <div className="mx-1">
                {}
                <button
                  className="mx-2 btn btn-primary"
                  onClick={() => {
                    setShowFilter(!showFilter);
                  }}
                >
                  {!showFilter ? "Show Filters" : "Hide Filters"}
                </button>
              </div>
            </div>

            <div
              className={`${
                showFilter ? "d-flex" : "d-none"
              } flex-wrap mt-3 justify-content-center`}
            >
              <div>
                <FontAwesomeIcon
                  icon={faFilter}
                  className="fs-3 mx-sm-2 mx-1"
                />
              </div>
              <div>
                <button
                  className={`cursor-pointer mx-sm-2 mx-1 ${
                    isReleventOrRecent !== "relevent" ? "flActive" : ""
                  }`}
                  onClick={handleRecent}
                >
                  Most Recent
                </button>
              </div>
              <div>
                <button
                  className={`cursor-pointer mx-sm-2 mx-1 ${
                    isReleventOrRecent === "relevent" ? "flActive" : ""
                  }`}
                  onClick={handleRelevant}
                >
                  Most Relevant
                </button>
              </div>
            </div>
            {isReleventOrRecent === "recent" ? (
              <>
                {mostRecent.map((mostRecentData, index) => (
                  <div
                    key={index}
                    className="my-2 d-flex align-items-center npmreating1"
                  >
                    <div className="mx-2">
                      <i className="fa-solid fa-user"></i>
                    </div>
                    <div className="mx-2">
                      <div className="d-flex align-items-center gap-2">
                        <Rating
                          stop={5}
                          readonly
                          initialRating={mostRecentData.noOfStars}
                          emptySymbol={
                            <FontAwesomeIcon
                              icon={regularStar}
                              size="1x"
                              className="medium"
                            />
                          }
                          fullSymbol={
                            <FontAwesomeIcon
                              icon={solidStar}
                              size="1x"
                              className="medium"
                              style={{ color: "#f5c842" }}
                            />
                          }
                        />
                      </div>
                      <h6 className="mt-1">{mostRecentData.description}</h6>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <>
                {mostRelevant?.map((mostRelevantData, index) => (
                  <div
                    key={index}
                    className="my-2 d-flex align-items-center npmreating1"
                  >
                    <div className="mx-2">
                      <i className="fa-solid fa-user"></i>
                    </div>
                    <div className="mx-2">
                      <div className="d-flex align-items-center gap-2">
                        <Rating
                          stop={5}
                          readonly
                          initialRating={mostRelevantData.noOfStars}
                          emptySymbol={
                            <FontAwesomeIcon
                              icon={regularStar}
                              size="1x"
                              className="medium"
                            />
                          }
                          fullSymbol={
                            <FontAwesomeIcon
                              icon={solidStar}
                              size="1x"
                              className="medium"
                              style={{ color: "#f5c842" }}
                            />
                          }
                        />
                      </div>
                      <h6 className="mt-1">{mostRelevantData.description}</h6>
                    </div>
                  </div>
                ))}
              </>
            )}
          </Modal.Body>
        </Modal>                         

```

The code above was created by adapting the code in [Bootsrap Modal](https://getbootstrap.com/docs/4.0/components/modal/) as shown below: 

```js
<div class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Save changes</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

```

- [Bootsrap Modal](https://getbootstrap.com/docs/4.0/components/modal/)'s Code was used for the modal popup design to keep the consistency of bootsrap design and responsiveness by thoroughly studying and understanding the concept and logic.
- [FA Icons](https://fontawesome.com/v4/icons/)'s Code was used to show the fonts and icons.
- [FortAwesome Icons](https://docs.fontawesome.com/web/setup/get-started)'s code was used to show fonts.

### 7. BookDetail.js
Path: \frontend\src\components\Books\BookDetail.js

*Lines 184-192, 224-230*

```js
<Rating
 stop={5}
 initialRating={ratingRatio}
 emptySymbol={
   <FontAwesomeIcon
     icon={regularStar}
     size="1x"
     className="medium"
   />  
  ...
   <Rating
stop={5}

initialRating={rating}
emptySymbol={
  <FontAwesomeIcon
    icon={regularStar}
    size="1x"
    className="medium"
  />                    

```

The code above was created by adapting the code in [Reacting Rating](https://www.npmjs.com/package/react-rating) after thoroughly studying the original source as shown below: 

```js
<Rating />

```

- [React Rating](https://www.npmjs.com/package/react-rating)'s code is used as reference to create rating designs.

### 8. BookDetail.js

*Line 120*

```js
toast.success("Review added successfully.");                  

```

The code above was created by adapting the code in [Toast messages in react tutorial](https://www.geeksforgeeks.org/reactjs-toast-notification/) after thoroughly studying the original source as shown below: 

```js
import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
 
toast.configure();
function GeeksforGeeks() {
    const notify = () => {
        // inbuilt-notification
        toast.warning("Danger");
        // inbuilt-notification
        toast.success("successful");
        // inbuilt-notification
        toast.info("GeeksForGeeks");
        // inbuilt-notification
        toast.error("Runtime error");
        // default notification
        toast("Hello Geeks");
    };
    return (
        <div className="GeeksforGeeks">
            <button onClick={notify}>Click Me!</button>
        </div>
    );
}
export default GeeksforGeeks;

```

- [Toast messages in react tutorial](https://www.geeksforgeeks.org/reactjs-toast-notification/) 's Code was used as reference to create a toast success/error messages.

### 9. BookDetail.js
Path: \frontend\src\components\Books\BookDetail.js

*Line 89, 118*

```js
        const api = await axios.get(`${backend_url}/books/${bookId}`);
...
        const api = await axios.post(backend_url + "/books/rating", data);

```

The code above was created by adapting the code in [Axios In React tutorial](https://www.freecodecamp.org/news/how-to-use-axios-with-react/) after thoroughly studying the original source as shown below: 

```js
import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function createPost() {
    axios
      .post(baseURL, {
        title: "Hello World!",
        body: "This is a new post."
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  if (!post) return "No post!"

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={createPost}>Create Post</button>
    </div>
  );
}

```

- [Axios In React tutorial](https://www.freecodecamp.org/news/how-to-use-axios-with-react/) 's Code was used as reference to create a axios post request.

### 10. Recommended.js
Path: \frontend\src\components\Books\Recommended.js

*Lines 89-104*

```js
<ReactPaginate
      previousLabel={"<<"}
      nextLabel={">>"}
      breakLabel={"..."}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      onPageChange={handlePageChange}
      containerClassName={"pagination justify-content-end"}
      activeClassName={"active"}
      pageLinkClassName={"page-link"}
      previousLinkClassName={"page-link"}
      nextLinkClassName={"page-link"}
      breakLinkClassName={"page-link"}
      disabledClassName={"disabled"}
 />                  

```

The code above was created by adapting the code in [Reacting Paginate](https://www.npmjs.com/package/react-paginate) after thoroughly studying the original source as shown below: 

```js
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';

// Example items, to simulate fetching from another resources.
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div>
            <h3>Item #{item}</h3>
          </div>
        ))}
    </>
  );
}

function PaginatedItems({ itemsPerPage }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

// Add a <div id="container"> to your HTML to see the component rendered.
ReactDOM.render(
  <PaginatedItems itemsPerPage={4} />,
  document.getElementById('container')
);

```

- [React Paginate](https://www.npmjs.com/package/react-paginate)'s code is used as reference to create paginate designs.

### 11. Recommended.js
Path: \frontend\src\components\Books\Recommended.js

*Lines 45-52*

```js
 <Button
            className="m-4"
            onClick={() => {
              window.history.back();
            }}
          >
            Back
          </Button>               

```

The code above was created by adapting the code in [Bootstrap Button](https://getbootstrap.com/docs/4.0/components/buttons/) after thoroughly studying the original source as shown below: 

```
<button class="btn btn-primary" type="submit">Button</button>

```

- [Bootstrap Buttons](https://getbootstrap.com/docs/4.0/components/buttons/)'s code is used as reference to create button designs.


### 12. Recommended.js
Path: \frontend\src\components\Books\Recommended.js

*Line 29*

```js
const api = await axios.get(backend_url + "/books/all");

```

The code above was created by adapting the code in [Axios In React tutorial](https://www.freecodecamp.org/news/how-to-use-axios-with-react/) after thoroughly studying the original source as shown below: 

```js
import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function createPost() {
    axios
      .post(baseURL, {
        title: "Hello World!",
        body: "This is a new post."
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  if (!post) return "No post!"

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={createPost}>Create Post</button>
    </div>
  );
}

```

- [Axios In React tutorial](https://www.freecodecamp.org/news/how-to-use-axios-with-react/) 's Code was used as reference to create a axios post request.


### 13. frontend/tailwind.config.js

_Lines 1 - 26_

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
  theme: {
    extend: {
      colors: {
        customBackground: 'rgb(244, 247, 245)',
        card: 'rgb(77, 99, 86)',
        carrara: 'rgb(241,242,227)',
        navbar: 'rgb(128, 124, 149)',
        darkSkin: 'rgb(130, 120, 110)',
        text: 'rgb(31, 21, 32)',
        highlight: 'rgb(56, 110, 128)',
        navbarBrown: 'rgba(192, 138, 95, 255)',
        aboutUsBrown: 'rgba(252, 232, 199, 1)',
        hoverNavbarBrown: 'rgb(160, 107, 64)'
      },
    },
  }
}
```

This code above was created by adapting the code in [Configuration - A guide to configuring and customizing your Tailwind installation.](https://tailwindcss.com/docs/configuration) as shown below:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

- The above code is the default configuration that is provided by Tailwind CSS that provides certain styles and configurations to components and elements. Since nothing is defined yet in the configuration file, everything is defaulted to the default configuration that can be found in [default configuration](https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/config.full.js).
- We modifed it so that we can define some custom colors for the application's background, and components. This is important as it makes it easier to make the entire application look and feel consistent throughout even though different members might work on different parts of the application.

### 14. frontend/src/components/LateFeeSystem/AdminSide/LateFeeSystemSearch.js

_Lines 45-80_

```js
        <div className='bg-aboutUsBrown h-full py-8'>
            <div className="container-xl mx-auto px-4 py-8 text-black bg-white rounded-lg">
                <div className="flex flex-col relative ">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="border border-gray-300 rounded py-2 px-4"
                        value={searchQuery}
                        onChange={handleSearch}
                    />
                    <svg className='absolute top-0 right-0' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0,0,256,256">
                        <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{"mix-blend-mode": "normal"}}><g transform="scale(5.33333,5.33333)"><path transform="translate(-15.15512,36.5872) rotate(-45.001)" d="M34.6,28.1h4v17h-4z" fill="#fce8c7"></path><path d="M20,4c-8.83656,0 -16,7.16344 -16,16c0,8.83656 7.16344,16 16,16c8.83656,0 16,-7.16344 16,-16c0,-8.83656 -7.16344,-16 -16,-16z" fill="#fce8c7"></path><path transform="translate(-15.83953,38.24094) rotate(-45.001)" d="M36.2,32.1h4v12.3h-4z" fill="#6e4801"></path><path d="M20,7c-7.1797,0 -13,5.8203 -13,13c0,7.1797 5.8203,13 13,13c7.1797,0 13,-5.8203 13,-13c0,-7.1797 -5.8203,-13 -13,-13z" fill="#6e4801"></path><path d="M26.9,14.2c-1.7,-2 -4.2,-3.2 -6.9,-3.2c-2.7,0 -5.2,1.2 -6.9,3.2c-0.4,0.4 -0.3,1.1 0.1,1.4c0.4,0.4 1.1,0.3 1.4,-0.1c1.4,-1.6 3.3,-2.5 5.4,-2.5c2.1,0 4,0.9 5.4,2.5c0.2,0.2 0.5,0.4 0.8,0.4c0.2,0 0.5,-0.1 0.6,-0.2c0.4,-0.4 0.4,-1.1 0.1,-1.5z" fill="#fce8c7"></path></g></g>
                    </svg>
                </div>
                <div className="mt-8">
                    {filteredResults.length > 0 ? (
                        filteredResults.map((result) => (
                            <div key={result._id} onClick={() => handleClick(result.user_id)} className="flex flex-col sm:flex-row justify-between border border-gray-200 rounded p-4 mb-4 cursor-pointer">
                                <div className='flex flex-row items-start w-0.66'>
                                    <img src={result.user_picture} alt="User" className="rounded-full w-[100px] h-[100px]" />
                                    <div className='ml-4'>
                                        <p className="text-lg font-bold">{result.user_name}</p>
                                        <p className="">{result.book_name}</p>
                                    </div>
                                </div>
                                <div className='flex flex-col ml-[7.25rem] md:ml-auto md:justify-center'>
                                    <p className="text-lg font-bold text-hoverNavbarBrown">${result.amount}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className='text-center text-muted'>{apiMessage}</p>
                    )}
                </div>
            </div>
        </div>
```

- The above code is the is created by using Tailwind CSS classes according to the necessity and use case. We had not used any pre-built templates/ layouts to achieve the UI. Instead, We used tailwind class names and custom styling to achieve the look that We had proposed in wireframes and semi-functional prototypes.
- The code also showcases the use of ternary operators to display an error message (User feedback) if any error occurs while fetching the data.
- The code is also mobile responsive which was achieved through tailwind css breakpoints such as **md:, sm:** which allows us to manipulate styling based on certain device widths.

_Lines 7 - 42_

```js
    const navigate = useNavigate();
    const [apiResults, setApiResults] = useState([]);
    const [apiMessage, setApiMessage] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const data = await getActiveLateFeesUsers();
            // console.log(data);
            setApiResults(data.users);
            setApiMessage(data.message);
        };
        fetchData();
    }
        // eslint-disable-line react-hooks/exhaustive-deps
        , []);

    useEffect(() => {
        if (searchQuery === '') {
            setFilteredResults(apiResults);
        } else {
            const newFilteredResults = apiResults.filter(item =>
                item.user_name.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredResults(newFilteredResults);
        }
    }, [searchQuery, apiResults]);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleClick = (user_id) => {
        navigate('/latefee/details', { state: { user_id } });
    };
```

- We have setup state variables to achieve the dynamic update of UI. Furthermore, creating multiple state variables for multiple parameters of the request's response made the code more decoupled and easier to manage.
- The use of useEffect for search instead of a button makes the search functionality rapidly fast.

### 15. frontend/src/components/LateFeeSystem/AdminSide/LateFeeSytemUserDetails.js

_Lines 8 - 88_

```js
    const navigate = useNavigate();
    const location = useLocation();
    const { user_id } = location.state;
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const [userDetails, setUserDetails] = useState({})
    const [userDetailsResponseMessage, setUserDetailsResponseMessage] = useState('')
    const [activeLateFeeDetails, setActiveLateFeeDetails] = useState({})
    const [activeLateFeeResponseMessage, setActiveLateFeeResponseMessage] = useState('')
    const [pastLateFeeDetails, setPastLateFeeDetails] = useState([])
    const [pastLateFeeResponseMessage, setPastLateFeeResponseMessage] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            // User Details
            const userData = await getUserDetails(user_id);
            // console.log(userData);
            setUserDetails(userData.user);
            setUserDetailsResponseMessage(userData.message);
        };
        fetchData();
    },
        [user_id])

    useEffect(() => {
        const fetchData = async () => {
            // Active Late Fee Details
            const activeLateFeeData = await getActiveLateFeeDetails(user_id);
            // console.log(activeLateFeeData);
            setActiveLateFeeDetails(activeLateFeeData.active_late_fee);
            setActiveLateFeeResponseMessage(activeLateFeeData.message);
        };
        fetchData();
    },
        [user_id])

    useEffect(() => {
        const fetchData = async () => {
            // Past Late Fee Details
            const pastLateFeeData = await getPastLateFees(user_id);
            // console.log(pastLateFeeData);
            setPastLateFeeDetails(pastLateFeeData.past_late_fees);
            setPastLateFeeResponseMessage(pastLateFeeData.message);
        };
        fetchData();
    },
        [user_id])


    // const userDetails = { id: 2, user: { name: 'Jane Smith', email: 'ab@ab.ab', phone: '+17828224556', picture: 'https://source.unsplash.com/random/100x100/?person' }, book: { name: 'Book 2', reservedDate: "25-01-2024", dueDate: "02-02-2024" }, fee: "$150" }

    const handleRemindUser = async () => {
        // Logic to remind user
        const response = await remindUserLateFee(user_id);
        // console.log(response);
        if (!response?.status) {
            setModalContent(response?.message);
            setShowModal(true);
        }
        setModalContent('User successfully notified!');
        setShowModal(true);

    };

    const handleClearFee = async () => {
        // Logic to clear fee
        const response = await clearActiveLateFee(user_id);
        if (!response?.status) {
            setModalContent(response?.message);
            setShowModal(true);
            return;
        }
        setModalContent('Successfully cleared!');
        setShowModal(true);

    };

    const closeModal = () => {
        setShowModal(false);
        navigate('/latefee/');
    };

```

- The use of 3 **useEffects** for 3 APIs instead of 1 makes different sections of the page load almost synchronously. Furthermore, it doesn't hog the request with 3 responses to await for.
- The use of **?** symbol while accessing parameters of an object allows of error handling incase of a missing key.

_Lines 169 - 190_

```js
<div className="fixed z-100 inset-0 overflow-y-auto">
  <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
          <div className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex items-end justify-end">
                      <div onClick={() => closeModal()} className="cursor-pointer flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-navbarBrown hover:bg-hoverNavbarBrown sm:mx-0 sm:h-10 sm:w-10">
                          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                      </div>
                  </div>
                  <div className="mt-4">
                      <p className="text-lg text-center mb-8 leading-6 font-medium text-gray-900">{modalContent}</p>
                  </div>
              </div>
          </div>
    </div>
</div>
```
- This code is referenced and adapted from [Tailwind CSS Modal - Flowbite](https://flowbite.com/docs/components/modal/). We had changed the entire look and feel of the modal according to the needs of my feature's UI.
The original code is shown below:
```js

<button data-modal-target="popup-modal" data-modal-toggle="popup-modal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
Toggle modal
</button>

<div id="popup-modal" tabindex="-1" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-md max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button" class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span class="sr-only">Close modal</span>
            </button>
            <div class="p-4 md:p-5 text-center">
                <svg class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg>
                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
                <button data-modal-hide="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                    Yes, I'm sure
                </button>
                <button data-modal-hide="popup-modal" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">No, cancel</button>
            </div>
        </div>
    </div>
</div>
```
- The original code has many unnecessary components (buttons, text) that we had removed as they were not useful to my usecase. we also made it mobile responsive by setting breakpoint styling.

_Lines 196 - 243_
```js
                        <table class="w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th scope="col" class="px-3 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                                        Image
                                    </th>
                                    <th scope="col" class="px-3 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                                        Name
                                    </th>
                                    <th scope="col" class="px-3 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                                        Reserved Date
                                    </th>
                                    <th scope="col" class="px-3 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                                        Due Date
                                    </th>
                                    <th scope="col" class="px-3 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                                        Paid Date
                                    </th>
                                    <th scope="col" class="px-3 md:px-6 py-3 text-left text-xs md:text-sm font-medium text-gray-500 uppercase tracking-wider">
                                        Amount
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                {pastLateFeeDetails.map((item, i) => (
                                    <tr key={i}>
                                        <td class="px-3 md:px-6 py-3 md:whitespace-nowrap">
                                            <img src={item.image_url} alt="Book" class="h-10 w-10 rounded-full" />
                                        </td>
                                        <td class="px-3 md:px-6 py-3 md:whitespace-nowrap">
                                            {item.book_name}
                                        </td>
                                        <td class="px-3 md:px-6 py-3 md:whitespace-nowrap">
                                            {item.reserved_date}
                                        </td>
                                        <td class="px-3 md:px-6 py-3 md:whitespace-nowrap">
                                            {item.due_date}
                                        </td>
                                        <td class="px-3 md:px-6 py-3 md:whitespace-nowrap">
                                            {item.paid_date}
                                        </td>
                                        <td class="px-3 md:px-6 py-3 md:whitespace-nowrap">
                                            ${item.amount}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
```
- The code above is for a table that we referenced and extended from [Tailwind CSS Table - Flowbite](https://flowbite.com/docs/components/tables/). The original code is as shown below:

```js
<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Color
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
            </tr>
        </tbody>
    </table>
</div>

```
- While the original code had defined the structure that we needed, the data, and the size of the table were not what we wanted. we had added more columns according to my data, defined some custom styling based on the type of the data that we was handling, and also made it mobile responsive by setting breakpoint styling.

### 16. Navbar.js

_Lines 24 - 84_

```js
<Navbar expand="lg" className="top-nav" data-bs-theme="light">
        <Container className='min-w-full px-4'>
            <Navbar.Brand href="/">
                <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                />{' '}
                Book Stack
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="container-fluid">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/books">Books</Nav.Link>
                <Nav.Link href="/favorites">Favorites</Nav.Link>
                <Nav.Link href="/about">About Us</Nav.Link>
                <Nav.Link href="/contactus">Contact Us</Nav.Link>
                <Nav.Link href="/faq">FAQ</Nav.Link>
                { user ? <Nav.Link href="/adminLateFeeSystemSearch">Late Fee System</Nav.Link> : <></> }
                { user ?
                    <Nav.Link href="/manage-books">Book Management</Nav.Link> : <></> }
                {
                    user ?
                    <NavDropdown className="ms-auto"
                        title="Sam"
                        id="basic-nav-dropdown">
                        <NavDropdown.Item href="#profile">
                            <Row>
                                <Col xs={3}>
                                    <img src={profileIcon} alt=""/>
                                </Col>
                                <Col xs={6}>
                                    <Row>Sam</Row>
                                    <Row>sam@dal.ca</Row>
                                </Col>
                            </Row>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#profile">Profile Settings</NavDropdown.Item>
                        <NavDropdown.Item href="/manage-books">
                            Book Management
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#dark-mode">Dark Mode</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={() => logout()}>
                            Signout
                        </NavDropdown.Item>
                    </NavDropdown> :
                    <Container className='authentication-buttons'>
                        <Button className="btn login" onClick={() => login()}>Login</Button>
                        <Button className="btn signup" variant='outline-primary'>Sign Up</Button>
                    </Container>
                }
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
```

- The code above was created by adapting the code in [Navbars | React Bootstrap](https://react-bootstrap.netlify.app/docs/components/navbar). Since navbar is an essential component, we had used the component from Bootstrap CSS.

```js
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

```

- The original code shows a simple navbar that displays a few buttons and few links to certain pages. By default all those links and buttons redirect to `/` as this is a boilerplate code.
- We modified the code such that the navbar becomes dynamic and works according to the flow we visualized while building the application. The navbar on the login page must contain basic layout with buttons probably to login, whereas once logged in it should show additional details with links to featuers. This was done using the help of state variables that we have declared in the parent component, i.e. `App.js`. 
- A navbar is crucial to the application as it contains some useful links that helps users navigate through the application.
- We changed the alignment of items in the navbar and the color scheme to match the theme of the application.

### 17. Home.js

_Lines 14-92_

```js
      <div className='home-div'>
        <Container id="hero" className='mb-5'>
        <div className="row">
          <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center" data-aos="fade-up">
            <div className='home-info-text-div'>
              <h1>Welcome to Book Stack</h1>
              <h2> Your Ultimate Book Rental Destination</h2>
              <a href="/coming-soon" className="btn-get-started scrollto">Explore Books</a>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left">
            <img loading='lazy' src={homebg} className="img-fluid" alt="" />
          </div>
        </div>
        </Container>
      </div>
      <section id="about" className="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6" data-aos="zoom-in">
              <img loading='lazy' src={bookLover} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-6">
              <div className="pt-4 pt-lg-0">
                <h3>Our Book Rental Service</h3>
                <p class="fst-italic">
                  Welcome to Book Stack, your premier destination for renting books online. We are passionate about providing avid readers with a convenient and affordable way to access a vast library of books.
                </p>
                <ul>
                  <li> Explore a diverse collection of books spanning various genres, from fiction to non-fiction, classics to contemporary bestsellers.</li>
                  <li> Enjoy flexible rental options tailored to your reading preferences, whether you prefer short-term rentals for a quick read or long-term rentals for an in-depth exploration.</li>
                  <li>Experience hassle-free browsing and booking with our user-friendly platform designed to make your book rental journey seamless and enjoyable.</li>
                </ul>
                <p>
                  At Book Stack, we are committed to enhancing your reading experience by providing exceptional service and a wide selection of books at your fingertips. Start your reading adventure with us today!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="services" class="services section-bg">
        <div class="container">
          <div class="section-title" data-aos="fade-up">
            <h2>Services</h2>
            <p>Discover the key features that make Book Stack your ultimate destination for book rentals.</p>
          </div>
          <div class="row">
            <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in">
              <div class="icon-box icon-box-pink">
                <div class="icon"><img loading='lazy' src={bookDetailsIcon} alt="" /></div>
                <h4 class="title">Book Details</h4>
                <p class="description">Access comprehensive details and information about each book in our extensive collection.</p>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="100">
              <div class="icon-box icon-box-cyan">
                <div class="icon"><img loading='lazy' src={favIcon} alt="" /></div>
                <h4 class="title">Favorites</h4>
                <p class="description">Easily mark and manage your favorite books for quick access and personalized recommendations.</p>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="200">
              <div class="icon-box icon-box-green">
                <div class="icon"><img loading='lazy' src={openBookIcon} alt="" /></div>
                <h4 class="title">Book Library</h4>
                <p class="description">Explore our vast library of books spanning various genres and topics to find your next read.</p>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="300">
              <div class="icon-box icon-box-blue">
                <div class="icon"><img loading='lazy' src={feedbackIcon} alt="" /></div>
                <h4 class="title">Book Feedback</h4>
                <p class="description">Share your thoughts and feedback on the books you've read to help other users make informed choices.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
```
- The code above was created by adapting the code in [Scaffold Template Home Page](https://bootstrapmade.com/demo/Scaffold/).

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>Scaffold Bootstrap Template - Index</title>
  <meta content="" name="description">
  <meta content="" name="keywords">

  <!-- Favicons -->
  <link href="assets/img/favicon.png" rel="icon">
  <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

  <!-- Vendor CSS Files -->
  <link href="assets/vendor/aos/aos.css" rel="stylesheet">
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
  <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
  <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
  <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">

  <!-- Template Main CSS File -->
  <link href="assets/css/style.css" rel="stylesheet">

  <!-- =======================================================
  * Template Name: Scaffold
  * Updated: Jan 29 2024 with Bootstrap v5.3.2
  * Template URL: https://bootstrapmade.com/scaffold-bootstrap-metro-style-template/
  * Author: BootstrapMade.com
  * License: https://bootstrapmade.com/license/
  ======================================================== -->
</head>

<body>

  <!-- ======= Header ======= -->
  <header id="header" class="fixed-top d-flex align-items-center">
    <div class="container d-flex align-items-center">

      <div class="logo me-auto">
        <h1><a href="index.html">Scaffold</a></h1>
        <!-- Uncomment below if you prefer to use an image logo -->
        <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->
      </div>

      <nav id="navbar" class="navbar order-last order-lg-0">
        <ul>
          <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
          <li class="dropdown"><a href="#"><span>About</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a class="nav-link scrollto" href="#about">About Us</a></li>
              <li><a class="nav-link scrollto" href="#team">Team</a></li>
              <li><a class="nav-link scrollto" href="#testimonials">Testimonials</a></li>
              <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li><a class="nav-link scrollto" href="#services">Services</a></li>
          <li><a class="nav-link scrollto " href="#portfolio">Portfolio</a></li>
          <li><a class="nav-link scrollto" href="#pricing">Pricing</a></li>
          <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav><!-- .navbar -->

      <div class="header-social-links d-flex align-items-center">
        <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
        <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
        <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
        <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></i></a>
      </div>

    </div>
  </header><!-- End Header -->

  <!-- ======= Hero Section ======= -->
  <section id="hero">

    <div class="container">
      <div class="row">
        <div class="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center" data-aos="fade-up">
          <div>
            <h1>We design digital products that help grow businesses</h1>
            <h2>We are team of talented designers making websites with Bootstrap</h2>
            <a href="#about" class="btn-get-started scrollto">Get Started</a>
          </div>
        </div>
        <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left">
          <img src="assets/img/hero-img.png" class="img-fluid" alt="">
        </div>
      </div>
    </div>

  </section><!-- End Hero -->

  <main id="main">

    <!-- ======= About Section ======= -->
    <section id="about" class="about">
      <div class="container">

        <div class="row">
          <div class="col-lg-6" data-aos="zoom-in">
            <img src="assets/img/about.jpg" class="img-fluid" alt="">
          </div>
          <div class="col-lg-6 d-flex flex-column justify-contents-center" data-aos="fade-left">
            <div class="content pt-4 pt-lg-0">
              <h3>Learn more about us</h3>
              <p class="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </p>
              <ul>
                <li><i class="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                <li><i class="bi bi-check-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                <li><i class="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperd</li>
              </ul>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate tera noden carma palorp mades tera.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section><!-- End About Section -->

    <!-- ======= Features Section ======= -->
    <section id="features" class="features">
      <div class="container">

        <div class="row">
          <div class="col-lg-6 mt-2 mb-tg-0 order-2 order-lg-1">
            <ul class="nav nav-tabs flex-column">
              <li class="nav-item" data-aos="fade-up">
                <a class="nav-link active show" data-bs-toggle="tab" href="#tab-1">
                  <h4>Modi sit est</h4>
                  <p>Quis excepturi porro totam sint earum quo nulla perspiciatis eius.</p>
                </a>
              </li>
              <li class="nav-item mt-2" data-aos="fade-up" data-aos-delay="100">
                <a class="nav-link" data-bs-toggle="tab" href="#tab-2">
                  <h4>Unde praesentium sed</h4>
                  <p>Voluptas vel esse repudiandae quo excepturi.</p>
                </a>
              </li>
              <li class="nav-item mt-2" data-aos="fade-up" data-aos-delay="200">
                <a class="nav-link" data-bs-toggle="tab" href="#tab-3">
                  <h4>Pariatur explicabo vel</h4>
                  <p>Velit veniam ipsa sit nihil blanditiis mollitia natus.</p>
                </a>
              </li>
              <li class="nav-item mt-2" data-aos="fade-up" data-aos-delay="300">
                <a class="nav-link" data-bs-toggle="tab" href="#tab-4">
                  <h4>Nostrum qui quasi</h4>
                  <p>Ratione hic sapiente nostrum doloremque illum nulla praesentium id</p>
                </a>
              </li>
            </ul>
          </div>
          <div class="col-lg-6 order-1 order-lg-2" data-aos="zoom-in">
            <div class="tab-content">
              <div class="tab-pane active show" id="tab-1">
                <figure>
                  <img src="assets/img/features-1.png" alt="" class="img-fluid">
                </figure>
              </div>
              <div class="tab-pane" id="tab-2">
                <figure>
                  <img src="assets/img/features-2.png" alt="" class="img-fluid">
                </figure>
              </div>
              <div class="tab-pane" id="tab-3">
                <figure>
                  <img src="assets/img/features-3.png" alt="" class="img-fluid">
                </figure>
              </div>
              <div class="tab-pane" id="tab-4">
                <figure>
                  <img src="assets/img/features-4.png" alt="" class="img-fluid">
                </figure>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section><!-- End Features Section -->

    <!-- ======= Services Section ======= -->
    <section id="services" class="services section-bg">
      <div class="container">

        <div class="section-title" data-aos="fade-up">
          <h2>Services</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div class="row">
          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in">
            <div class="icon-box icon-box-pink">
              <div class="icon"><i class="bx bxl-dribbble"></i></div>
              <h4 class="title"><a href="">Lorem Ipsum</a></h4>
              <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box icon-box-cyan">
              <div class="icon"><i class="bx bx-file"></i></div>
              <h4 class="title"><a href="">Sed ut perspiciatis</a></h4>
              <p class="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="200">
            <div class="icon-box icon-box-green">
              <div class="icon"><i class="bx bx-tachometer"></i></div>
              <h4 class="title"><a href="">Magni Dolores</a></h4>
              <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="300">
            <div class="icon-box icon-box-blue">
              <div class="icon"><i class="bx bx-world"></i></div>
              <h4 class="title"><a href="">Nemo Enim</a></h4>
              <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p>
            </div>
          </div>

        </div>

      </div>
    </section><!-- End Services Section -->

    <!-- ======= Portfolio Section ======= -->
    <section id="portfolio" class="portfolio">
      <div class="container">

        <div class="section-title" data-aos="fade-up">
          <h2>Portfolio</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div class="row">
          <div class="col-lg-12 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
            <ul id="portfolio-flters">
              <li data-filter="*" class="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-1.jpg" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4>App 1</h4>
                <p>App</p>
              </div>
              <div class="portfolio-links">
                <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 1"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-2.jpg" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
              </div>
              <div class="portfolio-links">
                <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 3"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-3.jpg" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4>App 2</h4>
                <p>App</p>
              </div>
              <div class="portfolio-links">
                <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 2"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-4.jpg" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4>Card 2</h4>
                <p>Card</p>
              </div>
              <div class="portfolio-links">
                <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Card 2"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-5.jpg" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4>Web 2</h4>
                <p>Web</p>
              </div>
              <div class="portfolio-links">
                <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 2"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-6.jpg" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4>App 3</h4>
                <p>App</p>
              </div>
              <div class="portfolio-links">
                <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 3"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-7.jpg" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4>Card 1</h4>
                <p>Card</p>
              </div>
              <div class="portfolio-links">
                <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Card 1"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-8.jpg" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4>Card 3</h4>
                <p>Card</p>
              </div>
              <div class="portfolio-links">
                <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Card 3"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-9.jpg" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
              </div>
              <div class="portfolio-links">
                <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 3"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section><!-- End Portfolio Section -->

    <!-- ======= Cta Section ======= -->
    <section id="cta" class="cta">
      <div class="container">

        <div class="row" data-aos="zoom-in">
          <div class="col-lg-9 text-center text-lg-start">
            <h3>Call To Action</h3>
            <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div class="col-lg-3 cta-btn-container text-center">
            <a class="cta-btn align-middle" href="#">Call To Action</a>
          </div>
        </div>

      </div>
    </section><!-- End Cta Section -->

    <!-- ======= Testimonials Section ======= -->
    <section id="testimonials" class="testimonials">
      <div class="container">

        <div class="section-title" data-aos="fade-up">
          <h2>Testimonials</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div class="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
          <div class="swiper-wrapper">

            <div class="swiper-slide">
              <div class="testimonial-item">
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src="assets/img/testimonials/testimonials-1.jpg" class="testimonial-img" alt="">
                <h3>Saul Goodman</h3>
                <h4>Ceo &amp; Founder</h4>
              </div>
            </div><!-- End testimonial item -->

            <div class="swiper-slide">
              <div class="testimonial-item">
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src="assets/img/testimonials/testimonials-2.jpg" class="testimonial-img" alt="">
                <h3>Sara Wilsson</h3>
                <h4>Designer</h4>
              </div>
            </div><!-- End testimonial item -->

            <div class="swiper-slide">
              <div class="testimonial-item">
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src="assets/img/testimonials/testimonials-3.jpg" class="testimonial-img" alt="">
                <h3>Jena Karlis</h3>
                <h4>Store Owner</h4>
              </div>
            </div><!-- End testimonial item -->

            <div class="swiper-slide">
              <div class="testimonial-item">
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src="assets/img/testimonials/testimonials-4.jpg" class="testimonial-img" alt="">
                <h3>Matt Brandon</h3>
                <h4>Freelancer</h4>
              </div>
            </div><!-- End testimonial item -->

            <div class="swiper-slide">
              <div class="testimonial-item">
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src="assets/img/testimonials/testimonials-5.jpg" class="testimonial-img" alt="">
                <h3>John Larson</h3>
                <h4>Entrepreneur</h4>
              </div>
            </div><!-- End testimonial item -->

          </div>
          <div class="swiper-pagination"></div>
        </div>

      </div>
    </section><!-- End Testimonials Section -->

    <!-- ======= Team Section ======= -->
    <section id="team" class="team">
      <div class="container">

        <div class="section-title" data-aos="fade-up">
          <h2>Team</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div class="row">

          <div class="col-lg-4 col-md-6">
            <div class="member" data-aos="zoom-in">
              <div class="pic"><img src="assets/img/team/team-1.jpg" class="img-fluid" alt=""></div>
              <div class="member-info">
                <h4>Walter White</h4>
                <span>Chief Executive Officer</span>
                <div class="social">
                  <a href=""><i class="bi bi-twitter"></i></a>
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                  <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="member" data-aos="zoom-in" data-aos-delay="100">
              <div class="pic"><img src="assets/img/team/team-2.jpg" class="img-fluid" alt=""></div>
              <div class="member-info">
                <h4>Sarah Jhonson</h4>
                <span>Product Manager</span>
                <div class="social">
                  <a href=""><i class="bi bi-twitter"></i></a>
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                  <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="member" data-aos="zoom-in" data-aos-delay="200">
              <div class="pic"><img src="assets/img/team/team-3.jpg" class="img-fluid" alt=""></div>
              <div class="member-info">
                <h4>William Anderson</h4>
                <span>CTO</span>
                <div class="social">
                  <a href=""><i class="bi bi-twitter"></i></a>
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                  <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section><!-- End Team Section -->

    <!-- ======= Clients Section ======= -->
    <section id="clients" class="clients">
      <div class="container">

        <div class="section-title" data-aos="fade-up">
          <h2>Clients</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div class="row no-gutters clients-wrap clearfix wow fadeInUp">

          <div class="col-lg-3 col-md-4 col-xs-6">
            <div class="client-logo" data-aos="zoom-in">
              <img src="assets/img/clients/client-1.png" class="img-fluid" alt="">
            </div>
          </div>

          <div class="col-lg-3 col-md-4 col-xs-6">
            <div class="client-logo" data-aos="zoom-in" data-aos-delay="100">
              <img src="assets/img/clients/client-2.png" class="img-fluid" alt="">
            </div>
          </div>

          <div class="col-lg-3 col-md-4 col-xs-6">
            <div class="client-logo" data-aos="zoom-in" data-aos-delay="150">
              <img src="assets/img/clients/client-3.png" class="img-fluid" alt="">
            </div>
          </div>

          <div class="col-lg-3 col-md-4 col-xs-6">
            <div class="client-logo" data-aos="zoom-in" data-aos-delay="200">
              <img src="assets/img/clients/client-4.png" class="img-fluid" alt="">
            </div>
          </div>

          <div class="col-lg-3 col-md-4 col-xs-6">
            <div class="client-logo" data-aos="zoom-in" data-aos-delay="250">
              <img src="assets/img/clients/client-5.png" class="img-fluid" alt="">
            </div>
          </div>

          <div class="col-lg-3 col-md-4 col-xs-6">
            <div class="client-logo" data-aos="zoom-in" data-aos-delay="300">
              <img src="assets/img/clients/client-6.png" class="img-fluid" alt="">
            </div>
          </div>

          <div class="col-lg-3 col-md-4 col-xs-6">
            <div class="client-logo" data-aos="zoom-in" data-aos-delay="350">
              <img src="assets/img/clients/client-7.png" class="img-fluid" alt="">
            </div>
          </div>

          <div class="col-lg-3 col-md-4 col-xs-6" data-aos="zoom-in" data-aos-delay="400">
            <div class="client-logo">
              <img src="assets/img/clients/client-8.png" class="img-fluid" alt="">
            </div>
          </div>

        </div>

      </div>
    </section><!-- End Clients Section -->

    <!-- ======= Pricing Section ======= -->
    <section id="pricing" class="pricing section-bg">
      <div class="container">

        <div class="section-title" data-aos="fade-up">
          <h2>Pricing</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div class="row">

          <div class="col-lg-3 col-md-6">
            <div class="box" data-aos="zoom-in">
              <h3>Free</h3>
              <h4><sup>$</sup>0<span> / month</span></h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li class="na">Pharetra massa</li>
                <li class="na">Massa ultricies mi</li>
              </ul>
              <div class="btn-wrap">
                <a href="#" class="btn-buy">Buy Now</a>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 mt-4 mt-md-0">
            <div class="box featured" data-aos="zoom-in" data-aos-delay="100">
              <h3>Business</h3>
              <h4><sup>$</sup>19<span> / month</span></h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li class="na">Massa ultricies mi</li>
              </ul>
              <div class="btn-wrap">
                <a href="#" class="btn-buy">Buy Now</a>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 mt-4 mt-lg-0">
            <div class="box" data-aos="zoom-in" data-aos-delay="200">
              <h3>Developer</h3>
              <h4><sup>$</sup>29<span> / month</span></h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li>Massa ultricies mi</li>
              </ul>
              <div class="btn-wrap">
                <a href="#" class="btn-buy">Buy Now</a>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 mt-4 mt-lg-0">
            <div class="box" data-aos="zoom-in" data-aos-delay="300">
              <span class="advanced">Advanced</span>
              <h3>Ultimate</h3>
              <h4><sup>$</sup>49<span> / month</span></h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li>Massa ultricies mi</li>
              </ul>
              <div class="btn-wrap">
                <a href="#" class="btn-buy">Buy Now</a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section><!-- End Pricing Section -->

    <!-- ======= F.A.Q Section ======= -->
    <section id="faq" class="faq">
      <div class="container">

        <div class="section-title" data-aos="fade-up">
          <h2>Frequently Asked Questions</h2>
        </div>

        <ul class="faq-list">

          <li>
            <div data-bs-toggle="collapse" class="collapsed question" href="#faq1">Non consectetur a erat nam at lectus urna duis? <i class="bi bi-chevron-down icon-show"></i><i class="bi bi-chevron-up icon-close"></i></div>
            <div id="faq1" class="collapse" data-bs-parent=".faq-list">
              <p>
                Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
              </p>
            </div>
          </li>

          <li>
            <div data-bs-toggle="collapse" href="#faq2" class="collapsed question">Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque? <i class="bi bi-chevron-down icon-show"></i><i class="bi bi-chevron-up icon-close"></i></div>
            <div id="faq2" class="collapse" data-bs-parent=".faq-list">
              <p>
                Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
              </p>
            </div>
          </li>

          <li>
            <div data-bs-toggle="collapse" href="#faq3" class="collapsed question">Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi? <i class="bi bi-chevron-down icon-show"></i><i class="bi bi-chevron-up icon-close"></i></div>
            <div id="faq3" class="collapse" data-bs-parent=".faq-list">
              <p>
                Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
              </p>
            </div>
          </li>

          <li>
            <div data-bs-toggle="collapse" href="#faq4" class="collapsed question">Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla? <i class="bi bi-chevron-down icon-show"></i><i class="bi bi-chevron-up icon-close"></i></div>
            <div id="faq4" class="collapse" data-bs-parent=".faq-list">
              <p>
                Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
              </p>
            </div>
          </li>

          <li>
            <div data-bs-toggle="collapse" href="#faq5" class="collapsed question">Tempus quam pellentesque nec nam aliquam sem et tortor consequat? <i class="bi bi-chevron-down icon-show"></i><i class="bi bi-chevron-up icon-close"></i></div>
            <div id="faq5" class="collapse" data-bs-parent=".faq-list">
              <p>
                Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in
              </p>
            </div>
          </li>

          <li>
            <div data-bs-toggle="collapse" href="#faq6" class="collapsed question">Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor? <i class="bi bi-chevron-down icon-show"></i><i class="bi bi-chevron-up icon-close"></i></div>
            <div id="faq6" class="collapse" data-bs-parent=".faq-list">
              <p>
                Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Nibh tellus molestie nunc non blandit massa enim nec.
              </p>
            </div>
          </li>

        </ul>

      </div>
    </section><!-- End Frequently Asked Questions Section -->

    <!-- ======= Contact Section ======= -->
    <section id="contact" class="contact section-bg">
      <div class="container">

        <div class="section-title" data-aos="fade-up">
          <h2>Contact Us</h2>
        </div>

        <div class="row">

          <div class="col-lg-5 d-flex align-items-stretch" data-aos="fade-right">
            <div class="info">
              <div class="address">
                <i class="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>

              <div class="email">
                <i class="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>info@example.com</p>
              </div>

              <div class="phone">
                <i class="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+1 5589 55488 55s</p>
              </div>

              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" style="border:0; width: 100%; height: 290px;" allowfullscreen></iframe>
            </div>

          </div>

          <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch" data-aos="fade-left">
            <form action="forms/contact.php" method="post" role="form" class="php-email-form">
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="name">Your Name</label>
                  <input type="text" name="name" class="form-control" id="name" required>
                </div>
                <div class="form-group col-md-6 mt-3 mt-md-0">
                  <label for="name">Your Email</label>
                  <input type="email" class="form-control" name="email" id="email" required>
                </div>
              </div>
              <div class="form-group mt-3">
                <label for="name">Subject</label>
                <input type="text" class="form-control" name="subject" id="subject" required>
              </div>
              <div class="form-group mt-3">
                <label for="name">Message</label>
                <textarea class="form-control" name="message" rows="10" required></textarea>
              </div>
              <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div class="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section><!-- End Contact Section -->

  </main><!-- End #main -->

  <!-- ======= Footer ======= -->
  <footer id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">

          <div class="col-lg-3 col-md-6">
            <div class="footer-info">
              <h3>Scaffold</h3>
              <p>
                A108 Adam Street <br>
                NY 535022, USA<br><br>
                <strong>Phone:</strong> +1 5589 55488 55<br>
                <strong>Email:</strong> info@example.com<br>
              </p>
              <div class="social-links mt-3">
                <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
                <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
                <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">About us</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Services</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
            </ul>
          </div>

          <div class="col-lg-4 col-md-6 footer-newsletter">
            <h4>Our Newsletter</h4>
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
            <form action="" method="post">
              <input type="email" name="email"><input type="submit" value="Subscribe">
            </form>

          </div>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong><span>Scaffold</span></strong>. All Rights Reserved
      </div>
      <div class="credits">
        <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/scaffold-bootstrap-metro-style-template/ -->
        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
      </div>
    </div>
  </footer><!-- End Footer -->

  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

  <!-- Vendor JS Files -->
  <script src="assets/vendor/aos/aos.js"></script>
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
  <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
  <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
  <script src="assets/vendor/php-email-form/validate.js"></script>

  <!-- Template Main JS File -->
  <script src="assets/js/main.js"></script>

</body>

</html>
```

- The original code contains a list of pre-built components that are developed using plain HTML, CSS, and JS. 
- We modified the code in a way that we only included the components that we need for our landing page.
- We changed the syntax from plain HTML to a syntax that is supported by React.
- We added custom images and icons that are different from what original code had, to further tailor it to our application.
- We changed the color scheme of the original code to match the scheme that we had established for the application.
- We separated footer div to a different component called Footer.js.


### 18. ContactUs.js

_Lines 80-153_
```js
 <div className="contact-us-div">
      <Container className='contact-us-container'>
        <h2>Contact Us</h2>
        <Row>
          <div className='col-lg-6 col-md-12'>
            <img src={contactIllustration} alt="Contact us" />
          </div>
          <div className='col-lg-6 col-md-12'>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row>
                <Col>
                  <Form.Group controlId="full-name">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required isInvalid={checkName()} />
                    <Form.Control.Feedback type="invalid">Please enter your full name. (Name cannot contain numbers or special characters)</Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='text' value={email} onChange={(e) => setEmail(e.target.value)} required isInvalid={checkEmail()} />
                    <Form.Control.Feedback type="invalid">Please enter a valid email address. (name@domain.subdomain)</Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="phone-number">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required isInvalid={checkPhone()} />
                    <Form.Control.Feedback type="invalid">Please enter a valid phone number.</Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={6} value={message} onChange={(e) => setMessage(e.target.value)} required isInvalid={validated && !message} />
                    <Form.Control.Feedback type="invalid">Please provide a message or description.</Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button type="submit" className="submit-btn">Submit</Button>
                </Col>
              </Row>
            </Form>
          </div>
        </Row>
      </Container>
      <Modal
        show={showConfirmation}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <div className='modal-img-div'>
            <img className='confirmation-img' src={checkedIcon} alt='confirmation' />
          </div>
          <p>
            <h4>Awesome!</h4>
            You're response has been recorded and our team will reach out to you soon.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button className='col-sm-4 form-close-btn' onClick={() => handleModalClose()}>OK</Button>
        </Modal.Footer>
      </Modal>
    </div>
```
- The code above was created by adapting the code in [Forms | React Bootstrap](https://react-bootstrap.netlify.app/docs/forms/overview) and [Modals | React Bootstrap](https://react-bootstrap.netlify.app/docs/components/modal).

```js
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
```
- The original code is a simple form that has 2 input fields and 1 submit button. When submitted, it does not show any feedback but simply reloads the page.
- We changed the code such that along with reloading, we also showed a user feedback through a modal that pops up after submitting the form.
- We added multiple input fields and validations that checked for proper format of the information that we need from the user. For example, phone numbers, email, etc.
- We changed the color coding of the modal to match the rest of the website.

```js
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
```
- The original code is a simple modal that has 2 buttons. Both of the buttons essentially close the modal.
- We changed the code such that it displays a feedback saying that the query has been submitted successfully, along with a close button that closes the modal.
- We changed the alignment of the text and button in the modal that is different from the original code.
- We changed the color coding of the modal to match the rest of the website.

### 19. Faq.js

```js
<Container className='contact-us-container'>
                <Row>
                    <div className='col-lg-6 col-md-12'>
                    <img src={faqIllustration} alt="Contact us"/>
                    </div>
                    <div className='col-lg-6 col-md-12'>
                        <h3>FAQ</h3>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>How to use the Book Stack application?</Accordion.Header>
                                <Accordion.Body>
                                    Using our app is really easy! Simply sign up for an account using your email, first & last names, phone number, and password. Once logged in, you can explore our book library, search for specific books or genres, view specific details of the book including summaries and reviews, and reserve books for borrowing.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Is there a limit to the number of books I can borrow?</Accordion.Header>
                                <Accordion.Body>
                                    There is no such limit to the number of books you can borrow on Book Stack!
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>How long can I borrow a book for?</Accordion.Header>
                                <Accordion.Body>
                                    We are quite flexible with book borrowing. Typically, we allow our users to borrow a book for 14 days. However, if you do not return it by the due date, the book gets auto renewed for another 12 days. Though, a book can only be auto-renewed once, after which, the late fees would be levied.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>How can I reserve a book on Book Stack?</Accordion.Header>
                                <Accordion.Body>
                                    This is pretty straightforward! You can just search the book you are interested in borrowing, add it to the cart, and follow the checkout procedure. Once our team confirms, you'll receive a notification for the same.  You can then pick it up from your nearest library having a partnership with our application at your convenience.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>How can I suggest a book to be added to Book Stack?</Accordion.Header>
                                <Accordion.Body>
                                    We would love to hear your suggestions! You can do so by simply contacting our support team through the 'Contact Us' option. Our team will review it at the earliest and work to add it to our library if possible.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </Row>
            </Container>
```
- The code above was created by adapting the code in [Accordions | React Bootstrap](https://react-bootstrap.netlify.app/docs/components/accordion). 

```js
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
```
- The original code showcases a simple accordion that has an expanded item by default. Closing the expanded item or opening other items in the accordion closes the expanded item.
- This is a very simple, and straightforward component in bootstrap that is very effective in displaying information without overwhelming the user.
- We changed the color scheme of the accordion to match the rest of the application.
- We added multiple items in the accordion, and changed the text to suit our needs.


## Backend

### backend/models/

- This folder is created to define the schema of the collections that we have defined / proposed during our project proposal. 
- The schema of each collection is developed by referencing the data contracts that can be found at **./data-contracts/**.

### backend/controllers
We defined in the application architecture of assignment 2 that we will be using MVC architecture. Thereby when the router calls the controller the specified method is executed. The controller files are where the business logic exists, interacts with the MongoDB database and returns the response of the request.

### backend/routes
The main purpose of the routes folder is to divide the routing logic to inculcate the single responsibility principle. In our application, the backend server takes the **HTTP request** and forwards it to its respective **router**. Basically, the request enters the `index.js` file and forwards it to the respective router.

### 1. models/books.js

```js
// Authors - [Abhinav Acharya Tirumala Vinjamuri, Ashish Nagpal, Arihant Dugar, Jinal Dave]
const Author = require('./author.js');
const Genre = require('./genre.js');
const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    content_link: {
        type: String,
        required: true
    },
    publisherDate: {
        type: Date,
        required: true
    },
    // Mapping with Author Collection
    authorIds: [{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Author'
    }],
    // Mapping with Genre Collection
    genreIds: [{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Genre'
    }],
    book_name: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('books', BookSchema, 'books');

```

The code above was created by adapting the code in [medium.com](https://medium.com/@akhilanand.ak01/setup-a-basic-node-js-server-using-expressjs-mongoose-65f2a6dbfd58) article as shown below:


```js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  // Add more fields as per your product requirements
});

module.exports = mongoose.model('Product', productSchema);
```

- The code was used to revisit the concepts of using **mongoose** with **mongoDB** database and **nodeJs** server using ExpressJs.
- We used the code because We wanted to create schema using mongoose and map it to mongoDB collection.
- We used the reference to create books schema with different fields type along with referencing other collection using `ObjectId`.


### 2. backend/util/mailService.js

_Lines 1 - 23_
```js
var nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.ADMIN_EMAIL,
    pass: process.env.ADMIN_PASS,
  }
});

module.exports = transporter;

```
- This function sends an email using a pre-configured transporter object. It takes the sender’s email address, recipient’s email address, email subject, HTML content for the email body, and a callback function as parameters. The function constructs the email options and sends the email using the transporter.sendMail() method. 
- This function is referred and adapted from [Nodemailer](https://www.nodemailer.com/), and changed to fit the MVC architecture that we've setup in the project. The original code is as shown below:

```js
let transporter = nodemailer.createTransport({
    sendmail: true,
    newline: 'unix',
    path: '/usr/sbin/sendmail'
});
transporter.sendMail({
    from: 'sender@example.com',
    to: 'recipient@example.com',
    subject: 'Message',
    text: 'I hope this message gets delivered!'
}, (err, info) => {
    console.log(info.envelope);
    console.log(info.messageId);
});
``` 
- To use it in different places without rewriting the code, we decoupled the code to declare them as constants and exported them to use in specific places.

### 3. backend/util/transporter.js

_Lines 1 - 14_
```js
var nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.ADMIN_EMAIL,
    pass: process.env.ADMIN_PASS,
  }
});

module.exports = transporter;

```
- This file exports a transporter object, which is configured to send emails using Gmail’s SMTP service. The transporter is created using the nodemailer.createTransport() method and configured with Gmail as the service, and the email and password of the sender, which are fetched from environment variables. Reference - [Nodemailer](https://www.nodemailer.com/).


### Images & Icons

- The icons that we used in all pages were taken from [Freepik](https://www.freepik.com/).

- Freepik provides free images for personal and commercial use that we can edit and use in our application.

-  *Books on Wooden Shelves Inside Library* by Stanislav Kondratiev, visit https://www.pexels.com/photo/books-on-wooden-shelves-inside-library-2908984/

- *Percy Jackson and the Olympians* by Rick Riordan visit https://www.readriordan.com/2022/02/15/cover-reveals-percy-jackson-and-the-olympians/

- "Harry Potter and the Half-Blood Prince Book Cover" by Lordcolus is licensed under CC BY 2.0. To view a copy of this license, visit https://creativecommons.org/licenses/by/2.0/?ref=openverse. 

- We changed the color scheme of the images to match the rest of the application.


## Acknowledgments
1. **Node.js Community:** We are grateful to the Node.js community for their extensive resources and tutorials. The asynchronous nature of Node.js has taught us to think differently about programming logic and structure.
2. **Express.js Framework:** Express.js has been instrumental in understanding how to set up a server, handle requests, and build APIs. The simplicity and flexibility of Express.js have made backend development more approachable.
3. **Tailwind CSS:** Tailwind CSS has revolutionized my approach to styling web pages. Its utility-first philosophy encourages component composition and promotes consistency across the project. It streamlined the development as we did not needed to develop separate styling for achieving mobile responsive from scratch.
4. **Coding Community:** The coding community’s dedication to sharing knowledge through articles, blogs, and videos has been invaluable. Their insights have helped us improve our skills and contribute more effectively to our projects.
5. **React Ecosystem:** Our experience with React has not only enhanced our technical skills but also shaped our problem-solving approach. The React documentation and community have provided clear explanations and examples that have greatly facilitated our understanding of complex concepts. The concept of state, props, and hooks in React has deepened our understanding of data flow within an application and underscored the importance of effective state management.

## References

1. “Rapidly build modern websites without ever leaving your HTML,” Tailwindcss.com. [Online]. Available: https://tailwindcss.com/. [Accessed: 02-Feb-2024].
2. "FreePik," Frepik. [Online]. Available: https://www.freepik.com/. [Accessed: 20-Feb-2024]"
3. "Nodemailer," Nodemailer. [Online]. Available: https://www.nodemailer.com/. [Accessed: 10-Mar-2024]"
4. “React Bootstrap,” React Bootstrap. [Online]. Available: https://react-bootstrap.netlify.app/docs/getting-started/introduction. [Accessed: 02-Feb-2024].