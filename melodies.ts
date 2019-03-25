enum moreMelodies {
  //%block="BabyShark" blockIdentity=music.builtInMelody
  
  BabyShark = 0
}

namespace moreMusic {
  //% block
  export function getMelody(melody: moreMelodies): string[] {
    switch (melody) {
      case moreMelodies.BabyShark:
        return ['D:4', 'E:4', 'G:2', 'G:2', 'G:2', 'G:1', 'G:2', 'G:1', 'G:2', 'D:4', 'E:4', 'G:2', 'G:2', 'G:2', 'G:1', 'G:2', 'G:1', 'G:2', 'D:4', 'E:4', 'G:2', 'G:2', 'G:2', 'G:1', 'G:2', 'G:1', 'G:2', 'G:2', 'G:2', 'F:8'];
      default:
        return [];
    }
  }
}
        
