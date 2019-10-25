export default {

    Artist: {
      albuns: (parent, {first = 10, offset = 0}, {db}, info) => {
        return db.album
          .findAll({
            where: {
              id_artist: parent.id
            },
            limit: first,
            offset: offset
        });
      }
    },
    
    Query: {
      artists: (parent, { first = 10, offset = 0 }, {db}, info) => {
        return db.artist
          .findAll({
            order: [[ 'id', 'DESC' ]],
            limit: first,
            offset: offset
          });
      },
  
      artist: async (parent, {id}, {db}, info) => {
        const artist = await db.artist.findByPk(id)
        if (!artist) throw new Error(`artist with id ${id} not found`);
        return artist;
      }
  
    },
  
    Mutation: {
      createArtist: async (parent, {input}, {db}, info) => {
        return db.artist.create(input);
      },
  
      updateArtist: async (parent, {input, id}, {db}, info) => {
        const artist = await db.artist.findByPk(id);
        if (!artist) throw new Error(`artist with id ${id} not found`);
        return artist.update(input);
      }
    }
    
    };