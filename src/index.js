import { Engine, Instance } from 'cooljs'
import { touchEventHandler } from './utils'
import { background } from './background'
import { lineAction, linePainter } from './line'
import { cloudAction, cloudPainter } from './cloud'
import { hookAction, hookPainter } from './hook'
import { tutorialAction, tutorialPainter } from './tutorial'
import * as constant from './constant'
import { startAnimate, endAnimate } from './animateFuncs'

window.TowerGame = (option = {}) => {
  const {
    width,
    height,
    canvasId,
    soundOn
  } = option
  const game = new Engine({
    canvasId,
    highResolution: true,
    width,
    height,
    soundOn
  })
  const pathGenerator = (path) => `./assets/${path}`

const peeps = [];
peeps[0]='Abel';
peeps[1]='Aiden';
peeps[2]='Aimee';
peeps[3]='Alex';
peeps[4]='Alexis';
peeps[5]='Amanuel';
peeps[6]='Andrew';
peeps[7]='Andrew';
peeps[8]='Andrii';
peeps[9]='Anshu';
peeps[10]='Anton';
peeps[11]='Arian';
peeps[12]='Ashley';
peeps[13]='August';
peeps[14]='Austin';
peeps[15]='Avalyn';
peeps[16]='Besufekad';
peeps[17]='Bixby';
peeps[18]='Carson';
peeps[19]='Cecelia Rose';
peeps[20]='Charles';
peeps[21]='Charles';
peeps[22]='Clover';
peeps[23]='Cole';
peeps[24]='Colin';
peeps[25]='Corin';
peeps[26]='David';
peeps[27]='Derek';
peeps[28]='Dylan';
peeps[29]='Dylan';
peeps[30]='Ej';
peeps[31]='Elijah';
peeps[32]='Emilie';
peeps[33]='Enbry';
peeps[34]='Finn';
peeps[35]='Francisco';
peeps[36]='Frenki';
peeps[37]='Gabe';
peeps[38]='Gavin';
peeps[39]='Guillermo';
peeps[40]='Habon';
peeps[41]='Hannah';
peeps[42]='Hayat';
peeps[43]='Hika';
peeps[44]='Himnish';
peeps[45]='Holland';
peeps[46]='Isaiah';
peeps[47]='Isaiah';
peeps[48]='Jacob';
peeps[49]='James';
peeps[50]='Japheth';
peeps[51]='Jaxon';
peeps[52]='Jeremy';
peeps[53]='Jonathan';
peeps[54]='Josh';
peeps[55]='Kalkidan';
peeps[56]='Katelyn';
peeps[57]='Katie';
peeps[58]='Kenji';
peeps[59]='Kenneth';
peeps[60]='Larsen Matthew';
peeps[61]='Leah,Ashley,Hika';
peeps[62]='Leonardo';
peeps[63]='Liam';
peeps[64]='Lily';
peeps[65]='Luca';
peeps[66]='Luis';
peeps[67]='Luis';
peeps[68]='Madelyn';
peeps[69]='Mai';
peeps[70]='Marcos';
peeps[71]='Md Nazmul';
peeps[72]='Mektub';
peeps[73]='Mercedes';
peeps[74]='Mia';
peeps[75]='Miles';
peeps[76]='Nafiur';
peeps[77]='Natan';
peeps[78]='Natasha';
peeps[79]='Oliver';
peeps[80]='Otto';
peeps[81]='Owen';
peeps[82]='Preston';
peeps[83]='Quang-Hy';
peeps[84]='Roel';
peeps[85]='Ron';
peeps[86]='Rosa';
peeps[87]='Ryan';
peeps[88]='Sal';
peeps[89]='Sally';
peeps[90]='Sam';
peeps[91]='Sashti';
peeps[92]='Sequoia';
peeps[93]='Serena';
peeps[94]='Siri';
peeps[95]='Sydney';
peeps[96]='Theliza';
peeps[97]='Tiffany';
peeps[98]='Tram-Anh';
peeps[99]='Tyler';
peeps[100]='Van';
peeps[101]='Victor';
peeps[102]='Walter';
peeps[103]='William';
peeps[104]='Yonatan';


let i=0;
while (peeps.length > 0){
  const index = Math.floor(Math.random() * peeps.length) 
  game.mixedpeeps[i] = peeps[index];
  game.addImg('peep'+i, pathGenerator('peep' + index + '.png'))
  //loadPeepImg(i, index)
  peeps.splice(index, 1);
  i++;
}

/*
  for (let i=0; i<=3; i+=1){
    game.addImg('block'+i, pathGenerator('block' + i + '.png'));
  }
*/
  game.addImg('background', pathGenerator('background.png'))
  game.addImg('hook', pathGenerator('hook.png'))
  game.addImg('blockRope', pathGenerator('block-rope.png'))
  game.addImg('block', pathGenerator('block.png'))
  game.addImg('block-perfect', pathGenerator('block-perfect.png'))
  for (let i = 1; i <= 8; i += 1) {
    game.addImg(`c${i}`, pathGenerator(`c${i}.png`))
  }
  game.addLayer(constant.flightLayer)
  for (let i = 1; i <= 7; i += 1) {
    game.addImg(`f${i}`, pathGenerator(`f${i}.png`))
  }
  game.swapLayer(0, 1)
  game.addImg('tutorial', pathGenerator('tutorial.png'))
  game.addImg('tutorial-arrow', pathGenerator('tutorial-arrow.png'))
  game.addImg('heart', pathGenerator('heart.png'))
  game.addImg('score', pathGenerator('score.png'))
  game.addAudio('drop-perfect', pathGenerator('drop-perfect.mp3'))
  game.addAudio('drop', pathGenerator('drop.mp3'))
  game.addAudio('game-over', pathGenerator('game-over.mp3'))
  game.addAudio('rotate', pathGenerator('rotate.mp3'))
  game.addAudio('bgm', pathGenerator('bgm.mp3'))
  game.setVariable(constant.blockWidth, game.width * 0.25)
  game.setVariable(constant.blockHeight, game.getVariable(constant.blockWidth) * 0.71)
  game.setVariable(constant.cloudSize, game.width * 0.3)
  game.setVariable(constant.ropeHeight, game.height * 0.4)
  game.setVariable(constant.blockCount, 0)
  game.setVariable(constant.successCount, 0)
  game.setVariable(constant.failedCount, 0)
  game.setVariable(constant.gameScore, 0)
  game.setVariable(constant.hardMode, false)
  game.setVariable(constant.gameUserOption, option)
  for (let i = 1; i <= 4; i += 1) {
    const cloud = new Instance({
      name: `cloud_${i}`,
      action: cloudAction,
      painter: cloudPainter
    })
    cloud.index = i
    cloud.count = 5 - i
    game.addInstance(cloud)
  }
  const line = new Instance({
    name: 'line',
    action: lineAction,
    painter: linePainter
  })
  game.addInstance(line)
  const hook = new Instance({
    name: 'hook',
    action: hookAction,
    painter: hookPainter
  })
  game.addInstance(hook)

  game.startAnimate = startAnimate
  game.endAnimate = endAnimate
  game.paintUnderInstance = background
  game.addKeyDownListener('enter', () => {
    if (game.debug) game.togglePaused()
  })
  game.touchStartListener = () => {
    touchEventHandler(game)
  }

  game.playBgm = () => {
    game.playAudio('bgm', true)
  }

  game.pauseBgm = () => {
    game.pauseAudio('bgm')
  }

  game.start = () => {
    const tutorial = new Instance({
      name: 'tutorial',
      action: tutorialAction,
      painter: tutorialPainter
    })
    game.addInstance(tutorial)
    const tutorialArrow = new Instance({
      name: 'tutorial-arrow',
      action: tutorialAction,
      painter: tutorialPainter
    })
    game.addInstance(tutorialArrow)
    game.setTimeMovement(constant.bgInitMovement, 500)
    game.setTimeMovement(constant.tutorialMovement, 500)
    game.setVariable(constant.gameStartNow, true)
  }

  return game
}
