import React from "react";
import ReactDom from "react-dom";

//css

import "./index.css";

const books = [
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/81lsmyMcYNL._AC_UL200_SR200,200_.jpg",
    title: "American Marxism",
    author: "Mark Levin",
  },

  {
    img: "https://images-na.ssl-images-amazon.com/images/I/81yR2rvEVkL._AC_UL200_SR200,200_.jpg",
    title: "Living Fully",
    author: "Mallory Ervin",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book, index) => {
        return (
          <Book
            key={index}
            img={book.img}
            title={book.title}
            author={book.author}
          />
        );
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
