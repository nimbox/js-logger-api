# js-logger-api

A simple interface to logging and event tracking that does nothing and expects a real logging infrastructure to be installed. This api expects two global function that deals with the actual logging: `jsLOGGER` and `jsTRACKER`. When none of these functions are present, no actual logging or tracking occurs.

## Installation 

```sh
npm install @nimbox/js-logger --save
```

## Logger

### Usage

```ts
import { getLogger } from '@nimbox/js-logger-api';
const _logger = getLogger('category');
_logger.info('deleted user %s', user);
```

For this to actually output something there must be a global function 
defined as follows:

```ts
jsLOGGER(category: string | null, level: number, message: string, ...params: any)
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

```ts
import { padEnd, truncate } from 'lodash';

const names = ['fatal', 'error', 'warn', 'info', 'debug', 'trace'];
const colors = ['red', 'red', 'orange', 'blue', 'green', 'purple'];

const jsLOGGER = (category: string | null, level: number, message: string, ...params: any) => {

    const c = truncate(padEnd(category, 32), { length: 32 });
    const l = padEnd(names[level], 5);
    const m = sprintf(message, ...parameters)

    console.log(`%c${c} %c[${l}]`, `color:${colors[level]}`, `color:${colors[level]}`, m);

};
```

## Tracker

Logger has en special case for events. When logging evetns it is possible to add 
parameters to the message.

### Usage

```ts
import { getLogger } from '@nimbox/js-logger-api';
const _logger = getLogger('category');
_logger.track('query', { value: 'getCustomers', time: 2 });
```

Typical names for the keys in the object should be:

* `value` - the name of the object associated to the event 
* `time` - the time it took from begining to end of event in millis

For this to actually output something there must be a global function 
defined as follows:

```ts
jsTRACKER(category: string | null, event: string, params?: { [key:string]: any })
```

## Implementation

Logs and Events have two intended audiences.  Logs are for developers and events are for product managers. Logs show how an application is behaving, events show how a user is using the application.

In most situations the `jsTRACKER` implementation should also create an info log so that the developer knows the events that are being relevant.

```ts
const jsTRACKER = (category: string | null, event: string, params?: { [key:string]: any }) =>  {
    jsLOGGER(category, 3, `event ${event} - %j`, params);
}
```

## Updating

```bash
npm version patch -m "Version %s - add sweet badges"
git push && git push --tags
npm publish
```

## And...

Remember to check this to redo the whole thing

https://codeburst.io/https-chidume-nnamdi-com-npm-module-in-typescript-12b3b22f0724
