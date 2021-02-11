import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled.div`
    font-size: 24px;
`;


export const StyledHome = styled.div`
  padding: 1.3rem;
  width: 90%;
  margin: 0 auto;
  padding-bottom: 7rem;
  padding-top: 5rem;
  text-align: center;

  h1 {
    text-align: center;
    font-size: 45px;
  }

  h2 {
    margin-bottom: 1rem;
    padding-top: 30px;
    text-align: center;
  }

  h3 {
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

const TextLeft = styled.div`
  margin-top: 10% auto;
  margin-bottom: 5%;
  margin-left: 3%;
  text-align: left;
`;

const Home = () => {

  return (
    <StyledHome>
      <div>
          <h2>Call it the ultimate cryto scorecard</h2>
          <h1>apps &gt; cryptocurrency price</h1>
          <h2>Explore the top apps built on BitcoinSV</h2>
          <TextLeft>
          <StyledLink><a href="https://TDXP.app">1. TDXP APP</a></StyledLink>< br/>
          <StyledLink><a href="https://twetch.app">2. Twetch</a></StyledLink>< br/>
          <StyledLink><a href="https://relica.world">3. Relica</a></StyledLink>< br/>
          <StyledLink><a href="https://tonicpow.com">4. Tonic Pow</a></StyledLink>< br/>
          <StyledLink><a href="https://t.co/2uD0nQK8K3?amp=1">5. ZBanknotes</a></StyledLink>< br/>
          <StyledLink><a href="https://streamanity.com/">6. Streamanity</a></StyledLink>< br/>
          <StyledLink><a href="https://gobitfundme.com/">7. GoBitFundMe</a></StyledLink>< br/>
          <StyledLink><a href="https://www.playhaste.com/">8. Haste</a></StyledLink>< br/>
          <StyledLink><a href="https://metastore.app/">9. MetaStore</a></StyledLink>< br/>
          <StyledLink><a href="https://peergame.com">10. Peer Game</a></StyledLink>< br/>
          <StyledLink><a href="https://koalament.io/">11. Koalament</a></StyledLink>< br/>
          <StyledLink><a href="https://www.bitpost.app/">12. Bitpost</a></StyledLink>< br/>
          <StyledLink><a href="https://www.mattercloud.io">13. Matter Cloud</a></StyledLink>< br/>
          <StyledLink><a href="https://www.bitsurf.network/">14. BitSurf</a></StyledLink>< br/>
          <StyledLink><a href="https://www.castr.fm/">15. Castr</a></StyledLink>< br/>
          
          </TextLeft>
          <h3>These are exciting times indeed.  There's something special going on right now - some call it Web 3.0.  It feels a lot like the mid 90's when the Web was the new frontier and everyone had an idea and project.  We had a side project called the BAM Online 100 - it ranked the top websites that were commercializing a new thing called the Web.  It was popular for awhile until Jerry and his gang over at Stanford blazed right by us with Yahoo.  This project is a tribute to those amazing days in tech.</h3>
      </div>

      {/* <WebsiteGrid>
        {!isFetching &&
          websites.map((video) => (
            <Link key={website.id} to={`${website.id}`}>
              <WebsiteCard website={website} />
            </Link>
          ))}
      </WebsiteGrid> */}
    </StyledHome>
  );
};

export default Home;
