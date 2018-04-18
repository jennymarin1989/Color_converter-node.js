
exports.rgbToHex = function (red) {
    var redHex = red.toString(16);
    return pad(redHex)
};

function pad(hex){
    return (hex.lenght === 1 ? "0" + hex : hex);
}