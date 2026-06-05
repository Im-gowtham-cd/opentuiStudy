# GoTM - Terminal Portfolio

A terminal-based portfolio application built with OpenTUI and React.

## Requirements

**This package requires Bun runtime** - it will NOT work with Node.js/npm alone.

OpenTUI uses Bun's FFI (Foreign Function Interface) to communicate with its Zig rendering core, which is not available in standard Node.js.

## Installation

### Install Bun first:
```bash
curl -fsSL https://bun.sh/install | bash
```

```PowerShell
powershell -c "irm bun.sh/install.ps1 | iex"
```

### Install GoTM globally:
```bash
bun install -g @im-gowtham-cd/gotm
```

## Usage

```bash
gotm
```

## Development

To install dependencies:

```bash
bun install
```

To run in development mode:

```bash
bun dev
```

To build:

```bash
bun run build
```

## Why Bun-only?

This project uses [OpenTUI](https://github.com/opentui/opentui), a high-performance terminal UI library that requires Bun's FFI capabilities to communicate with its native Zig rendering engine. This provides:

- Higher frame rates (no 32 FPS cap like Ink)
- Lower memory usage
- Native-speed rendering

## Credits

This project was created using `bun create tui`. [create-tui](https://git.new/create-tui) is the easiest way to get started with OpenTUI.
