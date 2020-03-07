const ager = require("ager")
const chalk = require("chalk")
const { Box, Text } = require("ink")
const Gradient = require("ink-gradient")
const SelectInput = require("ink-select-input").default
const open = require("open")
const React = require("react")

const font = [
  "░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░",
  "░░██████████████████║░██████████║░░░░░░░░░██║░░░░░██║░██████████║░░░░░░░░░██████║░██║░░",
  "░░██║░░░░░░░░░░░░░░░░░██║░░░░░██║░░░░░░░░░██║░░░░░██║░██║░██║░██║░░░░░░░░░██║░██║░██║░░",
  "░░██████████║░██████║░██║░░░░░██║░██████║░██║░██║░██║░██║░██║░██║░██████║░██║░██║░██║░░",
  "░░░░░░░░░░██║░██║░██║░██║░░░░░██║░░░░░██║░██║░██║░██║░██║░██║░██║░░░░░██║░██║░██║░██║░░",
  "░░░░░░░░░░██║░██║░██║░██║░░░░░██║░██████║░██║░██║░██║░██║░██║░██║░██████║░██║░██║░██║░░",
  "░░░░░░░░░░██║░██║░██║░██║░░░░░██║░██║░░░░░██║░██║░██║░██║░░░░░██║░██║░██║░██║░██║░██║░░",
  "░░██████████║░██║░██║░██████████║░██████║░██████████║░██║░░░░░██║░██████║░██║░██████║░░",
  "░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░",
]

const popups = [
  chalk.italic`楽園の素敵なフロントエンジニア`,
  chalk.italic`オタク`,
  chalk.italic`ナード`,
  chalk.italic`ギーク`,
  chalk.italic`ツイッターのオタク`,
  chalk.italic`逆張りオタク`,
  "┗(^o^ )┓三",
  "＼(^o^)／",
  "ｷﾀ――(ﾟ∀ﾟ)――!!",
  chalk.blue`#駆け出しエンジニア`,
]

const links = {
  "sno2wman.dev": { icon: "📜", link: "https://sno2wman.dev/" },
  "Twitter": { icon: "🐦", link: "https://twitter.com/SnO2WMaN" },
  "Github": { icon: "💻", link: "https://github.com/SnO2WMaN" },
  "Qiita": { icon: "📝", link: "https://qiita.com/SnO2WMaN" },
  "Ko-fi": { icon: "☕️", link: "https://ko-fi.com/sno2wman" },
  "Speaker Deck": { icon: "📢", link: "https://speakerdeck.com/sno2wman" },
  "Keybase": { icon: "🔑", link: "https://keybase.io/sno2wman" },
  "Steam": { icon: "🎮", link: "https://steamcommunity.com/id/SnO2WMaN" },
  "Bookmeter": {
    icon: "📖",
    link: "https://bookmeter.com/users/1011664",
  },
  "Annict": {
    icon: "📺",
    link: "https://annict.jp/@SnO2WMaN",
  },
}
const linkItems = Object.entries(links).map(([key, { icon, link }]) => ({
  label: [icon, " ".repeat(2), key].join(""),
  value: link,
}))
const handleSelect = ({ value }) => open(value)

const profile = [
  {
    label: "Avatar",
    value: "SnO2WMaN",
  },
  {
    label: "Religion",
    value: "Pastafarianism",
  },
  {
    label: "Birthday",
    value: "2001/06/22",
  },
  {
    label: "Age",
    value: ager(new Date(2001, 5, 22)),
  },
]
const longestProfileLabel = profile.reduce(
  (p, c) => Math.max(p, c.label.length),
  0
)

const ui = () => (
  <Box width="100%" justifyContent="center" paddingY={2}>
    <Box
      flexDirection="column"
      alignItems="center"
      width={font.reduce((p, c) => Math.max(p, c.length), 0)}
    >
      <Box marginBottom={2}>
        <Text>
          <Gradient name="atlas">{font.join("\n")}</Gradient>
        </Text>
      </Box>
      <Box marginBottom={1}>
        <Text>～ {popups[Math.floor(Math.random() * popups.length)]} ～</Text>
      </Box>
      <Box flexDirection="row" width="100%">
        <Box flexGrow={2}>
          <SelectInput items={linkItems} onSelect={handleSelect} />
        </Box>
        <Box marginLeft={2} flexDirection="column">
          {profile.map(({ label, value }, i) => (
            <Text key={i}>
              {[
                chalk.cyan.italic(label),
                " ".repeat(longestProfileLabel - label.length),
                " │ ",
                chalk.bold(value),
              ].join("")}
            </Text>
          ))}
        </Box>
      </Box>
      <Box marginTop={1}>
        <Text>{chalk.green`Exit`} Ctrl + C</Text>
      </Box>
    </Box>
  </Box>
)

module.exports = ui
