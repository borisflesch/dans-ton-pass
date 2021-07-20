/**
 * @class RecoveryEntry
 * Recovery Entry of the EU Digital Covid Certificate
 * Based on https://github.com/ehn-dcc-development/ehn-dcc-schema/blob/release/1.3.0/DCC.Types.schema.json and https://ec.europa.eu/health/sites/default/files/ehealth/docs/covid-certificate_json_specification_en.pdf
 */
 class RecoveryEntry {
    constructor(data) {
        if (!data.tg || !data.fr || !data.co || !data.is || !data.df
            || !data.du || !data.ci) {
            throw new Error("Invalid data");
        }

        this.diseaseOrAgentTargeted = data.tg;
        this.dateOfFirstPositiveNaaTestResult = data.fr;
        this.countryOfTest = data.co;
        this.certificateIssuer = data.is;
        this.certificateValidFrom = data.df;
        this.certificateValidUntil = data.du;
        this.uniqueCertificateIdentifier = data.ci;
    }
}

module.exports = RecoveryEntry;