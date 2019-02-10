import gql from "graphql-tag";

// query statement can be tested in apollo extension
export const HOME_PAGE = gql`
query {
    movies(limit: 50, rating:7) {
        id
        title
        genres
    }
}
`;