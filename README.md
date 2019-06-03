# js-logger-api

Just interface to logging that does nothing and expects a real logging
infrastructure to be installed. This api expects a global function that
deals with the actual logging.  

## Installation 

```sh
npm install @nimbox/js-logger --save
```

## Usage

For this to actually output something there must be a global function 
defined as follows:

```
jsLOGGER(category: string | null, level: number, message: string, ...parameters: any[])
```

Where levels are:

* 0 - fatal - (call someboy on a beeper)
* 1 - error
* 2 - warn
* 3 - info
* 4 - debug
* 5 - trace

## Implementation

A basic implementation of the `jsLOGGER` function can be something like this:

```
const jsLOGGER = () => {

};
```

## And...

Remember to check this to redo the whole thing

https://codeburst.io/https-chidume-nnamdi-com-npm-module-in-typescript-12b3b22f0724