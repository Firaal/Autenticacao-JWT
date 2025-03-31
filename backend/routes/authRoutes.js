import dotenv from "dotenv";
import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

dotenv.config();

const router = express.Router();

router.post("/register", async (req, res) => {
    const { name, email, password, confirmPassword } = req.body;

    if (!name) {
        return res.status(422).json({ msg: "O nome é obrigatorio" });
    }
    if (!email) {
        return res.status(422).json({ msg: "O email é obrigatorio" });
    }
    if (!password) {
        return res.status(422).json({ msg: "A senha é obrigatorio" });
    }
    if (password !== confirmPassword) {
        return res.status(422).send({ msg: "As senhas devem ser iguais" });
    }

    const userEmailExist = await User.findOne({ email: email });

    if (userEmailExist) {
        return res.status(422).send({ msg: "Esse email já existe" });
    }

    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    const user = new User({
        name,
        email,
        password: passwordHash,
    });

    try {
        await user.save();
        res.status(201).json({ msg: "Usuário criado com sucesso" });
    } catch (error) {
        res.status(500).json({ msg: "Aconteceu um erro no servidor, tente novamente mais tarde" });
    }
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    if (!email) {
        return res.status(422).json({ msg: "O email é obrigatorio" });
    }
    if (!password) {
        return res.status(422).json({ msg: "A senha é obrigatorio" });
    }

    const user = await User.findOne({ email: email });

    if (!user) {
        return res.status(404).json({ msg: "Usuário não encontrado" });
    }

    const checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword) {
        res.status(422).json({ msg: "Senha inválida" });
    }

    try {
        const secret = process.env.SECRET;

        const token = jwt.sign({ id: user._id }, secret);

        res.status(200).json({ msg: "Autenticação feita com sucesso", token, userId: user._id });
    } catch (error) {
        console.log(error);
        response.status(500).json({ msg: "Aconteceu um erro no servidor, tente novamente mais tarde!" });
    }
});

export default router;
