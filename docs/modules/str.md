[underscorets](../README.md) / [Exports](../modules.md) / str

# Namespace: str

## Table of contents

### Functions

- [camelCase](str.md#camelcase)
- [deburr](str.md#deburr)
- [endsWith](str.md#endswith)
- [escapeHtml](str.md#escapehtml)
- [escapeRegExp](str.md#escaperegexp)
- [kebabCase](str.md#kebabcase)
- [lowerCase](str.md#lowercase)
- [lowerFirst](str.md#lowerfirst)
- [pad](str.md#pad)
- [padEnd](str.md#padend)
- [padStart](str.md#padstart)
- [pascalCase](str.md#pascalcase)
- [repeat](str.md#repeat)
- [replaceLast](str.md#replacelast)
- [size](str.md#size)
- [snakeCase](str.md#snakecase)
- [splitWords](str.md#splitwords)
- [startsWith](str.md#startswith)
- [titleCase](str.md#titlecase)
- [trim](str.md#trim)
- [trimEnd](str.md#trimend)
- [trimStart](str.md#trimstart)
- [unescapeHtml](str.md#unescapehtml)
- [upperCase](str.md#uppercase)
- [upperFirst](str.md#upperfirst)

## Other

### lowerFirst

▸ **lowerFirst**(`string`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | `string` |

#### Returns

`string`

#### Defined in

string/index.ts:35

___

### upperFirst

▸ **upperFirst**(`string`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | `string` |

#### Returns

`string`

#### Defined in

string/index.ts:52

## String

### camelCase

▸ **camelCase**(`string`): `string`

Converts `string` to camelCase.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string` | `string` | The string to convert |

#### Returns

`string`

The camel cased string

**`Example`**

```ts
camelCase('Foo Bar')
// => 'fooBar'

camelCase('--foo-bar--')
// => 'fooBar'

camelCase('__FOO_BAR__')
// => 'fooBar'
```

#### Defined in

string/index.ts:28

___

### deburr

▸ **deburr**(`string`): `string`

Deburrs a string by converting
[Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
letters to basic Latin letters and removing
[combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string` | `string` | The string to deburr |

#### Returns

`string`

The deburred string

**`Example`**

```ts
deburr('déjà vu')
// => 'deja vu'
```

#### Defined in

string/index.ts:29

___

### endsWith

▸ **endsWith**(`string`, `target`, `position?`): `boolean`

Check if `string` ends with the given target string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string` | `string` | The string to inspect |
| `target` | `string` | The string to search for |
| `position?` | `number` | The position to search up to |

#### Returns

`boolean`

`true` if `string` ends with `target`, else `false`

**`Example`**

```ts
endsWith("abc", "c");
// => true

endsWith("abc", "b");
// => false

endsWith("abc", "b", 2);
// => true
```

#### Defined in

string/index.ts:30

___

### escapeHtml

▸ **escapeHtml**(`string`): `string`

Converts the characters `&`, `<`, `>`, `"` and `'` in a string to their corresponding HTML entities.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string` | `string` | The string to escape |

#### Returns

`string`

The escaped string

**`Example`**

```ts
escapeHtml('fred, barney, & pebbles')
// => 'fred, barney, &amp; pebbles'
```

#### Defined in

string/index.ts:31

___

### escapeRegExp

▸ **escapeRegExp**(`string`): `string`

Escapes the `RegExp` special characters `^`, `$`, `\`, `.`, `*`, `+`,
`?`, `(`, `)`, `[`, `]`, `{`, `}`, and `|` in a string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string` | `string` | The string to escape |

#### Returns

`string`

The escaped string

**`Example`**

```ts
escapeRegExp('[hello](https://helloworld.io/)')
// => '\[hello\]\(https://helloworld\.io/\)'
```

#### Defined in

string/index.ts:32

___

### kebabCase

▸ **kebabCase**(`string`): `string`

Converts a string to kebab-case.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string` | `string` | The string to convert |

#### Returns

`string`

The kebab cased string

**`Example`**

```ts
kebabCase('Foo Bar')
// => 'foo-bar'

kebabCase('fooBar')
// => 'foo-bar'

kebabCase('__FOO_BAR__')
// => 'foo-bar'
```

#### Defined in

string/index.ts:33

___

### lowerCase

▸ **lowerCase**(`string`): `string`

Converts `string`, as space separated words, to lower case.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string` | `string` | The string to convert |

#### Returns

`string`

The lower cased string

**`Example`**

```ts
lowerCase("--Foo-Bar--")
// => "foo bar"

lowerCase("fooBar")
// => "foo bar"

lowerCase("__FOO_BAR__")
// => "foo bar"
```

#### Defined in

string/index.ts:34

___

### pad

▸ **pad**(`string`, `length`, `chars?`): `string`

Pads `string` on the left and right sides if it's shorter than `length`.
Padding characters are truncated if they exceed `length`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string` | `string` | The string to pad |
| `length` | `number` | The padding length |
| `chars?` | `string` | The string used as padding |

#### Returns

`string`

The padded string

**`Example`**

```ts
pad("abc", 8);
// => "  abc   "

pad("abc", 8, "_-");
// => "_-abc_-_"

pad("abc", 3);
// => "abc"
```

#### Defined in

string/index.ts:36

___

### padEnd

▸ **padEnd**(`string`, `length`, `chars?`): `string`

Pads `string` on the right side if it's shorter than `length`.
Padding characters are truncated if they exceed `length`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string` | `string` | The string to pad |
| `length` | `number` | The padding length |
| `chars?` | `string` | The string used as padding |

#### Returns

`string`

The padded string

**`Example`**

```ts
padEnd("abc", 6);
// => "abc   "

padEnd("abc", 6, "_-");
// => "abc_-_"

padEnd("abc", 3);
// => "abc"
```

#### Defined in

string/index.ts:37

___

### padStart

▸ **padStart**(`string`, `length`, `chars?`): `string`

Pads `string` on the left side if it's shorter than `length`.
Padding characters are truncated if they exceed `length`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string` | `string` | The string to pad |
| `length` | `number` | The padding length |
| `chars?` | `string` | The string used as padding |

#### Returns

`string`

The padded string

**`Example`**

```ts
padStart("abc", 6);
// => "   abc"

padStart("abc", 6, "_-");
// => "_-_abc"

padStart("abc", 3);
// => "abc"
```

#### Defined in

string/index.ts:38

___

### pascalCase

▸ **pascalCase**(`string`): `string`

Converts a string to PascalCase.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string` | `string` | The string to convert |

#### Returns

`string`

The pascal cased string

**`Example`**

```ts
pascalCase('Foo Bar')
// => 'FooBar'

pascalCase('fooBar')
// => 'FooBar'

pascalCase('__FOO_BAR__')
// => 'FooBar'
```

#### Defined in

string/index.ts:39

___

### repeat

▸ **repeat**(`string`, `n?`): `string`

Repeats the given string `n` times.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string` | `string` | The string to repeat |
| `n?` | `number` | The number of times to repeat the string |

#### Returns

`string`

The repeated string

**`Example`**

```ts
repeat('*', 3)
// => '***'
```

#### Defined in

string/index.ts:40

___

### replaceLast

▸ **replaceLast**(`string`, `searchFor`, `replaceWith`): `string`

Replaces the last occurrence of a string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string` | `string` | The string to replace in |
| `searchFor` | `string` | The string to search for |
| `replaceWith` | `string` | The string to replace with |

#### Returns

`string`

The replaced string

**`Example`**

```ts
replaceLast("Foo Bar Bar", "Bar", "Boo");
// => "Foo Bar Boo"
```

#### Defined in

string/index.ts:41

___

### size

▸ **size**(`string`): `number`

Gets the size of `string`, supporting a string with unicode.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string` | `string` | The string to inspect |

#### Returns

`number`

The string size

**`Example`**

```ts
size('abc')
// => 3

size('😀')
// => 1
```

#### Defined in

string/index.ts:42

___

### snakeCase

▸ **snakeCase**(`string`): `string`

Converts a string to snake_case.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string` | `string` | The string to convert |

#### Returns

`string`

The snake cased string

**`Example`**

```ts
snakeCase('Foo Bar')
// => 'foo_bar'

snakeCase('fooBar')
// => 'foo_bar'

snakeCase('--FOO-BAR--')
// => 'foo_bar'

snakeCase('foo2bar')
// => 'foo_2_bar'
```

#### Defined in

string/index.ts:43

___

### splitWords

▸ **splitWords**(`string`, `pattern?`): `string`[]

Split a string into words. Can deal with camelCase, PascalCase & snake_case.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string` | `string` | The string to split into words |
| `pattern?` | `string` \| [`RegExp`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp ) | The pattern to split by |

#### Returns

`string`[]

An array of words

**`Example`**

```ts
splitWords('fred, barney, & pebbles')
// => ['fred', 'barney', 'pebbles']

splitWords('fred, barney, & pebbles', /[^, ]+/g)
// => ['fred', 'barney', '&', 'pebbles']
```

#### Defined in

string/index.ts:44

___

### startsWith

▸ **startsWith**(`string`, `target`, `position?`): `boolean`

Checks if `string` starts with the given target string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string` | `string` | The string to inspect |
| `target` | `string` | The string to search for |
| `position?` | `number` | The position to search from |

#### Returns

`boolean`

true` if `string` starts with `target`, else `false`

**`Example`**

```ts
startsWith("abc", "a");
// => true

startsWith("abc", "b");
// => false

startsWith("abc", "b", 1);
// => true
```

#### Defined in

string/index.ts:45

___

### titleCase

▸ **titleCase**(`string`): `string`

Converts a string to Title Case.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string` | `string` | The string to convert |

#### Returns

`string`

The title cased string

**`Example`**

```ts
titleCase('--foo-bar--')
// => 'Foo Bar'

titleCase('fooBar')
// => 'Foo Bar'

titleCase('__FOO_BAR__')
// => 'Foo Bar'

titleCase('HélloWorld')
// => 'Hello World'
```

#### Defined in

string/index.ts:46

___

### trim

▸ **trim**(`string`, `chars`): `string`

Trim the string from the left and right by the given characters

*Use the native [trim](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim) method if you want to trim whitespace.*

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string` | `string` | The string to trim |
| `chars` | `string` | The characters to trim |

#### Returns

`string`

The trimmed string

**`Example`**

```ts
trim('$$abc$', '$')
// => 'abc'

trim('!!abc_!', '_!')
// => 'abc'
```

#### Defined in

string/index.ts:47

___

### trimEnd

▸ **trimEnd**(`string`, `chars`): `string`

Trims the specified characters from the end of the string.

*Use the native [trimEnd](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd) method if you want to trim whitespace.*

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string` | `string` | The string to trim |
| `chars` | `string` | The characters to trim |

#### Returns

`string`

The trimmed string

**`Example`**

```ts
trimEnd('abc$$$', '$')
// => 'abc'

trimEnd('abc_!!_', '_!')
// => 'abc'
```

#### Defined in

string/index.ts:48

___

### trimStart

▸ **trimStart**(`string`, `chars`): `string`

Trims specified characters from the start of the string.

*Use the native [trimStart](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart) method if you want to trim whitespace.*

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string` | `string` | The string to trim |
| `chars` | `string` | The characters to trim |

#### Returns

`string`

The trimmed string

**`Example`**

```ts
trimStart('$$$abc', '$')
// => 'abc'

trimStart('_!!_abc', '_!')
// => 'abc'
```

#### Defined in

string/index.ts:49

___

### unescapeHtml

▸ **unescapeHtml**(`string`): `string`

Converts the HTML entities `&amp;`, `&lt;`, `&gt;`, `&quot;` and `&#39;`
in a string to their corresponding characters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string` | `string` | The string to unescape |

#### Returns

`string`

The unescaped string

**`Example`**

```ts
unescapeHtml('fred, barney, &amp; pebbles')
// => 'fred, barney, & pebbles'
```

#### Defined in

string/index.ts:50

___

### upperCase

▸ **upperCase**(`string`): `string`

Converts `string`, as space separated words, to upper case.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `string` | `string` | The string to convert |

#### Returns

`string`

The upper cased string

**`Example`**

```ts
upperCase("--foo-bar--")
// => "FOO BAR"

upperCase("fooBar")
// => "FOO BAR"

upperCase("__foo_bar__")
// => "FOO BAR"
```

#### Defined in

string/index.ts:51
