import React, { useState } from "react";

function CreateArea(props) {
  const [inputText, changeText] = useState({ title: "", content: "" });

  function HandlerChange(event) {
    var { name, value } = event.target;
    if (name === "title") {
      changeText((prev) => {
        return { title: value, content: prev.content };
      });
    } else {
      changeText((prev) => {
        return { title: prev.title, content: value };
      });
    }
  }
  function handlerClick(event) {
    event.preventDefault();
    console.log(inputText.title + " " + inputText.content);
    props.addNoteFun(inputText.title, inputText.content);
    inputText.title = "";
    inputText.content = "";
  }
  return (
    <div>
      <form>
        <input
          onChange={HandlerChange}
          name="title"
          placeholder="Title"
          value={inputText.title}
        />
        <textarea
          onChange={HandlerChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={inputText.content}
        />
        <button onClick={handlerClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
