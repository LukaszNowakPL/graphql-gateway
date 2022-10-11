/*
  Warnings:

  - A unique constraint covering the columns `[flightNumber]` on the table `Route` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Route_flightNumber_key" ON "Route"("flightNumber");
