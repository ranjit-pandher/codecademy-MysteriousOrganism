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
      let identicalBases = 0,
        percentSimilar = 0;

      if (pAequor.dna.length === this.dna.length) {
        for (let i = 0; i < pAequor.dna.length; i++) {
          if (pAequor.dna[i] === this.dna[i]) {
            identicalBases += 1;
          }
        }

        percentSimilar = (identicalBases / this.dna.length) * 100;

        console.log(
          `Speciman #${this.specimenNum} and specimen #${
            pAequor.specimenNum
          } have ${percentSimilar.toFixed(2)}% DNA in common` + '.'
        );
      } else {
        return;
      }
    },

    willLikelySurvive() {
      let survivalBases = 0;

      this.dna.forEach((e) => {
        if (e === 'C' || e === 'G') {
          survivalBases += 1;
        }
      });

      let survivalRate = (survivalBases / this.dna.length) * 100;

      if (survivalRate >= 60) {
        return true;
      } else {
        return false;
      }
    },
  };
}

const pAequorArray = [];
let i = 1;

do {
  let pAequorSample = pAequorFactory(i, mockUpStrand());

  if (pAequorSample.willLikelySurvive() === true) {
    pAequorArray.push(pAequorSample);
  }
  i++;
} while (pAequorArray.length <= 29);

console.log(pAequorArray);
