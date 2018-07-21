if (!Array.isArray) {
  Array.isArray = function(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
}

function isObject(val) {
  return val != null && typeof val === 'object' && Array.isArray(val) === false;
};

function isNoChild(obj) {
    var ret = true
    const keys = Object.keys(obj)
    keys.forEach(x => {
        if (Array.isArray(obj[x]) || isObject(obj[x])) {
            ret = false
        }
    })
    return ret
}

function go (obj) {
    let xml = ''
    const keys = Object.keys(obj)
    keys.forEach(x => {
        if (isObject(obj[x])) {
            xml = xml + '<' + x
            let tmp = go(obj[x])
            if (isNoChild(obj[x])) {
                if (tmp.charAt(tmp.length - 1) == '>') {
                    tmp = tmp.substring(0, tmp.length - 1)
                }
                xml = xml + tmp + '/>'
            } else {
                xml = xml + tmp + '</' + x + '>'
            }
        } else if (Array.isArray(obj[x])) {
            xml = xml + '>'
            obj[x].forEach(y => {
                xml += '<' + x + '>'
                xml += go(y)
                xml += '</' + x + '>'
            })
        } else if (typeof(obj[x]) == 'string') {
            if (xml.charAt(xml.length - 1) == '>') {
                xml = xml.substring(0, xml.length - 1)
            }
            xml = xml + ' ' + x + '="' + obj[x] + '">'
        }
    })
    return xml
}

module.exports = go;