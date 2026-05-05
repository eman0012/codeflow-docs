---
sidebar_position: 2
title: About
---

# About CodeFlow

CodeFlow is an open-source documentation generator that keeps Markdown documentation in sync with the source code it describes. It detects *drift* — situations where the docs and the code have diverged — and flags stale content before users encounter it.

## The Problem

Documentation drifts. Code changes faster than the docs that describe it. A function gets renamed, a configuration field is removed, an API endpoint changes its response shape — and the docs keep claiming the old behaviour. Users hit the discrepancy, lose trust, and either file support tickets or quietly stop relying on the documentation.

Most teams treat doc drift as a process problem. CodeFlow treats it as a tooling problem: if drift can be detected automatically, it can be flagged and fixed in the same workflow that ships the code.

## How CodeFlow Works

CodeFlow watches the source files you tell it to watch. When those files change in ways that match a configured rule — a function signature change, a new configuration field, an updated comment block — CodeFlow records drift against the documentation file responsible for describing that source.

Drift surfaces in three places:

1. The CLI report (`codeflow scan`)
2. CI job output, which can fail the pipeline on high-severity drift
3. The generated documentation site, which displays a "stale" badge on affected pages

This means you find out about drift the moment it happens, not the moment a user reports it.

## Who CodeFlow Is For

- **Developer documentation teams** maintaining product docs alongside the codebase
- **Technical writers embedded in engineering organizations** who need to know when their docs need updating
- **Small teams practicing docs-as-code** who want documentation discipline without the manual review overhead

CodeFlow is deliberately small in scope. It does drift detection well, integrates with the static site generators you already use, and gets out of the way.

## What CodeFlow Is Not

- Not a documentation authoring tool. Use the editor and Markdown flavour you prefer.
- Not a static site generator. CodeFlow integrates with Docusaurus, MkDocs, Jekyll, and others.
- Not a CMS. Your docs live in your repository alongside your code.

## Project Status

CodeFlow is in active development. The drift detection engine is stable; the auto-publish and source parsing pipelines are evolving. The roadmap and current work are tracked in the project's [GitHub issues](https://github.com/eman0012/codeflow-docs).
