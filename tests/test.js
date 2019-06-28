const id = require( '../src/index' );

for( let i = 0; i < 100; i++ ){
    console.log( id.new() );
}

const numbers = [ 3, 5, 9 ];
const adjectives = [ 'soft', 'hard', 'wet' ];
const nouns = [ 'goose', 'chicken', 'ship' ];

const lists = id.construct( numbers, null, nouns );
id.configure( lists );

console.log( id.new() );