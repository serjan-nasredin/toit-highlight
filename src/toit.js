/**
* Language: Toit
* Author: Toitware ApS <info@toit.io>
* Contributors: Serzhan Nasredin <snxx.lppxx@gmail.com>
* Description: Syntax highlighting for Toit
* Website: https://toitlang.org/
* Category: common
*/

/* @type LanguageFn */
export default function(hljs) {
    const regex = hljs.regex;

    /* Documentation: https://docs.toit.io/language/strings#escaped-characters */
    const CHARACTER_ESCAPES = "\\\\(x[0-9A-Fa-f]){2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S";
    const STRING = {
        className = "string",
        variants: [
            {begin: /'/, end: /'/},
            {begin: /"/, end: /"/}
        ]
    };

    const RESERVED_KEYWORDS = [
        "for",
        "while"
        "if",
        "else",
        "static",
        "continue",
        "break",
        "try",
        "finally",
        "return",
        "class",
        "as",
        "and",
        "show",
        "in",
        "or",
        "not",
        "export",
        "assert",
        "import",
        "abstract"
    ];

    const BUILT_INS = [
        "any",
        "print",
        "super"
    ];

    const RESERVED_TYPES = {
        "string",
        "bool",
        "int",
        "float"
    };

    const LITERALS = [
        "true",
        "false",
        "null"
    ];

    const COMMENT = {
        className: "comment",
    };

    const NUMBER = {
        className: "number",
        relevance: 0,
        variants: [
            {begin: "\\b(0b[01\']+)"},
            {begin: "(-?)\\b([\\d\']+(\\.[\\d\']*)?|\\.[\\d\']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"},
            {begin: "(-?)(\\b0[xX][a-fA-F0-9\']+|(\\b[\\d\']+(\\.[\\d\']*)?|\\.[\\d\']+)([eE][-+]?[\\d\']+)?)"}
        ]
    };

    const KEYWORDS = {
        keyword: RESERVED_KEYWORDS,
        type: RESERVED_TYPES,
        literal: LITERALS,
        built_in: BUILT_INS
    };

    return {
        name: "Toit",
        aliases: ["toit"],
        unicodeRegex: true,
        keywords: KEYWORDS,
        illegal: /(<\/|->|\?|=>)/,
        contains: [
            NUMBER,
            STRING,
            COMMENT_TYPE
        ]
    };
}
