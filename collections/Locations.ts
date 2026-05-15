import type { CollectionConfig } from "payload";

const Locations: CollectionConfig = {
  slug: "locations",
  access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "address",
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "map_embed_src",
      type: "text",
    },
    {
      name: "venue_link",
      type: "text",
      validate: (value: string | undefined | null) => {
        if (!value) return true;
        if (!URL.canParse(value)) return "Must be a valid URL.";
        const { protocol } = new URL(value);
        return (
          ["http:", "https:"].includes(protocol) ||
          "Must be an http or https URL."
        );
      },
    },
  ],
};

export default Locations;
