CREATE TABLE "words_list" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"list_id" text NOT NULL,
	"name" text NOT NULL,
	"created_at" timestamp NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
ALTER TABLE "words_list" ADD CONSTRAINT "words_list_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;