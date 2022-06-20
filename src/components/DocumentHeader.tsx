import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import styled from 'styled-components';
import logo from '../assets/sketch-logo.svg';
import { Icon, Title, Wrapper } from '../shared/styles';

function DocumentHeader({
  name = '',
}: InferProps<typeof DocumentHeader.propTypes>) {
  return (
    <Wrapper>
      <Icon src={logo}></Icon>
      <Title>{name}</Title>
    </Wrapper>
  );
}

DocumentHeader.propTypes = {
  name: PropTypes.string.isRequired,
};

export default DocumentHeader;
