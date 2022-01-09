import * as words from './words.json'
import * as zalgo from './zalgo.json';

/** 
 * Picks a random word from a dictionary with the desired length and zalgoifies it.
 * 
 * @example
 * ```
 * import { passphrase } from 'achlys';
 * let password = passphrase(1, 4, 1);
 * console.log(password); // => c͊o̘c̳k͚
 * let longpassword = passphrase(2, 8, 2, '-');
 * console.log(longpassword); // => s̫̝t̼̊r͐ͅä̻w̟ͅm̛̃a̻̽n̼̫-w̫̄ê̯n͆̂d͔͖ĭ͚g̛̛õ̭s̄͛
 * ```
 * @param count The number of words to use.
 * @param length The length of each word.
 * @param zalgo The zalgo level.
 * @param separator The separator to use between words.
 * 
 * @returns A string of random zalgoified words.
*/
export function passphrase(count: number = 1, length: number = 8, zalgo: number = 1, separator: string = '-'): string {
    let result: string = '';
    for (let i = 0; i < count; i++) {
        const word = choice(words[length]);
        result += zalgoify(word, zalgo) + (i < count - 1 ? separator : '');
    }
    return result;
}

/**
 * Zalgoifies a word.
 * 
 * @example
 * ```
 * import { zalgoify } from 'achlys';
 * let password = zalgoify('password', 2);
 * console.log(password); // => p̋̇a̗̖š̍s͓̝w̌̒o̜̖r̰̒d͇̂
 * ```
 * 
 * @param word The word to zalgoify.
 * @param count The number of times to zalgoify the word.
 * @returns The zalgoified word.
 */
export function zalgoify(word: string, count: number): string {
    let result: string = '';
    for (const letter of word) {
        result += letter;
        for (let x = 0; x < count; x++) {
            result += choice(zalgo[Math.random() < 0.5 ? 'top' : 'bot']);
        }
    }
    return result;
}

function choice(arr: Array<any>) {
    return arr[Math.floor(Math.random() * arr.length)];
}