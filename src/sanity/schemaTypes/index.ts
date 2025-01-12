import { type SchemaTypeDefinition } from 'sanity'
import product from './productSchemas'
import productSchemas from './productSchemas';

export const schemaTypes = [...productSchemas];

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [],
}
