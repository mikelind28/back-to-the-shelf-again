import type { CollectionConfig } from "payload";
import { Event } from "../payload-types";
import { lexicalEditor } from "@payloadcms/richtext-lexical";

const Events: CollectionConfig = {
  slug: "events",
  access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  admin: {
    useAsTitle: "start_time",
  },
  fields: [
    {
      name: "start_time",
      type: "date",
      required: true,
      admin: {
        date: {
          pickerAppearance: "dayAndTime",
        },
      },
    },
    {
      name: "autofillEndTime",
      type: "ui",
      admin: {
        components: {
          Field: "/app/(app)/ui/components/AutofillEndTime#AutofillEndTime",
        },
      },
    },
    {
      name: "end_time",
      type: "date",
      required: true,
      validate: (val, { siblingData }: { siblingData: Partial<Event> }) => {
        if (!val || !siblingData?.start_time) return true;
        return (
          new Date(val) > new Date(siblingData.start_time as string) ||
          "End time must be later than start time."
        );
      },
      admin: {
        date: {
          pickerAppearance: "dayAndTime",
        },
      },
    },
    {
      name: "description",
      type: "richText",
      editor: lexicalEditor({}),
    },
    {
      name: "location",
      type: "relationship",
      relationTo: "locations",
      required: true,
    },
    {
      name: "title",
      type: "text",
      virtual: true,
      admin: {
        hidden: true,
      },
      hooks: {
        afterRead: [
          async ({ siblingData, req }) => {
            const date = siblingData?.start_time
              ? new Date(siblingData.start_time).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : "Unknown Date";

            const locationRef = siblingData?.location;
            let locationName = "Unknown Location";

            if (locationRef) {
              const locationId =
                typeof locationRef === "object" ? locationRef.id : locationRef;
              try {
                const location = await req.payload.findByID({
                  collection: "locations",
                  id: locationId,
                });
                locationName = location?.name ?? "Unknown Location";
              } catch {
                locationName = "Unknown Location";
              }
            }

            return `${date} at ${locationName}`;
          },
        ],
      },
    },
  ],
};

export default Events;
