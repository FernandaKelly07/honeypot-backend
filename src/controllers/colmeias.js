class Colmeias {
  constructor(colmeiaModel) {
    this.colmeia = colmeiaModel;
  }
  async save(req, res) {
    try {
      const myColmeia = new this.colmeia(req.body);
      await myColmeia.save();
      res.status(201).json({ msg: "Colmeia cadastrada com sucesso" });
    } catch (err) {
      res.status(401).send(err);
      console.log(err);
    }
  }

  async buscarColmeiasOrdenadasPorData(req, res) {
    try {
      const colmeiasOrdenadas = await this.colmeia
        .find({
          user: req.params.idUser
        })
        .sort({ previsaoExtracao: 1 });

      if (colmeiasOrdenadas) {
        res.status(200).send(colmeiasOrdenadas);
      } else {
        res.status(200).send({ msg: "Sem colmeias cadastradas" });
      }
    } catch (err) {
      res.status(400).send(err);
    }
  }
}

module.exports = Colmeias;
