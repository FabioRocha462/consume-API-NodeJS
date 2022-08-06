-- CreateTable
CREATE TABLE "licitacoes" (
    "id" SERIAL NOT NULL,
    "orgao" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "Cidade" TEXT NOT NULL,
    "objeto" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "licitacoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "datas" (
    "id" SERIAL NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "data_fonte" TIMESTAMP(3) NOT NULL,
    "licitacaoId" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "datas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "licitacaoId" ON "datas"("licitacaoId");

-- AddForeignKey
ALTER TABLE "datas" ADD CONSTRAINT "posts_ibfk_1" FOREIGN KEY ("licitacaoId") REFERENCES "licitacoes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
