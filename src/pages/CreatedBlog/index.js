import React from "react";
import { Input, Button, Upload, Textarea, Gap, Link } from "../../components";
import "./createdblog.scss";
import { useHistory } from "react-router-dom";

const CreatedBlog = () => {
  const history = useHistory();
  return (
    <div className="blog-post">
      <Link title="kembali" onClick={() => history.push("/")} />
      <p className="title">Created Blog</p>
      <Input lable="post" placeholder="Post" />
      <p>Upload Image</p>
      <Upload />
      <Textarea />
      <Gap height={20} />
      <div className="button-acction">
        <Button title="Save" />
      </div>
      <Gap height={20} />
    </div>
  );
};

export default CreatedBlog;
