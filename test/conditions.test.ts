import { verificarIdade, verificarPosto, verificarNave, verificarMissao,verificarTripulante, verificarNumeroNave } from "../src/conditions"

test('deve verificar se a pessoa pode ser um oficial da frota estelar', () => {
  expect(verificarIdade(18)).toMatch('Você é um oficial da Frota Estelar.')
  expect(verificarIdade(14)).toMatch("Você não atende aos requisitos para ser oficial.")
})

test('deve verificar se é capitão e dar as boas-vindas', () => {
  expect(verificarPosto('capitão')).toMatch('Bem-vindo, Capitão!')
  expect(verificarPosto('cadete')).toMatch('Bem-vindo, Tripulante!')
})

test('deve verificar se a nave não é a enterprise', () => {
  expect(verificarNave('voyager')).toMatch('Esta não é a Enterprise.')
  expect(verificarNave('enterprise')).toMatch('Bem-vindo a bordo da Enterprise.')
})

test.each(['exploração', 'diplomacia'])('deve verificar se é missão da frota estelar [or] %s', (missao: string) => {
  expect(verificarMissao(missao)).toMatch('Preparando-se para uma missão da frota estelar.')
})

test('deve verificar se o tripulante está elegível para ser capitão [and]', () => {
  expect(verificarTripulante(35, 'comandante')).toMatch('Você é elegível para ser um capitão')
  expect(verificarTripulante(34, 'comandante')).toMatch('Você não é elegível')
})

test('deve verificar se é a Enterprise 1701', () => {
  expect(verificarNumeroNave(1701)).toMatch('Esta é a Enterprise 1701')
  expect(verificarNumeroNave('1701')).toMatch('Esta é a Enterprise 1701')
})