export default `

  type Music {
    id: ID!
    name: String!
    time: Time!
    album: Album!
  }

  input MusicCreateInput {
    name: String!
    time: Time!
    id_album: Int!
  }

  input MusicUpdateInput {
    name: String
    time: Time
  }

  type Query {
    # Get all musics
    musics(first: Int, offset: Int): [ Music! ]!
    # Get single Music
    music(id: ID!): Music
  }

  type Mutation {
    # Create Music
    createMusic(input: MusicCreateInput!): Music
    # Update Music
    updateMusic(input: MusicUpdateInput!, id: ID!): Music
  }
`;