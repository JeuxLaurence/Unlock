import { helper } from '@ember/component/helper';

function timer([time]) {
  var minutes = Math.floor(time / 60);
  var seconds = time - minutes * 60;
  return minutes + ' minutes ' + seconds + ' secondes';
}

export default helper(timer);
