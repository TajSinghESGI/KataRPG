import './const';
import { MAX_HEALTH, INITIAL_LEVEL } from './const';
import Character from './Character';

export default class Faction {
    constructor(
        protected name: string = "toto",
        protected Characters: Array<Character> = [],
        protected Allies: Array<Faction> = [],
    ){}

    createFaction(name: string) {
        this.setName(name);
    }

    setName(name: string) {
        this.name = name;
    }

    addToFaction(character: Character) {
        var index = this.Characters.indexOf(character)
        if(index != -1) {
            throw new Error("Character already in Faction");
        } 
        this.Characters.push(character);
    }

    addMember(character: Character){
        var index = this.Characters.indexOf(character)
        if(index != -1) throw new Error("Character already in Faction");
        
        this.addToFaction(character);
        character.join(this);

    }

    removeFromFaction(character: Character){
        var index = this.Characters.indexOf(character)
        if(index != -1) {
            this.Characters.splice(index, 1);
        }
        else throw new Error("Cannot delete because you're not in faction");
    }

    removeMember(character: Character){
        var index = this.Characters.indexOf(character)
        if(index != 1) {
            this.removeFromFaction(character);
            character.leave(this);
        }
        else throw new Error("Cannot delete because you're not in faction");
    }

    isMember(searched: Character){
       this.Characters.forEach(element => {
           if(element == searched){
               return true;
           }
       })
    }

}