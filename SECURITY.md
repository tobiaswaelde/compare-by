# Security Policy

## Supported versions

Only the latest `2.x` release is supported with security updates.

## Reporting a vulnerability

Please do not report vulnerabilities in public issues. Use [GitHub's private vulnerability reporting](https://github.com/tobiaswaelde/compare-by/security/advisories/new) and include a description, reproduction steps, and potential impact.

We will investigate the report and coordinate a fix before public disclosure.

## Development dependency mitigations

`deepmerge@4.3.1`, used by Jest, has no published fix for
[GHSA-gcqx-w48m-w2h4](https://github.com/advisories/GHSA-gcqx-w48m-w2h4).
The pnpm patch in `patches/deepmerge@4.3.1.patch` prevents prototype poisoning by
defining own data properties when copying and merging objects. It covers the
original source and the CommonJS and UMD builds. `pnpm test` verifies the installed
CommonJS and UMD builds before running the library tests.

Version-based scanners, including `pnpm audit` and Dependabot, may still report
this advisory because the upstream version remains `4.3.1`. The alert is not
suppressed. Replace the patch with an upstream fixed release when available and
retain the regression tests. This dependency is development-only; `compare-by`
has no runtime dependencies.
