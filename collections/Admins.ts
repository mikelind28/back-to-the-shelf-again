import type { CollectionConfig } from 'payload'
import { Admin } from '../payload-types'

export const Admins: CollectionConfig = {
  slug: 'admins',
  admin: {
    useAsTitle: 'name',
  },
  auth: true,
  access: {
    read: ({ req: { user } }) => Boolean(user),
    create: ({ req: { user } }) => (user as Admin)?.role === 'super-admin',
    update: ({ req: { user }, id }) => {
      if ((user as Admin)?.role === 'super-admin') return true
      return (user as Admin)?.id === String(id)
    },
    delete: ({ req: { user }, id }) => {
      if ((user as Admin)?.role === 'super-admin') return true
      return (user as Admin)?.id === String(id)
    },
  },
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'radio',
      options: [
        'admin',
        'super-admin',
      ],
      defaultValue: 'admin',
      required: true,
      access: {
        update: ({ req: { user } }) => (user as Admin)?.role === 'super-admin',
      },
    },
  ],
}
