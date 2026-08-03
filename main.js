function calcularEnergiaSolar() {
    // 1. Captura os valores digitados pelo usuário
    const valorConta = parseFloat(document.getElementById('conta-energia').value);
    const litrosDiesel = parseFloat(document.getElementById('consumo-diesel').value) || 0;
  
    // 2. Validação simples para não calcular com campos vazios
    if (!valorConta || valorConta <= 0) {
      alert("Por favor, insira um valor válido para a conta de energia elétrica.");
      return;
    }
  
    // 3. Lógica dos Cálculos Sustentáveis e Financeiros
    
    // Economia financeira de energia (Sistemas solares reduzem cerca de 95% da conta)
    const economiaMensalLuz = valorConta * 0.95;
    const economiaAnualTotal = economiaMensalLuz * 12;
  
    // Cálculo da Pegada de Carbono (CO2) evitada
    // Média estimada da matriz elétrica brasileira: R$ 0,85 por kWh.
    const kwhMensalEstimado = valorConta / 0.85;
    
    // Fatores de emissão de CO2 salvos por ano:
    // Cada kWh gerado por energia limpa evita ~0,1 kg de CO2
    const co2EvitadoLuzAno = (kwhMensalEstimado * 0.1) * 12;
    // Cada litro de diesel queimado em gerador emite ~2,6 kg de CO2
    const co2EvitadoDieselAno = (litrosDiesel * 2.6) * 12;
    
    const totalCo2EvitadoKg = co2EvitadoLuzAno + co2EvitadoDieselAno;
    const totalCo2EvitadoToneladas = totalCo2EvitadoKg / 1000;
  
    // Equivalência em árvores (Uma árvore da Mata Atlântica absorve em média 15 kg de CO2 por ano)
    const arvoresSalvasAno = Math.round(totalCo2EvitadoKg / 15);
  
    // 4. Injetar os resultados calculados diretamente no HTML
    
    // Formatando o resultado para moeda brasileira (R$)
    document.getElementById('economia-anual').innerText = economiaAnualTotal.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  
    // Formatando as toneladas de CO2 para exibir uma casa decimal
    document.getElementById('co2-evitado').innerText = totalCo2EvitadoToneladas.toFixed(1) + " Tons";
  
    // Exibindo a quantidade de árvores salvas
    document.getElementById('arvores-salvas').innerText = arvoresSalvasAno + " Árvores";
  
    // 5. Exibir o painel de resultados removendo a classe 'hidden' do CSS
    const painelResultados = document.getElementById('dashboard-solar');
    painelResultados.classList.remove('hidden');
  
    // Rola a página suavemente até os resultados para melhorar a experiência
    painelResultados.scrollIntoView({ behavior: 'smooth' });
  }