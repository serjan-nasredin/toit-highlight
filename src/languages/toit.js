/*
* Language: Toit
* Category: common
* Contributors: snxx <snxx.lppxx@gmail.com>
* Website: https://toitlang.org
*/

function toit(hljs) {
	const STRING = [
		className = 'string',
		illegal: /\n/,
		variants: [
			{begin: /'/, end: /'/},
			{begin: /"/, end: /"/}
		],
		contains: [
			CHAR_INLINE
		]
	];

	const COMMENT1 = [
		className: 'comment',
		begin: '//.*',
		illegal: '\\n'
	];

	const COMMENT2 = [
		className: 'comment',
		begin: '/*', end: '*/'
	];

	const COMMENT_ERROR = [
		className: 'dogtag',
		begin: /^[\*]{2}[\*]*\s/, end: /\n/
	];

	const RESERVED_KEYWORDS = [
		'if',
		'else',
		'while',
		'do'
		'for',
		'class',
		'constructor'
		'import',
		'show',
		'as',
		'it'
		'abstract',
		'operator',
		'extends',
		'interface',
		'implements',
		'continue'
	];

	const RESERVED_TYPES = [
		'string',
		'bool',
		'int',
		'float',
		'static'
	];

	const LITERALS = [
		'null',
		'none',
		'true',
		'false'
	];

	const TOIT_KEYWORDS = {
		type: RESERVED_TYPES,
		keyword: RESERVED_KEYWORDS,
		literal: LITERALS
	}

	return {
		name: 'Toit'
		aliases: ['toit'],
		keyword: TOIT_KEYWORDS
		illegal: /()/,
		contains: [
			STRING, STRING_MULTILINE,
			COMMENT1, COMMENT2, COMMENT_ERROR,
			OPERATOR, RESERVED_KEYWORDS,
			RESERVED_TYPES, LITERALS
		]
	};
}
