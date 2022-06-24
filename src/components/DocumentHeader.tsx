import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes, { InferProps } from 'prop-types';
import styled from 'styled-components';
import logo from '../assets/sketch-logo.svg';
import { Icon, Title, Wrapper } from '../shared/styles';

function DocumentHeader({
  name = '',
}: InferProps<typeof DocumentHeader.propTypes>) {
  return (
    <Wrapper>
      <Link to='/'>
        <Icon src={logo}></Icon>
      </Link>
      <Title>{name}</Title>
    </Wrapper>
  );
}

DocumentHeader.propTypes = {
  name: PropTypes.string.isRequired,
};

export default DocumentHeader;
