<template>
  <div>
    <div id="page" class="page">
      <Header />
      <!-- Main Content -->
      <div id="main" class="site-main">
        <!-- Page changer wrapper -->
        <div class="pt-wrapper">
          <!-- Subpages -->
          <div class="subpages">
            <!-- Resume Subpage -->
            <section class="pt-page" data-id="resume">
              <div class="section-inner custom-page-content">
                <div class="page-header color-1">
                  <h2>Comment ça marche ?</h2>
                </div>
                <div class="page-content">

                  <div class="row">
                    <div class="col-sm-12 col-md-12 col-lg-12">
                      <div class="block">
                        <div class="block-title">
                          <h3>Étape par étape, voici comment les données de votre Certificat Covid Digital EU sont décodées</h3>
                        </div>

                        <div class="timeline">
                          <div class="timeline-item">
                            <h4 class="item-title">QR Code d'exemple</h4>
                            <p class="item-description">
                                Dans cet exemple, le QR Code d'exemple (spécimen) suivant sera utilisé (<i>DGC_QrCode_00014.png</i>) :<br>
                                <img src="images/demo-qrcode.png" alt="Demo QRCode DGC_QrCode_00014.png" width="220">
                            </p>
                          </div>

                          <div class="timeline-item">
                            <h4 class="item-title">1. Scan du QR Code</h4>
                            <p class="item-description">
                                Dans un premier temps, votre QR Code est scanné. Cette opération permet de récupérer un long texte, incompréhensible, qui devra être décodé pour trouver vos données. En informatique, décoder, c'est comme <i>traduire</i> des données (ce qui est différent de l'opération de <i>déchiffrement</i>, qui consiste à déchiffrer des données chiffrées, i.e. sécurisées).
                            </p>
                            <p class="item-description">
                                Voici à quoi ressemblent les données d'un QR Code lorsqu'il vient d'être scanné :
                            </p>
                            <pre><code>HC1:6BFOXN%TSMAHN-HJTK6.Q837FEMYV6GI4%%5+T9YJ1OGI/N231GM*4-GMJZ8CV4*XUA2PSGH.+H$NI4L6PUC6VH6ZL4XP:N6ON13:LHNG3$H*TB8.RTU1S$NM*JW*I$NICZUIQN*LA 436IAXPMHQ1*P13W1+ZEQS5OH6TPA-:VH*F/IE%TE6UG+ZEAT1HQ1$HG:0LPHN6D7LLK*2HG%89UV-0LZ 2S-O:S9UZ4+FJE 4Y3LL/II 0OC9JU0D0HT0HB2PR78+FFZI9:GAIBIRCKDAD%PDPOJI7JSTNB95N/5MC5TQ6DW6 96JW63X7HX7YZ6-35.+MCA7G6M$YQ538K0P:XOZ8QSA7G6M72SZV2$JNV9EUDBQEAJJKHHGWC8OTO 1G/SMNTFG%9VWC/MM:67Z3GIOTVRLKDVMV232LZUEA 74FV I50/Q$P4ODC1ZD7+MDPHR DVRHJY8FJRQ18.RCG:MQU7MPCCBL730OKDZ1</code></pre>
                          </div>
                          
                          <div class="timeline-item">
                            <h4 class="item-title">2. Décodage Base45</h4>
                            <p class="item-description">
                                Toutes les données contenues dans le QR Code après <code>HC1:</code> sont encodées dans un format appelé <a href="https://datatracker.ietf.org/doc/draft-faltstrom-base45/" target="_blank" rel="nofollow">Base45</a>. Une fois décodées, on obtient une nouvelle longue chaîne de caracètres, toujours incompréhensible :
                            </p>
                            <pre><code>eJy71OK7iFGNxaNg1RI37rCLNQsi3i5hTHILYpFKFAh+wCaVsP9FgiUj80LGJYlljauSkjMrZEuL8qxKy5IzrQwMrdyCrIz9XEPc/Q1MvIydPJVdkpLzgbqTUvIYk1JKsowMjAx1DYx1DSyTMotTnP0cfZNyE3P9g9x1DQ0MDIyBsqZJuQU5rqH6hvpGBvqGpkYWScUpTEkl6ZkWJgamxpYGBmZJZQVZhoaGlsYmQJ55ckp+UhaQY6BraKRrYJqcl5i7JCktLzMpvzQlNSMxLzUpPS89PTW/KD21ODktryTTyT/UxdXD0c81OT2vJN3dFWi5a3ByWWpRqqGegZ5BhMMJfuGzHXvXTe9kq7IPOJl/Oumvqvv3lBVbpnp0Jz29994q29U5JC5hTWz9tRWK621Ei1dFVdj5P49j1bXSPL9jZ6gYAI5qcVA=</code></pre>
                          </div>

                          <div class="timeline-item">
                            <h4 class="item-title">3. Décompression des données</h4>
                            <p class="item-description">
                                À ce stade, vos informations sont décodées mais toujours compressées (pour réduire la taille de votre QR Code). Il va donc falloir les décompresser (avec <i>zlib</i>) : c'est le même principe que la décompression d'une archive ZIP que vous auriez pu créer sur votre ordinateur ! 
                            </p>
                            <p class="item-description">
                                Après décompression, on obtient une suite de nombres :
                            </p>
                            <pre><code>[210,132,77,162,1,38,4,72,112,170,164,70,11,86,209,124,160,88,237,164,1,98,70,82,4,26,97,16,83,224,6,26,96,191,232,96,57,1,3,161,1,164,97,118,129,170,98,99,105,120,29,117,114,110,58,117,118,99,105,58,48,49,58,70,82,58,51,78,69,84,71,79,48,52,74,51,66,73,35,68,98,99,111,98,70,82,98,100,110,1,98,100,116,106,50,48,50,49,45,48,51,45,48,57,98,105,115,100,67,78,65,77,98,109,97,109,79,82,71,45,49,48,48,48,51,48,50,49,53,98,109,112,108,69,85,47,49,47,50,48,47,49,53,50,56,98,115,100,2,98,116,103,105,56,52,48,53,51,57,48,48,54,98,118,112,106,49,49,49,57,51,52,57,48,48,55,99,100,111,98,106,49,57,51,48,45,49,50,45,48,53,99,110,97,109,164,98,102,110,105,98,111,117,100,101,104,97,110,101,98,103,110,103,103,101,111,114,103,101,115,99,102,110,116,105,66,79,85,68,69,72,65,78,69,99,103,110,116,103,71,69,79,82,71,69,83,99,118,101,114,101,49,46,48,46,48,88,64,200,15,19,205,136,189,174,151,137,6,122,63,80,201,111,203,98,253,37,71,247,100,168,180,149,72,139,98,229,222,239,58,107,69,67,84,94,96,172,93,127,214,168,33,175,60,21,115,170,90,120,62,79,231,94,5,45,58,41,207,184,185,85,22]</code></pre>
                          </div>


                          <div class="timeline-item">
                            <h4 class="item-title">4. Décodage CBOR</h4>
                            <p class="item-description">
                                Cette suite de nombres contient en réalité des informations au format <a href="https://datatracker.ietf.org/doc/html/rfc8949" target="_blank" rel="nofollow">CBOR (Concise Binary Object Representation)</a> qu'il va encore une fois falloir décoder ! Après décodage et isolation des données qui nous intéressent, c'est-à-dire les informations du Pass Sanitaire stockées dans le QR Code, on obtient des données au format <a href="https://datatracker.ietf.org/doc/html/rfc8259" target="_blank" rel="nofollow">JSON (JavaScript Object Notation)</a>, cette fois bien plus compréhensibles :
                            </p>
                            <pre><code>{
    "v": [
        {
            "ci": "urn:uvci:01:FR:3NETGO04J3BI#D",
            "co": "FR",
            "dn": 1,
            "dt": "2021-03-09",
            "is": "CNAM",
            "ma": "ORG-100030215",
            "mp": "EU/1/20/1528",
            "sd": 2,
            "tg": "840539006",
            "vp": "1119349007"
        }
    ],
    "dob": "1930-12-05",
    "nam": {
        "fn": "boudehane",
        "gn": "georges",
        "fnt": "BOUDEHANE",
        "gnt": "GEORGES"
    },
    "ver": "1.0.0"
}</code></pre>
                          </div>



                          <div class="timeline-item">
                            <h4 class="item-title">4. Exploration des données</h4>
                            <p class="item-description">
                                Une fois ces données récupérées, il n'y a plus qu'à les comprendre et les afficher correctement : l'Union Européenne fournit une <a href="https://ec.europa.eu/health/sites/default/files/ehealth/docs/covid-certificate_json_specification_en.pdf" target="_blank" rel="nofollow">spécification sur le schéma de données utilisé</a>. Cette spécification permet par exemple de savoir que le champ <code>"dob"</code> correspond à <i>date of birth</i> (i.e. votre date de naissance), que le champ <code>"v"</code> contient des informations de <i>vaccination</i>, etc.
                            </p>
                            <p class="item-description">
                                On peut également faire correspondre certaines données à des références externes, comme par exemple le jeu de données fourni par l'UE : <a href="https://ec.europa.eu/health/sites/default/files/ehealth/docs/digital-green-value-sets_en.pdf" target="_blank" rel="nofollow">Value Sets for EU Digital COVID Certificates</a>. Cela permet par exemple de savoir que <code>"ma": "ORG-100030215"</code> indique que le fabricant du vaccin désigné par le certificat scanné est <i>BioNTech Manufacturing GmbH</i>.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-sm-12 col-md-12 col-lg-12">
                      <div class="block">
                        <div class="center download-resume">
                          <NuxtLink to="/" class="btn btn-secondary">Scanner mon QR Code</NuxtLink>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </section>
            <!-- End of Resume Subpage -->
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  head() {
    return {
        title: 'Comment ça marche ? - DansTonPass',
        url: 'comment-ca-marche'
    }
  },
};
</script>


<style scoped>
.pt-page {
  height: auto;
  position: relative;
  opacity: 1;
  visibility: visible;
}
</style>