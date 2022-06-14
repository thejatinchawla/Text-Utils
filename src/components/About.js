import React from "react";

export default function About(props) {
  return (
    <div className="container mt-5">
      <div
        className="accordion border-10"
        id="accordionExample"
        style={{ border: "1px solid black" }}
      >
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              style={{
                backgroundColor: props.mode === "dark" ? "#212529" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <h1>About TextUtils</h1>
            </button>
          </h2>
          <div
            style={{
              backgroundColor: props.mode === "dark" ? "#212529a1" : "white",
            }}
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>Word count Feature :</strong>{" "}
              <p>
                To check word count, simply place your cursor into the text box
                above and start typing. You'll see the number of characters and
                words increase or decrease as you type, delete, and edit them.
                You can also copy and paste text from another program over into
                the Textbox. The Auto-Save feature will make sure you won't lose
                any changes while editing, even if you leave the site and come
                back later.
              </p>{" "}
              <strong>Tip: Bookmark this page now. </strong>{" "}
              <p>
                Knowing the word count of a text can be important. For example,
                if an author has to write a minimum or maximum amount of words
                for an article, essay, report, story, book, paper, you name it.
                WordCounter will help to make sure its word count reaches a
                specific requirement or stays within a certain limit.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              style={{
                backgroundColor: props.mode === "dark" ? "#212529" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>UpperCase Feature :</strong>
            </button>
          </h2>
          <div
            style={{
              backgroundColor: props.mode === "dark" ? "#212529a1" : "white",
            }}
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                In addition, <strong>Text Utils</strong>&nbsp;allows you to
                convert any keyword, sentence , essay, anything into{" "}
                <strong>Captial </strong> form.
              </p>
              <p>
                Its the very handy feature if the user wants to implement
                anywhere he wants.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              style={{
                backgroundColor: props.mode === "dark" ? "#212529" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong> LowerCase Feature :</strong>
            </button>
          </h2>
          <div
            style={{
              backgroundColor: props.mode === "dark" ? "#212529a1" : "white",
            }}
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                This feature of <strong>Text Utils</strong>&nbsp;is allows you
                to convert any keyword, sentence , essay, anything into{" "}
                <strong>Small </strong> form.Its also a very handy feature if
                the user wants to implement anywhere he wants.
              </p>
              <strong>
                Disclaimer: We strive to make our tools as accurate as possible,
                if any bug the user will find must inform to the admin of this
                website .
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
