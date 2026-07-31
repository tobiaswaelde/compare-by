# compare-by

`compare-by` is a small TypeScript utility library for sorting arrays by one or more object keys. Its public API is exported from `src/index.ts`; the package entry point is the generated `out/index.js`.

## Layout

- `src/lib/`: comparators for primitive values and the `compareBy` composition API.
- `src/util/`: small shared helpers.
- `src/index.ts`: public exports. Export new public API here deliberately.
- `*.test.ts`: Jest tests co-located with their source files.
- `.github/workflows/`: separate test, build, and Changesets release workflows.
- `.changeset/`: release metadata and configuration.

## Development

Use pnpm 11 (`corepack pnpm ...` if pnpm is not active):

```sh
pnpm install --frozen-lockfile
pnpm lint
pnpm test
pnpm build
```

`out/` is generated, ignored, and must not be committed. `prepack` builds it before npm publication; npm publishes only `out/` and `CHANGELOG.md` plus its standard metadata files.

## Coding guidelines

- Keep the library dependency-free at runtime and prefer small, direct functions.
- Use TypeScript with strict types; avoid `any` unless a test explicitly needs an unsupported runtime value.
- Preserve the existing tab indentation and single-quote style.
- Add or update the adjacent Jest test whenever comparator behavior changes.
- Keep public JSDoc and README examples aligned with the exported API and runtime behavior.
- Do not change public exports or comparator semantics without a corresponding changeset.
- Use `pnpm changeset` for user-facing changes. Releases are created by `.github/workflows/release.yml`.
- Keep dependencies on versions accepted by `minimumReleaseAge: 10080` in `pnpm-workspace.yaml`; always regenerate and validate `pnpm-lock.yaml` with pnpm.
