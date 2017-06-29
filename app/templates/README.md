# <%= name %>

This is a plugin for [giuseppe](http://giuseppe.smartive.ch).
<%= description %>

## Installation

To install this package, simply run

`npm i <%= name %> -S`

## How to use

*How to use the plugin.*
Here is a brief example of how to add the plugin to giuseppe:
```typescript
import { Giuseppe } from 'giuseppe';
import { <%= namePascal %> } from '<%= name %>';

const app = new Giuseppe();
app.registerPlugin(new <%= namePascal %>());
app.start();
```

## Changelog

The changelog is based on [keep a changelog](http://keepachangelog.com) and is located here:

[Changelog](CHANGELOG.md)
