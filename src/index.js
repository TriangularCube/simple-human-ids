const shuffle = require( 'shuffle-array' );

let lists;

function configure( newList ){
    // TODO maybe do some validation
    lists = newList;
}

function next(){

    // Initialize lists if not already done
    if( !lists ){
        lists = construct();
    }

    // Start a new string
    return `${shuffle.pick( lists.numbers )}-${shuffle.pick( lists.adjectives )}-${shuffle.pick( lists.nouns )}-${shuffle.pick( lists.verbs )}-${shuffle.pick( lists.adverbs )}`;

}

// Construct our lists with defaults
function construct( numbers = generateNumbers(), adjectives = getList( 'adjectives' ), nouns = getList( 'nouns' ),
                    verbs = getList( 'verbs' ), adverbs = getList( 'adverbs' ) ){

    // Guard against Null
    const numbersInternal = numbers != null ? numbers.slice(0) : generateNumbers();
    const adjectivesInternal = guardNull( adjectives, 'adjectives' );
    const nounsInternal = guardNull( nouns, 'nouns' );
    const verbsInternal = guardNull( verbs, 'verbs' );
    const adverbsInternal = guardNull( adverbs, 'adverbs' );


    return {
        numbers: numbersInternal,
        adjectives: adjectivesInternal,
        nouns: nounsInternal,
        verbs: verbsInternal,
        adverbs: adverbsInternal
    }

}

function guardNull( list, name ){
    return list != null ? list.slice(0) : getList( name );
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
module.exports.construct = construct;