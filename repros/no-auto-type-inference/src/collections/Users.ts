import { CollectionConfig } from 'payload/types'

/**
 * Everything is typed as `any`.
 */
const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    {
      label: 'Name',
      name: 'name',
      type: 'text',
      validate: (value) => {
        if (value !== 'test') {
          return 'Name should be "test"'
        }
      }
    }
  ],
}

export default Users
