// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

function pAequorFactory(number, dnaArray) {
  return {
    specimenNum: number,
    dna: dnaArray,
    mutate() {
      let mutatedDNA = this.dna;
      const dnaBases = ['A', 'T', 'C', 'G'];
      const randomDNAIndex = Math.floor(Math.random() * this.dna.length);

      //remove selected base from dna bases to avoid repeating
      dnaBases.splice(dnaBases.indexOf(mutatedDNA[randomDNAIndex]), 1);
      //replace the selected base with the new base
      mutatedDNA[randomDNAIndex] =
        dnaBases[Math.floor(Math.random() * dnaBases.length)];

      return mutatedDNA;
    },
    compareDNA(pAequor) {
      let identicalBases = 0;
      let totalBases = 0;
      let percentSimilar = 0;

      if (pAequor.dna.length === this.dna.length) {
        totalBases = this.dna.length;
        for (let i = 0; i < pAequor.dna.length; i++) {
          if (pAequor.dna[i] === this.dna[i]) {
            identicalBases += 1;
          }
        }

        percentSimilar = (identicalBases / totalBases) * 100;

        console.log(
          `Speciman #${this.specimenNum} and specimen #${
            pAequor.specimenNum
          } have ${percentSimilar.toFixed(2)}% DNA in common` + '.'
        );
      } else {
        return;
      }
    },
  };
}

const madman = pAequorFactory(8, mockUpStrand());
const hitter = pAequorFactory(9, mockUpStrand());

madman.compareDNA(hitter);
