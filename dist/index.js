"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.icon = icon;
Object.defineProperty(exports, "socials", {
  enumerable: true,
  get: function get() {
    return _social.default;
  }
});
exports.default = exports.location = exports.religion = exports.sex = exports.age = exports.birthday = exports.name = void 0;

var _md = _interopRequireDefault(require("md5"));

var _queryString = _interopRequireDefault(require("query-string"));

var _ager = _interopRequireDefault(require("ager"));

var _social = _interopRequireDefault(require("./social"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = 'SnO2WMaN';
exports.name = name;

function icon() {
  var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return "//www.gravatar.com/avatar/".concat((0, _md.default)(_social.default.email), "?").concat(_queryString.default.stringify(option));
}

var birthday = new Date(2001, 5, 22);
exports.birthday = birthday;
var age = (0, _ager.default)(birthday);
exports.age = age;
var sex = 1;
exports.sex = sex;
var religion = 'Pastafarianism';
exports.religion = religion;
var location = 'Japan, Nagoya';
exports.location = location;
var _default = {
  name: name,
  icon: icon,
  birthday: birthday,
  age: age,
  socials: _social.default,
  sex: sex,
  religion: religion,
  location: location
};
exports.default = _default;