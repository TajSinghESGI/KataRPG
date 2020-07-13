import './const';
import { MAX_HEALTH, INITIAL_LEVEL } from './const';
import Faction from './Faction';

export default class Character {
    constructor(
        protected name: string = "toto",
        protected health = MAX_HEALTH,
        protected alive: boolean = true,
        protected level = INITIAL_LEVEL,
        protected type: string,
        protected attackForce: number,
        protected healingPV: number,
        private Factions: Faction[]
    ){}

    setHealth(newHealth: number) {
        this.health = newHealth;
    }

    setType(type: string){
        this.type = type;
    }

    setAttack(attack: number){
        this.attackForce = attack;
    }

    setHealing(pv: number){
        this.healingPV = pv;
    }

    getHealth(){
        return this.health;
    }

    getFactions() {
        return this.Factions;
    }

    getType(){
        return this.type;
    }

    getHealing(){
        return this.healingPV;
    }

    beingHit(attack: number) {
        this.setAttack(attack);
        if(this.health > 1 ){
            this.health = this.health - this.attackForce;
        } else {
            this.dead();
        }
        return this.health;
    }
    
    isAlive(): boolean{
        return this.alive;
    };

    dead(){
        this.health = 0;
        this.alive = false;
    }
    
    attack(character: Character) : void {
        if(this != character && character.isAlive()){
            character.beingHit(this.attackForce);
        } else
            throw "ERROR DO NOT ATTEMPT TO KILL YOURSELF"
    }

    cannotHealMore(character: Character): boolean {
        return character.getHealth() + 1 > MAX_HEALTH;
    }

    heal(character: Character){
        if(!character.isAlive()) {
            throw "CANNOT HEAL A DEAD CHARACTER"
        } else if(this.cannotHealMore(character)){
            character.setHealth(MAX_HEALTH);
        }

        character.setHealth(character.getHealth()+this.healingPV);
             
    }

    join(faction: Faction){
        var index = this.Factions.indexOf(faction);
        if (index == -1) {
            this.Factions.push(faction);
            faction.addMember(this);
        }
    }

    leave(faction: Faction){
        var index = this.Factions.indexOf(faction);
        if (index != -1) {
            this.Factions.slice(index, 1);
            faction.removeFromFaction(this);
        }
    }

    sameFaction(character: Character){
        this.Factions.forEach((hisfaction) => {
            var index = this.Factions.indexOf(hisfaction);
            if(index != -1 && character){
                return true;
            }
        })
    }

}