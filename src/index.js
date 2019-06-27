const shuffle = require( 'shuffle-array' );

let lists;

function configure( newList ){
    // TODO maybe do some validation
    lists = newList;
}

function next(){

    // Initialize lists if not already done
    if( !lists ){
        lists = construct( generateNumbers(), getList( 'animals' ), getList( 'adjectives' ) );
    }

    // Start a new string
    return `${shuffle.pick( lists.numbers )}-${shuffle.pick( lists.adjectives)}-${shuffle.pick( lists.animals )}`;

}

function construct( numbers, animals, adjectives ){

    let lists = {};
    lists['numbers'] = numbers;
    lists['animals'] = animals;
    lists['adjectives'] = adjectives;

    return lists;

}

function generateNumbers(){

    let numbers = [];
    numbers.push( 0 );

    // 1 is not plural, so we skip

    for( let i = 2; i < 100; i++ ){
        numbers.push( i );
    }

    return numbers;

}

let fs;
let path;
function getList( subject ){

    // Import filesystem and path utilities if not already imported
    if( !fs ){
        fs = require( 'fs' );
    }
    if( !path ){
        path = require( 'path' );
    }

    const filePath = path.join( __dirname, '..', 'data', subject + '.txt' );
    const file = fs.readFileSync( filePath, 'utf8' );

    return file.trim().split( '\n' );

}

module.exports.new = next;
module.exports.configure = configure;
module.exports.constructLists = construct;