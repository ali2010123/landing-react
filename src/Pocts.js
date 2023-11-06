import './Post.css'
import React, { useEffect, useState } from "react";
import Post from "./Post";
export default function Posts(props) {

const [countPosts, setCountPosts] = useState(props.posts.length)

  let postData = props.posts;
  let [posts_data, setPosts] = useState(postData);
  const [text, setText] = useState("");
  const [postTitle, setTitle] = useState("");

  const addNewPost = () => {
    const newPost = {
      id: Date.now(),
      text,
      postTitle,
    };


    setPosts([...posts_data, newPost]);

    setCountPosts(posts_data.length +1 )
    setTitle("");
    setText("");
  };

  

  let postElements = posts_data.map((p) => {
    return <Post postTitle={p.postTitle} text={p.text} id={p.id} deletePost={deletePost} />;
  });


  useEffect(() => {
    console.log("Данные успешно загружены")

  }

  )
function deletePost(posts_id){
  setPosts(posts_data.filter(p=>p.id !=posts_id))
  setCountPosts(posts_data.length -1 )
}


  return (
    <div>
      <form action="">
        <div className="form-post">
          <div className="form-input">
            <p>
            <input
              type="text"
              value={postTitle}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Название поста"
            />
            </p>
          </div>
          <div className="form-input">
            <textarea
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
          </div>
          <button type="button" onClick={addNewPost}>
            Добавить
          </button>
        </div>
      </form>
      <p>количество постов:{countPosts}</p>
      {postElements}
    </div>
  );
}
