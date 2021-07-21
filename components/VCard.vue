 <template>
  <div id="main" class="site-main">
    <div class="pt-wrapper">
      <div class="subpages">
        <section class="pt-page" data-id="home">
          <div class="section-inner start-page-content">
            <div class="page-header">
              <div class="row">
                <div class="col-sm-4 col-md-4 col-lg-4">
                  <div class="photo">
                    <client-only>
                      <beat-loader
                        :loading="cameraLoading"
                        :color="'#7E6DF6'"
                        :size="'18px'"
                      ></beat-loader>
                      <qrcode-stream
                        :camera="camera"
                        :track="paintBoundingBox"
                        @init="onInit"
                        @decode="onDecode"
                      >
                        <div v-if="showRefreshQrCode" @click="refreshQrCode" class="qr-code-button">
                          <i class="fa fa-camera"/>
                        </div>
                      </qrcode-stream>
                      <p class="text-center mt-3">— OU —</p>
                      <qrcode-capture class="m-auto" @decode="onDecode" @detect="onDetect"/>
                    </client-only>
                  </div>
                </div>

                <div class="col-sm-8 col-md-8 col-lg-8">
                  <div v-if="certificate" class="title-block">
                    <h1>
                      {{ certificate.forename }} {{ certificate.surname }}
                    </h1>
                    <div class="owl-carousel text-rotation">
                      <div class="item">
                        <div class="sp-subtitle">
                          Né(e) le {{ formatDate(certificate.dateOfBirth) }}
                        </div>
                      </div>
                      <div class="item">
                        <div class="sp-subtitle">
                          <i>Certificat v{{ certificate.version }}</i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div v-else class="title-block">
                    <h1>
                      DansTonPass
                    </h1>
                    <div class="owl-carousel text-rotation">
                      <div class="item">
                        <div class="sp-subtitle">
                          L'Explorateur de Pass Sanitaire Covid (Open Source)
                        </div>
                      </div>
                    </div>
                    <p style="color: #fff; margin-top: 12px;">Scannez le QR Code de votre 🇪🇺 Certificat Covid Digital (Pass Sanitaire) afin d'afficher le détail des informations qu'il contient (ne fonctionne pas avec l'ancien 2D-DOC).<br>Aucune donnée n'est conservée ou transférée.</p>
                  </div>
                </div>
              </div>
            </div>

            <div v-if="certificate" class="page-content">
              <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-12">
                  <div class="about-me">
                    <div class="block-title">
                      <h3>Votre certificat <span>« EU Digital Covid Certificate »</span></h3>
                    </div>
                    <p>
                      Ce certificat appartient à <strong>{{ certificate.forename }}</strong> <strong>{{ certificate.surname }}, </strong>né(e) le <strong>{{ formatDate(certificate.dateOfBirth) }}</strong>.<br>
                      Votre certificat est composé des sections (certificats) détaillées ci-dessous :
                    </p>
                  </div>
                </div>
              </div>

              <!---------->
              <!-- TEST -->
              <!---------->
              <div v-if="certificate.test" class="row">
                <hr>
                <div class="col-sm-6 col-md-6 col-lg-6">
                  <div class="about-me">
                    <div class="block-title">
                      <h3>Votre certificat de <span>test</span></h3>
                    </div>
                    <p>
                      <i>Le certificat de test contient le résultat de votre dernier test.</i><br>
                      
                      Les données présentes dans votre QR Code indiquent que ce test a été réalisé le <strong>{{ new Date(certificate.test.dateOfSampleCollection).toLocaleString() }}</strong>
                      <span v-if="certificate.test.testResult === '260415000'">et que la COVID-19 <strong>n'a pas été détectée</strong></span>
                      <span v-else-if="certificate.test.testResult === '260373001'">et que la COVID-19 <strong>a été détectée</strong></span>.<br>

                      Ce test a été réalisé dans le centre « <strong>{{ certificate.test.testingCentre }} ({{ certificate.test.countryOfTest}})</strong> ».
                    </p>
                  </div>
                </div>

                <div class="col-sm-6 col-md-6 col-lg-6">
                  <ul class="info-list">
                    <li>
                      <span class="title">Maladie/Agent</span>
                      <span class="value">
                        {{ certificate.test.diseaseOrAgentTargeted || "N/C" }}
                        <span v-if="certificate.test.diseaseOrAgentTargeted === '840539006'">(COVID-19)</span>
                      </span>
                    </li>
                    <li>
                      <span class="title">Type de test</span>
                      <span class="value">
                        {{ certificate.test.typeOfTest || "N/C" }}
                        <span v-if="certificate.test.typeOfTest === 'LP6464-4'">(Amplification des Acides Nucléiques - TAN)</span>
                        <span v-else-if="certificate.test.typeOfTest === 'LP217198-3'">(Immunodosage rapide)</span>
                      </span>
                    </li>
                    <li>
                      <span class="title">Nom du test</span>
                      <span class="value">{{
                        certificate.test.naaTestName || "N/C"
                      }}</span>
                    </li>
                    <li>
                      <span class="title">RAT &amp; Fabricant</span>
                      <span class="value">
                        {{
                          certificate.test.ratTestNameAndManufacturer || "N/C"
                        }} (<a rel="nofollow" href="https://www.theglobalfund.org/media/9629/covid19_diagnosticproducts_list_en.pdf">Voir la liste</a>)
                      </span>
                    </li>
                    <li>
                      <span class="title">Date du test</span>
                      <span class="value">{{
                        certificate.test.dateOfSampleCollection || "N/C"
                      }}</span>
                    </li>
                    <li>
                      <span class="title">Résultat du test</span>
                      <span class="value">
                        {{ certificate.test.testResult || "N/C"
                        }}
                        <span v-if="certificate.test.testResult === '260415000'">(Non détecté)</span>
                        <span v-else-if="certificate.test.testResult === '260373001'">(Détecté)</span>
                      </span>
                    </li>
                    <li>
                      <span class="title">Centre de test</span>
                      <span class="value">{{
                        certificate.test.testingCentre || "N/C"
                      }}</span>
                    </li>
                    <li>
                      <span class="title">Pays du test</span>
                      <span class="value">{{
                        certificate.test.countryOfTest || "N/C"
                      }}</span>
                    </li>
                    <li>
                      <span class="title">Emetteur cert.</span>
                      <span class="value">{{
                        certificate.test.certificateIssuer || "N/C"
                      }}</span>
                    </li>
                    <li>
                      <span class="title">Identifiant cert.</span>
                      <span class="value">{{
                        certificate.test.uniqueCertificateIdentifier || "N/C"
                      }}</span>
                    </li>
                  </ul>
                </div>
              </div>

              <!-------------->
              <!-- GUERISON -->
              <!-------------->
              <div v-if="certificate.recovery" class="row">
                <hr>
                <div class="col-sm-6 col-md-6 col-lg-6">
                  <div class="about-me">
                    <div class="block-title">
                      <h3>Votre certificat de <span>guérison</span></h3>
                    </div>
                    <p>
                      <i>Le certificat de guérison atteste que vous avez guéri de la COVID-19 (voir Maladie/Agent).</i><br>

                      Les données montrent que votre premier test positif remonte au <strong>{{ formatDate(certificate.recovery.dateOfFirstPositiveNaaTestResult) }}</strong>, rendant ainsi votre certificat <strong>valide du {{
                        formatDate(certificate.recovery.certificateValidFrom) || "N/C"
                      }} au {{
                        formatDate(certificate.recovery.certificateValidUntil) || "N/C"
                      }}</strong>.
                    </p>
                  </div>
                </div>

                <div class="col-sm-6 col-md-6 col-lg-6">
                  <ul class="info-list">
                    <li>
                      <span class="title">Maladie/Agent</span>
                      <span class="value">{{
                        certificate.recovery.diseaseOrAgentTargeted || "N/C"
                      }} <span v-if="certificate.recovery.diseaseOrAgentTargeted === '840539006'">(COVID-19)</span></span>
                    </li>
                    <li>
                      <span class="title">1er test positif</span>
                      <span class="value">{{
                        formatDate(certificate.recovery.dateOfFirstPositiveNaaTestResult) ||
                        "N/C"
                      }}</span>
                    </li>
                    <li>
                      <span class="title">Pays du test</span>
                      <span class="value">{{
                        certificate.recovery.countryOfTest || "N/C"
                      }}</span>
                    </li>
                    <li>
                      <span class="title">Emetteur cert.</span>
                      <span class="value">{{
                        certificate.recovery.certificateIssuer || "N/C"
                      }}</span>
                    </li>
                    <li>
                      <span class="title">Validité cert.</span>
                      <span class="value">Du {{
                        formatDate(certificate.recovery.certificateValidFrom) || "N/C"
                      }} au {{
                        formatDate(certificate.recovery.certificateValidUntil) || "N/C"
                      }}</span>
                    </li>
                    <li>
                      <span class="title">Identifiant cert.</span>
                      <span class="value">{{
                        certificate.recovery.uniqueCertificateIdentifier ||
                        "N/C"
                      }}</span>
                    </li>
                  </ul>
                </div>
              </div>

              <!----------------->
              <!-- VACCINATION -->
              <!----------------->
              <div v-if="certificate.vaccination" class="row">
                <hr>
                <div class="col-sm-6 col-md-6 col-lg-6">
                  <div class="about-me">
                    <div class="block-title">
                      <h3>Votre certificat de <span>vaccination</span></h3>
                    </div>
                    <p>
                      <i>Le certificat de vaccination fait référence au dernier événément de vaccination vous concernant (e.g. première ou deuxième injection).</i><br>

                      Le <strong>{{ formatDate(certificate.vaccination.dateOfVaccination) || "N/C" }}</strong>, vous avez reçu votre <strong>dose numéro {{ certificate.vaccination.doseNumber }}
                      / {{ certificate.vaccination.totalSeriesOfDoses }}</strong>
                      <span v-if="vaccineProductName && vaccineHolderName">
                        du vaccin <strong>{{ vaccineProductName }}</strong> de <strong>{{ vaccineHolderName }}</strong>
                      </span>.
                    </p>
                  </div>
                </div>

                <div class="col-sm-6 col-md-6 col-lg-6">
                  <ul class="info-list">
                    <li>
                      <span class="title">Maladie/Agent</span>
                      <span class="value">{{
                        certificate.vaccination.diseaseOrAgentTargeted || "N/C"
                      }} <span v-if="certificate.vaccination.diseaseOrAgentTargeted === '840539006'">(COVID-19)</span></span>
                    </li>
                    <li>
                      <span class="title">Type de vaccin</span>
                      <span class="value">
                        {{ certificate.vaccination.vaccineOrProphylaxis || "N/C" }}
                        <span v-if="vaccineType">({{ vaccineType }})</span>
                      </span>
                    </li>
                    <li>
                      <span class="title">Produit utilisé</span>
                      <span class="value">
                        {{ certificate.vaccination.vaccineMedicinalProduct || "N/C" }}
                        <span v-if="vaccineProductName">({{ vaccineProductName }})</span>
                      </span>
                    </li>
                    <li>
                      <span class="title">Titulaire</span>
                      <span class="value">
                        {{ certificate.vaccination.marketingAuthorizationHolder || "N/C" }}
                        <span v-if="vaccineHolderName">({{ vaccineHolderName }})</span>
                      </span>
                    </li>
                    <li>
                      <span class="title">Dose</span>
                      <span class="value">
                        {{ certificate.vaccination.doseNumber }}
                        / {{ certificate.vaccination.totalSeriesOfDoses }}</span>
                    </li>
                    <li>
                      <span class="title">Date vaccination</span>
                      <span class="value">{{
                        formatDate(certificate.vaccination.dateOfVaccination) || "N/C"
                      }}</span>
                    </li>
                    <li>
                      <span class="title">Pays vaccination</span>
                      <span class="value">{{
                        certificate.vaccination.countryOfVaccination || "N/C"
                      }}</span>
                    </li>
                    <li>
                      <span class="title">Emetteur cert.</span>
                      <span class="value">{{
                        certificate.vaccination.certificateIssuer || "N/C"
                      }}</span>
                    </li>
                    <li>
                      <span class="title">Identifiant cert.</span>
                      <span class="value">{{
                        certificate.vaccination.uniqueCertificateIdentifier || "N/C"
                      }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <notifications :duration="5000" position="bottom right" />
  </div>
</template>

<script>
import BeatLoader from "vue-spinner/src/BeatLoader.vue";
import QRCodeDecoder from "~/class/QRCodeDecoder.js";

export default {
  components: {
    BeatLoader,
  },
  computed: {
    /**
     * Convert the certificate vaccination holder ID to its full name (if found in the list)
     */
    vaccineHolderName() {
      if (!this.certificate.vaccination) return null;

      const vaccineHolders = {
        "ORG-100001699": "AstraZeneca AB",
        "ORG-100030215": "Biontech Manufacturing GmbH",
        "ORG-100001417": "Janssen-Cilag International",
        "ORG-100031184": "Moderna Biotech Spain S.L.",
        "ORG-100006270": "Curevac AG",
        "ORG-100013793": "CanSino Biologics",
        "ORG-100020693": "China Sinopharm International Corp. - Beijing location",
        "ORG-100010771": "Sinopharm Weiqida Europe Pharmaceutical s.r.o. - Prague location",
        "ORG-100024420": "Sinopharm Zhijun (Shenzhen) Pharmaceutical Co. Ltd. - Shenzhen location",
        "ORG-100032020": "Novavax CZ AS",
        "Gamaleya-Research-Institute": "Gamaleya Research Institute",
        "Vector-Institute": "Vector Institute",
        "Sinovac-Biotech": "Sinovac Biotech",
        "Bharat-Biotech": "Bharat Biotech",
      };

      const id = this.certificate.vaccination.marketingAuthorizationHolder;
      if (vaccineHolders.hasOwnProperty(id)) {
        return vaccineHolders[id];
      }
    },
    /**
     * Convert the certificate vaccination product ID to its full name (if found in the list)
     */
    vaccineProductName() {
      if (!this.certificate.vaccination) return null;

      const vaccineProducts = {
        "EU/1/20/1528": "Comirnaty",
        "EU/1/20/1507": "COVID-19 Vaccine Moderna",
        "EU/1/21/1529": "Vaxzevria",
        "EU/1/20/1525": "COVID-19 Vaccine Janssen",
        "CVnCoV": "CVnCoV",
        "Sputnik-V": "Sputnik-V",
        "Convidecia": "Convidecia",
        "EpiVacCorona": "EpiVacCorona",
        "BBIBP-CorV": "BBIBP-CorV",
        "Inactivated-SARS-CoV-2-Vero-Cell": "Inactivated SARS-CoV-2 (Vero Cell)",
        "CoronaVac": "CoronaVac",
        "Covaxin": "Covaxin (also known as BBV152 A, B, C)",
      };

      const id = this.certificate.vaccination.vaccineMedicinalProduct;
      if (vaccineProducts.hasOwnProperty(id)) {
        return vaccineProducts[id];
      }
    },
    /**
     * Convert the certificate vaccination vaccine type from a Number/ID to a comprehensive string.
     */
    vaccineType() {
      if (!this.certificate.vaccination) return null;

      const vaccineTypes = {
        "1119349007": "SARS-CoV-2 mRNA vaccine",
        "1119305005": "SARS-CoV-2 antigen vaccine",
        "J07BX03": "covid-19 vaccines",
      };

      const id = this.certificate.vaccination.vaccineOrProphylaxis;
      if (vaccineTypes.hasOwnProperty(id)) {
        return vaccineTypes[id];
      }
    }
  },
  data() {
    return {
      cameraLoading: true,
      showRefreshQrCode: false, // Retake picture toggle
      camera: "auto", // 'rear', 'front'
      certificate: null,
    };
  },
  methods: {
    /**
     * Converts YYYY-MM-DD dates to DD/MM/YYYY (French format)
     * @params {string} d
     * @returns {string}
     */
    formatDate(d) {
      const parts = d.split("-");
      return `${parts[2]}/${parts[1]}/${parts[0]}`;
    },
    /**
     * QR Code Scanner initialisation method and errors handling.
     * Hide loader when ready.
     */
    async onInit(promise) {
      try {
        await promise;
      } catch (error) {
        if (error.name === "NotAllowedError") {
          alert(
            "Pour scanner votre QR Code, veuillez autoriser l'application à utiliser votre caméra !"
          );
        } else if (error.name === "NotFoundError") {
          alert("Aucune caméra trouvée");
        } else if (error.name === "NotSupportedError") {
          alert("Erreur HTTPS");
        } else if (error.name === "NotReadableError") {
          alert("Votre caméra est déjà utilisée par un autre programme");
        } else if (error.name === "OverconstrainedError") {
          alert("Caméra introuvable");
        } else if (error.name === "StreamApiNotSupportedError") {
          alert("Capture caméra non supportée par votre navigateur web");
        }
      } finally {
        this.cameraLoading = false;
      }
    },
    /**
     * Trigerred when data has been decoded using the QR Code reader (either 
     * through camera or file upload).
     */
    onDecode(decodedString) {
      if (!decodedString.startsWith("HC1")) {
        this.$notify({
          type: 'error',
          title: 'QR Code invalide',
          text: 'Avez-vous bien scanné un Certificat Covid Digital Européen ?'
        });
        return;
      }

      try {
        const certificate = new QRCodeDecoder(decodedString);
        if (certificate.forename) {
          certificate.forename = certificate.forename.capitalize();
        }
        if (certificate.surname) {
          certificate.surname = certificate.surname.capitalize();
        }
        this.camera = "off";
        this.showRefreshQrCode = true;
        this.certificate = certificate;
      } catch(err) {
        this.$notify({
          type: 'error',
          title: 'Échec du décodage',
          text: 'Le décodage des informations de votre QR Code a échoué pour une raison inconnue. Avez-vous bien scanné un Certificat Covid Digital Européen ?'
        });
      }
    },
    async onDetect (promise) {
      try {
        const {
          imageData,    // raw image data of image/frame
          content,      // decoded String or null
          location      // QR code coordinates or null
        } = await promise;

        if (content === null) {
          this.$notify({
            type: 'error',
            title: 'QR Code non détecté',
            text: 'Veuillez réessayer avec une image de meilleure qualité et/ou avec un meilleur éclairage'
          });
        }
      } catch (error) {
        console.error(error);
      }
    },
    /**
     * Refresh/reset QR Code reader to scan a new code
     */
    refreshQrCode() {
        this.camera = "off";
        this.cameraLoading = true;
        this.camera = "auto";
        this.showRefreshQrCode = false;
    },
    /**
     * Paint QR Code bouding box in real time on the reader canvas
     */
    paintBoundingBox (detectedCodes, ctx) {
      for (const detectedCode of detectedCodes) {
        const { boundingBox: { x, y, width, height } } = detectedCode
        ctx.lineWidth = 2
        ctx.strokeStyle = '#007bff'
        ctx.strokeRect(x, y, width, height)
      }
    },
  },
};
</script>

<style scoped>
.info-list span {
  word-break: break-all;
}

.pt-page {
  height: auto;
  position: relative;
  opacity: 1;
  visibility: visible;
}

.start-page-content .page-header .photo {
  margin-bottom: 0;
}
.start-page-content .page-header .photo:hover {
  transform: none;
}

.qr-code-button {
  cursor: pointer;
  text-align: right;
  padding: 5px 6px;
  color: #fff;
  font-size: 1.2em;
  text-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)
}

.vue-notification {
  margin: 10px;
}
</style>