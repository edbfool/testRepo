var N = parseInt(readline()); // Number of elements which make up the association table.
var Q = parseInt(readline()); // Number Q of file names to be analyzed.
var mime = {};
for (var i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    var EXT = inputs[0].toLowerCase(); // file extension
    var MT = inputs[1]; // MIME type.
    mime[EXT] = MT;
}
for (var i = 0; i < Q; i++) {
    var FNAME = readline(); // One file name per line.
    var dotTash = FNAME.lastIndexOf(".");
    var filename = FNAME.substring(dotTash, FNAME.length).toLowerCase();
    var filenameTwo = filename.slice(1, filename.length);
    if (mime[filenameTwo]){
        print(mime[filenameTwo]);
    } else {
        print("UNKNOWN");
    }
}