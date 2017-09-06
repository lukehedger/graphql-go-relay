# GraphQL Go + Relay

> Exploring Go implementation of GraphQL with the Relay client

## GraphQL
GraphQL is a database-agnostic query language that powers APIs through the
definition of type systems for searchable data.

GraphQL services are created by defining **types** and **fields** on those types
and **resolver** functions for each field on each type.

The benefits of GraphQL can be demonstrated in contrast to a traditional REST
architecture:
- Single endpoint vs multiple, maintenance-intensive endpoints
- Reduced network requests with smaller responses vs under/over-fetching
- Enables declarative data fetching vs imperative data fetching
- Schemas define entire API capabilities vs extraneous documentation

[Learn more about GraphQL](http://graphql.org/learn/) and
[How To GraphQL](https://www.howtographql.com).

## Does an application need a GraphQL client?
GraphQL can be used in web applications without any extra tooling - after all,
GraphQL operations are simply structured HTTP POST requests. There are also
[minimal](https://github.com/graphcool/graphql-request)
[helper](https://github.com/yoshuawuyts/nanogql) libraries that handle this
structuring for the developer.

However, GraphQL client frameworks can be employed to perform tasks that are
repetitive and agnostic to the app being built. For example, being able to
send queries and mutations without having to worry about lower-level networking
details or maintaining a local cache.

## Relay
[Relay](https://facebook.github.io/relay/docs/thinking-in-relay.html) is
Facebook's homegrown GraphQL client.

> GraphQL provides a powerful tool for building efficient, decoupled client
  applications. Relay builds on this functionality to provide a framework for
  declarative data-fetching.

Relay can bring plenty of benefits to an application:
  - State management - including local state via Client Schema Extensions
  - Query caching
  - Operation construction/execution and architectural patterns
  - Subscriptions - for realtime updates
  - Optimistic UI - when performing mutations
  - Performance optimisations -
    [static queries](https://facebook.github.io/relay/docs/babel-plugin-relay.html)
    and [ahead-of-time code generation](https://facebook.github.io/relay/docs/relay-compiler.html)
  - Encapsulated, colocated views and data dependencies:
    > Relay couples React with GraphQL and allows components to specify what data
      they need and the Relay framework provides the data.
      Relay develops React's idea of component encapsulation further:
      Thinking about what data an app needs becomes localized to the component.

## GraphQL Go Server
[neelance/graphql-go](https://github.com/neelance/graphql-go) appears to be the
most complete implementation of the [GraphQL spec](https://facebook.github.io/relay/docs/graphql-relay-specification.html)
in Go.

<!-- TODO - add more notes here! -->
