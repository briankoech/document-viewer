import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const DocumentLink = styled(Link)`
  padding: 5px;
`;

function Home() {
  const documents = ['e981971c-ff57-46dc-a932-a60dc1804992', '40432a93-5434-4059-87b9-545fd1ad6ee0'];
  return (
    <div>
      <h4>Select a document to view:</h4>
      {documents.map((id, idx) => (
        <DocumentLink key={idx} to={`/documents/${id}`}>{id}</DocumentLink>
      ))}
    </div>
  );
}

export default Home;
