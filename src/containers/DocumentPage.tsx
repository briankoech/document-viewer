import React from 'react';
import DocumentHeader from '../components/DocumentHeader';
import { gql, useQuery } from '@apollo/client';
import { Container } from '../shared/styles';
import ArtboardThumbnail from '../components/ArtboardThumbnail';

const DOCUMENT_QUERY = gql`
  {
    share(id: "e981971c-ff57-46dc-a932-a60dc1804992") {
      identifier
      version {
        document {
          name
          artboards {
            entries {
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
interface IArtboardThumbnail {
  name: string;
  img: string;
}

function Document() {
  const { data, loading, error } = useQuery(DOCUMENT_QUERY);
  console.log('data', data);

  if (loading) return <div>loading...</div>;

  if (error) return <div>Error fetching document artboards</div>;

  const {
    identifier,
    share: {
      version: { document },
    },
  } = data;

  console.log(document.artboards);
  const artboardList = document?.artboards?.entries.map(
    ({ name, files }: any) => ({ name, img: files[0]?.url })
  );
  // console.log(artboardList);

  return (
    <div className='document-page'>
      <DocumentHeader name={document.name} />

      <Container>
        {artboardList.map((artboard: IArtboardThumbnail) => {
          return <ArtboardThumbnail {...artboard} />;
        })}
      </Container>
    </div>
  );
}

export default Document;
