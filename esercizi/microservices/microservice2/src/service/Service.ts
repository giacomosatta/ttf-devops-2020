import colorConverter from 'color-convert'
import {TtfRgb,TtfHex} from '../../../commons/src/model/Color'

export function convert(colorINPUT: TtfHex): TtfRgb {

    let input:string = colorINPUT.hex
    let convertedColor
    let rgb : TtfRgb

    convertedColor = colorConverter.hex.rgb(input) 
    rgb = {red: convertedColor[0], green: convertedColor[1], blue: convertedColor[2]}

    return rgb 
}
