-- CreateTable
CREATE TABLE "registrant" (
    "id" TEXT NOT NULL,
    "registrant_id" TEXT,
    "webinar_id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "phone_number" INTEGER,
    "join_url" TEXT NOT NULL,
    "topic" TEXT NOT NULL,
    "start_time" TIMESTAMP(3) NOT NULL,
    "registered_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "registrant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "zoom_participant" (
    "id" TEXT NOT NULL,
    "webinar_id" TEXT NOT NULL,
    "participant_id" TEXT,
    "user_id" TEXT NOT NULL,
    "full_name" TEXT,
    "email" TEXT NOT NULL,
    "join_time" TIMESTAMP(3),
    "leave_time" TIMESTAMP(3),
    "duration" INTEGER,
    "status" TEXT,

    CONSTRAINT "zoom_participant_pkey" PRIMARY KEY ("id")
);
