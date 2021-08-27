class Contestant {
  constructor() {
    this.name = null;
    this.index = null; 

  }

  addPlayer(){
    var ContestantIndex = "allPlayers/player" + this.index;



    database.ref("ContestantIndex").set({
      name:this.name, 

    })
  }
}
