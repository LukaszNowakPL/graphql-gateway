-- CreateTable
CREATE TABLE "Airline" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "countryOfRegistration" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Aircraft" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "manufacturerId" INTEGER NOT NULL,
    "capacity" INTEGER NOT NULL,
    CONSTRAINT "Aircraft_manufacturerId_fkey" FOREIGN KEY ("manufacturerId") REFERENCES "Manufacturer" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Manufacturer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "country" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Route" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dep" TEXT NOT NULL,
    "arr" TEXT NOT NULL,
    "flightNumber" TEXT NOT NULL,
    "airlineId" INTEGER NOT NULL,
    CONSTRAINT "Route_airlineId_fkey" FOREIGN KEY ("airlineId") REFERENCES "Airline" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_AircraftToAirline" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_AircraftToAirline_A_fkey" FOREIGN KEY ("A") REFERENCES "Aircraft" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_AircraftToAirline_B_fkey" FOREIGN KEY ("B") REFERENCES "Airline" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE INDEX "Airline_name_idx" ON "Airline"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Airline_name_key" ON "Airline"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Aircraft_name_key" ON "Aircraft"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Manufacturer_name_key" ON "Manufacturer"("name");

-- CreateIndex
CREATE INDEX "Route_dep_idx" ON "Route"("dep");

-- CreateIndex
CREATE INDEX "Route_arr_idx" ON "Route"("arr");

-- CreateIndex
CREATE UNIQUE INDEX "_AircraftToAirline_AB_unique" ON "_AircraftToAirline"("A", "B");

-- CreateIndex
CREATE INDEX "_AircraftToAirline_B_index" ON "_AircraftToAirline"("B");
