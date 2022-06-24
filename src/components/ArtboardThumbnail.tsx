import React from 'react';
import styled from 'styled-components';
import PropTypes, { InferProps } from 'prop-types';
import { Wrapper } from '../shared/styles';
import { Link } from 'react-router-dom';
import Artboard from '../containers/ArtboardPage';

const ThumbWrapper = styled(Wrapper)`
  padding: 10px;
  box-shadow: none;
  display: flex;
  flex-direction: column;
  margin: 10px;
  background: #f9f9f9;

  &:hover {
    cursor: pointer;
  }
`;

const Text = styled.span`
  margin: 5px 0;
  color: #000;
  opacity: 0.8;
`;

const ImgWrapper = styled.div`
  height: 200px;
  margin-bottom: 1em;
`;

const ArtboardLink = styled(Link)`
  text-decoration: none;
  color: #000;
`

const Img = styled.img`
  height: 100%;
`;

function ArtboardThumbnail({
  artboard,
}: InferProps<typeof ArtboardThumbnail.propTypes>) {
  const { id, name, previewImg, documentId } = artboard;
  return (
    <ArtboardLink to={`/documents/${documentId}/artboards/${id}`} state={artboard}>
      <ThumbWrapper>
        <ImgWrapper>
          <Img src={previewImg} />
        </ImgWrapper>
        <Text>{name}</Text>
      </ThumbWrapper>
    </ArtboardLink>
  );
}

ArtboardThumbnail.propTypes = {
  artboard: PropTypes.any,
};

export default ArtboardThumbnail;
