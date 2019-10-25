export default `

  type Artist {
    id: ID!
    name: String!
    bio: String!
    albuns(first: Int, offset: Int): [Album!]
  }


  input ArtistCreateInput {
    name: String!
    bio: String!
  }

  input ArtistUpdateInput {
    name: String
    bio: String
  }

  type Query {
    # Get all artists
    artists(first: Int, offset: Int): [ Artist! ]!
    # Get single artist
    artist(id: ID!): Artist
  }

  type Mutation {
    # Create Artist
    createArtist(input: ArtistCreateInput!): Artist
    # Update Artist
    updateArtist(input: ArtistUpdateInput!, id: ID!): Artist
  }
`;