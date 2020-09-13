import React from "react";
import { Button, BlogItem, Gap } from "../../components";
import "./home.scss";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  return (
    <div className="home-page">
      <div className="created-erapper">
        <Button
          title="createed blog"
          onClick={() => history.push("/created-blog")}
        />
      </div>
      <Gap height={20} />

      <div className="content-wrapper">
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>

      <div className="pagination">
        <Button title="Pervious" />
        <Gap width={20} />
        <Button title="Next" />
      </div>
      <Gap height={20} />
    </div>
  );
};

export default Home;
