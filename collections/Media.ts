import type { CollectionConfig } from "payload";
import { Admin } from "../payload-types";

export const Media: CollectionConfig = {
  slug: "media",
  admin: {
    hidden: ({ user }) => (user as Admin)?.role !== "super-admin",
  },
  access: {
    read: ({ req: { user } }) => (user as Admin)?.role === "super-admin",
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
  upload: true,
};

// access: {
//   read: ({ req: { user } }) => {
//     // Allow users with a role of 'admin'
//     if (user && user.role && user.role.some((role) => role === 'super-admin')) {
//       return true
//     }
//   },
// },
