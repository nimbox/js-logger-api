# js-logger-api

Just interface to logging that does nothing and expects a real logging
infrastructure to be installed. This api expects a global function that
deals with the actual logging.  

## Installation 

```sh
npm install @nimbox/js-logger --save
```

## Logger

### Usage

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

### Implementation

A basic implementation of the `jsLOGGER` function can be something like this:

```
const jsLOGGER = () => {

};
```

## Eventer

Eventer is an abstraction to capture events in a common way across all applications and libraries.  We use the same category structure as the logger

### Usage

```js
const _eventer = getEventer('category');
...
_eventer.track('some-meaning', object);
```

The object should be a shallow object in which each key eventually moves to the event storage and its value is an stringification.

```js
_event.track('query', { value: 'selectCustomers', time: 2212 });
```

Typical names for the keys in the object should be:

* `value` - the name of the object associated to the event 
* `time` - the time it took from begining to end of event in millis


## Updating

```
npm version patch -m "Version %s - add sweet badges"
git push && git push --tags
npm publish
```

## And...

Remember to check this to redo the whole thing

https://codeburst.io/https-chidume-nnamdi-com-npm-module-in-typescript-12b3b22f0724
