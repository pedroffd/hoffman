-- CreateTable
CREATE TABLE "activate_place_requests" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER,
    "npi" VARCHAR,
    "uuid" VARCHAR,
    "manual_verification_requested" BOOLEAN DEFAULT false,
    "verified_at" TIMESTAMP(6),
    "unverified_number" VARCHAR,

    CONSTRAINT "activate_place_requests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "admins_places" (
    "place_id" INTEGER,
    "user_id" INTEGER,
    "id" SERIAL NOT NULL,

    CONSTRAINT "admins_places_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "advertisements" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR,
    "message" VARCHAR,
    "link" VARCHAR,
    "media" VARCHAR,
    "partner_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "advertisements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chat_keys" (
    "id" SERIAL NOT NULL,
    "conversation" VARCHAR NOT NULL,
    "version" INTEGER NOT NULL,
    "authentication" VARCHAR NOT NULL,
    "encryption" VARCHAR NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "chat_keys_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contact_requests" (
    "id" SERIAL NOT NULL,
    "message" TEXT,
    "user_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "web_request" BOOLEAN DEFAULT false,

    CONSTRAINT "contact_requests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "conversations" (
    "id" SERIAL NOT NULL,
    "space_id" INTEGER,
    "user_id" INTEGER,
    "other_user_id" INTEGER,
    "identifier" VARCHAR,
    "last_message_at" TIMESTAMP(6),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "place_id" INTEGER,
    "interoffice_connection_id" INTEGER,
    "for_referrals" BOOLEAN DEFAULT false,
    "has_response_from_office" BOOLEAN DEFAULT false,
    "historic_channel_id" VARCHAR,

    CONSTRAINT "conversations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "create_place_requests" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER,
    "name" VARCHAR,
    "address1" VARCHAR,
    "address2" VARCHAR,
    "city" VARCHAR,
    "state" VARCHAR,
    "zip" VARCHAR,
    "phone_number" VARCHAR,
    "npi" VARCHAR,

    CONSTRAINT "create_place_requests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "interoffice_admins_places" (
    "id" SERIAL NOT NULL,
    "place_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "interoffice_admins_places_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "interoffice_connection_requests" (
    "id" SERIAL NOT NULL,
    "source_id" INTEGER NOT NULL,
    "source_place_id" INTEGER NOT NULL,
    "target_id" INTEGER NOT NULL,
    "target_place_id" INTEGER NOT NULL,
    "uuid" VARCHAR NOT NULL,
    "request_text" TEXT,
    "accepted_at" TIMESTAMP(6),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "denied_at" TIMESTAMP(6),

    CONSTRAINT "interoffice_connection_requests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "interoffice_connections" (
    "id" SERIAL NOT NULL,
    "place_id" INTEGER NOT NULL,
    "other_place_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "channel_id" VARCHAR NOT NULL,
    "presence_channel_id" VARCHAR,
    "referral_channel_id" VARCHAR,

    CONSTRAINT "interoffice_connections_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "invitations" (
    "id" SERIAL NOT NULL,
    "inviter_id" INTEGER,
    "invitee_type" VARCHAR,
    "first_name" VARCHAR,
    "last_name" VARCHAR,
    "email" VARCHAR,
    "uuid" VARCHAR,
    "place_id" INTEGER,
    "space_ids" VARCHAR,
    "completed_at" TIMESTAMP(6),
    "invitee_user_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "mobile_phone" VARCHAR,
    "invite_to_medroster" BOOLEAN DEFAULT false,
    "fax" VARCHAR,
    "invitation_text" TEXT,

    CONSTRAINT "invitations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "join_place_requests" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER,
    "place_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "verified_by_id" INTEGER,
    "verified_at" TIMESTAMP(6),
    "accepted" BOOLEAN,
    "npi" VARCHAR,
    "database_place_id" VARCHAR(255),

    CONSTRAINT "join_place_requests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "location_data" (
    "id" SERIAL NOT NULL,
    "city" VARCHAR,
    "state" VARCHAR,
    "lat" DECIMAL(10,6),
    "lng" DECIMAL(10,6),

    CONSTRAINT "location_data_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "marketing_groups" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR,
    "partner_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "marketing_groups_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "marketing_groups_users" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER,
    "marketing_group_id" INTEGER,

    CONSTRAINT "marketing_groups_users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "messages" (
    "id" SERIAL NOT NULL,
    "content" VARCHAR(255),
    "encrypted_content" VARCHAR(255),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "channel" VARCHAR(255),
    "author" VARCHAR(255),

    CONSTRAINT "messages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mobile_phone_verifications" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER,
    "phone" VARCHAR,
    "uuid" VARCHAR,
    "completed_at" TIMESTAMP(6),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "mobile_phone_verifications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "partners_connections_requests" (
    "id" SERIAL NOT NULL,
    "accepted" BOOLEAN,
    "partner_id" INTEGER,
    "user_id" INTEGER,
    "message" VARCHAR,

    CONSTRAINT "partners_connections_requests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pending_connection_requests" (
    "id" SERIAL NOT NULL,
    "source_user_id" INTEGER,
    "source_place_id" INTEGER,
    "pending_user_email" VARCHAR,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "invitation_id" INTEGER,

    CONSTRAINT "pending_connection_requests_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "place_invitations" (
    "id" SERIAL NOT NULL,
    "place_id" INTEGER,
    "inviter_id" INTEGER,
    "uuid" VARCHAR,
    "completed_at" TIMESTAMP(6),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "invitee_user_id" INTEGER,

    CONSTRAINT "place_invitations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "place_user_connections" (
    "id" SERIAL NOT NULL,
    "place_id" INTEGER,
    "user_id" INTEGER,
    "user_place_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "place_user_connections_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "places" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR,
    "channel_id" VARCHAR,
    "description" VARCHAR,
    "uuid" VARCHAR,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "npi" VARCHAR,
    "name_vector" VARCHAR,
    "state" VARCHAR(3),
    "address" VARCHAR,
    "zip" VARCHAR(6),
    "phone" VARCHAR(12),
    "city" VARCHAR,
    "presence_channel_id" VARCHAR,
    "unverified" BOOLEAN DEFAULT false,
    "fax" VARCHAR,
    "away_message" TEXT,
    "lat" DECIMAL(10,6),
    "lng" DECIMAL(10,6),
    "alt_phone" VARCHAR,
    "database_id" VARCHAR(255),

    CONSTRAINT "places_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "places_users" (
    "place_id" INTEGER,
    "user_id" INTEGER,
    "id" SERIAL NOT NULL,

    CONSTRAINT "places_users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "practice_data" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR,
    "state" VARCHAR(3),
    "address" VARCHAR,
    "zip" VARCHAR(6),
    "phone" VARCHAR(12),
    "npi" VARCHAR(11),
    "city" VARCHAR,
    "name_vector" VARCHAR,
    "fax" VARCHAR,

    CONSTRAINT "practice_data_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "practitioner_data" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR,
    "first_name" VARCHAR,
    "middle_name" VARCHAR,
    "last_name" VARCHAR,
    "credentials" VARCHAR,
    "taxonomy_code" VARCHAR,
    "specialty_description" VARCHAR,
    "address" VARCHAR,
    "city" VARCHAR,
    "state" VARCHAR(3),
    "gender" VARCHAR(2),
    "npi" VARCHAR(11),
    "given_name_vector" VARCHAR,
    "last_name_vector" VARCHAR,
    "phone" VARCHAR,
    "fax" VARCHAR,
    "lat" DECIMAL(10,6),
    "lng" DECIMAL(10,6),

    CONSTRAINT "practitioner_data_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "push_notifications" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER,
    "pending" BOOLEAN DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "last_conversation_id" VARCHAR,

    CONSTRAINT "push_notifications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "schema_migrations" (
    "version" VARCHAR NOT NULL
);

-- CreateTable
CREATE TABLE "spaces" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR,
    "channel_id" VARCHAR,
    "description" VARCHAR,
    "uuid" VARCHAR,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "place_id" INTEGER,

    CONSTRAINT "spaces_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "spaces_users" (
    "space_id" INTEGER,
    "user_id" INTEGER,
    "id" SERIAL NOT NULL,

    CONSTRAINT "spaces_users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "team_members" (
    "patient_user_id" INTEGER,
    "staff_user_id" INTEGER,
    "id" SERIAL NOT NULL,

    CONSTRAINT "team_members_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_connections" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER,
    "connected_user_id" INTEGER,
    "user_place_id" INTEGER,
    "connected_user_place_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_connections_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR DEFAULT '',
    "encrypted_password" VARCHAR NOT NULL DEFAULT '',
    "reset_password_token" VARCHAR,
    "reset_password_sent_at" TIMESTAMP(6),
    "remember_created_at" TIMESTAMP(6),
    "sign_in_count" INTEGER NOT NULL DEFAULT 0,
    "current_sign_in_at" TIMESTAMP(6),
    "last_sign_in_at" TIMESTAMP(6),
    "current_sign_in_ip" VARCHAR,
    "last_sign_in_ip" VARCHAR,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "first_name" VARCHAR,
    "last_name" VARCHAR,
    "phone_number" VARCHAR,
    "channel_id" VARCHAR,
    "uuid" VARCHAR,
    "type" VARCHAR,
    "npi" VARCHAR,
    "confirmation_token" VARCHAR,
    "confirmed_at" TIMESTAMP(6),
    "confirmation_sent_at" TIMESTAMP(6),
    "unconfirmed_email" VARCHAR,
    "specialty" VARCHAR,
    "title" VARCHAR,
    "invitation_token" VARCHAR,
    "gender" VARCHAR(255),
    "api_auth_token" VARCHAR,
    "device_token" VARCHAR,
    "is_root" BOOLEAN DEFAULT false,
    "device_platform" VARCHAR,
    "filepicker_url" VARCHAR DEFAULT '',
    "full_name_vector" VARCHAR,
    "invited_by_id" INTEGER,
    "invitations_count" INTEGER DEFAULT 0,
    "identity_id" VARCHAR(255),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users_advertisements" (
    "id" SERIAL NOT NULL,
    "viewed" BOOLEAN,
    "target_user_id" INTEGER,
    "advertisement_id" INTEGER,

    CONSTRAINT "users_advertisements_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "idx_activate_place_requests_user_id" ON "activate_place_requests"("user_id");

-- CreateIndex
CREATE INDEX "idx_activate_place_requests_uuid" ON "activate_place_requests"("uuid");

-- CreateIndex
CREATE INDEX "index_activate_place_requests_on_user_id" ON "activate_place_requests"("user_id");

-- CreateIndex
CREATE INDEX "index_activate_place_requests_on_uuid" ON "activate_place_requests"("uuid");

-- CreateIndex
CREATE INDEX "index_admins_places_on_place_id_and_user_id" ON "admins_places"("place_id", "user_id");

-- CreateIndex
CREATE INDEX "idx_chat_keys_conversation" ON "chat_keys"("conversation");

-- CreateIndex
CREATE INDEX "idx_chat_keys_version" ON "chat_keys"("version");

-- CreateIndex
CREATE INDEX "index_chat_keys_on_conversation" ON "chat_keys"("conversation");

-- CreateIndex
CREATE INDEX "index_chat_keys_on_version" ON "chat_keys"("version");

-- CreateIndex
CREATE UNIQUE INDEX "chat_keys_conversation_version_key" ON "chat_keys"("conversation", "version");

-- CreateIndex
CREATE UNIQUE INDEX "idx_chat_keys_conversation_version" ON "chat_keys"("conversation", "version");

-- CreateIndex
CREATE INDEX "idx_conversations_other_user_id" ON "conversations"("other_user_id");

-- CreateIndex
CREATE INDEX "idx_conversations_place_id" ON "conversations"("place_id");

-- CreateIndex
CREATE INDEX "idx_conversations_space_id" ON "conversations"("space_id");

-- CreateIndex
CREATE INDEX "idx_conversations_user_id" ON "conversations"("user_id");

-- CreateIndex
CREATE INDEX "index_conversations_on_interoffice_connection_id" ON "conversations"("interoffice_connection_id");

-- CreateIndex
CREATE INDEX "index_conversations_on_other_user_id" ON "conversations"("other_user_id");

-- CreateIndex
CREATE INDEX "index_conversations_on_place_id" ON "conversations"("place_id");

-- CreateIndex
CREATE INDEX "index_conversations_on_space_id" ON "conversations"("space_id");

-- CreateIndex
CREATE INDEX "index_conversations_on_user_id" ON "conversations"("user_id");

-- CreateIndex
CREATE INDEX "idx_interoffice_admins_places_place_user" ON "interoffice_admins_places"("place_id", "user_id");

-- CreateIndex
CREATE INDEX "index_interoffice_admins_places_on_place_id_and_user_id" ON "interoffice_admins_places"("place_id", "user_id");

-- CreateIndex
CREATE INDEX "index_interoffice_connection_requests_on_source_id" ON "interoffice_connection_requests"("source_id");

-- CreateIndex
CREATE INDEX "index_interoffice_connection_requests_on_source_place_id" ON "interoffice_connection_requests"("source_place_id");

-- CreateIndex
CREATE INDEX "index_interoffice_connection_requests_on_target_id" ON "interoffice_connection_requests"("target_id");

-- CreateIndex
CREATE INDEX "index_interoffice_connection_requests_on_target_place_id" ON "interoffice_connection_requests"("target_place_id");

-- CreateIndex
CREATE INDEX "index_interoffice_connections_on_other_place_id" ON "interoffice_connections"("other_place_id");

-- CreateIndex
CREATE INDEX "index_interoffice_connections_on_place_id" ON "interoffice_connections"("place_id");

-- CreateIndex
CREATE INDEX "idx_join_place_requests_user_id" ON "join_place_requests"("user_id");

-- CreateIndex
CREATE INDEX "index_join_place_requests_on_user_id" ON "join_place_requests"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "idx_join_place_requests_place_user" ON "join_place_requests"("place_id", "user_id");

-- CreateIndex
CREATE UNIQUE INDEX "index_join_place_requests_on_place_id_and_user_id" ON "join_place_requests"("place_id", "user_id");

-- CreateIndex
CREATE INDEX "index_location_data_on_lat_and_lng" ON "location_data"("lat", "lng");

-- CreateIndex
CREATE UNIQUE INDEX "idx_marketing_groups_users_user_id_marketing_group_id" ON "marketing_groups_users"("user_id", "marketing_group_id");

-- CreateIndex
CREATE UNIQUE INDEX "index_marketing_groups_users_on_user_id_and_marketing_group_id" ON "marketing_groups_users"("user_id", "marketing_group_id");

-- CreateIndex
CREATE INDEX "idx_mobile_phone_verifications_user_id" ON "mobile_phone_verifications"("user_id");

-- CreateIndex
CREATE INDEX "index_mobile_phone_verifications_on_user_id" ON "mobile_phone_verifications"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "idx_unique_partner_user" ON "partners_connections_requests"("partner_id", "user_id");

-- CreateIndex
CREATE INDEX "idx_place_invitations_inviter_id" ON "place_invitations"("inviter_id");

-- CreateIndex
CREATE INDEX "idx_place_invitations_place_id" ON "place_invitations"("place_id");

-- CreateIndex
CREATE INDEX "idx_place_user_connections_place_id" ON "place_user_connections"("place_id");

-- CreateIndex
CREATE INDEX "idx_place_user_connections_user_id" ON "place_user_connections"("user_id");

-- CreateIndex
CREATE INDEX "idx_place_user_connections_user_place_id" ON "place_user_connections"("user_place_id");

-- CreateIndex
CREATE INDEX "index_places_on_lat_and_lng" ON "places"("lat", "lng");

-- CreateIndex
CREATE INDEX "place_search_idx" ON "places"("name_vector");

-- CreateIndex
CREATE INDEX "idx_places_users_place_user" ON "places_users"("place_id", "user_id");

-- CreateIndex
CREATE INDEX "idx_places_users_user_id" ON "places_users"("user_id");

-- CreateIndex
CREATE INDEX "index_places_users_on_place_id_and_user_id" ON "places_users"("place_id", "user_id");

-- CreateIndex
CREATE INDEX "index_places_users_on_user_id" ON "places_users"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "idx_practice_data_npi" ON "practice_data"("npi");

-- CreateIndex
CREATE INDEX "practice_data_search_idx" ON "practice_data"("name_vector");

-- CreateIndex
CREATE UNIQUE INDEX "idx_practitioner_data_npi" ON "practitioner_data"("npi");

-- CreateIndex
CREATE INDEX "index_practitioner_data_on_lat_and_lng" ON "practitioner_data"("lat", "lng");

-- CreateIndex
CREATE INDEX "practitioner_data_given_name_search_idx" ON "practitioner_data"("given_name_vector");

-- CreateIndex
CREATE INDEX "practitioner_data_last_name_search_idx" ON "practitioner_data"("last_name_vector");

-- CreateIndex
CREATE UNIQUE INDEX "unique_schema_migrations" ON "schema_migrations"("version");

-- CreateIndex
CREATE UNIQUE INDEX "idx_unique_name_space" ON "spaces"("place_id", "name");

-- CreateIndex
CREATE UNIQUE INDEX "index_spaces_on_place_id_and_name" ON "spaces"("place_id", "name");

-- CreateIndex
CREATE INDEX "idx_spaces_users_space_user" ON "spaces_users"("space_id", "user_id");

-- CreateIndex
CREATE INDEX "idx_spaces_users_user_id" ON "spaces_users"("user_id");

-- CreateIndex
CREATE INDEX "index_spaces_users_on_space_id_and_user_id" ON "spaces_users"("space_id", "user_id");

-- CreateIndex
CREATE INDEX "index_spaces_users_on_user_id" ON "spaces_users"("user_id");

-- CreateIndex
CREATE INDEX "index_team_members_on_patient_user_id" ON "team_members"("patient_user_id");

-- CreateIndex
CREATE UNIQUE INDEX "index_team_members_on_staff_user_id_and_patient_user_id" ON "team_members"("staff_user_id", "patient_user_id");

-- CreateIndex
CREATE INDEX "idx_user_connections_connected_user_id" ON "user_connections"("connected_user_id");

-- CreateIndex
CREATE INDEX "idx_user_connections_connected_user_place_id" ON "user_connections"("connected_user_place_id");

-- CreateIndex
CREATE INDEX "idx_user_connections_user_id" ON "user_connections"("user_id");

-- CreateIndex
CREATE INDEX "idx_user_connections_user_place_id" ON "user_connections"("user_place_id");

-- CreateIndex
CREATE UNIQUE INDEX "idx_users_reset_password_token" ON "users"("reset_password_token");

-- CreateIndex
CREATE UNIQUE INDEX "index_users_on_confirmation_token" ON "users"("confirmation_token");

-- CreateIndex
CREATE UNIQUE INDEX "idx_users_api_auth_token" ON "users"("api_auth_token");

-- CreateIndex
CREATE INDEX "idx_users_email" ON "users"("email");

-- CreateIndex
CREATE INDEX "idx_users_last_name" ON "users"("last_name");

-- CreateIndex
CREATE INDEX "index_users_on_email" ON "users"("email");

-- CreateIndex
CREATE INDEX "index_users_on_last_name" ON "users"("last_name");

-- CreateIndex
CREATE INDEX "users_full_name_search_idx" ON "users"("full_name_vector");

-- AddForeignKey
ALTER TABLE "advertisements" ADD CONSTRAINT "fk_advertisements_partner_id" FOREIGN KEY ("partner_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "interoffice_admins_places" ADD CONSTRAINT "fk_interoffice_admins_places_place_id" FOREIGN KEY ("place_id") REFERENCES "places"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "interoffice_admins_places" ADD CONSTRAINT "fk_interoffice_admins_places_user_id" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "interoffice_connection_requests" ADD CONSTRAINT "fk_rails_1220690dee" FOREIGN KEY ("target_place_id") REFERENCES "places"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "interoffice_connection_requests" ADD CONSTRAINT "fk_rails_2508d04e40" FOREIGN KEY ("target_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "interoffice_connection_requests" ADD CONSTRAINT "fk_rails_52e61b2401" FOREIGN KEY ("source_place_id") REFERENCES "places"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "interoffice_connection_requests" ADD CONSTRAINT "fk_rails_630647ca12" FOREIGN KEY ("source_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "interoffice_connections" ADD CONSTRAINT "fk_interoffice_connections_other_place_id" FOREIGN KEY ("other_place_id") REFERENCES "places"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "interoffice_connections" ADD CONSTRAINT "fk_interoffice_connections_place_id" FOREIGN KEY ("place_id") REFERENCES "places"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "marketing_groups" ADD CONSTRAINT "fk_marketing_groups_partner_id" FOREIGN KEY ("partner_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "marketing_groups_users" ADD CONSTRAINT "fk_rails_a8dc98483e" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "marketing_groups_users" ADD CONSTRAINT "fk_rails_ec6ced63f9" FOREIGN KEY ("marketing_group_id") REFERENCES "marketing_groups"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "mobile_phone_verifications" ADD CONSTRAINT "fk_rails_0bc756f30a" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "partners_connections_requests" ADD CONSTRAINT "fk_partners_connections_requests_partner_id" FOREIGN KEY ("partner_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "partners_connections_requests" ADD CONSTRAINT "fk_partners_connections_requests_user_id" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "users_advertisements" ADD CONSTRAINT "fk_rails_4ab6ea49ae" FOREIGN KEY ("advertisement_id") REFERENCES "advertisements"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "users_advertisements" ADD CONSTRAINT "fk_rails_673f388cbf" FOREIGN KEY ("target_user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
