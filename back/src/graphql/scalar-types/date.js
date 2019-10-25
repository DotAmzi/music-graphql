import {GraphQLScalarType} from 'graphql';

const dateType = new GraphQLScalarType({
  name: 'Date',
  description: 'Type to date',
  parseValue: value => {
    return value;
  },
  serialize: serial => {
    serial = new Date(serial);
    let returnValue = ('0000'+serial.getFullYear()).slice(-4);
    return returnValue;
  },
  parseLiteral: ast => {
    return ast.value;
  }
});

export {
  dateType
};