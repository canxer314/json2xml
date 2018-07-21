if (!Array.isArray) {
  Array.isArray = function(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
}

function isObject(val) {
  return val != null && typeof val === 'object' && Array.isArray(val) === false;
};

function go (obj) {
    let xml = ''
    // console.log(obj)
    // console.log('\n----------------\n')
    const keys = Object.keys(obj)
    keys.forEach(x => {
        // console.log("keys", x);
        // xml = xml + '<' + x
        if (isObject(obj[x])) {
            xml = xml + '<' + x
            xml = xml + go(obj[x]) + '</' + x + '>'
        } else if (Array.isArray(obj[x])) {
            xml = xml + '<' + x
            xml += '>'
            obj[x].forEach(y => {
                xml += go(y)
            })
            xml += '</' + x + '>'
        } else if (typeof(obj[x]) == 'string') {
            if (xml.charAt(xml.length - 1) == '>') {
                xml = xml.substring(0, xml.length - 1)
            }
            xml = xml + ' ' + x + '="' + obj[x] + '">'
        }
    })
    console.log(xml)
    return xml
}

module.exports = go;