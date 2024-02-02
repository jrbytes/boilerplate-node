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

export function verificandoLacoFor(numero: number): string {
  let output = ''
  for(let iterador = 1; iterador <= numero; iterador++) {
    output += `Enterprise ${iterador}\n`
  }
  return output
}

export function verificandoLacoWhile(numero: number): string {
  let output = ''
  let iterador = 1
  while (iterador <= numero) {
    output += `Enterprise ${iterador}\n`
    iterador++
  }
  return output
}

export function verificandoLacoDoWhile(numero: number): string {
  let output = ''
  let iterador = 1
  do {
    output += `Enterprise ${iterador}\n`
    iterador++
  } while (iterador <= numero)
  return output
}

export function verificandoLacoDoWhileBusca(numero: number): string {
  let output = ''
  let iterador = 1
  do {
    const started = 'Enterprise Started'
    const finished = 'Enterprise Finished'
    if (numero == 1) output = `${started}\nHome\n${finished}\n`
    if (numero == 2) output = `${started}\nSettings\n${finished}\n`
    if (numero == 3) output = `${started}\nExit\n${finished}\n`
    iterador++
  } while (iterador <= numero)
  return output
}