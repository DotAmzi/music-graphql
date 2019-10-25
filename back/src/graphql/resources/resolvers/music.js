export default {

  Music: {
    album: (parent, args, {db}, info) => {
      return db.album.findByPk(parent.id_album);
    }
  },
  
  Query: {
    musics: (parent, { first = 10, offset = 0 }, {db}, info) => {
      return db.music
        .findAll({
          order: [[ 'id', 'DESC' ]],
          limit: first,
          offset: offset
        });
    },

    music: async (parent, {id}, {db}, info) => {
      const music = await db.music.findByPk(id);
      if (!music) throw new Error(`Music width id ${id} not found`);
      return music;
    }

  },

  Mutation: {
    createMusic: async (parent, {input}, {db}, info) => {
      const album = await db.album.findByPk(input.id_album);
      if (!album) throw new Error(`Album with id ${input.id_album} not found!`);
      return db.music.create(input);
    },

    updateMusic: async (parent, {input, id}, {db, user}, info) => {
      const music = await db.music.findByPk(id);
      if (!music) throw new Error(`Music with id ${id} not found!`);
      return music.update(input);
    }

  }
    
};