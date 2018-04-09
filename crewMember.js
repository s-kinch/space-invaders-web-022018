class CrewMember {
  constructor(position){
    this.position = position;
    this.currentShip = "Looking for a Rig";
  }

  chargePhasers(){
    if (this.currentShip !== "Looking for a Rig"){
      this.currentShip.chargePhasers = "charged"
    } else {
      return "had no effect"
    }
  }

  engageWarpDrive(){
    if (this.currentShip !== "Looking for a Rig" && this.position === "Pilot"){
      this.currentShip.warpDrive = "engaged"
    } else {
      return "had no effect"
    }
  }

  setsInvisibility(){
    if (this.currentShip !== "Looking for a Rig" && this.position === "Defender"){
      this.currentShip.cloaked = true
    } else {
      return "had no effect"
    }
  }




}


// class CrewMember {
//   constructor(position) {
//     this.position = position;
//     //default current ship
//     this.currentShip = "Looking for a Rig";
//   }
//
//   engageWarpDrive() {
//     return this.position === "Pilot" && this.currentShip !== "Looking for a Rig"
//       ? (this.currentShip.warpDrive = "engaged")
//       : "had no effect";
//   }
//
//   setsInvisibility() {
//     return this.position === "Defender" &&
//       this.currentShip !== "Looking for a Rig"
//       ? (this.currentShip.cloaked = true)
//       : "had no effect";
//   }
//
//   chargePhasers() {
//     return this.position === "Gunner" &&
//       this.currentShip !== "Looking for a Rig"
//       ? (this.currentShip.phasersCharge = "charged")
//       : "had no effect";
//   }
// }
