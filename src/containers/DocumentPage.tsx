import React from 'react';
import DocumentHeader from '../components/DocumentHeader';
import { gql, useQuery } from '@apollo/client';
import { Container } from '../shared/styles';
import ArtboardThumbnail from '../components/ArtboardThumbnail';
import { Artboard } from '../interfaces/Artboard';

const DOCUMENT_QUERY = gql`
  {
    share(id: "e981971c-ff57-46dc-a932-a60dc1804992") {
      identifier
      version {
        document {
          id
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
  const { data, loading, error } = useQuery(DOCUMENT_QUERY);

  if (loading) return <div>loading...</div>;

  if (error) return <div>Error fetching document artboards</div>;

  console.log(data);
  const {
    identifier,
    share: {
      version: { document },
    },
  } = data;

  const artboardList: Array<Artboard> = document?.artboards?.entries.map(
    ({ name, files, id }: any): Artboard => ({ name, previewImg: files[0]?.url, id, documentId: document.id, files })
  );

  console.log(artboardList);

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
