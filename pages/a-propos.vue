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
            <!-- Contact Subpage -->
            <section class="pt-page">
              <div class="section-inner custom-page-content">
                <div class="page-header color-1">
                  <h2>DansTonPass — A propos</h2>
                </div>
                <div class="page-content">
                  <div class="row">
                    <div class="col-sm-6 col-md-6">
                      <div class="block-title">
                        <h3>Quel est le <span>but</span> de DansTonPass ?</h3>
                      </div>
                      <p>
                        DansTonPass est avant tout un petit projet individuel à
                        but pédagogique. A une époque où la technologie est
                        omniprésente et ne nous laisse parfois pas le temps de
                        comprendre comment ni pourquoi elle intervient, il me
                        paraissait essentiel de proposer un outil permettant à
                        tout le monde de pouvoir explorer son Pass Sanitaire
                        (i.e. son QR Code) afin de démystifier son utilisation
                        et de voir concrètement quelles informations ce dernier
                        contient.<br />
                      </p>

                      <div class="block-title">
                        <h3>
                          Qui aura accès à mes
                          <span>données personnelles</span> ?
                        </h3>
                      </div>
                      <p>
                        DansTonPass ne conserve et ne transfère aucune donnée.
                        Toutes les données affichées sur l'outil DansTonPass
                        proviennent directement de votre QR Code et sont
                        enrichies à l'aide de sources tierces. Par exemple, une
                        source permet de déterminer que le "code maladie"
                        <i>840539006</i> désigne la COVID-19, une autre permet
                        de savoir que l'organisation <i>ORG-100030215</i> est
                        Biontech, etc.
                      </p>

                      <div class="block-title">
                        <h3>Le <span>code source</span> est-il disponible ?</h3>
                      </div>
                      <p>
                        Absolument ! DansTonPass est un projet entièrement Open
                        Source qui n'en est d'ailleurs qu'à ses balbutiements.
                        Toute remarque, suggestion ou contribution est la
                        bienvenue ;-) (<a
                          href="https://github.com/borisflesch/dans-ton-pass"
                          target="_blank"
                          >GitHub</a
                        >)
                      </p>
                    </div>
                    <div class="col-sm-6 col-md-6">
                      <div class="block-title">
                        <h3>
                          Puis-je <span>vérifier</span> un Pass avec cet outil ?
                        </h3>
                      </div>
                      <p>
                        Non ! DansTonPass est (pour l'instant) uniquement
                        destiné à explorer les données d'un Pass Sanitaire et
                        non à vérifier la <i>signature</i> permettant d'assurer
                        l'authenticité et l'intégrité du pass. Pour effectuer
                        cette vérification - c'est-à-dire s'assurer qu'un Pass
                        Sanitaire n'ait pas été falsifié ou contre-fait - la
                        meilleure option reste d'utilier l'application
                        TousAntiCovid Verif.
                      </p>

                      <div class="block-title">
                        <h3>
                          Y'a-t-il des <span>mises à jour</span> prévues ?
                        </h3>
                      </div>
                      <p>
                        À ce jour, DansTonPass permet uniquement de consulter
                        les données de son Pass Sanitaire (à travers son QR
                        Code). À l'avenir, DansTonPass devra se focaliser sur
                        l'explication de chaque paramètre. Le but premier de
                        l'outil étant pédagogique, il est primordial que les
                        utilisateurs comprennent les informations qui leur sont
                        présentées.
                      </p>

                      <div class="block-title">
                        <h3>Qui a <span>créé</span> DansTonPass ?</h3>
                      </div>
                      <p>
                        DansTonPass a été créé par Boris Flesch (moi-même).
                        Co-fondateur de l'entreprise de services informatiques
                        <a href="https://singlequote.net" target="_blank"
                          >Single Quote</a
                        >, je travaille également au Trinity College Dublin sur
                        l'application de la Blockchain aux consentements des
                        patients dans le cadre d'études cliniques. Je porte
                        ainsi une attention toute particulière à la sécurité, la
                        confidentialité mais aussi la compréhension des systèmes
                        et données informatiques.
                        <br />
                        Contact : fleschb [at] tcd [dot] ie
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <!-- End Contact Subpage -->
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
        title: 'A propos - DansTonPass',
        url: 'a-propos'
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