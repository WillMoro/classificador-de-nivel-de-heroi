const heroName = prompt(`Bem vindo ao sistema de Classificação do Herói! 
  Digite o nome do seu herói: `)
let heroXP = prompt(`Agora digite a quantidade de XP do herói: `)
let level = ""

if (heroXP < 1000) {
  level = "Ferro"
} else if (1001 <= heroXP && heroXP <= 2000) {
  level = "Bronze"
} else if (2001 <= heroXP && heroXP <= 5000) {
  level = "Prata"
} else if (5001 <= heroXP && heroXP <= 7000) {
  level = "Ouro"
} else if (7001 <= heroXP && heroXP <= 8000) {
  level = "Platina"
} else if (8001 <= heroXP && heroXP <= 9000) {
  level = "Ascendente"
} else if (9001 <= heroXP && heroXP <= 10000) {
  level = "Imortal"
} else if (heroXP > 10001) {
  level = "Radiante"
}

alert(`O Herói de nome ${heroName} está no nível de ${level}`)
