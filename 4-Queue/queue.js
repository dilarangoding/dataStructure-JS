/**
 * Qeueu
 * First In First Out (FIFO)
 * Data hanya bisa ditambahkan di akhir antrian / atas
 * Data hanya bisa dibaca  diitem paling awal / bawah
 * Data hanya bisa dihapus diitem paling awal / bawah
 */

function createQueue() {
  let queue = []; // [1, 2 , 3]
  return {
    enqueu: function (item) {
      queue.push(item);
    },
    dequeu: function () {
      queue.shift();
    },
    peek: function () {
      return queue[0];
    },
    size: function () {
      return queue.length;
    }
  }
}

const q = createQueue();
q.enqueu('Makan Bakso Haji Abdulah');
q.enqueu('Beli Es Kelapa Pak Nurdin');
q.enqueu('Belanja Bulanan');
q.enqueu('Pulang ke rumah');

q.dequeu();
q.dequeu();
q.dequeu();

console.log(q.peek());