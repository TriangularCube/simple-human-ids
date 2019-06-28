simple-human-ids-js
=====================

Use JavaScript to generate human-readable ids from a lists of adjectives, nouns, and verbs.

Generate ids in the format of `#-adjective-noun-verb-adverb` such as

* 24-silly-goose-ran-quickly
* 15-quick-cobra-sold-randomly
* 23-tricky-chicken-bought-downstairs
* 90-brave-ladybug-looked-jumped-everywhere

I frequently want human readable ids I can type without checking it multiple times. 
I should be able to yell these ids across the room and have people be able to enter it
 without confusion.

Currently the id space is about 200,000,000 ids (100 * 100 * 75 * 18 * 15).

The goal is to increase the word space to at least 1 billion while preserving 
the philosophy that the id would be human readable and simple to spell.

For a larger address space now, consider:

  * Human Readable IDs for Node.js and Browser: <https://github.com/linus/greg/>
  * Human Readable IDs for Java: <https://github.com/PerWiklander/IdentifierSentence>
  * Human Readable IDs for Python: <https://gist.github.com/4447660>

All of these also have the benefit of bi-directional conversion, but not all of them
have words which are easy to pronounce and spell.

Usage
=======

### NPM
```bash
# from npm
npm install --save simple-human-ids
```

```javascript
const id = require('simple-human-id');

// generate 100 random ids
for ( let i = 0; i < 100; i++ ) {
  console.log( id.new() );
}
```


You are also able to configure your own lists to use
```javascript
const id = require( 'simple-human-ids' );

const numbers = [ 3, 5, 9, ... ];
const adjectives = [ 'soft', 'hard', 'wet', ... ];
const nouns = [ 'goose', 'chicken', 'ship', ... ];

const lists = id.construct( numbers, adjectives, nouns );
id.configure( lists );

for( let i = 0; i < 100; i++ ){
    console.log( id.new() );
}
```


Acknowledgement
===========
This project was as effort to expand on 
[CoolAJ87's Human Readable IDs project](https://git.coolaj86.com/coolaj86/human-readable-ids.js).