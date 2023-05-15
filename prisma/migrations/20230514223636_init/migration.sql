-- CreateTable
CREATE TABLE `Treino` (
    `id_treino` INTEGER NOT NULL AUTO_INCREMENT,
    `nome_treino` VARCHAR(191) NOT NULL,
    `status_treino` BOOLEAN NOT NULL,

    PRIMARY KEY (`id_treino`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Exercicio` (
    `id_exercicio` INTEGER NOT NULL AUTO_INCREMENT,
    `nome_exercicio` VARCHAR(191) NOT NULL,
    `status_exercicio` BOOLEAN NOT NULL,
    `tipo_exercicio` VARCHAR(191) NOT NULL,
    `carga` INTEGER NOT NULL,
    `id_treino` INTEGER NOT NULL,
    `image_src` VARCHAR(191) NULL,

    PRIMARY KEY (`id_exercicio`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Set` (
    `id_set` INTEGER NOT NULL AUTO_INCREMENT,
    `set_valor` INTEGER NOT NULL,
    `id_exercicio` INTEGER NOT NULL,

    PRIMARY KEY (`id_set`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Exercicio` ADD CONSTRAINT `Exercicio_id_treino_fkey` FOREIGN KEY (`id_treino`) REFERENCES `Treino`(`id_treino`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Set` ADD CONSTRAINT `Set_id_exercicio_fkey` FOREIGN KEY (`id_exercicio`) REFERENCES `Exercicio`(`id_exercicio`) ON DELETE RESTRICT ON UPDATE CASCADE;
