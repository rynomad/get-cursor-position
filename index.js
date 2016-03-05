var tty = require('tty');

var data = '\x1b[6n';

module.exports = function (callback) {

  // start listening
  process.stdin.resume();
  raw(true);

  process.stdin.once('data', function (b) {
    var match = /\[(\d+)\;(\d+)R$/.exec(b.toString());
    if (match) {
      var position = match.slice(1, 3).reverse().map(Number);
      callback && callback({
        x: position[0],
        y: position[1]
      });
    }

    // cleanup and close stdin
    raw(false);
    process.stdin.pause();

  });


  process.stdout.write(data);
  process.stdout.emit('data', data);
};


function raw(mode) {
  if (process.stdin.setRawMode) {
    process.stdin.setRawMode(mode)
  } else {
    tty.setRawMode(mode)
  }
}

