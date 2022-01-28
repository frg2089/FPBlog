module.exports = {
  parserPreset: {
    parserOpts: {
      headerPattern: /^(?<type>.*\s\w*)(?:\((?<scope>.*)\))?!?:\s(?<subject>(?:(?!#).)*(?:(?!\s).))$/
    },
    headerCorrespondence: ['type', 'ticket', 'subject']
  },
  rules: {
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [2, 'always'],
    'header-max-length': [2, 'always', 72],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
    'subject-empty': [2, 'never'],
    'subject-exclamation-mark': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [2, 'always', [
      ':tada: init',
      ':new: feature',
      ':bookmark: release',
      ':bookmark: tag',
      ':bug: fix',
      ':ambulance: fix',
      ':globe_with_meridians: i18n',
      ':lipstick:',
      ':clapper:',
      ':rotating_light:',
      ':wrench: conf',
      ':heavy_plus_sign: deps',
      ':heavy_minus_sign: deps',
      ':arrow_up: deps',
      ':arrow_down: deps',
      ':zap:',
      ':chart_with_upwards_trend:',
      ':rocket:',
      ':white_check_mark:',
      ':memo:',
      ':hammer:',
      ':art:',
      ':fire:',
      ':pencil2: typo',
      ':construction:',
      ':wastebasket: drop',
      ':wheelchair:',
      ':construction_worker: ci',
      ':green_heart: ci',
      ':lock:',
      ':whale:',
      ':apple: fix',
      ':penguin: fix',
      ':checkered_flag: fix',
      ':twisted_rightwards_arrows: merge'
    ]]
  }
}
