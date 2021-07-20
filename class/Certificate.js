const VaccinationEntry = require("./VaccinationEntry");
const TestEntry = require("./TestEntry");
const RecoveryEntry = require("./RecoveryEntry");

/**
 * @class Certificate
 * Certificate class based on the EU Digital Covid Certificate, including
 * personal information, vaccination, test and recovery entries.
 * Based on https://github.com/ehn-dcc-development/ehn-dcc-schema/blob/release/1.3.0/DCC.Types.schema.json and https://ec.europa.eu/health/sites/default/files/ehealth/docs/covid-certificate_json_specification_en.pdf
 */
class Certificate {
    constructor(data) {
        if (!data.ver || !data.nam || !data.dob ||
            (!data.v && !data.t && !data.r)) {
                throw new Error("Invalid data");
        }

        this.version = data.ver;

        this.forename = data.nam.gn;
        this.standardisedForename = data.nam.gnt;
        this.surname = data.nam.fn;
        this.standardisedSurname = data.nam.fnt;

        this.dateOfBirth = data.dob;

        // Vaccination Group, contains exactly one entry if exists
        this.vaccination = data.v ? new VaccinationEntry(data.v[0]) : null;

        // Test Group, contains exactly one entry if exists
        this.test = data.t ? new TestEntry(data.t[0]) : null;

        // Recovery Group, contains exactly one entry if exists
        this.recovery = data.r ? new RecoveryEntry(data.r[0]) : null;

        // Optional fields
        this.certificateId = data.certificate_id;
    }
}

module.exports = Certificate;