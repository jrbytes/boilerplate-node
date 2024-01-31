export function verificarIdade(idade: number): string {
  if (idade >= 18) {
    return 'Você é um oficial da Frota Estelar.'
  } else {
    return 'Você não atende aos requisitos para ser oficial.'
  }
}

export function verificarPosto(posto: string): string {
  if (posto == 'capitão') {
    return 'Bem-vindo, Capitão!'
  } else {
    return 'Bem-vindo, Tripulante!'
  }
}

export function verificarNave(nave: string): string {
  if (nave != 'enterprise') {
    return 'Esta não é a Enterprise.'
  } else {
    return 'Bem-vindo a bordo da Enterprise.'
  }
}

export function verificarMissao(missao: string): any {
  if (missao == 'exploração' || missao == 'diplomacia') {
    return 'Preparando-se para uma missão da frota estelar.'
  }
}

export function verificarTripulante(idade: number, posto: string): string {
  if (idade >= 35 && posto == 'comandante') {
    return 'Você é elegível para ser um capitão'
  } else {
    return 'Você não é elegível'
  }
}

export function verificarNumeroNave(number: string | number) {
  if (number == 1701) {
    return 'Esta é a Enterprise 1701'
  }
}