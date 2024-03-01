-- CreateTable
CREATE TABLE "choices" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "snippetName" TEXT NOT NULL,
    "plugin" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "choices_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "choices" ADD CONSTRAINT "choices_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
