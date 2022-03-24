const googleAuth = require('../googleAuth');

module.exports = {
  async create(req, res, next) {
    try {
      const { ...process } = req.body.value;

      const sheet = await googleAuth.getSpreadsheet();
      const data = await googleAuth.getRows();
      await sheet.loadHeaderRow();

      // Incrementa o ID do último processo retornado
      process.ID = parseInt(data[data.length - 1].ID) + 1;

      await sheet.addRow(process);

      res.json(process);
      res.json();
    } catch (error) {
      next(error);
    }
  },

  async read(req, res, next) {
    try {
      let data = await googleAuth.getRows();

      if (req.body.numeroProcesso) {
        const { numeroProcesso } = req.body;
        let row = data.filter(
          (row) => row['Número do Processo'] === numeroProcesso
        );
        data = row;
      }
      const dataArray = [];

      // Cria um objeto que representa coluna (chave) e linha (valor)
      for (let row = 0; row < data.length; row++) {
        let obj = {
          rowNumber: parseInt(data[row]['_rowNumber']),
          id: parseInt(data[row]['ID']),
          numeroProcesso: data[row]['Número do Processo'] || null,
          dataProtocoloPedido: data[row]['Data de protocolo do pedido'] || null,
          portoOrganizado: data[row]['Porto Organizado'] || null,
          contratoArrendamento: data[row]['Contrato de Arrendamento'] || null,
          arrendatario: data[row]['Arrendatário'] || null,
          valorInvestimentoProposto:
            data[row]['Valor do investimento proposto'] || null,
          perfilCarga: data[row]['Perfil de carga'] || null,
          tipoCarga: data[row]['Tipo de carga'] || null,
          analiseGPO: data[row]['Análise da GPO'] || null,
          objeto: data[row]['OBJETO'] || null,
          observacoes: data[row]['OBSERVAÇÕES'] || null,
          tecnico: data[row]['TÉCNICO'] || null,
          andamentoGPO: data[row]['Andamento GPO'] || null,
          inicioAnaliseGPO: data[row]['Início da Análise - GPO'] || null,
          terminoAnaliseGPO: data[row]['Término da Análise - GPO'] || null,
          prazoAnalise: data[row]['Prazo de Análise'] || null,
          situacao: data[row]['SITUAÇÃO'] || null,
          manifestacaoANTAQ:
            data[row]['Manifestação da ANTAQ (Diretoria/SOG)'] || null,
          deliberacaoDiretoria:
            data[row][
              'Deliberação da diretoria (e/ou declaração técnica SOG)'
            ] || null,
        };
        dataArray.push(obj);
      }
      return res.send(dataArray);
    } catch (error) {
      return next(error);
    }
  },
  async update(req, res, next) {
    try {
      const { id } = req.params;
      const { ...process } = req.body.value;

      const data = await googleAuth.getRows();

      // Encontra a linha com o ID selecionado
      let row = data.filter((row) => row.ID === id)[0];

      const header = row['_sheet']['headerValues'];

      for (const iterator of header) {
        row[iterator] = process[iterator];
      }

      await row.save();
      res.send();
    } catch (error) {
      next(error);
    }
  },
  async select(req, res, next) {
    try {
      const { numeroProcesso } = req.body;

      const data = await googleAuth.getRows();

      let row = data.filter(
        (row) => row['Número do Processo'] === numeroProcesso
      );

      res.send(row[0]);
    } catch (error) {
      next(error);
    }
  },
};
