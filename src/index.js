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

const defaultAdjectives = require( '../data/adjectives' );
const defaultAdverbs = require( '../data/adverbs' );
const defaultNouns = require( '../data/nouns' );
const defaultVerbs = require( '../data/verbs' );

// Construct our lists with defaults
function construct( numbers = generateNumbers(), adjectives = defaultAdjectives, nouns = defaultNouns,
                    verbs = defaultVerbs, adverbs = defaultAdverbs ){

    // Guard against Null
    const numbersInternal = numbers != null ? numbers.slice(0) : generateNumbers();
    const adjectivesInternal = adjectives != null ? adjectives.slice(0) : defaultAdjectives.slice(0);
    const nounsInternal = nouns != null ? nouns.slice(0) : defaultNouns.slice(0);
    const verbsInternal = verbs != null ? verbs.slice(0) : defaultVerbs.slice(0);
    const adverbsInternal = adverbs != null ? adverbs.slice(0) : defaultAdverbs.slice(0);


    return {
        numbers: numbersInternal,
        adjectives: adjectivesInternal,
        nouns: nounsInternal,
        verbs: verbsInternal,
        adverbs: adverbsInternal
    }

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


module.exports.new = next;
module.exports.configure = configure;
module.exports.construct = construct;