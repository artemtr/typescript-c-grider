"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterCollection = void 0;
class CharacterCollection {
    data;
    constructor(data) {
        this.data = data;
    }
    swap(leftIndex, rightIndex) {
        const characters = this.data.split('');
        const leftHand = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = leftHand;
        this.data = characters.join('');
    }
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex].toLowerCase > this.data[rightIndex].toLowerCase;
    }
    get length() {
        return this.data.length;
    }
}
exports.CharacterCollection = CharacterCollection;
