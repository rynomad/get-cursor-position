var deasync = require('deasync');
var tty     = require('tty');
var code    = '\x1b[6n';

module.exports = {
  sync : function () {
    var sync     = true;
    var position = null;

    // start listening
    process.stdin.resume();
    raw(true);

    process.stdin.once('data', function (b) {
      var match = /\[(\d+)\;(\d+)R$/.exec(b.toString());
      if (match) {
        sync     = false;
        position = match.slice(1, 3).reverse().map(Number);
      }

      // cleanup and close stdin
      raw(false);
      process.stdin.pause();
    });


    process.stdout.write(code);
    process.stdout.emit('data', code);

    while (sync) {
      deasync.sleep(1);
    }

    return {
      row: position[1],
      col: position[0]
    };
  },
  async: function (callback, context) {

    // start listening
    process.stdin.resume();
    raw(true);

    process.stdin.once('data', function (b) {
      var match = /\[(\d+)\;(\d+)R$/.exec(b.toString());
      if (match) {
        var position = match.slice(1, 3).reverse().map(Number);

        callback && callback.call(context, position[1], position[0]);
      }

      // cleanup and close stdin
      raw(false);
      process.stdin.pause();
    });


    process.stdout.write(code);
    process.stdout.emit('data', code);
  }
};

function raw(mode) {
  if (process.stdin.setRawMode) {
    process.stdin.setRawMode(mode)
  } else {
    tty.setRawMode(mode)
  }
}
