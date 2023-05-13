-- CreateTable
CREATE TABLE "Treino" (
    "id_treino" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome_treino" TEXT NOT NULL,
    "status_treino" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "Exercicio" (
    "id_exercicio" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome_exercicio" TEXT NOT NULL,
    "status_exercicio" BOOLEAN NOT NULL,
    "tipo_exercicio" TEXT NOT NULL,
    "carga" INTEGER NOT NULL,
    "id_treino" INTEGER NOT NULL,
    CONSTRAINT "Exercicio_id_treino_fkey" FOREIGN KEY ("id_treino") REFERENCES "Treino" ("id_treino") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Set" (
    "id_set" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "set_valor" INTEGER NOT NULL,
    "id_exercicio" INTEGER NOT NULL,
    CONSTRAINT "Set_id_exercicio_fkey" FOREIGN KEY ("id_exercicio") REFERENCES "Exercicio" ("id_exercicio") ON DELETE RESTRICT ON UPDATE CASCADE
);
