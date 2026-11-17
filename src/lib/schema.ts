// Helpers for <SchemaTable>: turn one section of a CyberMP JSON schema into
// table rows. The schemas are the same files that editors
// use for autocomplete (https://github.com/Cyber-MP/CyberMP-Schemas), so a
// table built from them cannot drift away from what the server accepts.

import resourceSchema from '../schemas/resource.schema.json';
import serverSchema from '../schemas/server.schema.json';

export type SchemaNode = {
  type?: string;
  description?: string;
  default?: unknown;
  items?: SchemaNode;
  oneOf?: SchemaNode[];
  properties?: Record<string, SchemaNode>;
  required?: string[];
};

export type SettingRow = {
  key: string;
  type: string;
  required: boolean;
  defaultValue: string;
  description: string;
};

// The schemas are vendored in src/schemas so the build works offline.
// Run `pnpm sync:schemas` to refresh them from https://schemas.cyber.mp/.
export const schemas: Record<'server' | 'resource', SchemaNode> = {
  server: serverSchema,
  resource: resourceSchema,
};

// "core.overrides" -> the schema node that describes the [core.overrides] table.
export function findSection(schema: SchemaNode, section: string): SchemaNode {
  let node = schema;
  for (const name of section.split('.').filter(Boolean)) {
    const child = node.properties?.[name];
    if (!child) {
      throw new Error(`The schema has no section "${section}" (stopped at "${name}")`);
    }
    node = child;
  }
  return node;
}

// Sub-tables such as [core] get a table of their own, so they are left out here.
export function listSettings(section: SchemaNode): SettingRow[] {
  const required = section.required ?? [];

  return Object.entries(section.properties ?? {})
    .filter(([, setting]) => setting.type !== 'object')
    .map(([key, setting]) => ({
      key,
      type: describeType(setting),
      required: required.includes(key),
      defaultValue: setting.default === undefined ? '' : JSON.stringify(setting.default),
      description: setting.description ?? '',
    }));
}

// { type: "array", items: { type: "string" } } -> "string[]"
function describeType(setting: SchemaNode): string {
  if (setting.oneOf) {
    return setting.oneOf.map(describeType).join(' | ');
  }
  if (setting.type === 'array') {
    return `${setting.items ? describeType(setting.items) : 'any'}[]`;
  }
  return setting.type ?? 'any';
}
