const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  message = [];
  constructor(type) { 
    if (type == false) {
      this.directMachine = false;
    } else {
      this.directMachine = true;
    }
  }
  encrypt(message, key) {
    if (!!!message || !!!key) {
      throw new TypeError("Incorrect arguments!");
    }

    let messageArr = Array.from(message).map(item => item.toUpperCase());
    let fullKey = [];
    let j = 0;

    for (let i = 0; i < message.length; i++) {
      if (this.alphabet.indexOf(messageArr[i]) != -1) {
        if (j >= key.length) j = 0;
        fullKey.push(key[j].toUpperCase());
        j++;
      } else {
        fullKey.push(messageArr[i]);
      }
    }

    let encryptMessage = [];
    let index = 0;

    for (let i = 0; i < message.length; i++) {
      if (this.alphabet.indexOf(messageArr[i]) != -1) {
        index = (this.alphabet.indexOf(messageArr[i]) + this.alphabet.indexOf(fullKey[i])) % 26;
        encryptMessage.push( this.alphabet[index] );
      }
      else {
        encryptMessage.push(messageArr[i]);
      }
    }

    if (this.directMachine) {
      return encryptMessage.join('');
    } else {
      return encryptMessage.reverse().join('');
    }
  }
  decrypt(message, key) {
    if (!!!message || !!!key) {
      throw new TypeError("Incorrect arguments!");
    }

    let messageArr = Array.from(message).map(item => item.toUpperCase());

    let fullKey = [];
    let j = 0;

    for (let i = 0; i < message.length; i++) {
      if (this.alphabet.indexOf(messageArr[i]) != -1) {
        if (j >= key.length) j = 0;
        fullKey.push(key[j].toUpperCase());
        j++;
      } else {
        fullKey.push(messageArr[i]);
      }
    }

    let decryptMessage = [];
    let index = 0;

    for (let i = 0; i < message.length; i++) {
      if (this.alphabet.indexOf(messageArr[i]) != -1) {
        index = (this.alphabet.indexOf(messageArr[i]) - this.alphabet.indexOf(fullKey[i])) % 26;
        index = index >= 0 ? index : index + 26;
        decryptMessage.push( this.alphabet[index] );
      }
      else {
        decryptMessage.push(messageArr[i]);
      }
    }

    if (this.directMachine) {
      return decryptMessage.join('');
    } else {
      return decryptMessage.reverse().join('');
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
