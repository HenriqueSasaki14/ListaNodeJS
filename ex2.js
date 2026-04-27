const capital = Number(process.argv[2])
const taxa = Number(process.argv[3])
const tempo = Number(process.argv[4])


const taxaDecimal = taxa / 100;

const montante = capital * (1 + taxaDecimal * tempo);

console.log(`Capital: R$ ${capital.toFixed(2)}`);
console.log(`Taxa: ${taxa}%`);
console.log(`Tempo: ${tempo}`);
console.log(`Montante final: R$ ${montante.toFixed(2)}`);