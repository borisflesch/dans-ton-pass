/**
 * @class TestEntry
 * Test Entry of the EU Digital Covid Certificate
 * Based on https://github.com/ehn-dcc-development/ehn-dcc-schema/blob/release/1.3.0/DCC.Types.schema.json and https://ec.europa.eu/health/sites/default/files/ehealth/docs/covid-certificate_json_specification_en.pdf
 */
class TestEntry {
    constructor(data) {
        if (!data.tg || !data.tt || !data.sc || !data.tr || !data.co
            || !data.is || !data.ci) {
            throw new Error("Invalid data");
        }

        this.diseaseOrAgentTargeted = data.tg;
        this.typeOfTest = data.tt;
        this.naaTestName = data.nm;
        this.ratTestNameAndManufacturer = data.ma;
        this.dateOfSampleCollection = data.sc;
        this.testResult = data.tr;
        this.testingCentre = data.tc;
        this.countryOfTest = data.co;
        this.certificateIssuer = data.is;
        this.uniqueCertificateIdentifier = data.ci;
    }
}

module.exports = TestEntry;