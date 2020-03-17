import colorConverter from 'color-convert'
import {TtfRgb,TtfHex} from '../../../commons/src/model/Color'

export function convert(colorINPUT: TtfRgb): TtfHex {
    let INPT1 = colorINPUT.red
    let INPT2 = colorINPUT.green
    let INPT3  = colorINPUT.blue

    let convertedColor:TtfHex
    convertedColor = {hex:colorConverter.rgb.hex([INPT1,INPT2,INPT3])}   
    return convertedColor
}
