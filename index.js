const heroName = "Bate mas não mata";
const heroXp = 10001;
let heroLevel = "";

if (heroXp > 1000 && heroXp <= 2000) {
    heroLevel = "Bronze";
} else if (heroXp > 2000 && heroXp <= 5000) {
    heroLevel = "Prata";
} else if (heroXp > 5000 && heroXp <= 7000) {
    heroLevel = "Ouro";
} else if (heroXp > 7000 && heroXp <= 8000) {
    heroLevel = "Platina";
} else if (heroXp > 8000 && heroXp <= 9000) {
    heroLevel = "Ascendente";
} else if (heroXp > 9000 && heroXp <= 10000) {
    heroLevel = "Imortal";
} else if (heroXp >= 10000) {
    heroLevel = "Radiante";
} else {
    heroLevel = "Ferro";
}

console.log(`O Herói de nome ${heroName} está no nível de ${heroLevel}`);
