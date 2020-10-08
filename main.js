// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

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
      mutatedDNA[randomDNAIndex] = dnaBases[Math.floor(Math.random() * dnaBases.length)];

      return mutatedDNA;

    },
    compareDNA(pAequor) {
      let isSame = 0;
      const compareOne = this;
      const compareTwo = pAequor;

      for(let i = 0; i < this.dna.length; i++){
          if(compareOne.dna[i] === compareTwo.dna[i]){
            isSame += 1;
        }
      }
    },
  }
}

//testing factory function
const newA = pAequorFactory(1, mockUpStrand());
console.log(newA.dna);
console.log(newA.mutate());

