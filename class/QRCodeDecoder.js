const pako = require('pako');
const base45 = require('base45');
const cbor = require('cbor-web');
const Certificate = require("./Certificate");

class QRCodeDecoder {
    constructor(data) {
        if (!data) throw new Error("No data");
        this.data = data;

        return this.decode(data);
    }

    /**
     * Remove "HC1:" prefix from given text
     * @param {string} text
     * @returns string
     */
    removePrefix(text) {
        return text.replace("HC1:", "");
    }

    /**
     * Base45 decode
     * @param {string} text Base45 String to decode
     * @returns Buffer
     */
    base45decode(data) {
        return base45.decode(data);
    }

    /**
     * Decompress a Zlib buffer
     * @param {Buffer} data Zlib buffer to decompress
     * @returns Buffer
     */
    zlibDecompress(data) {
        return pako.inflate(data);
    }

    /**
     * Retrieve JSON data from the given decompressed Zlib buffer (CBOR)
     * @param {Buffer} data 
     * @returns 
     */
    getJson(data) {
        let decoded = cbor.decodeAllSync(data)
        decoded = cbor.decodeAllSync(decoded[0].value[2])
        return decoded[0].get(-260).get(1);
    }

    /**
     * Converts JSON Certificate data into a parsed Certificate object
     * @param {object} data JSON Certificate data
     * @returns Certificate instance
     */
    jsonDataToCertificate(data) {
        return new Certificate(data);
    }

    /**
     * Decode Certificate QR Code data
     * @returns Certificate instance
     */
    decode(data) {
        let decoded = this.removePrefix(data);
        decoded = this.base45decode(decoded);
        decoded = this.zlibDecompress(decoded);
        decoded = this.getJson(decoded);

        return this.jsonDataToCertificate(decoded);
    }
}

module.exports = QRCodeDecoder;