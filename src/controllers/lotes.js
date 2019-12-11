class Lote {
  constructor(loteModel) {
    this.lote = loteModel;
  }

  async save(req, res) {
    try {
      const myLote = new this.lote(req.body);
      await myLote.save();
      res.status(201).json({ msg: "Coleta efetuada com sucesso" });
    } catch (err) {
      res.status(401).send(err);
    }
  }

  async buscarLotes(req, res) {
    try {
      const lotes = await this.lote
        .find({ user: req.params.idUser })
        .populate("colmeiaExtraida")
        .sort({ dataColeta: -1 });
      res.status(200).send(lotes);
    } catch (err) {
      res.status(400).send(err);
    }
  }

  async buscarLotesPorId(req, res) {
    try {
      console.log(req.params.idUser);
      console.log(req.params.idLote);
      const lotes = await this.lote
        .findOne({ _id: req.params.idLote, user: req.params.idUser })
        .populate("colmeiaExtraida");
      console.log(lotes);
      res.status(200).send(lotes);
    } catch (err) {
      res.status(400).send(err);
    }
  }
}

module.exports = Lote;
