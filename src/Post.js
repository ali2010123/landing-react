
import React, { useState } from "react";
import './Post.css'

export default function Post(props) {
  let title = React.createRef();
  function colorON() {
    title.current.style.color = "red";
  }
  function colorOut() {
    title.current.style.color = "black";
  }
  const [likes, setlikes] = useState(0);
  const [dislikes, setdislikes] = useState(0);

  function like() {
    setlikes(likes + 1);
  }

  function dislik() {
    setdislikes(dislikes + 1);
  }

  return (
    <div className="post">
      <h1 ref={title} onMouseEnter={colorON} onMouseLeave={colorOut}>
        {props.postTitle}
      </h1>
      <p>{props.text} </p>
      <p>Liikes: {likes}</p>
      <p>Dislikes: {dislikes}</p>
      <button className="dtv" onClick={like}>like</button>
      <button className="dtv1" onClick={dislik}>dislik</button>
      <button className="delete-dtn dtn" onClick={()=> props.deletePost(props.id)}>удалит пост</button>
    </div>
  );
}
