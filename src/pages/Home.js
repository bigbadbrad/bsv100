import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import Skeleton from "../skeletons/HomeSkeleton";
import logo from '../logo.svg';


export const StyledHome = styled.div`
  padding: 1.3rem;
  width: 90%;
  margin: 0 auto;
  padding-bottom: 7rem;

  h2 {
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 1093px) {
    width: 95%;
  }

  @media screen and (max-width: 1090px) {
    width: 99%;
  }

  @media screen and (max-width: 870px) {
    width: 90%;
  }

  @media screen and (max-width: 670px) {
    width: 99%;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
  }

  @media screen and (max-width: 530px) {
    width: 100%;
  }
`;

const Home = () => {
  // const dispatch = useDispatch();
  // const { isFetching, videos } = useSelector((state) => state.recommendation);

  // useEffect(() => {
  //   dispatch(getRecommendation());
  // }, [dispatch]);

  // if (isFetching) {
  //   return <Skeleton title={true} />;
  // }

  return (
    <StyledHome>
      <div>
      <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>

      {/* <VideoGrid>
        {!isFetching &&
          videos.map((video) => (
            <Link key={video.id} to={`/watch/${video.id}`}>
              <VideoCard video={video} />
            </Link>
          ))}
      </VideoGrid> */}
    </StyledHome>
  );
};

export default Home;
