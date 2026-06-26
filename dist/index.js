import { jsxs, jsx } from "react/jsx-runtime";
import t, { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import memoize from "@emotion/memoize";
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
var isPropValid = /* @__PURE__ */ memoize(
  function(prop) {
    return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
var MS = "-ms-";
var MOZ = "-moz-";
var WEBKIT = "-webkit-";
var COMMENT = "comm";
var RULESET = "rule";
var DECLARATION = "decl";
var IMPORT = "@import";
var NAMESPACE = "@namespace";
var KEYFRAMES = "@keyframes";
var LAYER = "@layer";
var abs = Math.abs;
var from = String.fromCharCode;
var assign = Object.assign;
function hash(value, length2) {
  return charat(value, 0) ^ 45 ? (((length2 << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
}
function trim(value) {
  return value.trim();
}
function match(value, pattern) {
  return (value = pattern.exec(value)) ? value[0] : value;
}
function replace(value, pattern, replacement) {
  return value.replace(pattern, replacement);
}
function indexof(value, search, position2) {
  return value.indexOf(search, position2);
}
function charat(value, index) {
  return value.charCodeAt(index) | 0;
}
function substr(value, begin, end) {
  return value.slice(begin, end);
}
function strlen(value) {
  return value.length;
}
function sizeof(value) {
  return value.length;
}
function append(value, array) {
  return array.push(value), value;
}
function combine(array, callback) {
  return array.map(callback).join("");
}
function filter(array, pattern) {
  return array.filter(function(value) {
    return !match(value, pattern);
  });
}
var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = "";
function node(value, root, parent, type, props, children, length2, siblings) {
  return { value, root, parent, type, props, children, line, column, length: length2, return: "", siblings };
}
function copy(root, props) {
  return assign(node("", null, null, "", null, null, 0, root.siblings), root, { length: -root.length }, props);
}
function lift(root) {
  while (root.root)
    root = copy(root.root, { children: [root] });
  append(root, root.siblings);
}
function char() {
  return character;
}
function prev() {
  character = position > 0 ? charat(characters, --position) : 0;
  if (column--, character === 10)
    column = 1, line--;
  return character;
}
function next() {
  character = position < length ? charat(characters, position++) : 0;
  if (column++, character === 10)
    column = 1, line++;
  return character;
}
function peek() {
  return charat(characters, position);
}
function caret() {
  return position;
}
function slice(begin, end) {
  return substr(characters, begin, end);
}
function token(type) {
  switch (type) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function alloc(value) {
  return line = column = 1, length = strlen(characters = value), position = 0, [];
}
function dealloc(value) {
  return characters = "", value;
}
function delimit(type) {
  return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
function whitespace(type) {
  while (character = peek())
    if (character < 33)
      next();
    else
      break;
  return token(type) > 2 || token(character) > 3 ? "" : " ";
}
function escaping(index, count) {
  while (--count && next())
    if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97)
      break;
  return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
}
function delimiter(type) {
  while (next())
    switch (character) {
      case type:
        return position;
      case 34:
      case 39:
        if (type !== 34 && type !== 39)
          delimiter(character);
        break;
      case 40:
        if (type === 41)
          delimiter(type);
        break;
      case 92:
        next();
        break;
    }
  return position;
}
function commenter(type, index) {
  while (next())
    if (type + character === 47 + 10)
      break;
    else if (type + character === 42 + 42 && peek() === 47)
      break;
  return "/*" + slice(index, position - 1) + "*" + from(type === 47 ? type : next());
}
function identifier(index) {
  while (!token(peek()))
    next();
  return slice(index, position);
}
function compile(value) {
  return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
}
function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
  var index = 0;
  var offset = 0;
  var length2 = pseudo;
  var atrule = 0;
  var property = 0;
  var previous = 0;
  var variable = 1;
  var scanning = 1;
  var ampersand = 1;
  var character2 = 0;
  var type = "";
  var props = rules;
  var children = rulesets;
  var reference = rule;
  var characters2 = type;
  while (scanning)
    switch (previous = character2, character2 = next()) {
      case 40:
        if (previous != 108 && charat(characters2, length2 - 1) == 58) {
          if (indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f", abs(index ? points[index - 1] : 0)) != -1)
            ampersand = -1;
          break;
        }
      case 34:
      case 39:
      case 91:
        characters2 += delimit(character2);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        characters2 += whitespace(previous);
        break;
      case 92:
        characters2 += escaping(caret() - 1, 7);
        continue;
      case 47:
        switch (peek()) {
          case 42:
          case 47:
            append(comment(commenter(next(), caret()), root, parent, declarations), declarations);
            if ((token(previous || 1) == 5 || token(peek() || 1) == 5) && strlen(characters2) && substr(characters2, -1, void 0) !== " ") characters2 += " ";
            break;
          default:
            characters2 += "/";
        }
        break;
      case 123 * variable:
        points[index++] = strlen(characters2) * ampersand;
      case 125 * variable:
      case 59:
      case 0:
        switch (character2) {
          case 0:
          case 125:
            scanning = 0;
          case 59 + offset:
            if (ampersand == -1) characters2 = replace(characters2, /\f/g, "");
            if (property > 0 && (strlen(characters2) - length2 || variable === 0 && previous === 47))
              append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1, declarations) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2, declarations), declarations);
            break;
          case 59:
            characters2 += ";";
          default:
            append(reference = ruleset(characters2, root, parent, index, offset, rules, points, type, props = [], children = [], length2, rulesets), rulesets);
            if (character2 === 123)
              if (offset === 0)
                parse(characters2, root, reference, reference, props, rulesets, length2, points, children);
              else {
                switch (atrule) {
                  case 99:
                    if (charat(characters2, 3) === 110) break;
                  case 108:
                    if (charat(characters2, 2) === 97) break;
                  default:
                    offset = 0;
                  case 100:
                  case 109:
                  case 115:
                }
                if (offset) parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length2, children), children), rules, children, length2, points, rule ? props : children);
                else parse(characters2, reference, reference, reference, [""], children, 0, points, children);
              }
        }
        index = offset = property = 0, variable = ampersand = 1, type = characters2 = "", length2 = pseudo;
        break;
      case 58:
        length2 = 1 + strlen(characters2), property = previous;
      default:
        if (variable < 1) {
          if (character2 == 123)
            --variable;
          else if (character2 == 125 && variable++ == 0 && prev() == 125)
            continue;
        }
        switch (characters2 += from(character2), character2 * variable) {
          case 38:
            ampersand = offset > 0 ? 1 : (characters2 += "\f", -1);
            break;
          case 44:
            points[index++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
            break;
          case 64:
            if (peek() === 45)
              characters2 += delimit(next());
            atrule = peek(), offset = length2 = strlen(type = characters2 += identifier(caret())), character2++;
            break;
          case 45:
            if (previous === 45 && strlen(characters2) == 2)
              variable = 0;
        }
    }
  return rulesets;
}
function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length2, siblings) {
  var post = offset - 1;
  var rule = offset === 0 ? rules : [""];
  var size = sizeof(rule);
  for (var i2 = 0, j2 = 0, k2 = 0; i2 < index; ++i2)
    for (var x2 = 0, y = substr(value, post + 1, post = abs(j2 = points[i2])), z2 = value; x2 < size; ++x2)
      if (z2 = trim(j2 > 0 ? rule[x2] + " " + y : replace(y, /&\f/g, rule[x2])))
        props[k2++] = z2;
  return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length2, siblings);
}
function comment(value, root, parent, siblings) {
  return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0, siblings);
}
function declaration(value, root, parent, length2, siblings) {
  return node(value, root, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2, siblings);
}
function prefix(value, length2, children) {
  switch (hash(value, length2)) {
    case 5103:
      return WEBKIT + "print-" + value + value;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
      return WEBKIT + value + value;
    case 4855:
      return WEBKIT + value.replace("add", "source-over").replace("substract", "source-out").replace("intersect", "source-in").replace("exclude", "xor") + value;
    case 4789:
      return MOZ + value + value;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return WEBKIT + value + MOZ + value + MS + value + value;
    case 5936:
      switch (charat(value, length2 + 11)) {
        case 114:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
        case 108:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
        case 45:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
      }
    case 6828:
    case 4268:
    case 2903:
      return WEBKIT + value + MS + value + value;
    case 6165:
      return WEBKIT + value + MS + "flex-" + value + value;
    case 5187:
      return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
    case 5443:
      return WEBKIT + value + MS + "flex-item-" + replace(value, /flex-|-self/g, "") + (!match(value, /flex-|baseline/) ? MS + "grid-row-" + replace(value, /flex-|-self/g, "") : "") + value;
    case 4675:
      return WEBKIT + value + MS + "flex-line-pack" + replace(value, /align-content|flex-|-self/g, "") + value;
    case 5548:
      return WEBKIT + value + MS + replace(value, "shrink", "negative") + value;
    case 5292:
      return WEBKIT + value + MS + replace(value, "basis", "preferred-size") + value;
    case 6060:
      return WEBKIT + "box-" + replace(value, "-grow", "") + WEBKIT + value + MS + replace(value, "grow", "positive") + value;
    case 4554:
      return WEBKIT + replace(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
    case 6187:
      return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;
    case 5495:
    case 3959:
      return replace(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
    case 4968:
      return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /space-between/, "justify") + WEBKIT + value + value;
    case 4200:
      if (!match(value, /flex-|baseline/)) return MS + "grid-column-align" + substr(value, length2) + value;
      break;
    case 2592:
    case 3360:
      return MS + replace(value, "template-", "") + value;
    case 4384:
    case 3616:
      if (children && children.some(function(element, index) {
        return length2 = index, match(element.props, /grid-\w+-end/);
      })) {
        return ~indexof(value + (children = children[length2].value), "span", 0) ? value : MS + replace(value, "-start", "") + value + MS + "grid-row-span:" + (~indexof(children, "span", 0) ? match(children, /\d+/) : +match(children, /\d+/) - +match(value, /\d+/)) + ";";
      }
      return MS + replace(value, "-start", "") + value;
    case 4896:
    case 4128:
      return children && children.some(function(element) {
        return match(element.props, /grid-\w+-start/);
      }) ? value : MS + replace(replace(value, "-end", "-span"), "span ", "") + value;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (strlen(value) - 1 - length2 > 6)
        switch (charat(value, length2 + 1)) {
          case 109:
            if (charat(value, length2 + 4) !== 45)
              break;
          case 102:
            return replace(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value, length2 + 3) == 108 ? "$3" : "$2-$3")) + value;
          case 115:
            return ~indexof(value, "stretch", 0) ? prefix(replace(value, "stretch", "fill-available"), length2, children) + value : value;
        }
      break;
    case 5152:
    case 5920:
      return replace(value, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(_2, a2, b2, c2, d2, e, f2) {
        return MS + a2 + ":" + b2 + f2 + (c2 ? MS + a2 + "-span:" + (d2 ? e : +e - +b2) + f2 : "") + value;
      });
    case 4949:
      if (charat(value, length2 + 6) === 121)
        return replace(value, ":", ":" + WEBKIT) + value;
      break;
    case 6444:
      switch (charat(value, charat(value, 14) === 45 ? 18 : 11)) {
        case 120:
          return replace(value, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + WEBKIT + (charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value;
        case 100:
          return replace(value, ":", ":" + MS) + value;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return replace(value, "scroll-", "scroll-snap-") + value;
  }
  return value;
}
function serialize(children, callback) {
  var output = "";
  for (var i2 = 0; i2 < children.length; i2++)
    output += callback(children[i2], i2, children, callback) || "";
  return output;
}
function stringify(element, index, children, callback) {
  switch (element.type) {
    case LAYER:
      if (element.children.length) break;
    case IMPORT:
    case NAMESPACE:
    case DECLARATION:
      return element.return = element.return || element.value;
    case COMMENT:
      return "";
    case KEYFRAMES:
      return element.return = element.value + "{" + serialize(element.children, callback) + "}";
    case RULESET:
      if (!strlen(element.value = element.props.join(","))) return "";
  }
  return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
}
function middleware(collection) {
  var length2 = sizeof(collection);
  return function(element, index, children, callback) {
    var output = "";
    for (var i2 = 0; i2 < length2; i2++)
      output += collection[i2](element, index, children, callback) || "";
    return output;
  };
}
function rulesheet(callback) {
  return function(element) {
    if (!element.root) {
      if (element = element.return)
        callback(element);
    }
  };
}
function prefixer(element, index, children, callback) {
  if (element.length > -1) {
    if (!element.return)
      switch (element.type) {
        case DECLARATION:
          element.return = prefix(element.value, element.length, children);
          return;
        case KEYFRAMES:
          return serialize([copy(element, { value: replace(element.value, "@", "@" + WEBKIT) })], callback);
        case RULESET:
          if (element.length)
            return combine(children = element.props, function(value) {
              switch (match(value, callback = /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  lift(copy(element, { props: [replace(value, /:(read-\w+)/, ":" + MOZ + "$1")] }));
                  lift(copy(element, { props: [value] }));
                  assign(element, { props: filter(children, callback) });
                  break;
                case "::placeholder":
                  lift(copy(element, { props: [replace(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1")] }));
                  lift(copy(element, { props: [replace(value, /:(plac\w+)/, ":" + MOZ + "$1")] }));
                  lift(copy(element, { props: [replace(value, /:(plac\w+)/, MS + "input-$1")] }));
                  lift(copy(element, { props: [value] }));
                  assign(element, { props: filter(children, callback) });
                  break;
              }
              return "";
            });
      }
  }
}
var r, i;
const l = "undefined" != typeof process && void 0 !== process.env && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", c = "active", a = "data-styled-version", u = "6.4.2", d = "/*!sc*/\n", h = "undefined" != typeof window && "undefined" != typeof document, p = void 0 === t.createContext;
function f(e) {
  if ("undefined" != typeof process && void 0 !== process.env) {
    const t2 = process.env[e];
    if (void 0 !== t2 && "" !== t2) return "false" !== t2;
  }
}
const m = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : null !== (i = null !== (r = f("REACT_APP_SC_DISABLE_SPEEDY")) && void 0 !== r ? r : f("SC_DISABLE_SPEEDY")) && void 0 !== i ? i : "undefined" != typeof process && void 0 !== process.env && "production" !== process.env.NODE_ENV), g = "sc-keyframes-", v = "production" !== process.env.NODE_ENV ? { 1: "Cannot create styled-component for component: %s.\n\n", 2: "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n", 3: "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n", 4: "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n", 5: "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n", 6: "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n", 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: 'ThemeProvider: Please make your "theme" prop an object.\n\n', 9: "Missing document `<head>`\n\n", 10: "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n", 11: "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n", 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://styled-components.com/docs/api#css\n\n", 13: "%s is not a styled component and cannot be referred to via component selector. See https://styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n", 14: 'ThemeProvider: "theme" prop is required.\n\n', 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: "Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n", 17: "CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n\n", 18: "Accessing `useTheme` hook outside of a `<ThemeProvider>` element.\n\n```jsx\nimport { useTheme } from 'styled-components';\nexport function StyledCompoent({ children }) {\n  const theme = useTheme();\n  return <div style={{ width: theme.sizes.full }}>{children}</div>;\n}\n\nimport { StyledComponent } from './StyledComponent';\nimport { theme } from './theme';\nexport function App() {\n  return (\n    <ThemeProvider theme={theme}>\n      <StyledComponent />\n    </ThemeProvider>\n  );\n}\n```\n\nIf you need access to the theme in an uncertain composition scenario, `React.useContext(ThemeContext)` will not emit an error if there is no `ThemeProvider` ancestor.\n" } : {};
function S(e, ...t2) {
  return "production" === process.env.NODE_ENV ? new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t2.length > 0 ? ` Args: ${t2.join(", ")}` : ""}`) : new Error(function(...e2) {
    let t3 = e2[0];
    const n = [];
    for (let t4 = 1, o = e2.length; t4 < o; t4 += 1) n.push(e2[t4]);
    return n.forEach((e3) => {
      t3 = t3.replace(/%[a-z]/, e3);
    }), t3;
  }(v[e], ...t2).trim());
}
const b = 1 << 30;
let w = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map(), C = 1;
const P = (e) => {
  if (w.has(e)) return w.get(e);
  for (; N.has(C); ) C++;
  const t2 = C++;
  if ("production" !== process.env.NODE_ENV && ((0 | t2) < 0 || t2 > b)) throw S(16, `${t2}`);
  return w.set(e, t2), N.set(t2, e), t2;
}, O = (e) => N.get(e), E = (e, t2) => {
  C = t2 + 1, w.set(e, t2), N.set(t2, e);
}, I = /invalid hook call/i, A = /* @__PURE__ */ new Set(), _ = (e, n) => {
  if ("production" !== process.env.NODE_ENV) {
    if (p) return;
    const o = `The component ${e}${n ? ` with the id of "${n}"` : ""} has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, s = console.error;
    try {
      let e2 = true;
      console.error = (t2, ...n2) => {
        I.test(t2) ? (e2 = false, A.delete(o)) : s(t2, ...n2);
      }, "function" == typeof t.useState && t.useState(null), e2 && !A.has(o) && (console.warn(o), A.add(o));
    } catch (e2) {
      I.test(e2.message) && A.delete(o);
    } finally {
      console.error = s;
    }
  }
}, x = Object.freeze([]), $ = Object.freeze({});
function R(e, t2, n = $) {
  return e.theme !== n.theme && e.theme || t2 || n.theme;
}
const j = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, k = /(^-|-$)/g;
function T(e) {
  return e.replace(j, "-").replace(k, "");
}
const D = /(a)(d)/gi, M = (e) => String.fromCharCode(e + (e > 25 ? 39 : 97));
function V(e) {
  let t2, n = "";
  for (t2 = Math.abs(e); t2 > 52; t2 = t2 / 52 | 0) n = M(t2 % 52) + n;
  return (M(t2 % 52) + n).replace(D, "$1-$2");
}
const G = 5381, F = (e, t2) => {
  let n = t2.length;
  for (; n; ) e = 33 * e ^ t2.charCodeAt(--n);
  return e;
}, z = (e) => F(G, e);
function W(e) {
  return V(z(e) >>> 0);
}
function B(e) {
  return "production" !== process.env.NODE_ENV && "string" == typeof e && e || e.displayName || e.name || "Component";
}
function L(e) {
  return "string" == typeof e && ("production" === process.env.NODE_ENV || e.charAt(0) === e.charAt(0).toLowerCase());
}
function q(e) {
  return L(e) ? `styled.${e}` : `Styled(${B(e)})`;
}
const H = Symbol.for("react.memo"), Y = Symbol.for("react.forward_ref"), U = { contextType: true, defaultProps: true, displayName: true, getDerivedStateFromError: true, getDerivedStateFromProps: true, propTypes: true, type: true }, J = { name: true, length: true, prototype: true, caller: true, callee: true, arguments: true, arity: true }, X = { $$typeof: true, compare: true, defaultProps: true, displayName: true, propTypes: true, type: true }, Z = { [Y]: { $$typeof: true, render: true, defaultProps: true, displayName: true, propTypes: true }, [H]: X };
function K(e) {
  return ("type" in (t2 = e) && t2.type.$$typeof) === H ? X : "$$typeof" in e ? Z[e.$$typeof] : U;
  var t2;
}
const Q = Object.defineProperty, ee = Object.getOwnPropertyNames, te = Object.getOwnPropertySymbols, ne = Object.getOwnPropertyDescriptor, oe = Object.getPrototypeOf, se = Object.prototype;
function re(e, t2, n) {
  if ("string" != typeof t2) {
    const o = oe(t2);
    o && o !== se && re(e, o, n);
    const s = ee(t2).concat(te(t2)), r2 = K(e), i2 = K(t2);
    for (let o2 = 0; o2 < s.length; ++o2) {
      const l2 = s[o2];
      if (!(l2 in J || n && n[l2] || i2 && l2 in i2 || r2 && l2 in r2)) {
        const n2 = ne(t2, l2);
        try {
          Q(e, l2, n2);
        } catch (e2) {
        }
      }
    }
  }
  return e;
}
function ie(e) {
  return "function" == typeof e;
}
const le = Symbol.for("react.forward_ref");
function ce(e) {
  return null != e && ("object" == typeof e || "function" == typeof e) && e.$$typeof === le && "styledComponentId" in e;
}
function ae(e, t2) {
  return e && t2 ? e + " " + t2 : e || t2 || "";
}
function ue(e, t2) {
  return e.join(t2 || "");
}
function de(e) {
  let t2 = "";
  for (let n = 0; n < e.length; n++) t2 += e[n] + d;
  return t2;
}
function he(e) {
  return e ? e.replaceAll(d, "") : e;
}
function pe(e) {
  return null !== e && "object" == typeof e && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function fe(e, t2, n = false) {
  if (!n && !pe(e) && !Array.isArray(e)) return t2;
  if (Array.isArray(t2)) for (let n2 = 0; n2 < t2.length; n2++) e[n2] = fe(e[n2], t2[n2]);
  else if (pe(t2)) for (const n2 in t2) e[n2] = fe(e[n2], t2[n2]);
  return e;
}
function me(e) {
  if (!p) return null;
  const n = t.cache;
  return n ? n(e) : null;
}
function ge(e, t2) {
  Object.defineProperty(e, "toString", { value: t2 });
}
const ye = class {
  constructor(e) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e, this._cGroup = 0, this._cIndex = 0;
  }
  indexOfGroup(e) {
    if (e === this._cGroup) return this._cIndex;
    let t2 = this._cIndex;
    if (e > this._cGroup) for (let n = this._cGroup; n < e; n++) t2 += this.groupSizes[n];
    else for (let n = this._cGroup - 1; n >= e; n--) t2 -= this.groupSizes[n];
    return this._cGroup = e, this._cIndex = t2, t2;
  }
  insertRules(e, t2) {
    if (e >= this.groupSizes.length) {
      const t3 = this.groupSizes, n2 = t3.length;
      let o2 = n2;
      for (; e >= o2; ) if (o2 <<= 1, o2 < 0) throw S(16, `${e}`);
      this.groupSizes = new Uint32Array(o2), this.groupSizes.set(t3), this.length = o2;
      for (let e2 = n2; e2 < o2; e2++) this.groupSizes[e2] = 0;
    }
    let n = this.indexOfGroup(e + 1), o = 0;
    for (let s = 0, r2 = t2.length; s < r2; s++) this.tag.insertRule(n, t2[s]) && (this.groupSizes[e]++, n++, o++);
    o > 0 && this._cGroup > e && (this._cIndex += o);
  }
  clearGroup(e) {
    if (e < this.length) {
      const t2 = this.groupSizes[e], n = this.indexOfGroup(e), o = n + t2;
      this.groupSizes[e] = 0;
      for (let e2 = n; e2 < o; e2++) this.tag.deleteRule(n);
      t2 > 0 && this._cGroup > e && (this._cIndex -= t2);
    }
  }
  getGroup(e) {
    let t2 = "";
    if (e >= this.length || 0 === this.groupSizes[e]) return t2;
    const n = this.groupSizes[e], o = this.indexOfGroup(e), s = o + n;
    for (let e2 = o; e2 < s; e2++) t2 += this.tag.getRule(e2) + d;
    return t2;
  }
}, ve = `style[${l}][${a}="${u}"]`, Se = new RegExp(`^${l}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`), be = (e) => "undefined" != typeof ShadowRoot && e instanceof ShadowRoot || "host" in e && 11 === e.nodeType, we = (e) => {
  if (!e) return document;
  if (be(e)) return e;
  if ("getRootNode" in e) {
    const t2 = e.getRootNode();
    if (be(t2)) return t2;
  }
  return document;
}, Ne = (e, t2, n) => {
  const o = n.split(",");
  let s;
  for (let n2 = 0, r2 = o.length; n2 < r2; n2++) (s = o[n2]) && e.registerName(t2, s);
}, Ce = (e, t2) => {
  var n;
  const o = (null !== (n = t2.textContent) && void 0 !== n ? n : "").split(d), s = [];
  for (let t3 = 0, n2 = o.length; t3 < n2; t3++) {
    const n3 = o[t3].trim();
    if (!n3) continue;
    const r2 = n3.match(Se);
    if (r2) {
      const t4 = 0 | parseInt(r2[1], 10), n4 = r2[2];
      0 !== t4 && (E(n4, t4), Ne(e, n4, r2[3]), e.getTag().insertRules(t4, s)), s.length = 0;
    } else s.push(n3);
  }
}, Pe = (e) => {
  const t2 = we(e.options.target).querySelectorAll(ve);
  for (let n = 0, o = t2.length; n < o; n++) {
    const o2 = t2[n];
    o2 && o2.getAttribute(l) !== c && (Ce(e, o2), o2.parentNode && o2.parentNode.removeChild(o2));
  }
};
let Oe = false;
function Ee() {
  if (false !== Oe) return Oe;
  if ("undefined" != typeof document) {
    const e = document.head.querySelector('meta[property="csp-nonce"]');
    if (e) return Oe = e.nonce || e.getAttribute("content") || void 0;
    const t2 = document.head.querySelector('meta[name="sc-nonce"]');
    if (t2) return Oe = t2.getAttribute("content") || void 0;
  }
  return Oe = "undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : void 0;
}
const Ie = (e, t2) => {
  const n = document.head, o = e || n, s = document.createElement("style"), r2 = ((e2) => {
    const t3 = Array.from(e2.querySelectorAll(`style[${l}]`));
    return t3[t3.length - 1];
  })(o), i2 = void 0 !== r2 ? r2.nextSibling : null;
  s.setAttribute(l, c), s.setAttribute(a, u);
  const d2 = t2 || Ee();
  return d2 && s.setAttribute("nonce", d2), o.insertBefore(s, i2), s;
}, Ae = class {
  constructor(e, t2) {
    this.element = Ie(e, t2), this.element.appendChild(document.createTextNode("")), this.sheet = ((e2) => {
      var t3;
      if (e2.sheet) return e2.sheet;
      const n = null !== (t3 = e2.getRootNode().styleSheets) && void 0 !== t3 ? t3 : document.styleSheets;
      for (let t4 = 0, o = n.length; t4 < o; t4++) {
        const o2 = n[t4];
        if (o2.ownerNode === e2) return o2;
      }
      throw S(17);
    })(this.element), this.length = 0;
  }
  insertRule(e, t2) {
    try {
      return this.sheet.insertRule(t2, e), this.length++, true;
    } catch (e2) {
      return false;
    }
  }
  deleteRule(e) {
    this.sheet.deleteRule(e), this.length--;
  }
  getRule(e) {
    const t2 = this.sheet.cssRules[e];
    return t2 && t2.cssText ? t2.cssText : "";
  }
}, _e = class {
  constructor(e, t2) {
    this.element = Ie(e, t2), this.nodes = this.element.childNodes, this.length = 0;
  }
  insertRule(e, t2) {
    if (e <= this.length && e >= 0) {
      const n = document.createTextNode(t2);
      return this.element.insertBefore(n, this.nodes[e] || null), this.length++, true;
    }
    return false;
  }
  deleteRule(e) {
    this.element.removeChild(this.nodes[e]), this.length--;
  }
  getRule(e) {
    return e < this.length ? this.nodes[e].textContent : "";
  }
}, xe = class {
  constructor(e) {
    this.rules = [], this.length = 0;
  }
  insertRule(e, t2) {
    return e <= this.length && (e === this.length ? this.rules.push(t2) : this.rules.splice(e, 0, t2), this.length++, true);
  }
  deleteRule(e) {
    this.rules.splice(e, 1), this.length--;
  }
  getRule(e) {
    return e < this.length ? this.rules[e] : "";
  }
};
let $e = h;
const Re = { isServer: !h, useCSSOMInjection: !m };
class je {
  static registerId(e) {
    return P(e);
  }
  constructor(e = $, t2 = {}, n) {
    this.options = Object.assign(Object.assign({}, Re), e), this.gs = t2, this.keyframeIds = /* @__PURE__ */ new Set(), this.names = new Map(n), this.server = !!e.isServer, !this.server && h && $e && ($e = false, Pe(this)), ge(this, () => ((e2) => {
      const t3 = e2.getTag(), { length: n2 } = t3;
      let o = "";
      for (let s = 0; s < n2; s++) {
        const n3 = O(s);
        if (void 0 === n3) continue;
        const r2 = e2.names.get(n3);
        if (void 0 === r2 || !r2.size) continue;
        const i2 = t3.getGroup(s);
        if (0 === i2.length) continue;
        const c2 = l + ".g" + s + '[id="' + n3 + '"]';
        let a2 = "";
        for (const e3 of r2) e3.length > 0 && (a2 += e3 + ",");
        o += i2 + c2 + '{content:"' + a2 + '"}' + d;
      }
      return o;
    })(this));
  }
  rehydrate() {
    !this.server && h && Pe(this);
  }
  reconstructWithOptions(e, t2 = true) {
    const n = new je(Object.assign(Object.assign({}, this.options), e), this.gs, t2 && this.names || void 0);
    return n.keyframeIds = new Set(this.keyframeIds), !this.server && h && e.target !== this.options.target && we(this.options.target) !== we(e.target) && Pe(n), n;
  }
  allocateGSInstance(e) {
    return this.gs[e] = (this.gs[e] || 0) + 1;
  }
  getTag() {
    return this.tag || (this.tag = (e = (({ isServer: e2, useCSSOMInjection: t2, target: n, nonce: o }) => e2 ? new xe(n) : t2 ? new Ae(n, o) : new _e(n, o))(this.options), new ye(e)));
    var e;
  }
  hasNameForId(e, t2) {
    var n, o;
    return null !== (o = null === (n = this.names.get(e)) || void 0 === n ? void 0 : n.has(t2)) && void 0 !== o && o;
  }
  registerName(e, t2) {
    P(e), e.startsWith(g) && this.keyframeIds.add(e);
    const n = this.names.get(e);
    n ? n.add(t2) : this.names.set(e, /* @__PURE__ */ new Set([t2]));
  }
  insertRules(e, t2, n) {
    this.registerName(e, t2), this.getTag().insertRules(P(e), n);
  }
  clearNames(e) {
    this.names.has(e) && this.names.get(e).clear();
  }
  clearRules(e) {
    this.getTag().clearGroup(P(e)), this.clearNames(e);
  }
  clearTag() {
    this.tag = void 0;
  }
}
const ke = /* @__PURE__ */ new WeakSet(), Te = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexShrink: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, scale: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 };
function De(e, t2) {
  return null == t2 || "boolean" == typeof t2 || "" === t2 ? "" : "number" != typeof t2 || 0 === t2 || e in Te || e.startsWith("--") ? String(t2).trim() : t2 + "px";
}
const Me = 47;
function Ve(e) {
  if (45 === e.charCodeAt(0) && 45 === e.charCodeAt(1)) return e;
  let t2 = "";
  for (let n = 0; n < e.length; n++) {
    const o = e.charCodeAt(n);
    t2 += o >= 65 && o <= 90 ? "-" + String.fromCharCode(o + 32) : e[n];
  }
  return t2.startsWith("ms-") ? "-" + t2 : t2;
}
const Ge = Symbol.for("sc-keyframes");
function Fe(e) {
  return "object" == typeof e && null !== e && Ge in e;
}
function ze(e) {
  return ie(e) && !(e.prototype && e.prototype.isReactComponent);
}
const We = (e) => null == e || false === e || "" === e, Be = Symbol.for("react.client.reference");
function Le(e) {
  return e.$$typeof === Be;
}
function qe(e) {
  const t2 = e.$$id, n = (t2 && t2.includes("#") ? t2.split("#").pop() : t2) || e.name || "unknown";
  console.warn(`Interpolating a client component (${n}) as a selector is not supported in server components. The component selector pattern requires access to the component's internal class name, which is not available across the server/client boundary. Use a plain CSS class selector instead.`);
}
function He(e, t2) {
  for (const n in e) {
    const o = e[n];
    e.hasOwnProperty(n) && !We(o) && (Array.isArray(o) && ke.has(o) || ie(o) ? t2.push(Ve(n) + ":", o, ";") : pe(o) ? (t2.push(n + " {"), He(o, t2), t2.push("}")) : t2.push(Ve(n) + ": " + De(n, o) + ";"));
  }
}
function Ye(e, t2, n, o, s = []) {
  if (We(e)) return s;
  const r2 = typeof e;
  if ("string" === r2) return s.push(e), s;
  if ("function" === r2) {
    if (Le(e)) return "production" !== process.env.NODE_ENV && qe(e), s;
    if (ze(e) && t2) {
      const r3 = e(t2);
      return "production" === process.env.NODE_ENV || "object" != typeof r3 || Array.isArray(r3) || Fe(r3) || pe(r3) || null === r3 || console.error(`${B(e)} is not a styled component and cannot be referred to via component selector. See https://styled-components.com/docs/advanced#referring-to-other-components for more details.`), Ye(r3, t2, n, o, s);
    }
    return s.push(e), s;
  }
  if (Array.isArray(e)) {
    for (let r3 = 0; r3 < e.length; r3++) Ye(e[r3], t2, n, o, s);
    return s;
  }
  return ce(e) ? (s.push(`.${e.styledComponentId}`), s) : Fe(e) ? (n ? (e.inject(n, o), s.push(e.getName(o))) : s.push(e), s) : Le(e) ? ("production" !== process.env.NODE_ENV && qe(e), s) : pe(e) ? e.toString !== Object.prototype.toString ? (s.push(e.toString()), s) : (He(e, s), s) : (s.push(e.toString()), s);
}
const Ue = z(u), Je = p ? /* @__PURE__ */ new WeakMap() : null;
function Xe(e, t2) {
  if (!Je) return null;
  const n = Je.get(e);
  if (!n) return null;
  const o = t2.names.get(e.componentId);
  if (!o) return null;
  let s = "";
  for (const e2 of o) {
    const t3 = n.get(e2);
    if (!t3) return null;
    s += t3;
  }
  return s;
}
class Ze {
  constructor(e, t2, n) {
    this.rules = e, this.componentId = t2, this.baseHash = F(Ue, t2), this.baseStyle = n, je.registerId(t2);
  }
  generateAndInjectStyles(e, t2, n) {
    let o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e, t2, n) : "";
    {
      let s = "";
      for (let o2 = 0; o2 < this.rules.length; o2++) {
        const r2 = this.rules[o2];
        if ("string" == typeof r2) s += r2;
        else if (r2) if (ze(r2)) {
          const o3 = r2(e);
          "string" == typeof o3 ? s += o3 : null != o3 && false !== o3 && ("production" === process.env.NODE_ENV || "object" != typeof o3 || Array.isArray(o3) || Fe(o3) || pe(o3) || console.error(`${B(r2)} is not a styled component and cannot be referred to via component selector. See https://styled-components.com/docs/advanced#referring-to-other-components for more details.`), s += ue(Ye(o3, e, t2, n)));
        } else s += ue(Ye(r2, e, t2, n));
      }
      if (s) {
        this.dynamicNameCache || (this.dynamicNameCache = /* @__PURE__ */ new Map());
        const e2 = n.hash ? n.hash + s : s;
        let r2 = this.dynamicNameCache.get(e2);
        if (!r2) {
          if (r2 = V(F(F(this.baseHash, n.hash), s) >>> 0), this.dynamicNameCache.size >= 200) {
            const e3 = this.dynamicNameCache.keys().next().value;
            void 0 !== e3 && this.dynamicNameCache.delete(e3);
          }
          this.dynamicNameCache.set(e2, r2);
        }
        if (!t2.hasNameForId(this.componentId, r2)) if (p && function(e3, t3) {
          var n2, o2;
          return null !== (o2 = null === (n2 = null == Je ? void 0 : Je.get(e3)) || void 0 === n2 ? void 0 : n2.has(t3)) && void 0 !== o2 && o2;
        }(this, r2)) t2.registerName(this.componentId, r2);
        else {
          const e3 = n(s, "." + r2, void 0, this.componentId);
          p && function(e4, t3, n2) {
            if (!Je) return;
            let o2 = Je.get(e4);
            o2 || (o2 = /* @__PURE__ */ new Map(), Je.set(e4, o2)), o2.set(t3, de(n2));
          }(this, r2, e3), t2.insertRules(this.componentId, r2, e3);
        }
        o = ae(o, r2);
      }
    }
    return o;
  }
}
const Ke = /&/g;
function Qe(e, t2) {
  let n = 0;
  for (; --t2 >= 0 && 92 === e.charCodeAt(t2); ) n++;
  return !(1 & ~n);
}
function et(e) {
  const t2 = e.length;
  let n = "", o = 0, s = 0, r2 = 0, i2 = false, l2 = false;
  for (let c2 = 0; c2 < t2; c2++) {
    const a2 = e.charCodeAt(c2);
    if (0 !== r2 || i2 || a2 !== Me || 42 !== e.charCodeAt(c2 + 1)) if (i2) 42 === a2 && e.charCodeAt(c2 + 1) === Me && (i2 = false, c2++);
    else if (34 !== a2 && 39 !== a2 || Qe(e, c2)) {
      if (0 === r2) if (123 === a2) s++;
      else if (125 === a2) {
        if (s--, s < 0) {
          l2 = true;
          let n2 = c2 + 1;
          for (; n2 < t2; ) {
            const t3 = e.charCodeAt(n2);
            if (59 === t3 || 10 === t3) break;
            n2++;
          }
          n2 < t2 && 59 === e.charCodeAt(n2) && n2++, s = 0, c2 = n2 - 1, o = n2;
          continue;
        }
        0 === s && (n += e.substring(o, c2 + 1), o = c2 + 1);
      } else 59 === a2 && 0 === s && (n += e.substring(o, c2 + 1), o = c2 + 1);
    } else 0 === r2 ? r2 = a2 : r2 === a2 && (r2 = 0);
    else i2 = true, c2++;
  }
  return l2 || 0 !== s || 0 !== r2 ? (o < t2 && 0 === s && 0 === r2 && (n += e.substring(o)), n) : e;
}
function tt(e, t2) {
  const n = t2 + " ", o = "," + n;
  for (let s = 0; s < e.length; s++) {
    const r2 = e[s];
    if ("rule" === r2.type) {
      r2.value = (n + r2.value).replaceAll(",", o);
      const e2 = r2.props, t3 = [];
      for (let o2 = 0; o2 < e2.length; o2++) t3[o2] = n + e2[o2];
      r2.props = t3;
    }
    Array.isArray(r2.children) && "@keyframes" !== r2.type && tt(r2.children, t2);
  }
  return e;
}
function nt({ options: e = $, plugins: t2 = x } = $) {
  let n, s, r2;
  const i2 = (e2, t3, o) => o.startsWith(s) && o.endsWith(s) && o.replaceAll(s, "").length > 0 ? `.${n}` : e2, l2 = t2.slice();
  l2.push((e2) => {
    e2.type === RULESET && e2.value.includes("&") && (r2 || (r2 = new RegExp(`\\${s}\\b`, "g")), e2.props[0] = e2.props[0].replace(Ke, s).replace(r2, i2));
  }), e.prefix && l2.push(prefixer), l2.push(stringify);
  let c2 = [];
  const a2 = middleware(l2.concat(rulesheet((e2) => c2.push(e2)))), u2 = (t3, i3 = "", l3 = "", u3 = "&") => {
    n = u3, s = i3, r2 = void 0;
    const d3 = function(e2) {
      const t4 = -1 !== e2.indexOf("//"), n2 = -1 !== e2.indexOf("}");
      if (!t4 && !n2) return e2;
      if (!t4) return et(e2);
      const o = e2.length;
      let s2 = "", r3 = 0, i4 = 0, l4 = 0, c3 = 0, a3 = 0, u4 = false;
      for (; i4 < o; ) {
        const t5 = e2.charCodeAt(i4);
        if (34 !== t5 && 39 !== t5 || Qe(e2, i4)) if (0 === l4) if (t5 === Me && i4 + 1 < o && 42 === e2.charCodeAt(i4 + 1)) {
          for (i4 += 2; i4 + 1 < o && (42 !== e2.charCodeAt(i4) || e2.charCodeAt(i4 + 1) !== Me); ) i4++;
          i4 += 2;
        } else if (40 !== t5) if (41 !== t5) if (c3 > 0) i4++;
        else if (42 === t5 && i4 + 1 < o && e2.charCodeAt(i4 + 1) === Me) s2 += e2.substring(r3, i4), i4 += 2, r3 = i4, u4 = true;
        else if (t5 === Me && i4 + 1 < o && e2.charCodeAt(i4 + 1) === Me) {
          for (s2 += e2.substring(r3, i4); i4 < o && 10 !== e2.charCodeAt(i4); ) i4++;
          r3 = i4, u4 = true;
        } else 123 === t5 ? a3++ : 125 === t5 && a3--, i4++;
        else c3 > 0 && c3--, i4++;
        else c3++, i4++;
        else i4++;
        else 0 === l4 ? l4 = t5 : l4 === t5 && (l4 = 0), i4++;
      }
      return u4 ? (r3 < o && (s2 += e2.substring(r3)), 0 === a3 ? s2 : et(s2)) : 0 === a3 ? e2 : et(e2);
    }(t3);
    let h3 = compile(l3 || i3 ? l3 + " " + i3 + " { " + d3 + " }" : d3);
    return e.namespace && (h3 = tt(h3, e.namespace)), c2 = [], serialize(h3, a2), c2;
  }, d2 = e;
  let h2 = G;
  for (let e2 = 0; e2 < t2.length; e2++) t2[e2].name || S(15), h2 = F(h2, t2[e2].name);
  return (null == d2 ? void 0 : d2.namespace) && (h2 = F(h2, d2.namespace)), (null == d2 ? void 0 : d2.prefix) && (h2 = F(h2, "p")), u2.hash = h2 !== G ? h2.toString() : "", u2;
}
var ot, st, rt;
const it = new je(), lt = nt();
let ct, at = null, ut = lt;
const dt = p && null !== (rt = null === (st = (ot = t).cache) || void 0 === st ? void 0 : st.call(ot, () => {
  it.names.clear(), it.keyframeIds.clear(), it.clearTag(), at = null;
})) && void 0 !== rt ? rt : null, ht = { shouldForwardProp: void 0, styleSheet: it, stylis: lt, stylisPlugins: void 0 }, pt = p ? { Provider: ({ children: e }) => e, Consumer: ({ children: e }) => e(ht) } : t.createContext(ht);
pt.Consumer;
function mt() {
  return p ? (dt && dt(), at || ht) : t.useContext(pt);
}
function gt(e) {
  var n, o, s;
  if (p) {
    dt && dt();
    const t2 = at || ht, s2 = void 0 !== e.stylisPlugins || void 0 !== e.namespace || void 0 !== e.enableVendorPrefixes;
    s2 && (e.stylisPlugins && e.stylisPlugins !== ct ? (ct = e.stylisPlugins, ut = nt({ options: { namespace: e.namespace, prefix: e.enableVendorPrefixes }, plugins: e.stylisPlugins })) : void 0 === e.namespace && void 0 === e.enableVendorPrefixes || (ut = nt({ options: { namespace: e.namespace, prefix: e.enableVendorPrefixes }, plugins: null !== (n = e.stylisPlugins) && void 0 !== n ? n : t2.stylisPlugins })));
    const r3 = s2 ? void 0 === e.stylisPlugins || e.stylisPlugins.length ? ut : lt : t2.stylis, i3 = "shouldForwardProp" in e ? e.shouldForwardProp : t2.shouldForwardProp, l3 = null !== (o = e.stylisPlugins) && void 0 !== o ? o : t2.stylisPlugins;
    return at = r3 !== lt || i3 ? { shouldForwardProp: i3, styleSheet: it, stylis: r3, stylisPlugins: l3 } : null, e.children;
  }
  const r2 = mt(), { styleSheet: i2 } = r2, l2 = t.useMemo(() => {
    let t2 = i2;
    return e.sheet ? t2 = e.sheet : e.target ? t2 = t2.reconstructWithOptions(void 0 !== e.nonce ? { target: e.target, nonce: e.nonce } : { target: e.target }, false) : void 0 !== e.nonce && (t2 = t2.reconstructWithOptions({ nonce: e.nonce })), e.disableCSSOMInjection && (t2 = t2.reconstructWithOptions({ useCSSOMInjection: false })), t2;
  }, [e.disableCSSOMInjection, e.nonce, e.sheet, e.target, i2]), c2 = t.useMemo(() => {
    var t2;
    return void 0 === e.stylisPlugins && void 0 === e.namespace && void 0 === e.enableVendorPrefixes ? r2.stylis : nt({ options: { namespace: e.namespace, prefix: e.enableVendorPrefixes }, plugins: null !== (t2 = e.stylisPlugins) && void 0 !== t2 ? t2 : r2.stylisPlugins });
  }, [e.enableVendorPrefixes, e.namespace, e.stylisPlugins, r2.stylis, r2.stylisPlugins]), a2 = "shouldForwardProp" in e ? e.shouldForwardProp : r2.shouldForwardProp, u2 = null !== (s = e.stylisPlugins) && void 0 !== s ? s : r2.stylisPlugins, d2 = t.useMemo(() => ({ shouldForwardProp: a2, styleSheet: l2, stylis: c2, stylisPlugins: u2 }), [a2, l2, c2, u2]);
  return t.createElement(pt.Provider, { value: d2 }, e.children);
}
const yt = p ? { Provider: ({ children: e }) => e, Consumer: ({ children: e }) => e(void 0) } : t.createContext(void 0);
yt.Consumer;
const wt = {};
function Nt(e, t2) {
  const n = "string" != typeof e ? "sc" : T(e);
  wt[n] = (wt[n] || 0) + 1;
  const o = n + "-" + W(u + n + wt[n]);
  return t2 ? t2 + "-" + o : o;
}
let Ct;
const Pt = me(() => /* @__PURE__ */ new Set()), Ot = /* @__PURE__ */ new Map();
function Et(e) {
  let t2 = Ot.get(e);
  return t2 || (t2 = new RegExp("\\." + e + "(?![a-zA-Z0-9_-])", "g"), Ot.set(e, t2)), t2;
}
function It(e, t2, n) {
  const o = n.names.get(t2);
  if (o) for (const t3 of o) {
    const n2 = Et(t3);
    n2.lastIndex = 0, e = e.replace(n2, ":where(." + t3 + ")");
  }
  return e;
}
function At(o, s, r2) {
  const i2 = ce(o), c2 = o, a2 = !L(o), { attrs: u2 = x, componentId: h2 = Nt(s.displayName, s.parentComponentId), displayName: f2 = q(o) } = s, m2 = s.displayName && s.componentId ? T(s.displayName) + "-" + s.componentId : s.componentId || h2, g2 = i2 && c2.attrs ? c2.attrs.concat(u2).filter(Boolean) : u2;
  let { shouldForwardProp: y } = s;
  if (i2 && c2.shouldForwardProp) {
    const e = c2.shouldForwardProp;
    if (s.shouldForwardProp) {
      const t2 = s.shouldForwardProp;
      y = (n, o2) => e(n, o2) && t2(n, o2);
    } else y = e;
  }
  const v2 = new Ze(r2, m2, i2 ? c2.componentStyle : void 0);
  function S2(o2, s2) {
    return function(o3, s3, r3) {
      const { attrs: i3, componentStyle: c3, defaultProps: a3, foldedComponentIds: u3, styledComponentId: h3, target: f3 } = o3, m3 = p ? void 0 : t.useContext(yt), g3 = mt(), y2 = o3.shouldForwardProp || g3.shouldForwardProp;
      "production" !== process.env.NODE_ENV && t.useDebugValue && t.useDebugValue(h3);
      const v3 = R(s3, m3, a3) || (p ? void 0 : $);
      let S3, b3;
      S3 = function(e, t2, n) {
        const o4 = Object.assign(Object.assign({}, t2), { className: void 0, theme: n }), s4 = e.length > 1;
        for (let n2 = 0; n2 < e.length; n2++) {
          const r4 = e[n2], i4 = ie(r4) ? r4(s4 ? Object.assign({}, o4) : o4) : r4;
          for (const e2 in i4) "className" === e2 ? o4.className = ae(o4.className, i4[e2]) : "style" === e2 ? o4.style = Object.assign(Object.assign({}, o4.style), i4[e2]) : e2 in t2 && void 0 === t2[e2] || (o4[e2] = i4[e2]);
        }
        return "className" in t2 && "string" == typeof t2.className && (o4.className = ae(o4.className, t2.className)), o4;
      }(i3, s3, v3), b3 = function(e, n, o4, s4) {
        const r4 = e.generateAndInjectStyles(n, o4, s4);
        return "production" !== process.env.NODE_ENV && t.useDebugValue && t.useDebugValue(r4), r4;
      }(c3, S3, g3.styleSheet, g3.stylis), "production" !== process.env.NODE_ENV && o3.warnTooManyClasses && o3.warnTooManyClasses(b3);
      const w2 = S3.as || f3, N2 = function(t2, n, o4, s4) {
        const r4 = {};
        for (const i4 in t2) void 0 === t2[i4] || "$" === i4[0] || "as" === i4 || "theme" === i4 && t2.theme === o4 || ("forwardedAs" === i4 ? r4.as = t2.forwardedAs : s4 && !s4(i4, n) || (r4[i4] = t2[i4], s4 || "development" !== process.env.NODE_ENV || isPropValid(i4) || (Ct || (Ct = /* @__PURE__ */ new Set())).has(i4) || !L(n) || n.includes("-") || (Ct.add(i4), console.warn(`styled-components: it looks like an unknown prop "${i4}" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via \`<StyleSheetManager shouldForwardProp={...}>\` (connect an API like \`@emotion/is-prop-valid\`) or consider using transient props (\`$\` prefix for automatic filtering.)`))));
        return r4;
      }(S3, w2, v3, y2);
      let C2 = ae(u3, h3);
      b3 && (C2 += " " + b3), S3.className && (C2 += " " + S3.className), N2[L(w2) && w2.includes("-") ? "class" : "className"] = C2, r3 && (N2.ref = r3);
      const O2 = createElement(w2, N2);
      if (p) {
        const e = Pt ? Pt() : null;
        let n = null, o4 = 0, s4 = "", r4 = true, i4 = c3;
        for (; i4; ) {
          const t2 = g3.styleSheet.names.get(i4.componentId);
          if (t2) {
            o4 += t2.size;
            for (const o5 of t2) e && e.has(o5) || (n || (n = []), n.push(o5), e && e.add(o5));
          }
          if (n && r4) {
            let e2 = Xe(i4, g3.styleSheet);
            null === e2 ? r4 = false : (i4 !== c3 && (e2 = It(e2, i4.componentId, g3.styleSheet)), s4 = e2 + s4);
          }
          i4 = i4.baseStyle;
        }
        if (n && !r4) {
          s4 = "";
          const e2 = g3.styleSheet.getTag();
          let t2 = c3;
          for (; t2; ) {
            let n2 = e2.getGroup(P(t2.componentId));
            n2 && t2 !== c3 && (n2 = It(n2, t2.componentId, g3.styleSheet)), s4 = n2 + s4, t2 = t2.baseStyle;
          }
        }
        let a4 = "";
        if (g3.styleSheet.keyframeIds.size > 0) {
          const t2 = g3.styleSheet.getTag();
          for (const n2 of g3.styleSheet.keyframeIds) {
            if (e && e.has(n2)) continue;
            const o5 = t2.getGroup(P(n2));
            o5 && (a4 += o5, e && e.add(n2));
          }
        }
        if (s4 && e && n && n.length < o4) {
          const e2 = s4.split(d);
          let t2 = "";
          for (let o5 = 0; o5 < e2.length; o5++) {
            const s5 = e2[o5];
            if (s5) for (let e3 = 0; e3 < n.length; e3++) {
              const o6 = Et(n[e3]);
              if (o6.lastIndex = 0, o6.test(s5)) {
                t2 += s5 + d;
                break;
              }
            }
          }
          s4 = t2;
        }
        const u4 = he(a4 + s4);
        if (u4) {
          const e2 = t.createElement("style", { [l]: "", key: "sc-" + c3.componentId, children: u4 });
          return t.createElement(t.Fragment, null, e2, O2);
        }
      }
      return O2;
    }(b2, o2, s2);
  }
  S2.displayName = f2;
  let b2 = t.forwardRef(S2);
  return b2.attrs = g2, b2.componentStyle = v2, b2.displayName = f2, b2.shouldForwardProp = y, b2.foldedComponentIds = i2 ? ae(c2.foldedComponentIds, c2.styledComponentId) : "", b2.styledComponentId = m2, b2.target = i2 ? c2.target : o, Object.defineProperty(b2, "defaultProps", { get() {
    return this._foldedDefaultProps;
  }, set(e) {
    this._foldedDefaultProps = i2 ? function(e2, ...t2) {
      for (const n of t2) fe(e2, n, true);
      return e2;
    }({}, c2.defaultProps, e) : e;
  } }), "production" !== process.env.NODE_ENV && (_(f2, m2), b2.warnTooManyClasses = /* @__PURE__ */ ((e, t2) => {
    let n = {}, o2 = false;
    return (s2) => {
      !o2 && (n[s2] = true, Object.keys(n).length >= 200) && (console.warn(`Over 200 classes were generated for component ${e}${t2 ? ` with the id of "${t2}"` : ""}.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), o2 = true, n = {});
    };
  })(f2, m2)), ge(b2, () => `.${b2.styledComponentId}`), a2 && re(b2, o, { attrs: true, componentStyle: true, displayName: true, foldedComponentIds: true, shouldForwardProp: true, styledComponentId: true, target: true }), b2;
}
var _t = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "blockquote", "body", "button", "br", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "menu", "meter", "nav", "object", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "slot", "small", "span", "strong", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "switch", "symbol", "text", "textPath", "tspan", "use"]);
function xt(e, t2) {
  const n = [e[0]];
  for (let o = 0, s = t2.length; o < s; o += 1) n.push(t2[o], e[o + 1]);
  return n;
}
const $t = (e) => (ke.add(e), e);
function Rt(e, ...t2) {
  if (ie(e) || pe(e)) return $t(Ye(xt(x, [e, ...t2])));
  const n = e;
  return 0 === t2.length && 1 === n.length && "string" == typeof n[0] ? Ye(n) : $t(Ye(xt(n, t2)));
}
function jt(e, t2, n = $) {
  if (!t2) throw S(1, t2);
  const o = (o2, ...s) => e(t2, n, Rt(o2, ...s));
  return o.attrs = (o2) => jt(e, t2, Object.assign(Object.assign({}, n), { attrs: Array.prototype.concat(n.attrs, o2).filter(Boolean) })), o.withConfig = (o2) => jt(e, t2, Object.assign(Object.assign({}, n), o2)), o;
}
const kt = (e) => jt(At, e), Tt = kt;
_t.forEach((e) => {
  Tt[e] = kt(e);
});
me(() => /* @__PURE__ */ new Set());
const Yt = /^\s*<\/[a-z]/i;
class Ut {
  constructor({ nonce: e } = {}) {
    this._emitSheetCSS = () => {
      const e2 = this.instance.toString();
      if (!e2) return "";
      const t2 = this.instance.options.nonce || Ee();
      return `<style ${ue([t2 && `nonce="${t2}"`, `${l}="true"`, `${a}="${u}"`].filter(Boolean), " ")}>${e2}</style>`;
    }, this.getStyleTags = () => {
      if (this.sealed) throw S(2);
      return this._emitSheetCSS();
    }, this.getStyleElement = () => {
      if (this.sealed) throw S(2);
      const e2 = this.instance.toString();
      if (!e2) return [];
      const n = { [l]: "", [a]: u, dangerouslySetInnerHTML: { __html: e2 } }, o = this.instance.options.nonce || Ee();
      return o && (n.nonce = o), [t.createElement("style", Object.assign({}, n, { key: "sc-0-0" }))];
    }, this.seal = () => {
      this.sealed = true;
    }, this.instance = new je({ isServer: true, nonce: e }), this.sealed = false;
  }
  collectStyles(e) {
    if (this.sealed) throw S(2);
    return t.createElement(gt, { sheet: this.instance }, e);
  }
  interleaveWithNodeStream(e) {
    if (this.sealed) throw S(2);
    this.seal();
    const { Transform: t2 } = require("stream"), { instance: n, _emitSheetCSS: o } = this, s = new t2({ transform: function(e2, t3, s2) {
      const r2 = e2.toString(), i2 = o();
      if (n.clearTag(), Yt.test(r2)) {
        const e3 = r2.indexOf(">") + 1, t4 = r2.slice(0, e3), n2 = r2.slice(e3);
        this.push(t4 + i2 + n2);
      } else this.push(i2 + r2);
      s2();
    } });
    if ("on" in e && "function" == typeof e.on && "pipe" in e) {
      const t3 = e;
      return t3.on("error", (e2) => {
        s.emit("error", e2);
      }), t3.pipe(s);
    }
    if ("pipe" in e && "function" == typeof e.pipe) return e.pipe(s);
    throw new Error("Unsupported stream type");
  }
}
"production" !== process.env.NODE_ENV && "undefined" != typeof navigator && "ReactNative" === navigator.product && console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://styled-components.com/docs/basics#react-native");
const Xt = `__sc-${l}__`;
"production" !== process.env.NODE_ENV && "test" !== process.env.NODE_ENV && "undefined" != typeof window && (window[Xt] || (window[Xt] = 0), 1 === window[Xt] && console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://styled-components.com/docs/faqs#why-am-i-getting-a-warning-about-several-instances-of-module-on-the-page for more info."), window[Xt] += 1);
function Section({ children, className }) {
  return /* @__PURE__ */ jsx("section", { className, children });
}
function SectionTitle({ children, className }) {
  return /* @__PURE__ */ jsx("h2", { className, children });
}
function formatDate(date) {
  if (!date) return "";
  const [year, month] = date.split("-");
  if (!month) return year;
  const parsed = new Date(Date.UTC(Number(year), Number(month) - 1, 1));
  return new Intl.DateTimeFormat("en", {
    month: "short",
    year: "numeric",
    timeZone: "UTC"
  }).format(parsed);
}
function DateRange({ startDate, endDate }) {
  const start = formatDate(startDate);
  const end = endDate ? formatDate(endDate) : "Present";
  if (!start && !endDate) return null;
  if (!start) return end;
  return `${start} - ${end}`;
}
function ContactInfo({ basics = {}, className }) {
  const items = [
    basics.email && /* @__PURE__ */ jsx("a", { href: `mailto:${basics.email}`, children: basics.email }),
    basics.phone,
    basics.url && /* @__PURE__ */ jsx("a", { href: basics.url, children: basics.url }),
    basics.location && [basics.location.city, basics.location.region, basics.location.countryCode].filter(Boolean).join(", "),
    ...(basics.profiles || []).map(
      (profile) => profile.url ? /* @__PURE__ */ jsx("a", { href: profile.url, children: profile.network || profile.username }) : profile.username || profile.network
    )
  ].filter(Boolean);
  if (!items.length) return null;
  return /* @__PURE__ */ jsx("div", { className, children: items.map((item, index) => /* @__PURE__ */ jsxs(t.Fragment, { children: [
    index > 0 && /* @__PURE__ */ jsx("span", { children: " • " }),
    item
  ] }, index)) });
}
const Layout = Tt.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0;
  background: white;
  font-family: 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    sans-serif;
  color: #1f2937;

  @media print {
    padding: 0;
  }
`;
const ContentWrapper = Tt.div`
  padding: 0 30px 30px 30px;

  @media print {
    padding: 0 20px 20px 20px;
  }
`;
const HeaderSection = Tt.header`
  width: 100%;
  background: linear-gradient(135deg, #0f766e 0%, #0d9488 100%);
  padding: 40px 30px;
  margin-bottom: 30px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 150px;
    height: 150px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 50%;
    transform: translate(30%, -30%);
  }

  @media print {
    padding: 30px 20px;
    background: #0f766e;
  }
`;
const Name = Tt.h1`
  font-size: 2.5rem;
  font-weight: 900;
  color: white;
  margin: 0 0 8px 0;
  letter-spacing: -1px;
  line-height: 1;
  text-transform: uppercase;
  position: relative;
  z-index: 1;

  @media print {
    font-size: 2.1875rem;
  }
`;
const Label = Tt.div`
  font-size: 0.9375rem;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 16px;
  font-weight: 300;
  letter-spacing: 0.25px;
  position: relative;
  z-index: 1;
`;
const StyledContactInfo = Tt(ContactInfo)`
  font-size: 10px;
  position: relative;
  z-index: 1;

  a {
    color: white;
    font-weight: 400;
  }

  span {
    color: rgba(255, 255, 255, 0.9);
  }
`;
const Summary = Tt.p`
  font-size: 11.25px;
  line-height: 1.8;
  color: #374151;
  margin: 0 0 30px 0;
  font-weight: 300;
  max-width: 800px;
`;
const StyledSectionTitle = Tt(SectionTitle)`
  font-size: 8.75px;
  font-weight: 700;
  color: #0f766e;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 30px 0 16px 0;
  padding-bottom: 6px;
  border-bottom: 1.5px solid #0f766e;

  @media print {
    break-after: avoid-page !important;
    page-break-after: avoid !important;
    -webkit-column-break-after: avoid !important;
  }
`;
const ContentBlock = Tt.div`
  margin-bottom: 14px;
  background: #fafafa;
  padding: 8px 16px;
  border-radius: 4px;
  border-left: 2.5px solid #0f766e;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  break-inside: avoid;
  page-break-inside: avoid;

  &:last-child {
    margin-bottom: 0;
  }

  @media print {
    background: white;
    border: 1px solid #e5e7eb;
    padding: 6px 16px;
    break-inside: avoid-page !important;
    break-inside: avoid !important;
    page-break-inside: avoid !important;
    -webkit-column-break-inside: avoid !important;
  }
`;
const WorkHeader = Tt.div`
  margin-bottom: 4px;
`;
const Position = Tt.h3`
  font-size: 13.75px;
  font-weight: 700;
  color: #111827;
  margin: 0 0 4px 0;
  letter-spacing: -0.25px;
`;
const Company = Tt.div`
  font-size: 11.25px;
  color: #0f766e;
  font-weight: 500;
  margin-bottom: 4px;
`;
const DateText = Tt.div`
  font-size: 8.75px;
  color: #6b7280;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;
const WorkSummary = Tt.p`
  margin: 4px 0;
  color: #4b5563;
  line-height: 1.7;
  font-size: 10px;
  font-weight: 300;
`;
const Highlights = Tt.ul`
  margin: 4px 0 0 0;
  padding-left: 12px;
  list-style-type: none;

  li {
    margin: 2px 0;
    color: #374151;
    line-height: 1.7;
    font-weight: 300;
    position: relative;
    padding-left: 4px;
    font-size: 10px;

    &::before {
      content: '▸';
      position: absolute;
      left: -8px;
      color: #0f766e;
      font-weight: 700;
    }
  }
`;
const SkillsGrid = Tt.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  gap: 14px;
`;
const SkillCategory = Tt.div`
  padding: 14px;
  background: white;
  border-radius: 4px;
  border: 1px solid #0f766e;
  transition: transform 0.2s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  break-inside: avoid;
  page-break-inside: avoid;

  @media print {
    break-inside: avoid-page !important;
    break-inside: avoid !important;
    page-break-inside: avoid !important;
    -webkit-column-break-inside: avoid !important;
  }
`;
const SkillName = Tt.h4`
  font-size: 10px;
  font-weight: 700;
  color: #0f766e;
  margin: 0 0 6px 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;
const SkillTags = Tt.div`
  font-size: 8.75px;
  color: #6b7280;
  line-height: 1.6;
  font-weight: 300;
`;
const Institution = Tt.h3`
  font-size: 12.5px;
  font-weight: 700;
  color: #111827;
  margin: 0 0 4px 0;
`;
const Degree = Tt.div`
  font-size: 10px;
  color: #4b5563;
  margin-bottom: 4px;
  font-weight: 400;
`;
const EducationDate = Tt.div`
  font-size: 8.75px;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;
function Header({ basics }) {
  return /* @__PURE__ */ jsxs(HeaderSection, { children: [
    /* @__PURE__ */ jsx(Name, { children: basics.name }),
    basics.label && /* @__PURE__ */ jsx(Label, { children: basics.label }),
    /* @__PURE__ */ jsx(StyledContactInfo, { basics })
  ] });
}
function WorkSection({ work }) {
  if (!work?.length) return null;
  return /* @__PURE__ */ jsxs(Section, { children: [
    /* @__PURE__ */ jsx(StyledSectionTitle, { children: "Experience" }),
    work.map((job, index) => /* @__PURE__ */ jsxs(ContentBlock, { children: [
      /* @__PURE__ */ jsxs(WorkHeader, { children: [
        /* @__PURE__ */ jsx(Position, { children: job.position }),
        job.name && /* @__PURE__ */ jsx(Company, { children: job.name }),
        /* @__PURE__ */ jsx(DateText, { children: /* @__PURE__ */ jsx(DateRange, { startDate: job.startDate, endDate: job.endDate }) })
      ] }),
      job.summary && /* @__PURE__ */ jsx(WorkSummary, { children: job.summary }),
      job.highlights?.length > 0 && /* @__PURE__ */ jsx(Highlights, { children: job.highlights.map((highlight, i2) => /* @__PURE__ */ jsx("li", { children: highlight }, i2)) })
    ] }, index))
  ] });
}
function SkillsSection({ skills }) {
  if (!skills?.length) return null;
  return /* @__PURE__ */ jsxs(Section, { children: [
    /* @__PURE__ */ jsx(StyledSectionTitle, { children: "Skills" }),
    /* @__PURE__ */ jsx(SkillsGrid, { children: skills.map((skill, index) => /* @__PURE__ */ jsxs(SkillCategory, { children: [
      /* @__PURE__ */ jsx(SkillName, { children: skill.name }),
      skill.keywords?.length > 0 && /* @__PURE__ */ jsx(SkillTags, { children: skill.keywords.join(", ") })
    ] }, index)) })
  ] });
}
function EducationSection({ education }) {
  if (!education?.length) return null;
  return /* @__PURE__ */ jsxs(Section, { children: [
    /* @__PURE__ */ jsx(StyledSectionTitle, { children: "Education" }),
    education.map((edu, index) => /* @__PURE__ */ jsxs(ContentBlock, { children: [
      /* @__PURE__ */ jsx(Institution, { children: edu.institution }),
      /* @__PURE__ */ jsxs(Degree, { children: [
        edu.studyType,
        " in ",
        edu.area,
        edu.score && ` • ${edu.score}`
      ] }),
      /* @__PURE__ */ jsx(EducationDate, { children: /* @__PURE__ */ jsx(DateRange, { startDate: edu.startDate, endDate: edu.endDate }) })
    ] }, index))
  ] });
}
function ProjectsSection({ projects }) {
  if (!projects?.length) return null;
  return /* @__PURE__ */ jsxs(Section, { children: [
    /* @__PURE__ */ jsx(StyledSectionTitle, { children: "Projects" }),
    projects.map((project, index) => /* @__PURE__ */ jsxs(ContentBlock, { children: [
      /* @__PURE__ */ jsx(Position, { children: project.name }),
      project.description && /* @__PURE__ */ jsx(WorkSummary, { children: project.description }),
      project.highlights?.length > 0 && /* @__PURE__ */ jsx(Highlights, { children: project.highlights.map((highlight, i2) => /* @__PURE__ */ jsx("li", { children: highlight }, i2)) })
    ] }, index))
  ] });
}
function VolunteerSection({ volunteer }) {
  if (!volunteer?.length) return null;
  return /* @__PURE__ */ jsxs(Section, { children: [
    /* @__PURE__ */ jsx(StyledSectionTitle, { children: "Volunteer" }),
    volunteer.map((vol, index) => /* @__PURE__ */ jsxs(ContentBlock, { children: [
      /* @__PURE__ */ jsxs(WorkHeader, { children: [
        /* @__PURE__ */ jsx(Position, { children: vol.position }),
        vol.organization && /* @__PURE__ */ jsx(Company, { children: vol.organization }),
        (vol.startDate || vol.endDate) && /* @__PURE__ */ jsx(DateText, { children: /* @__PURE__ */ jsx(DateRange, { startDate: vol.startDate, endDate: vol.endDate }) })
      ] }),
      vol.summary && /* @__PURE__ */ jsx(WorkSummary, { children: vol.summary }),
      vol.highlights?.length > 0 && /* @__PURE__ */ jsx(Highlights, { children: vol.highlights.map((highlight, i2) => /* @__PURE__ */ jsx("li", { children: highlight }, i2)) })
    ] }, index))
  ] });
}
function AwardsSection({ awards }) {
  if (!awards?.length) return null;
  return /* @__PURE__ */ jsxs(Section, { children: [
    /* @__PURE__ */ jsx(StyledSectionTitle, { children: "Awards" }),
    awards.map((award, index) => /* @__PURE__ */ jsxs(ContentBlock, { children: [
      /* @__PURE__ */ jsx(Institution, { children: award.title }),
      award.awarder && /* @__PURE__ */ jsxs(Degree, { children: [
        "Awarded by ",
        award.awarder
      ] }),
      award.date && /* @__PURE__ */ jsx(EducationDate, { children: award.date }),
      award.summary && /* @__PURE__ */ jsx(WorkSummary, { children: award.summary })
    ] }, index))
  ] });
}
function CertificatesSection({ certificates }) {
  if (!certificates?.length) return null;
  return /* @__PURE__ */ jsxs(Section, { children: [
    /* @__PURE__ */ jsx(StyledSectionTitle, { children: "Certificates" }),
    certificates.map((cert, index) => /* @__PURE__ */ jsxs(ContentBlock, { children: [
      /* @__PURE__ */ jsx(Institution, { children: cert.name }),
      cert.issuer && /* @__PURE__ */ jsxs(Degree, { children: [
        "Issued by ",
        cert.issuer
      ] }),
      cert.date && /* @__PURE__ */ jsx(EducationDate, { children: cert.date })
    ] }, index))
  ] });
}
function PublicationsSection({ publications }) {
  if (!publications?.length) return null;
  return /* @__PURE__ */ jsxs(Section, { children: [
    /* @__PURE__ */ jsx(StyledSectionTitle, { children: "Publications" }),
    publications.map((pub, index) => /* @__PURE__ */ jsxs(ContentBlock, { children: [
      /* @__PURE__ */ jsx(Institution, { children: pub.name }),
      pub.publisher && /* @__PURE__ */ jsxs(Degree, { children: [
        "Published by ",
        pub.publisher
      ] }),
      pub.releaseDate && /* @__PURE__ */ jsx(EducationDate, { children: pub.releaseDate }),
      pub.summary && /* @__PURE__ */ jsx(WorkSummary, { children: pub.summary })
    ] }, index))
  ] });
}
function LanguagesSection({ languages }) {
  if (!languages?.length) return null;
  return /* @__PURE__ */ jsxs(Section, { children: [
    /* @__PURE__ */ jsx(StyledSectionTitle, { children: "Languages" }),
    /* @__PURE__ */ jsx(SkillsGrid, { children: languages.map((lang, index) => /* @__PURE__ */ jsxs(SkillCategory, { children: [
      /* @__PURE__ */ jsx(SkillName, { children: lang.language }),
      lang.fluency && /* @__PURE__ */ jsx(SkillTags, { children: lang.fluency })
    ] }, index)) })
  ] });
}
function ReferencesSection({ references }) {
  if (!references?.length) return null;
  return /* @__PURE__ */ jsxs(Section, { children: [
    /* @__PURE__ */ jsx(StyledSectionTitle, { children: "References" }),
    references.map((ref, index) => /* @__PURE__ */ jsxs(ContentBlock, { children: [
      /* @__PURE__ */ jsx(Institution, { children: ref.name }),
      ref.reference && /* @__PURE__ */ jsx(WorkSummary, { children: ref.reference })
    ] }, index))
  ] });
}
function Resume({ resume }) {
  const {
    basics = {},
    work = [],
    education = [],
    skills = [],
    projects = [],
    volunteer = [],
    awards = [],
    certificates = [],
    publications = [],
    languages = [],
    references = []
  } = resume;
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(Header, { basics }),
    /* @__PURE__ */ jsxs(ContentWrapper, { children: [
      basics.summary && /* @__PURE__ */ jsx(Summary, { children: basics.summary }),
      /* @__PURE__ */ jsx(WorkSection, { work }),
      /* @__PURE__ */ jsx(SkillsSection, { skills }),
      /* @__PURE__ */ jsx(EducationSection, { education }),
      /* @__PURE__ */ jsx(ProjectsSection, { projects }),
      /* @__PURE__ */ jsx(VolunteerSection, { volunteer }),
      /* @__PURE__ */ jsx(AwardsSection, { awards }),
      /* @__PURE__ */ jsx(CertificatesSection, { certificates }),
      /* @__PURE__ */ jsx(PublicationsSection, { publications }),
      /* @__PURE__ */ jsx(LanguagesSection, { languages }),
      /* @__PURE__ */ jsx(ReferencesSection, { references })
    ] })
  ] });
}
function escapeHtml(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");
}
function renderDocument(element, options = {}) {
  const sheet = new Ut();
  try {
    const body = renderToStaticMarkup(sheet.collectStyles(element));
    const styles = sheet.getStyleTags();
    const fonts = (options.fonts || []).map((href) => `<link rel="stylesheet" href="${escapeHtml(href)}">`).join("\n");
    const title = escapeHtml(options.title || "Resume");
    return `<!doctype html>
<html lang="${escapeHtml(options.lang || "en")}" dir="${escapeHtml(options.dir || "ltr")}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
  ${fonts}
  ${styles}
  ${options.headAfterStyles || ""}
</head>
<body>${body}</body>
</html>`;
  } finally {
    sheet.seal();
  }
}
function render(resume) {
  return renderDocument(/* @__PURE__ */ jsx(Resume, { resume }), {
    fonts: [
      "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;700;900&display=swap"
    ],
    headAfterStyles: `<style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      margin: 0;
      padding: 0;
      background: #f5f5f5;
    }
    @media print {
      body {
        background: white;
      }
      @page {
        margin: 0.5in;
      }
    }
  </style>`,
    lang: "en",
    dir: "ltr",
    title: `${resume.basics?.name || "Resume"} - Resume`,
    includeTokensCss: false
  });
}
export {
  render
};
