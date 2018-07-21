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

var data = {
    "FeatureLayer": {
        "Name": "line",
        "GeometryFieldName": "Geometry",
        "MaxVisibleDistance": "50000000",
        "MinVisibleDistance": "0",
        "MinVisiblePixels": "2",
        "ForceCullMode": "False",
        "CullMode": "gviCullBack",
        "AttributeMask": "7",
        "MouseSelectMask": "gviViewAllNormalView",
        "GeometryRender": {
            "HeightStyle": "gviHeightAbsolute",
            "HeightOffset": "0",
            "GroupField": "",
            "RenderType": "gviRenderValueMap",
            "ValueMap": {
                "RenderScheme": [
                    {
                        "RenderRule": {
                            "LookUpField": "layer",
                            "Otherwise": "False",
                            "RuleType": "gviRenderRuleUniqueValues",
                            "UniqueValue": "ˮ������վ��½�ز���"
                        },
                        "GeometrySymbol": {
                            "GeometryType": "Polyline",
                            "Script": "",
                            "Color": "Color [A=255, R=255, G=255, B=128]",
                            "Width": "0",
                            "ImageName": "",
                            "RepeatLength": "1"
                        }
                    },
                    {
                        "RenderRule": {
                            "LookUpField": "layer",
                            "Otherwise": "False",
                            "RuleType": "gviRenderRuleUniqueValues",
                            "UniqueValue": "ˮ������վ������ͣ��"
                        },
                        "GeometrySymbol": {
                            "GeometryType": "Polyline",
                            "Script": "",
                            "Color": "Color [A=255, R=253, G=226, B=101]",
                            "Width": "0",
                            "ImageName": "",
                            "RepeatLength": "1"
                        }
                    },
                    {
                        "RenderRule": {
                            "LookUpField": "layer",
                            "Otherwise": "False",
                            "RuleType": "gviRenderRuleUniqueValues",
                            "UniqueValue": "½��һ������վ"
                        },
                        "GeometrySymbol": {
                            "GeometryType": "Polyline",
                            "Script": "",
                            "Color": "Color [A=255, R=248, G=196, B=74]",
                            "Width": "0",
                            "ImageName": "",
                            "RepeatLength": "1"
                        }
                    },
                    {
                        "RenderRule": {
                            "LookUpField": "layer",
                            "Otherwise": "False",
                            "RuleType": "gviRenderRuleUniqueValues",
                            "UniqueValue": "½����������վ"
                        },
                        "GeometrySymbol": {
                            "GeometryType": "Polyline",
                            "Script": "",
                            "Color": "Color [A=255, R=242, G=167, B=46]",
                            "Width": "0",
                            "ImageName": "",
                            "RepeatLength": "1"
                        }
                    },
                    {
                        "RenderRule": {
                            "LookUpField": "layer",
                            "Otherwise": "False",
                            "RuleType": "gviRenderRuleUniqueValues",
                            "UniqueValue": "����������"
                        },
                        "GeometrySymbol": {
                            "GeometryType": "Polyline",
                            "Script": "",
                            "Color": "Color [A=255, R=242, G=167, B=46]",
                            "Width": "0",
                            "ImageName": "",
                            "RepeatLength": "1"
                        }
                    },
                    {
                        "RenderRule": {
                            "LookUpField": "layer",
                            "Otherwise": "False",
                            "RuleType": "gviRenderRuleUniqueValues",
                            "UniqueValue": "0-ͼ��"
                        },
                        "GeometrySymbol": {
                            "GeometryType": "Polyline",
                            "Script": "",
                            "Color": "Color [A=255, R=174, G=89, B=23]",
                            "Width": "0",
                            "ImageName": "",
                            "RepeatLength": "1"
                        }
                    },
                    {
                        "RenderRule": {
                            "LookUpField": "layer",
                            "Otherwise": "False",
                            "RuleType": "gviRenderRuleUniqueValues",
                            "UniqueValue": "��������վ"
                        },
                        "GeometrySymbol": {
                            "GeometryType": "Polyline",
                            "Script": "",
                            "Color": "Color [A=255, R=107, G=0, B=0]",
                            "Width": "0",
                            "ImageName": "",
                            "RepeatLength": "1"
                        }
                    },
                    {
                        "RenderRule": {
                            "LookUpField": "layer",
                            "Otherwise": "False",
                            "RuleType": "gviRenderRuleUniqueValues"
                        },
                        "GeometrySymbol": {
                            "GeometryType": "Polyline",
                            "Script": "",
                            "Color": "Color [A=255, R=0, G=255, B=0]",
                            "Width": "0",
                            "ImageName": "",
                            "RepeatLength": "1"
                        }
                    }
                ]
            }
        },
        "TextRender": {
            "Expression": "$(color)",
            "DynamicPlacement": "False",
            "MinimizeOverlap": "False",
            "RemoveDuplicate": "False",
            "TextRenderType": "gviRenderSimple",
            "TextSymbol": {
                "DrawLine": "False",
                "LockMode": "gviLockDecal",
                "MaxVisualDistance": "10000000",
                "MinVisualDistance": "0",
                "Priority": "1",
                "PivotOffsetX": "0",
                "PivotOffsetY": "0",
                "PivotAlignment": "gviPivotAlignBottomCenter",
                "VerticalOffset": "0",
                "TextAttribute": {
                    "TextColor": "Color [A=255, R=255, G=255, B=255]",
                    "BackgroundColor": "Color [A=0, R=25, G=25, B=25]",
                    "OutlineColor": "Color [A=255, R=25, G=25, B=25]",
                    "Font": "Arial",
                    "TextSize": "13",
                    "Bold": "False",
                    "Italic": "False",
                    "Underline": "False"
                }
            }
        }
    }
}

console.log(go(data))

window.onload = function () {
    var el = document.getElementById("go")
    var result = go(data)
    el.innerHTML = result
}