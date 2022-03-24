function getProcessData(GoogleSpreadsheetRow) {
  const processData = {
    rowNumber: GoogleSpreadsheetRow['_rowNumber'],
    id: parseInt(GoogleSpreadsheetRow['ID']),
    numeroProcesso: GoogleSpreadsheetRow['Número do Processo'],
    dataProtocoloPedido: GoogleSpreadsheetRow['Data de protocolo do pedido'],
    portoOrganizado: GoogleSpreadsheetRow['Porto Organizado'],
    contratoArrendamento: GoogleSpreadsheetRow['Contrato de Arrendamento'],
    arrendatario: GoogleSpreadsheetRow['Arrendatário'],
    valorInvestimentoProposto:
      GoogleSpreadsheetRow['Valor do investimento proposto'],
    perfilCarga: GoogleSpreadsheetRow['Perfil de carga'],
    tipoCarga: GoogleSpreadsheetRow['Tipo de carga'],
    analiseGPO: GoogleSpreadsheetRow['Análise da GPO'],
    objeto: GoogleSpreadsheetRow['OBJETO'],
    observacoes: GoogleSpreadsheetRow['OBSERVAÇÕES'],
    tecnico: GoogleSpreadsheetRow['TÉCNICO'],
    andamentoGPO: GoogleSpreadsheetRow['Andamento GPO'],
    inicioAnaliseGPO: GoogleSpreadsheetRow['Início da Análise - GPO'],
    terminoAnaliseGPO: GoogleSpreadsheetRow['Término da Análise - GPO'],
    prazoAnalise: GoogleSpreadsheetRow['Prazo de Análise'],
    situacao: GoogleSpreadsheetRow['SITUAÇÃO'],
    manifestacaoANTAQ:
      GoogleSpreadsheetRow['Manifestação da ANTAQ (Diretoria/SOG)'],
    deliberacaoDiretoria:
      GoogleSpreadsheetRow[
        'Deliberação da diretoria (e/ou declaração técnica SOG)'
      ],
    codigoMInfra: GoogleSpreadsheetRow['Código MInfra'],
    protocoloMInfra: GoogleSpreadsheetRow['Protocolo MInfra'],
  };
  return processData;
}

module.exports = getProcessData;
