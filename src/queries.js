import gql from "graphql-tag";

// query statement can be tested in apollo extension
export const HOME_PAGE = gql`
  {
    movies(limit: 50, rating: 7) {
      id
      title
      rating
      genres
      medium_cover_image
    }
  }
`;