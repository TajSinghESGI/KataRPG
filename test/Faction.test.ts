import chai = require('chai');

export const assert = chai.assert;
export const expect = chai.expect;
import Warrior from "../main/Warrior";
import Character from '../main/Character';
import Priest from '../main/Priest';
import Faction from '../main/Faction';

describe('Faction Test', () => {
    describe('A Character can...', () => {

        let warrior : Warrior;
        let character : Character;
        let priest : Priest;

        beforeEach(() => {
            warrior = new Warrior("Warrior1", 100, true, 1, "Warrior", 1, 1, []);
            character = new Character("Character", 100, true, 1, "Character", 1, 1, []);
            priest = new Priest("Priest", 100, true, 1, "Warrior", 1, 1, []);
        })

        it('join a Faction', () => {
            var CharacterArray: Array<Character> = [character]
            var AlliesArray: Array<Faction> = []
            var FactionArray = new Faction("GUILDE 1", CharacterArray, AlliesArray)
            character.join(FactionArray);
            expect(() =>
                FactionArray.isMember(character)).to.throw("Character already in Faction");
        });
    });
});