import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ChowNow from './Resources/Images/ChowNow.png';
import DoorDash from './Resources/Images/DoorDash.png';
import Grubhub from './Resources/Images/GrubHub.png';
import SkipTheDishes from './Resources/Images/SkipTheDishes.png';
import UberEats from './Resources/Images/UberEats.png';

function SupportedPlatform({ image }) {
  return (
    <StyledPlatformImage src={image} alt="Platform" />
  );
}

SupportedPlatform.propTypes = {
  image: PropTypes.string.isRequired,
};

function SupportedPlatformList() {
  const supportedPlatforms = [SkipTheDishes, DoorDash, UberEats, Grubhub, ChowNow];

  return (
    <StyledContainer className="SupportedPlatformList">
      <br />
      <h1>Supported Platforms</h1>
      <StyledPlatformList>
        {
        // eslint-disable-next-line react/no-array-index-key
        supportedPlatforms.map((image, index) => (<SupportedPlatform image={image} key={index} />))
        }
      </StyledPlatformList>
      <br />
    </StyledContainer>
  );
}

const StyledPlatformImage = styled.img`
  height: 20vh;
  width: 20vh;
  postion: relative;
  float: left;
  margin: 25px;
  display: inline-block;
`;

const StyledContainer = styled.div`
  width: 100%;
  min-height: 10vh;
  background-color: #FEC8FF;
  text-align: center;
`;

const StyledPlatformList = styled.div`
  float: left;
  position: relative;
  width: 100%;
  min-height: 10vh;
  background-color: #FEC8FF;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default SupportedPlatformList;
