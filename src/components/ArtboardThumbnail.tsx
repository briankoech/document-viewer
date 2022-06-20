import React from 'react';
import styled from 'styled-components';
import PropTypes, { InferProps } from 'prop-types';
import { Wrapper } from '../shared/styles';
import { Link } from 'react-router-dom';

const ThumbWrapper = styled(Wrapper)`
  padding: 10px;
  box-shadow: none;
  display: flex;
  flex-direction: column;
  margin: 10px;

  &:hover {
    cursor: pointer;
  }
`;

const Text = styled.span`
  margin: 5px 0;
`;

const ImgWrapper = styled.div`
  height: 200px;
`;

const Img = styled.img`
  height: 100%;
`;

function ArtboardThumbnail({
  name = '',
  img = '',
}: InferProps<typeof ArtboardThumbnail.propTypes>) {
  return (
    <Link to=''>
      <ThumbWrapper>
        <ImgWrapper>
          <Img src={img} />
        </ImgWrapper>
        <Text>{name}</Text>
      </ThumbWrapper>
    </Link>
  );
}

ArtboardThumbnail.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default ArtboardThumbnail;
