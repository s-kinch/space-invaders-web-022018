class Spaceship {
  constructor(name, crew, phasers, shields){
    this.name = name;
    this.cloaked = false;
    this.warpDrive = "disengaged";
    this.phasersCharge = "uncharged";

    this.phasers = phasers;
    this.shields = shields;
    if (crew.length > 0){
      this.crew = crew;
      crew.forEach(member => member.currentShip = this);
      this.docked = false;
    } else {
      this.docked = true;
    }
  }


}
