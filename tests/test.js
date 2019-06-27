const id = require( '../src/index' );

console.log( id.new() );

const numbers = [ 3, 5, 9 ];
const adjectives = [ 'soft', 'hard', 'wet' ];
const nouns = [ 'goose', 'chicken', 'ship' ];

const lists = id.construct( numbers, adjectives, nouns );
id.configure( lists );

id.new();