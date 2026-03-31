import type { CollectionConfig } from "payload";
import { Admin } from "../payload-types";

export const Media: CollectionConfig = {
  slug: "media",
  upload: {
    staticDir: "public/media",
  },
  admin: {
    hidden: ({ user }) => user?.role !== "super-admin",
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => (user as Admin)?.role === "super-admin",
    update: ({ req: { user } }) => (user as Admin)?.role === "super-admin",
    delete: ({ req: { user } }) => (user as Admin)?.role === "super-admin",
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    },
  ],
};
