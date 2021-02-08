/**
 * The print functions are a mechanism to render the document to a paginated format.
 *
 * @alias browser.printPage
 * @see https://w3c.github.io/webdriver/#print
 * @param {object} options an object of options that affect the pdf output
 */

import DevToolsDriver from '../devtoolsdriver'

export default async function printPage(this: DevToolsDriver,
    orientation?: string,
    scale?: number,
    background?: boolean,
    width?: number | string,
    height?: number | string,
    top?: number | string,
    right?: number | string,
    bottom?: number | string,
    left?: number | string,
    shrinkToFit?: boolean,
    pageRanges?: string) {

    const page = this.getPageHandle()

    const pdfBuffer = await page.pdf({
        landscape: orientation === 'landscape',
        scale: scale,
        printBackground: background,
        width: width,
        height: height,
        margin: {
            top: top,
            right: right,
            bottom: bottom,
            left: left
        },
        preferCSSPageSize: !shrinkToFit,
        pageRanges: pageRanges
    })

    return pdfBuffer.toString()
}