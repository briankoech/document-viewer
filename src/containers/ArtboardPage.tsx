import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import ArtboardHeader from '../components/ArtboardHeader';
import { Icon, Img, Wrapper } from '../shared/styles';

const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 20px 20px;
`;

function Artboard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const location = useLocation();
  const { documentId } = useParams();
  const { state } = location;
  const { files, name }: any = state || {};

  const navigate = useNavigate();

  useEffect(() => {
    if (!files && !name) {
      navigate(`/documents/${documentId}`);
    }
  }, [location]);

  const onClose = () => {
    navigate(`/documents/${documentId}`);
  };

  const next = () => {
    setCurrentIndex(
      currentIndex == files.length - 1 ? currentIndex : currentIndex + 1
    );
  };

  const prev = () => {
    setCurrentIndex(currentIndex == 0 ? currentIndex : currentIndex - 1);
  };

  return (
    <div className='artboard-page'>
      <ArtboardHeader
        onClose={onClose}
        next={next}
        prev={prev}
        current={currentIndex + 1}
        count={files?.length ?? 0}
        title={name}
      ></ArtboardHeader>
      <ImgWrapper>
        {files && files[currentIndex]?.url ? (
          <Img
            src={files[currentIndex]?.url}
            height={files[currentIndex]?.height}
          />
        ) : null}
      </ImgWrapper>
    </div>
  );
}

export default Artboard;
