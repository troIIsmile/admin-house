import type Bot from '@rbxts/trollsmile'

const Trollsmile = require(5685499094) as typeof Bot

const bot = new Trollsmile({
  prefix: ';',
  permission: 2,
  ranks: {
    Admin: {
      permission: 3,
      gamepass: 14781982
    }
  }
})

bot.commands.set('hello', {
  desc: 'world',
  run: () => 'moller',
  permission: 0
})

declare const script: Script & {
  pt: Part & {
    gui: SurfaceGui & {
      txt: TextLabel
    }
  }
}

for (const [name, command] of bot.commands) {
  const txt = script.pt.Clone()
  txt.Name = name
  txt.gui.txt.Text = `${name} - ${command.desc}`
}
