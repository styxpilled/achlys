# achlys

Generate random passphrases and zalgoify them. Because why not.

## USAGE

`passphrase` - generate a random passphrase.

```ts
import { passphrase } from 'achlys';
let password = build(1, 4, 1);
console.log(password); // => c͊o̘c̳k͚
let longpassword = build(2, 8, 2, '-');
console.log(longpassword); // => s̫̝t̼̊r͐ͅä̻w̟ͅm̛̃a̻̽n̼̫-w̫̄ê̯n͆̂d͔͖ĭ͚g̛̛õ̭s̄͛
```

`zalgoify` - zalgoify a word.

```ts
import { zalgoify } from 'achlys';
let password = zalgoify('password', 2);
console.log(password); // => p̋̇a̗̖š̍s͓̝w̌̒o̜̖r̰̒d͇̂
```

## INSTALLATION

`npm i https://github.com/styxpilled/achlys`
OR
`git clone https://github.com/styxpilled/achlys`
`cd achlys`
`npm run build`
