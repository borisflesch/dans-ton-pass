/**
 * @class VaccinationEntry
 * Vaccination Entry of the EU Digital Covid Certificate
 * Based on https://github.com/ehn-dcc-development/ehn-dcc-schema/blob/release/1.3.0/DCC.Types.schema.json and https://ec.europa.eu/health/sites/default/files/ehealth/docs/covid-certificate_json_specification_en.pdf
 */
class VaccinationEntry {
    constructor(data) {
        if (!data.tg || !data.vp || !data.mp || !data.ma || !data.dn || !data.sd
            || !data.dt || !data.co || !data.is || !data.ci) {
            throw new Error("Invalid data");
        }

        this.diseaseOrAgentTargeted = data.tg;
        this.vaccineOrProphylaxis = data.vp;
        this.vaccineMedicinalProduct = data.mp;
        this.marketingAuthorizationHolder = data.ma;
        this.doseNumber = data.dn;
        this.totalSeriesOfDoses = data.sd;
        this.dateOfVaccination = data.dt;
        this.countryOfVaccination = data.co;
        this.certificateIssuer = data.is;
        this.uniqueCertificateIdentifier = data.ci;
    }
}

module.exports = VaccinationEntry;