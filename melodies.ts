enum Melodies {
  //%block="BabyShark" blockIdentity=music.builtInMelody
  
  BabyShark = 0
}

namespace music {
  //% block
  export function getMelody(melody: Melodies): string[] {
    switch (melody) {
      case Melodies.BabyShark:
        return ['D:4', 'E:4', 'G:2', 'G:2', 'G:2', 'G:1', 'G:2', 'G:1', 'G:2', 'D:4', 'E:4', 'G:2', 'G:2', 'G:2', 'G:1', 'G:2', 'G:1', 'G:2', 'D:4', 'E:4', 'G:2', 'G:2', 'G:2', 'G:1', 'G:2', 'G:1', 'G:2', 'G:2', 'G:2', 'F:8'];
      default:
        return [];
    }
  }
}
        
