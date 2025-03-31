import express from "express";
import User from "../models/User.js";
import checkToken from "../middleware/checkToken.js";

const router = express.Router();

router.get("/:id", checkToken, async (req, res) => {
    try {
        const user = await User.findById(req.params.id, "-password");

        if (!user) {
            return res.status(404).json({ msg: "Usuário não encontrado" });
        }

        return res.status(200).json(user);
    } catch (error) {
        console.error("Erro ao buscar usuário:", error);
        return res.status(500).json({ msg: "Erro ao buscar usuário" });
    }
});

export default router;
