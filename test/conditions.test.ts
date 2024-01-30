import { verificarMissao, verificarIdade, verificarPosto, verificarNave, verificarTripulante } from "../src/conditions"

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

test('deve verificar o tipo de exploração', () => {
  expect(verificarMissao('exploração')).toMatch('Preparando-se para uma missão de exploração.')
  expect(verificarMissao('diplomacia')).toMatch('Preparando-se para uma missão de diplomacia.')
})

test('deve verificar se o tripulante está elegível para ser capitão', () => {
  expect(verificarTripulante(35, 'comandante')).toMatch("Você é elegível para ser um capitão")
  expect(verificarTripulante(34, 'comandante')).toMatch("Você não é elegível")
})