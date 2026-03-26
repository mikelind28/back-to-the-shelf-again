import type { CollectionConfig } from 'payload'

const Locations: CollectionConfig = {
  slug: 'locations',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'address',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'map_embed_src',
      type: 'text',
    },
  ],
}

export default Locations