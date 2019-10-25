export default `

  type Album {
    id: ID!
    name: String!
    release: Date!
    artist: Artist!
    musics(first: Int, offset: Int): [Music!]
  }

  input AlbumCreateInput {
    name: String!
    release: Date!
    id_artist: Int!
  }

  input AlbumUpdateInput {
    name: String
    release: Date
  }

  type Query {
    # Get all albuns
    albuns(first: Int, offset: Int): [ Album! ]!
    # Get single album
    album(id: ID!): Album
  }

  type Mutation {
    # Create Album
    createAlbum(input: AlbumCreateInput!): Album!
    # Update Album
    updateAlbum(input: AlbumUpdateInput!, id: ID!): Album!
  }
`;