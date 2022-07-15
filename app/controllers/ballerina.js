import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class BallerinaController extends Controller {
  @service('global') globalService;

  circleList = [
    { "x": 83, "y": 150, "id": 1 },
    { "x": 83, "y": 235, "id": 2 },
    { "x": 164, "y": 167, "id": 3 },
    { "x": 147, "y": 85, "id": 4 },
    { "x": 222, "y": 74, "id": 5 },
    { "x": 286, "y": 78, "id": 6 },
    { "x": 335, "y": 111, "id": 7 },
    { "x": 247, "y": 237, "id": 8 },
    { "x": 411, "y": 224, "id": 9 },
    { "x": 500, "y": 53, "id": 10 },
    { "x": 457, "y": 150, "id": 11 },
    { "x": 522, "y": 162, "id": 12 }
  ]

  @action
  colorMe() {
    for (var i = 0; i < this.circleList.length; i++) {
      var currentCircle = this.circleList[i];
      if( event.layerX < currentCircle.x + 20 && event.layerX > currentCircle.x - 20 &&
        event.layerY < currentCircle.y + 20 && event.layerY > currentCircle.y - 20) {
        const canvas = document.getElementById('peintureCanvas');
        const context = canvas.getContext('2d');
        context.beginPath();
        context.arc(currentCircle.x, currentCircle.y, 20, 0, 2 * Math.PI, false);
        context.fillStyle = 'red';
        context.fill();
      }
    }
  }

  @action
  resetCircle() {
    const canvas = document.getElementById('peintureCanvas');
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  @action
  verify() {
    this.set('isMachineSuccess', true);
    this.set('isMachineError', false);
  }

  @action
  back() {
    this.set('isMachineError', false);
    this.set('isMachineSuccess', false);
    this.set('answer', null);
    this.replaceRoute(this.globalService.currentUnlock);
  }
}