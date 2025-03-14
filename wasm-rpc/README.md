# golem-wasm-rpc

Defines data types for [Golem](https://golem.cloud)'s remote function invocation and conversions between them.

- `WitValue` is the WIT-defined generic data type capable of representing an arbitrary value, generated by `wit-bindgen`
- A builder and an extractor API for `WitValue`
- `Value` is a recursive Rust type which is more convenient to work with than `WitValue`. Conversion between `WitValue` and `Value` is implemented in both directions.
- Protobuf message types for describing values and types, and a protobuf version of `WitValue` itself and conversion from and to `Value` and `WitValue`
- JSON representation of WIT values, as defined in [the Golem docs](https://learn.golem.cloud/docs/template-interface).
- Conversion of `Value` to and from `wasmtime` values

The JSON representation requires additional type information which can be extracted using the [golem-wasm-ast](https://crates.io/crates/golem-wasm-ast) crate.

## Host and stub mode

The `golem-wasm-rpc` crate can be both used in host and guest environments:

To compile the host version:

```shell
cargo build -p golem-wasm-rpc --no-default-features --features host
```

To compile the guest version, has minimal dependencies and feature set to be used in generated stubs:

```shell
cargo component build -p golem-wasm-rpc --no-default-features --features stub
```

## Feature flags
- `arbitrary` adds an `Arbitrary` instance for `Value`
- `bincode` adds Bincode codecs for some types
- `host-bindings` enables WIT-generated types for wasmtime hosts
- `json` adds conversion functions for mapping of a WIT value and type definition to/from JSON
- `poem_openapi` adds poem OpenAPI type class instances for some of the types
- `protobuf` adds the protobuf message types
- `serde` adds serde JSON serialization for some of the types
- `text` enables `wasm-wave` based text representation for values
- `wasmtime` adds conversion to `wasmtime` `Val` values
- `host` enables all features: `arbitrary`, `bincode`, `host-bindings`, `json`, `poem_openapi`, `protobuf`, `serde`, `text`, `typeinfo`, and `wasmtime`
- `stub` is to be used in generated WASM stubs and disables all features, and generates guest bindings instead of host bindings
