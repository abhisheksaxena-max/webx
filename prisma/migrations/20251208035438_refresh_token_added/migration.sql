/*
  Warnings:

  - You are about to drop the column `created_at` on the `registrant` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "registrant" DROP COLUMN "created_at";

-- CreateTable
CREATE TABLE "refresh_token" (
    "id" TEXT NOT NULL,
    "refresh_token" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "refresh_token_pkey" PRIMARY KEY ("id")
);
