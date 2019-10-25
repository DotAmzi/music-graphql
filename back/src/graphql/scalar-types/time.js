import {GraphQLScalarType} from 'graphql';

const timeType = new GraphQLScalarType({
  name: 'Time',
  description: 'Type to time',
  parseValue: value => {
    if(!/^(0[0-9]|1[0-9]|2[0-3]|[0-9]):[0-5][0-9]$/.test(value)) {
      throw new Error("Time wrong!");
    }
    return value;
  },
  serialize: serial => {
    return serial;
  },
  parseLiteral: ast => {
    if(!/^(0[0-9]|1[0-9]|2[0-3]|[0-9]):[0-5][0-9]$/.test(ast.value)) {
      throw new Error("Time wrong!");
    }
    return ast.value;
  }
});

export {
  timeType
};