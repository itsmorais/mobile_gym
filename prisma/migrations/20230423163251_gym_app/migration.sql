-- CreateTable
CREATE TABLE "Treino" (
    "idTreino" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nomeTreino" TEXT NOT NULL,
    "statusTreino" BOOLEAN NOT NULL,
    "set1" INTEGER NOT NULL,
    "set2" INTEGER NOT NULL,
    "set3" INTEGER NOT NULL,
    "set4" INTEGER NOT NULL,
    "tipoTreino" TEXT NOT NULL,
    "carga" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Usuario" (
    "idUsuario" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nomeUsuario" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "UsuarioTreino" (
    "idUsuario" INTEGER NOT NULL,
    "idTreino" INTEGER NOT NULL,

    PRIMARY KEY ("idUsuario", "idTreino"),
    CONSTRAINT "UsuarioTreino_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario" ("idUsuario") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UsuarioTreino_idTreino_fkey" FOREIGN KEY ("idTreino") REFERENCES "Treino" ("idTreino") ON DELETE RESTRICT ON UPDATE CASCADE
);
