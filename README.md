# Toit Programming Language grammar for [highlight.js](https://highlightjs.org/)

## Usage

Simply include the Highlight.js library in your webpage or Node app, then load this module.

### Static website or simple usage

Simply load the module after loading Highlight.js.
You'll use the minified version found in the dist directory.
This module is just a CDN build of the language,
so it will register itself as the Javascript is loaded.

```html
<script type="text/javascript" src="path/to/highlight.min.js"></script>
<script type="text/javascript" src="path/to/toit.min.js"></script>
<script type="text/javascript">
    hljs.highlightAll();
</script>
```

### Using directly from the UNPKG CDN

```html
<script type="text/javascript"
    src="https://unpkg.com/highlightjs-toit@0.0.1/dist/toit.min.js"></script>
```

- More info: <https://unpkg.com/>.

### With Node or another build system

```javascript
var hljs = require("highlight.js");
var hljsToit = require("highlightjs-toit");

hljs.registerLanguage("toit", hljsToit);
hljs.highlightAll();
```

## Official resources:

- The official website for the Highlight.js library is <https://highlightjs.org/>;
- The Highlight.js GitHub project: <https://github.com/highlightjs/highlight.js>;
- Author: Serzhan Nasredin <snxx.lppxx@gmail.com>;
- Learn more about Toit: <https://toitlang.org/>.
