# Vendored CyberMP schemas

Copies of the official JSON schemas from <https://github.com/Cyber-MP/CyberMP-Schemas>
(served at `https://schemas.cyber.mp/`). The configuration reference pages build their
tables from these files through `src/components/SchemaTable.astro`, so the docs build
works offline.

When the schemas change upstream, refresh the copies:

```shell
pnpm sync:schemas
```
