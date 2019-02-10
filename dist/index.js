"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.icon = icon;
exports.default = exports.socials = exports.location = exports.religion = exports.sex = exports.age = exports.birthday = exports.name = void 0;

var _gravatar = _interopRequireDefault(require("gravatar"));

var _ager = _interopRequireDefault(require("ager"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = 'SnO2WMaN';
exports.name = name;
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
var socials = {
  twitter: 'https://twitter.com/SnO2WMaN',
  github: 'https://github.com/SnO2WMaN',
  spotify: 'https://open.spotify.com/user/sno2wman',
  qiita: 'https://qiita.com/SnO2WMaN',
  amazon: 'https://www.amazon.co.jp/gp/profile/amzn1.account.AGNQ2CQRCY4BH6NT5KPADJFX4KKA',
  tumblr: 'https://sno2wman.tumblr.com',
  steam: 'https://steamcommunity.com/id/SnO2WMaN',
  discord: 'SnO2WMaN#9459',
  soundcloud: 'https://soundcloud.com/sno2wman',
  patreon: 'https://www.patreon.com/SnO2WMaN',
  email: 'sno2wman.official@gmail.com',
  website: 'https://sno2wman.graphics',
  annict: 'https://annict.jp/@SnO2WMaN',
  hatena: 'https://profile.hatena.ne.jp/SnO2WMaN/'
};
exports.socials = socials;

function icon() {
  var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _gravatar.default.url(socials.email, option);
}

var _default = {
  name: name,
  icon: icon,
  birthday: birthday,
  age: age,
  socials: socials,
  sex: sex,
  religion: religion,
  location: location
};
exports.default = _default;