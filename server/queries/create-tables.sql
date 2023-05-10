CREATE TABLE "Users" (
  "id" varchar PRIMARY KEY,
  "first_name" varchar,
  "last_name" varchar,
  "username" varchar,
  "email" varchar UNIQUE,
  "phone" varchar
);

CREATE TABLE "Events" (
  "id" SERIAL PRIMARY KEY,
  "title" varchar,
  "description" varchar,
  "venue" varchar,
  "address" varchar,
  "city" varchar,
  "url" varchar,
  "facebook_url" varchar,
  "instagram_url" varchar,
  "price" integer,
  "datetime" TIMESTAMP WITH TIME ZONE,
  "created_by" varchar,
  "image" varchar
);

ALTER TABLE "Events" ADD FOREIGN KEY ("created_by") REFERENCES "Users" ("id");
