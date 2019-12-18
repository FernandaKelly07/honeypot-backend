class Usuario {
  constructor(usuarioModel) {
    this.usuario = usuarioModel;
  }

  async salva(req, res) {
    try {
      const user = new this.usuario(req.body);
      await user.save();
      res
        .status(201)
        .send({ msg: "Usuario cadastrado com sucesso", userId: user._id });
    } catch (err) {
      console.log(err);
      if (err.code === 11000) {
        res.status(201).send({ msg: "Dados duplicados" });
      }
      res.status(401).send(err);
    }
  }

  async logar(req, res) {
    try {
      const user = await this.usuario.findOne({ usuario: req.body.usuario });
      let myRes = {};
      if (user) {
        if (user.senha === req.body.senha) {
          myRes = { sucess: true, idUser: user._id };
        } else {
          myRes = { sucess: false, msg: "Senha incorreta" };
        }
      } else {
        myRes = { sucess: false, msg: "Usuario não encontrado" };
      }
      res.status(200).send(myRes);
    } catch (err) {
      res.status(400).send(err);
    }
  }
}

module.exports = Usuario;
