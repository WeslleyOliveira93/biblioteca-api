import "dotenv/config";
import express from "express";
import cors from "cors";
import livrosRoutes from "./routes/livrosRoute.js";
import authenticate from "./database/connection.js";
import verificarAdm from "./middlewares/adminMiddleware.js";

authenticate()

const servidor = express();

servidor.use(cors({origin:"*"}));

servidor.use(express.json());

servidor.use(livrosRoutes);

servidor.get("/admin", verificarAdm, (req, res) => {
    res.json({
        mensagem: "Acesso administrativo."
    });
}
);
servidor.listen(3000, () => {
    console.log("Servidor iniciado!");
});