import React from'react';
import PropTypes, { InferProps } from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: 'center';
  background: #fff;
  box-shadow:  0 2px 1px -1px #0003,0 1px 1px #00000024,0 1px 3px #0000001f;
`;

const Icon = styled.img``;

const Title = styled.h2`

`;

function DocumentHeader({ name = '' }: InferProps<typeof DocumentHeader.propTypes>) {
  return (
    <Wrapper>
      <Icon src=''></Icon>
      <Title>{name}</Title>
    </Wrapper>
  );
}

DocumentHeader.propTypes = {
  name: PropTypes.string.isRequired,
};

export default DocumentHeader;
