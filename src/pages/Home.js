import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import Skeleton from "../skeletons/HomeSkeleton";
import logo from '../logo.svg';

const StyledLink = styled.div`
    font-size: 24px;
`;


export const StyledHome = styled.div`
  padding: 1.3rem;
  width: 90%;
  margin: 0 auto;
  padding-bottom: 7rem;
  padding-top: 5rem;

  h2 {
    margin-bottom: 1rem;
    text-align: center;
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

  return (
    <StyledHome>
      <div>
          <h2>Call it the ultimate cryto scorecard<br />    &nbsp;&nbsp;&nbsp;&nbsp;apps &gt; cryptocurrency price</h2><br />
          <h3>Explore the top apps built on BitcoinSV</h3>
          <StyledLink><a href="https://TDXP.app">1. TDXP APP</a></StyledLink>< br/>
          <StyledLink><a href="https://twetch.app">3. Twetch</a></StyledLink>< br/>
          <StyledLink><a href="https://relica.world">2. Relica</a></StyledLink>< br/>
          <StyledLink><a href="https://t.co/2uD0nQK8K3?amp=1">4. ZBanknotes</a></StyledLink>< br/>
          <StyledLink><a href="https://streamanity.com/">5. Steamanity</a></StyledLink>< br/>
          <StyledLink><a href="https://gobitfundme.com/">6. GoBitFundMe</a></StyledLink>< br/>
          <StyledLink><a href="https://www.playhaste.com/">7. Haste</a></StyledLink>< br/>
          <StyledLink><a href="https://metastore.app/">8. MetaStore</a></StyledLink>< br/>
          <StyledLink><a href="https://peergame.com">9. Peer Game</a></StyledLink>< br/>
          <StyledLink><a href="https://koalament.io/">10. Koalament</a></StyledLink>< br/>
          <StyledLink><a href="https://tonicpow.com">11. Tonic Pow</a></StyledLink>< br/>
          <StyledLink><a href="">12.</a></StyledLink>< br/>
          <StyledLink><a href="https://www.mattercloud.io">13. Matter Cloud</a></StyledLink>< br/>
          <StyledLink><a href="https://bsvapptesters.com">14. BSV APP TESTERS</a></StyledLink>< br/>
          <h3>These are exciting times indeed.  There's something speical going on right now - some call it Web 3.0.  It feels a lot like the mid 90's when the Web was the new frontier and everyone had an idea and project.  We had a side project called the BAM Online 100 - it ranked the top websites that were commercializing this new thing called the Web.  It was popular for awhile until Jerry and his gang over at Stanford blazed right by us with Yahoo.  This project is a tribute to those amazing days in tech.</h3>
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
