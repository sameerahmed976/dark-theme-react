import React from "react";
import moment from "moment";

const Article = ({ title, date, length, snippet }) => {
  return (
    <>
      <article className="article">
        <h2 className="article__title">{title}</h2>
        <section className="article__post">
          <span>{moment(date).format("dddd,Do,YYYY")}</span>
          <span>{length} min read</span>
        </section>
        <p className="article__snippet">{snippet}</p>
      </article>
    </>
  );
};

export default Article;
