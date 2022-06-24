import React from 'react';
import DocumentHeader from '../components/DocumentHeader';
import { gql, useQuery } from '@apollo/client';
import { Container } from '../shared/styles';
import ArtboardThumbnail from '../components/ArtboardThumbnail';
import { Artboard } from '../interfaces/Artboard';
import { useParams } from 'react-router-dom';

const DOCUMENT_QUERY = gql`
  query Document($documentId: String) {
    share(id: $documentId) {
      identifier
      version {
        document {
          name
          artboards {
            entries {
              id
              name
              isArtboard
              files {
                url
                height
                width
                scale
                thumbnails {
                  url
                  height
                  width
                }
              }
            }
          }
        }
      }
    }
  }
`;

function Document() {
  const { documentId } = useParams();
  const { data, loading, error } = useQuery(DOCUMENT_QUERY, { variables: { documentId }});

  if (loading) return <div>loading...</div>;

  if (error || !documentId) {
    return <div>Error fetching document artboards</div>;
  }

  const {
    identifier,
    share: {
      version: { document },
    },
  } = data;

  const artboardList: Array<Artboard> = document?.artboards?.entries.map(
    ({ name, files, id }: any): Artboard => ({ name, previewImg: files[0]?.thumbnails[0]?.url ?? files[0]?.url, id, documentId, files })
  );

  return (
    <div className='document-page'>
      <DocumentHeader name={document.name} />

      <Container>
        {artboardList.map((artboard: Artboard) => {
          return <ArtboardThumbnail key={artboard.id}  artboard={artboard} />;
        })}
      </Container>
    </div>
  );
}

export default Document;
