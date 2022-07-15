import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class BallerinaController extends Controller {
  @service('global') globalService;

  circleList = [
    { "id": 0 },
    { "x": 83, "y": 150, "id": 1, "red": false },
    { "x": 83, "y": 235, "id": 2, "red": false },
    { "x": 164, "y": 167, "id": 3, "red": false },
    { "x": 147, "y": 85, "id": 4, "red": false },
    { "x": 222, "y": 74, "id": 5, "red": false },
    { "x": 286, "y": 78, "id": 6, "red": false },
    { "x": 335, "y": 111, "id": 7, "red": false },
    { "x": 247, "y": 237, "id": 8, "red": false },
    { "x": 411, "y": 224, "id": 9, "red": false },
    { "x": 500, "y": 53, "id": 10, "red": false },
    { "x": 457, "y": 150, "id": 11, "red": false },
    { "x": 522, "y": 162, "id": 12, "red": false },
    { "id": 13 }
  ]

  latestRed = 0;

  connectionData = [
    [1], // First yellow
    [0,2,3], // 1
    [1,3], // 2
    [1,2,5,7], //3
    [5,9], //4
    [3,4,6,8], //5
    [5,7,8], //6
    [3,8,10], //7
    [5,6], //8
    [4,12], //9
    [7,12], //10
    [10,12,13], //11
    [9,10,11] //12
  ]

  @action
  colorMe() {
    for (var i = 0; i < this.circleList.length; i++) {
      var currentCircle = this.circleList[i];
      // Check to see if a circle was clicked
      if( event.layerX < currentCircle.x + 20 && event.layerX > currentCircle.x - 20 &&
        event.layerY < currentCircle.y + 20 && event.layerY > currentCircle.y - 20) {
        // Check to see if already red
        if( currentCircle.red == true) {
          return;
        }
        // Check to see if it's a connecting circle
        var foundConnectedRed = false;
        for(var j = 0; j < this.connectionData[currentCircle.id].length; j++) {
          var check = this.connectionData[currentCircle.id][j];
            if( this.circleList[check].id == this.latestRed) {
            foundConnectedRed = true;
          }
        }
        if( foundConnectedRed ) {
          const canvas = document.getElementById('peintureCanvas');
          const context = canvas.getContext('2d');
          context.beginPath();
          context.arc(currentCircle.x, currentCircle.y, 20, 0, 2 * Math.PI, false);
          context.fillStyle = 'red';
          context.fill();
          this.latestRed = currentCircle.id;
          currentCircle.red = true;

          // Check if all red (success)
          var success = this.circleList.slice(1,13).every(function(element) {
            return element.red == true
          })
          if( success ) {
            this.set('isMachineSuccess', true);
            this.set('isMachineError', false);
          }
        }
      }
    }
  }

  @action
  resetCircle() {
    const canvas = document.getElementById('peintureCanvas');
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < this.circleList.length; i++) {
      this.circleList[i].red = false;
    }
    this.latestRed = 0
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