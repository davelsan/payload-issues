import path from 'path'

import { payloadCloud } from '@payloadcms/plugin-cloud'
import nestedDocs from "@payloadcms/plugin-nested-docs";
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { slateEditor } from '@payloadcms/richtext-slate'
import { buildConfig } from 'payload/config'

import Users from './collections/Users'
import Locations from './collections/Locations'

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  collections: [Users, Locations],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [payloadCloud(), nestedDocs({
    collections: ['locations'],
  })],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
})
