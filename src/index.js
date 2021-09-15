import React from "react";
import ReactDom from "react-dom";

//css

import "./index.css";

function BookList() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/81lsmyMcYNL._AC_UL200_SR200,200_.jpg"
    alt="American Marxism 2"
  />
);

const Title = () => <h1>American Marxism</h1>;

const Author = () => <h4>Mark Levin</h4>;

ReactDom.render(<BookList />, document.getElementById("root"));
