export default {

    Album: {
      artist: (parent, args, {db}, info) => {
        return db.artist.findByPk(parent.id_artist);
      },

      musics: (parent, { first = 10, offset = 0 }, {db}, info) => {
        return db.music
          .findAll({
            where: {
              id_album: parent.id
            },
            order: [[ 'id', 'DESC' ]],
            limit: first,
            offset: offset
          });
      }
    },
    
    Query: {
      albuns: (parent, { first = 10, offset = 0 }, {db}, info) => {
        return db.album
          .findAll({
            order: [[ 'id', 'DESC' ]],
            limit: first,
            offset: offset
          });
      },
  
      album: async (parent, {id}, {db}, info) => {
        const album = await db.album.findByPk(id)
        if (!album) throw new Error(`Album with id ${id} not found`);
        return album;
      }
  
    },
  
    Mutation: {
      createAlbum: async (parent, {input}, {db}, info) => {
        const artist = await db.artist.findByPk(input.id_artist);
        if (!artist) throw new Error(`Artist with id ${input.id_artist} not found!`);
        return db.album.create(input);
      },
  
      updateAlbum: async (parent, {input, id}, {db, user}, info) => {
        const album = await db.album.findByPk(id);
        if (!album) throw new Error(`Album with id ${id} not found!`);
        return album.update(input);
      }
  
    }
    
    };