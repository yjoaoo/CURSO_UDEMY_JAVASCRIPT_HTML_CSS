function diaDeLazer(tem_dinheiro, filme_em_cartaz, clima_bom, tem_energia) {
    // Verifica se vai ao cinema (precisa de dinheiro E filme em cartaz)
    const ir_cinema = tem_dinheiro && filme_em_cartaz;
    
    // Verifica se vai ao parque (precisa de clima bom E energia)
    const ir_parque = clima_bom && tem_energia;
    
    // Verifica se vai sair de casa (pode ser para o cinema OU para o parque)
    const sair_casa = ir_cinema || ir_parque;
    
    // Se não sair de casa, ficará em casa
    const ficar_em_casa = !sair_casa;
    
    return {
        ir_cinema,   // true ou false
        ir_parque,   // true ou false
        sair_casa,   // true ou false
        ficar_em_casa // true ou false
    };
}

// Exemplo de uso:
console.log(diaDeLazer(true, true, false, true)); // Tem dinheiro, filme em cartaz, clima ruim, mas com energia.
console.log(diaDeLazer(false, true, true, true)); // Não tem dinheiro, filme em cartaz, clima bom e energia.
console.log(diaDeLazer(false, false, false, false)); // Sem dinheiro, sem filme, clima ruim e sem energia.

// lógicos && (E), || (OU), e ! (NÃO).

/* Cenário:
Você tem três atividades possíveis para o dia: ir ao cinema, ir ao parque ou ficar em casa.
Para ir ao cinema, você precisa de dinheiro e que o filme esteja em cartaz.
Para ir ao parque, o clima precisa estar bom e você precisa ter energia para andar.
Se nenhuma dessas condições for atendida, você ficará em casa. */

/* Explicação:
ir_cinema só será verdadeiro se a pessoa tiver dinheiro e o filme estiver em cartaz (tem_dinheiro && filme_em_cartaz).
ir_parque só será verdadeiro se o clima estiver bom e a pessoa tiver energia (clima_bom && tem_energia).
sair_casa será verdadeiro se ir_cinema ou ir_parque forem verdadeiros (ir_cinema || ir_parque).
ficar_em_casa será verdadeiro se a pessoa não sair de casa (!sair_casa).
Saídas possíveis:
Se a pessoa tem dinheiro e o filme está em cartaz, mas o clima está ruim, ela vai ao cinema.
Se a pessoa não tem dinheiro, mas o clima está bom e ela tem energia, ela vai ao parque.
Se nada disso acontecer, ela fica em casa. */ 