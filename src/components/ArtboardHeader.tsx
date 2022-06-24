import React from 'react';
import { Icon, Title, Wrapper } from '../shared/styles';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import close from '../assets/close.svg';
import separator from '../assets/separator.svg';
import arrowLeft from '../assets/arrow-left.svg';
import arrowRight from '../assets/arrow-right.svg';

const HeaderWrapper = styled(Wrapper)`
  padding: 0 10px;
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

const Span = styled.span`
  color: #000;
  opacity: 0.5;
  margin-bottom: 5px;
`;

const ArtboardTitle = styled(Title)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

function ArtboardHeader(props: any) {
  const { onClose, next, prev, current, count, title } = props;
  return (
    <HeaderWrapper>
        <Button onClick={onClose}>
          <Icon src={close} />
        </Button>

      <Icon src={separator} />

      <Button onClick={prev}>
        <Icon src={arrowLeft} />
      </Button>

      <Span>
        {current} / {count}
      </Span>

      <Button onClick={next}>
        <Icon src={arrowRight} />
      </Button>

      <ArtboardTitle>{title}</ArtboardTitle>
    </HeaderWrapper>
  );
}

export default ArtboardHeader;
