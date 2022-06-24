import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

  &::after {
    content: '';
    flex: auto;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  box-shadow: 0 2px 1px -1px #0003, 0 1px 1px #00000024, 0 1px 3px #0000001f;
`;

export const Icon = styled.img`
  padding: 5px;
`;

export const Title = styled.h2`
  margin-left: 5px;
`;

export const Img = styled.img`
  height: ${({ height }) => `${height}px` ?? 'auto'};
  max-height: calc(100vh - 200px);
`;
