DROP DATABASE IF EXISTS "notableChallenge";
CREATE DATABASE "notableChallenge";

\c "notableChallenge";

CREATE TABLE "doctors" (
  "id"                  SERIAL PRIMARY KEY,
  "firstName"           VARCHAR(100) NOT NULL,
  "lastName"            VARCHAR(100) NOT NULL
);

CREATE TABLE "appointments" (
  "id"                  SERIAL PRIMARY KEY,
  "patientFirstName"    VARCHAR(100) NOT NULL,
  "patientLastName"     VARCHAR(100) NOT NULL,
  "date"                VARCHAR(100) NOT NULL,
  "time"                VARCHAR(100) NOT NULL,
  "kind"                VARCHAR(100) NOT NULL,
  "doctor_id"           INT NOT NULL,
  FOREIGN KEY ("doctor_id") REFERENCES "doctors" ("id") ON DELETE CASCADE
);
