import {CollectionConfig} from "payload/types";

const Locations: CollectionConfig = {
  slug: 'locations',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      label: 'Name',
      name: 'name',
      type: 'text',
      required: true,
    }
  ]
}

export default Locations;
