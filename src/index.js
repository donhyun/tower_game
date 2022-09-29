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
peeps[12]='Leah,Ashley,Hika';
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
peeps[60]='Larsen';
peeps[61]='Matthew';
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

const pimgs = [];
pimgs[0]='peep0.png'
pimgs[1]='peep1.png'
pimgs[2]='peep2.png'
pimgs[3]='peep3.png'
pimgs[4]='peep4.png'
pimgs[5]='peep5.png'
pimgs[6]='peep6.png'
pimgs[7]='peep7.png'
pimgs[8]='peep8.png'
pimgs[9]='peep9.png'
pimgs[10]='peep10.png'
pimgs[11]='peep11.png'
pimgs[12]='peep12.png'
pimgs[13]='peep13.png'
pimgs[14]='peep14.png'
pimgs[15]='peep15.png'
pimgs[16]='peep16.png'
pimgs[17]='peep17.png'
pimgs[18]='peep18.png'
pimgs[19]='peep19.png'
pimgs[20]='peep20.png'
pimgs[21]='peep21.png'
pimgs[22]='peep22.png'
pimgs[23]='peep23.png'
pimgs[24]='peep24.png'
pimgs[25]='peep25.png'
pimgs[26]='peep26.png'
pimgs[27]='peep27.png'
pimgs[28]='peep28.png'
pimgs[29]='peep29.png'
pimgs[30]='peep30.png'
pimgs[31]='peep31.png'
pimgs[32]='peep32.png'
pimgs[33]='peep33.png'
pimgs[34]='peep34.png'
pimgs[35]='peep35.png'
pimgs[36]='peep36.png'
pimgs[37]='peep37.png'
pimgs[38]='peep38.png'
pimgs[39]='peep39.png'
pimgs[40]='peep40.png'
pimgs[41]='peep41.png'
pimgs[42]='peep42.png'
pimgs[43]='peep43.png'
pimgs[44]='peep44.png'
pimgs[45]='peep45.png'
pimgs[46]='peep46.png'
pimgs[47]='peep47.png'
pimgs[48]='peep48.png'
pimgs[49]='peep49.png'
pimgs[50]='peep50.png'
pimgs[51]='peep51.png'
pimgs[52]='peep52.png'
pimgs[53]='peep53.png'
pimgs[54]='peep54.png'
pimgs[55]='peep55.png'
pimgs[56]='peep56.png'
pimgs[57]='peep57.png'
pimgs[58]='peep58.png'
pimgs[59]='peep59.png'
pimgs[60]='peep60.png'
pimgs[61]='peep61.png'
pimgs[62]='peep62.png'
pimgs[63]='peep63.png'
pimgs[64]='peep64.png'
pimgs[65]='peep65.png'
pimgs[66]='peep66.png'
pimgs[67]='peep67.png'
pimgs[68]='peep68.png'
pimgs[69]='peep69.png'
pimgs[70]='peep70.png'
pimgs[71]='peep71.png'
pimgs[72]='peep72.png'
pimgs[73]='peep73.png'
pimgs[74]='peep74.png'
pimgs[75]='peep75.png'
pimgs[76]='peep76.png'
pimgs[77]='peep77.png'
pimgs[78]='peep78.png'
pimgs[79]='peep79.png'
pimgs[80]='peep80.png'
pimgs[81]='peep81.png'
pimgs[82]='peep82.png'
pimgs[83]='peep83.png'
pimgs[84]='peep84.png'
pimgs[85]='peep85.png'
pimgs[86]='peep86.png'
pimgs[87]='peep87.png'
pimgs[88]='peep88.png'
pimgs[89]='peep89.png'
pimgs[90]='peep90.png'
pimgs[91]='peep91.png'
pimgs[92]='peep92.png'
pimgs[93]='peep93.png'
pimgs[94]='peep94.png'
pimgs[95]='peep95.png'
pimgs[96]='peep96.png'
pimgs[97]='peep97.png'
pimgs[98]='peep98.png'
pimgs[99]='peep99.png'
pimgs[100]='peep100.png'
pimgs[101]='peep101.png'
pimgs[102]='peep102.png'
pimgs[103]='peep103.png'
pimgs[104]='peep104.png'

let i=0;
while (peeps.length > 0){
  const index = Math.floor(Math.random() * peeps.length) 
  game.mixedpeeps[i] = peeps[index];
  game.addImg('peep'+i, pathGenerator(pimgs[index]))
  peeps.splice(index, 1);
  pimgs.splice(index,1);
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
