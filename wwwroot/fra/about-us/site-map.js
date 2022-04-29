import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "fr",
                pageTitle: "Plan du site", 
                dateModified: "2014-02-03",
                langToggleUrl: "/eng/about-us/site-map"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<div>  <section className="col-md-4">
<section className="col-md-4 module-menu-section">
<h4>Accueil</h4>
<ul>
<li><a href="/fra/">Accueil</a></li>
<li><a href="https://www.canada.ca/fr/nouvelles/recherche-avancee-de-nouvelles/resultats-de-nouvelles.html?_=1498067339228&amp;typ=newsreleases&amp;dprtmnt=canadiannuclearsafetycommission&amp;mnstr=&amp;start=&amp;end=">Communiqués de presse</a></li>
<li><a href="/fra/about-us/">À propos de nous</a><ul>
<li><a href="/fra/about-us/history/">Notre histoire</a></li>
<li><a href="/fra/about-us/our-mission">Notre mission</a></li>
<li><a href="/fra/about-us/organization/">Organisation</a></li>
<li><a href="/fra/about-us/our-experts/"> Spécialistes de la CCSN</a></li>
<li><a href="/fra/about-us/careers-at-cnsc/">Carrières</a></li>
<li><a href="/fra/about-us/values-and-ethics/">Code de valeurs et déthique de la CCSN</a></li>
<li><a href="/fra/about-us/site-map">Plan du site</a></li>
</ul>
</li>
<li><a href="/fra/resources/news-room/">Salle des nouvelles</a><ul>
<li><a href="/fra/resources/news-room/latest-news/">Dernières nouvelles</a></li>
<li><a href="/fra/resources/news-room/news-releases/">Communiqués de presse</a></li>
<li><a href="/fra/resources/news-room/letters/">Lettres</a></li>
</ul>
</li>
<li><a href="/fra/contact-us/">Contactez-nous</a><ul>
<li><a href="/fra/contact-us/external-complaints">Plaintes externes</a></li>
<li><a href="/fra/contact-us/help">Aide</a></li>
</ul>
</li>
<li><a href="/fra/stay-connected/get-involved/">Restez branchés</a><ul>
<li><a href="/fra/stay-connected/get-involved/">Participez</a></li>
<li><a href="/fra/stay-connected/get-involved/subscribe/">Abonnez-vous</a></li>
</ul>
</li>
<li><a href="/fra/terms-and-conditions/">Avis</a></li>
<li><a href="/fra/transparency/">Transparence</a><ul>
<li><a href="/fra/transparency/travel-and-hospitality-expenses">Frais de voyage et d'accueil</a></li>
<li><a href="/fra/transparency/contracts">Contrats</a></li>
<li><a href="/fra/transparency/grants-and-contribution-awards-over-25000">Subventions et contributions supérieures à 25 000 $</a></li>
<li><a href="/fra/transparency/completed-access-to-information-requests">Demandes d'accès à l'information complétées</a></li>
</ul>
</li>
</ul>
</section>
<section className="col-md-4 module-menu-section">
<h4>La Commission</h4>
<ul>
<li><a href="/fra/the-commission/">La Commission</a></li>
<li><a href="/fra/the-commission/whats-new">Activités de la Commission</a></li>
<li><a href="/fra/the-commission/webcasts/">Webdiffusions des séances publiques de la Commission</a><ul>
<li><a href="/fra/the-commission/webcasts/archived/">ARCHIVÉE - Webdiffusion des audiences et des réunions publiques</a></li>
</ul>
</li>
<li><a href="/fra/the-commission/calendar-of-hearings-and-meetings/">Calendrier des séances de la Commission</a></li>
<li><a href="/fra/the-commission/hearings/">Audiences publiques de la Commission</a><ul>
<li><a href="/fra/the-commission/hearings/participate/">Participer à une audience publique de la Commission</a></li>
<li><a href="/fra/the-commission/hearings/documents_search/">Chercher des documents d'audience par titulaire de permis</a></li>
<li><a href="/fra/the-commission/hearings/documents_browse/">Consulter les documents daudience par date</a></li>
</ul>
</li>
<li><a href="/fra/the-commission/meetings/">Réunions publiques de la Commission</a><ul>
<li><a href="/fra/the-commission/meetings/observe/">Assister à une réunion publique de la Commission</a></li>
<li><a href="/fra/the-commission/meetings/documents_search/">Chercher des documents de réunion par type</a></li>
<li><a href="/fra/the-commission/meetings/documents_browse/">Consulter les documents de réunion par date</a></li>
</ul>
</li>
<li><a href="/fra/the-commission/commission-members/">Commissaires</a><ul>
<li><a href="/fra/the-commission/joint_review_panel/">Commissions d'examen conjoint</a></li>
<li><a href="/fra/the-commission/code-of-conduct/">Code de conduite des commissaires</a></li>
</ul>
</li>
<li><a href="/fra/the-commission/intervention/">Formulaire de demande de participation à une audience publique de la Commission</a></li>
<li><a href="/fra/the-commission/participant-funding-program/">Programme de financement des participants</a><ul>
<li><a href="/fra/the-commission/participant-funding-program/opportunities/">Les possibilités de financement</a></li>
<li><a href="/fra/the-commission/participant-funding-program/eligibility-criteria">Critères d'admissibilité</a></li>
<li><a href="/fra/the-commission/participant-funding-program/funding-application-process">Présentation d'une demande de financement </a></li>
<li><a href="/fra/the-commission/participant-funding-program/funding-award-process">Procédure d'octroi de financement </a></li>
<li><a href="/fra/the-commission/participant-funding-program/resources-and-templates">Documents et formulaires du PFP </a></li>
<li><a href="/fra/the-commission/participant-funding-program/terms-and-conditions/">Conditions générales</a></li>
</ul>
</li>
<li><a href="/fra/the-commission/external-advisory-committee-pressure-tubes">Comité consultatif externe sur les tubes de force</a></li>
<li><a href="/fra/the-commission/commission-registry">Greffe de la Commission</a></li>
</ul>
</section>
<section className="col-md-4 module-menu-section">
<h4>Uranium</h4>
<ul>
<li><a href="/fra/uranium/">Uranium</a></li>
<li><a href="/fra/uranium/mines-and-mills/">Mines et usines de concentration d'uranium au Canada</a><ul>
<li><a href="/fra/waste/uranium-mines-and-millswaste/">Déchets des mines et usines de concentration d'uranium</a></li>
<li><a href="/fra/uranium/mines-and-mills/nuclear-facilities/">Installations nucléaires: Mines et usines de concentration d'uranium</a></li>
</ul>
</li>
<li><a href="/fra/uranium/processing/">Installations de traitement de l'uranium et de fabrication de combustible</a><ul>
<li><a href="/fra/uranium/processing/nuclear-facilities/">Installations nucléaires: Installations de traitement de l'uranium et de fabrication
de combustible</a></li>
</ul>
</li>
</ul>
</section>
<section className="col-md-4 module-menu-section">
<h4>Réacteurs</h4>
<ul>
<li><a href="/fra/reactors/">Réacteurs</a></li>
<li><a href="/fra/reactors/power-plants/new-reactor-facilities/">Nouveaux projets d'installations dotées de réacteurs</a></li>
<li><a href="/fra/reactors/power-plants/">Centrales nucléaires</a><ul>
<li><a href="/fra/reactors/power-plants/nuclear-power-plant-safety-systems/">Systèmes de sûreté des centrales nucléaires</a></li>
<li><a href="/fra/reactors/power-plants/refurbishment-and-life-extension/">Réfection et prolongation de la durée de vie d'une centrale nucléaire</a></li>
<li><a href="/fra/reactors/power-plants/convention-on-nuclear-safety/">Convention sur la sûreté nucléaire</a></li>
</ul>
</li>
<li><a href="/fra/reactors/research-reactors/other-reactor-facilities/small-modular-reactors">Petits réacteur modulaires</a></li>
<li><a href="/fra/reactors/research-reactors/">Réacteurs de recherche</a></li>
<li><a href="/fra/reactors/research-reactors/other-reactor-facilities/">Réacteurs en état d'arrêt et déclassés</a><ul></ul>
</li>
</ul>
</section>
<section className="col-md-4 module-menu-section">
<h4>Substances nucléaires</h4>
<ul>
<li><a href="/fra/nuclear-substances/">Substances nucléaires</a></li>
<li><a href="/fra/nuclear-substances/nuclear-facilities/">Installations nucléaires: Traitement des substances nucléaires</a><ul>
<li><a href="/fra/nuclear-substances/nuclear-facilities/nordion/">Nordion (Canada) Inc.</a></li>
<li><a href="/fra/nuclear-substances/nuclear-facilities/best-theratronics/">Best Theratronics Ltd.</a></li>
<li><a href="/fra/nuclear-substances/nuclear-facilities/srb-technologies/">SRB Technologies Inc.</a></li>
<li><a href="/fra/nuclear-substances/nuclear-facilities/shield-source-incorporated/">Shield Source Inc.</a></li>
</ul>
</li>
<li><a href="/fra/nuclear-substances/licensing-nuclear-substances-and-radiation-devices/">Substances nucléaires et appareils à rayonnement</a><ul>
<li><a href="/fra/nuclear-substances/licensing-nuclear-substances-and-radiation-devices/mentorship-program/">Programme de mentorat pour les substances nucléaires et les appareils à rayonnement</a></li>
<li><a href="/fra/nuclear-substances/licensing-nuclear-substances-and-radiation-devices/licensing-process/">Processus dautorisation</a></li>
<li><a href="/fra/nuclear-substances/licensing-nuclear-substances-and-radiation-devices/faqs/">Foire aux questions : Substances nucléaires et appareils à rayonnement</a></li>
<li><a href="/fra/nuclear-substances/licensing-nuclear-substances-and-radiation-devices/licence-search/">Recherche de permis de substances nucléaires et d'appareils à rayonnement</a></li>
</ul>
</li>
<li><a href="/fra/nuclear-substances/exposure-device-operators/">Opérateurs d'appareil d'exposition</a><ul>
<li><a href="/fra/nuclear-substances/exposure-device-operators/industrial-radiography-working-group/">Groupe de travail sur la gammagraphie industrielle</a></li>
</ul>
</li>
<li><a href="/fra/nuclear-substances/licensing-class-II-nuclear-facilities-and-prescribed-equipment/">Installations nucléaires et équipement réglementé de catégorie II</a><ul>
<li><a href="/fra/nuclear-substances/licensing-class-II-nuclear-facilities-and-prescribed-equipment/licencing-class-II-nuclear-facilities/">Délivrance  de permis pour les installations nucléaires de catégorie II</a></li>
<li><a href="/fra/nuclear-substances/licensing-class-II-nuclear-facilities-and-prescribed-equipment/compliance-activities/">Activités visant la conformité pour les installations nucléaires et l'équipement réglementé
de catégorie II</a></li>
<li><a href="/fra/nuclear-substances/licensing-class-II-nuclear-facilities-and-prescribed-equipment/certification-requirements-class-II-prescribed-equipment/">Exigences relatives à lhomologation de léquipement réglementé de catégorie II</a></li>
<li><a href="/fra/nuclear-substances/licensing-class-II-nuclear-facilities-and-prescribed-equipment/consolidated-radiotherapy-facility-licence/">Regroupement de permis</a></li>
<li><a href="/fra/nuclear-substances/licensing-class-II-nuclear-facilities-and-prescribed-equipment/licencing-class-II-nuclear-facilities/financial-guarantees-classII-nuclear-facilities">Garanties financières pour les installations nucléaires et léquipement réglementé
de catégorie II</a></li>
<li><a href="/fra/nuclear-substances/licensing-class-II-nuclear-facilities-and-prescribed-equipment/information-class-II-licensed-facilities/">Information sur les installations autorisées de catégorie II </a></li>
</ul>
</li>
<li><a href="/fra/nuclear-substances/packaging-and-transport-of-nuclear-substances/">Emballage et transport des substances nucléaires</a><ul>
<li><a href="/fra/nuclear-substances/packaging-and-transport-of-nuclear-substances/certification-process-for-transport-packages/">Processus dhomologation des colis de transport</a></li>
</ul>
</li>
<li><a href="/fra/nuclear-substances/import-and-export-controls/">Contrôles de l'importation et de l'exportation</a><ul>
<li><a href="/fra/nuclear-substances/import-and-export-controls/faqs/">FAQs: Contrôles de l'importation et de l'exportation</a></li>
<li><a href="/fra/nuclear-substances/import-and-export-controls/index-faq">FAQs: Contrôles de l'utilisation finale</a></li>
</ul>
</li>
<li><a href="/fra/nuclear-substances/dosimetry-service-providers/">Fournisseurs de services de dosimétrie</a></li>
<li><a href="/fra/nuclear-substances/licensing-nuclear-substances-and-radiation-devices/portable-nuclear-gauges/index  ">Jauges portatives</a></li>
<li><a href="/fra/nuclear-substances/certification-transport-packages-special-radio-inlineactive-material">Colis de transport et matières radioactives sous forme spéciale homologués</a></li>
<li><a href="/fra/nuclear-substances/certification-radiation-devices">Homologation d'appareils à  rayonnement</a></li>
<li><a href="/fra/nuclear-substances/particle-accelerator-facilities/">Installations daccélérateurs de particules</a><ul></ul>
</li>
</ul>
</section>
<section className="col-md-4 module-menu-section">
<h4>Déchets</h4>
<ul>
<li><a href="/fra/waste/">Déchets</a></li>
<li><a href="/fra/waste/high-level-waste/">Déchets radioactifs de haute activité</a><ul></ul>
</li>
<li><a href="/fra/waste/low-and-intermediate-waste/">Déchets de faible et de moyenne activité</a></li>
<li><a href="/fra/waste/uranium-mines-and-millswaste/">Déchets des mines et usines de concentration d'uranium</a></li>
<li><a href="/fra/waste/historic-nuclear-waste/">Déchets nucléaires historiques</a><ul>
<li><a href="/fra/waste/historic-nuclear-waste/port-hope-area-initiative/">Installation nucléaire – projet de Port Hope</a></li>
<li><a href="/fra/waste/historic-nuclear-waste/port-granby-project/">Installation nucléaire – projet de Port Granby</a></li>
</ul>
</li>
<li><a href="/fra/waste/deep-geological-repositories">Dépôts géologiques en profondeur</a></li>
</ul>
</section>
<section className="col-md-4 module-menu-section">
<h4>Ressources</h4>
<ul>
<li><a href="/fra/resources/">Ressources</a></li>
<li><a href="/fra/resources/environmental-protection/">Protection de lenvironnement</a><ul>
<li><a href="/fra/resources/environmental-protection/environmental-assessments/">Évaluations environnementales</a></li>
<li><a href="/fra/resources/environmental-protection/reviews/">Examens de lenvironnement</a></li>
</ul>
</li>
<li><a href="/fra/resources/a-z/">A - Z</a></li>
<li><a href="/fra/resources/aboriginal-consultation/">Mobilisation des Autochtones</a><ul></ul>
</li>
<li><a href="/fra/resources/guest-speakers/">Série des conférenciers de la CCSN</a><ul>
<li><a href="/fra/resources/guest-speakers/guest-speakers-2019">Série des conférenciers 2019</a></li>
<li><a href="/fra/resources/guest-speakers/guest-speakers-2018">Série des conférenciers 2018</a></li>
<li><a href="/fra/resources/guest-speakers/guest-speakers-2017">Série des conférenciers 2017</a></li>
</ul>
</li>
<li><a href="/fra/resources/learning-portal/">Portail d'apprentissage</a><ul>
<li><a href="/fra/resources/canadas-nuclear-history/">L'historique nucléaire du Canada</a></li>
<li><a href="/fra/resources/fact-sheets/">Fiches de renseignements</a></li>
<li><a href="/fra/resources/frequently-asked-questions/">Foire aux questions (FAQ)</a></li>
<li><a href="/fra/resources/infographics/">Infographies</a></li>
<li><a href="/fra/resources/mythbusters/">Démythificateur</a></li>
<li><a href="/fra/resources/videos/">Vidéos</a></li>
<li><a href="/fra/resources/maps-of-nuclear-facilities/">Carte des installations réglementées par la CCSN</a></li>
<li><a href="/fra/resources/health/">Études sur la santé</a></li>
</ul>
</li>
<li><a href="/fra/resources/forms/">Formulaires</a><ul></ul>
</li>
<li><a href="/fra/resources/fukushima/">Fukushima</a><ul></ul>
</li>
<li><a href="/fra/resources/international-cooperation/">Coopération internationale</a><ul>
<li><a href="/fra/resources/international-cooperation/international-agreements">Ententes internationales</a></li>
</ul>
</li>
<li><a href="/fra/resources/nuclear-facilities/">Installations nucléaires au Canada</a></li>
<li><a href="/fra/resources/status-of-new-nuclear-projects/">Nouveaux projets nucléaires</a><ul>
<li><a href="/fra/resources/status-of-new-nuclear-projects/darlington/">Installation nucléaire - Projet de nouvelle centrale nucléaire de Darlington</a></li>
<li><a href="/fra/resources/status-of-new-nuclear-projects/deep-geologic-repository/">Projet de stockage dans des couches géologiques profondes d'Ontario Power Generation</a></li>
<li><a href="/fra/resources/status-of-new-nuclear-projects/matoush/">Projet dexploration uranifère Matoush</a></li>
<li><a href="/fra/resources/status-of-new-nuclear-projects/millenium/">Projet de la mine duranium Millennium</a></li>
<li><a href="/fra/resources/status-of-new-nuclear-projects/midwest/">Projet Midwest : extraction et concentration</a></li>
</ul>
</li>
<li><a href="/fra/resources/news-room/">Salle des nouvelles</a><ul>
<li><a href="/fra/resources/news-room/feature-articles/">Articles en vedette</a></li>
<li><a href="/fra/resources/news-room/letters/">Lettres</a></li>
<li><a href="/fra/resources/news-room/nsdf-media-kit">Trousse des médias : Installation de gestion des déchets près de la surface</a></li>
<li><a href="/fra/resources/news-room/ukraine-media-kit">Trousse des médias : Mises à jour de la CCSN sur linvasion de lUkraine par la Russie</a></li>
</ul>
</li>
<li><a href="/fra/resources/presentations/2022">Présentations</a><ul></ul>
</li>
<li><a href="/fra/resources/protocols/">Protocoles</a></li>
<li><a href="/fra/resources/publications/">Publications</a><ul>
<li><a href="/fra/resources/publications/publicsearchprocess">Liste des publications de la CCSN</a></li>
<li><a href="/fra/resources/publications/reports/research-reports/">Rapports de recherche</a></li>
<li><a href="/fra/resources/publications/reports/">Rapports spéciaux sur le secteur nucléaire au Canada</a></li>
<li><a href="/fra/resources/publications/reports/regulatory-oversight-reports/">Rapports de surveillance réglementaire</a></li>
<li><a href="/fra/resources/publications/reports/ssts/">Rapports sur le Système de suivi des sources scellées</a></li>
<li><a href="/fra/resources/publications/reports/lost_stolen_ss_rd/">Rapports sur la perte ou le vol de sources scellées et d'appareils à rayonnement</a></li>
<li><a href="/fra/resources/publications/reports/corporate-reports">Planification et reddition de compte</a></li>
</ul>
</li>
<li><a href="/fra/resources/radiation/">Rayonnement</a><ul>
<li><a href="/fra/resources/radiation/introduction-to-radiation/what-is-radiation">Quest-ce que le rayonnement?</a></li>
<li><a href="/fra/resources/radiation/introduction-to-radiation/atoms-nuclides-radioisotopes">L'atome – Nucléides et radio-isotopes</a></li>
<li><a href="/fra/resources/radiation/introduction-to-radiation/types-and-sources-of-radiation">Catégories et sources de rayonnement</a></li>
<li><a href="/fra/resources/radiation/introduction-to-radiation/radiation-doses">Doses de rayonnement</a></li>
<li><a href="/fra/resources/radiation/introduction-to-radiation/radiation-health-effects">Effets biologiques du rayonnement</a></li>
<li><a href="/fra/resources/radiation/introduction-to-radiation/protecting-canadians">Protection des Canadiens</a></li>
<li><a href="/fra/resources/radiation/introduction-to-radiation/protecting-workers">Protection des travailleurs</a></li>
<li><a href="/fra/resources/radiation/introduction-to-radiation/cnscs-role">Rôle de la CCSN</a></li>
<li><a href="/fra/resources/radiation/introduction-to-radiation/nuclear-and-radiation-glossary">Glossaire sur le nucléaire et le rayonnement</a></li>
</ul>
</li>
<li><a href="/fra/resources/research/">Information scientifique et technique</a><ul>
<li><a href="/fra/resources/research/research-and-support-program/">Programme de recherche et de soutien</a></li>
<li><a href="/fra/resources/research/technical-papers-and-articles/">Documents, présentations et articles techniques</a></li>
</ul>
</li>
</ul>
</section>
<section className="col-md-4 module-menu-section">
<h4>CCSN en ligne</h4>
<ul>
<li><a href="/cnsconline/fl/index-fra">CCSN en ligne</a></li>
<li><a href="/cnsconline/npe-npq/fra/">Le nucléaire: fait partie de la vie quotidienne</a></li>
<li><a href="/cnsconline/osf-vst/fra/">La sûreté avant tout</a></li>
<li><a href="/cnsconline/com/fra/">La Commission</a></li>
<li><a href="/cnsconline/ionizing-or-not/fra/">Le rayonnement : Ionisant ou non?</a></li>
<li><a href="/cnsconline/ff1-mr1/fra/">Mythe ou réalité : Le nucléaire dans la vie quotidienne au Canada</a></li>
<li><a href="/cnsconline/cin-icc/fra/">Inspection d'une centrale CANDU</a></li>
<li><a href="/cnsconline/cee-eec/fra/">Simulation d'accidents graves dans une centrale CANDU</a></li>
<li><a href="/cnsconline/ff5-mr5/fra/">Mythe ou réalité : L'énergie nucléaire</a></li>
<li><a href="/cnsconline/oum-euc/fra/">Survol de l'extraction d'uranium</a></li>
<li><a href="/cnsconline/lumc-cmuc/fra/">Cycle de vie d'une mine d'uranium au Canada</a></li>
<li><a href="/cnsconline/pum-pmu/fra/">Parties d'une mine d'uranium</a></li>
<li><a href="/cnsconline/ff3-mr3/fra/">Mythe ou réalité : L'exploitation minière</a></li>
<li><a href="/cnsconline/doses/fra/">Doses de rayonnement</a></li>
<li><a href="/cnsconline/ff4-mr4/fra/">Mythe ou réalité : La physique nucléaire 101</a></li>
<li><a href="/cnsconline/ff9-mr9/fra/">Mythe ou réalité : Cyclotrons</a></li>
<li><a href="/cnsconline/ff10-mr10/fra/">Mythe ou réalité : Centres de traitement du cancer</a></li>
<li><a href="/cnsconline/ff2-mr2/fra/">Mythe ou réalité : La réglementation au fil du temps</a></li>
<li><a href="/cnsconline/heu/fra/">Le transport sécuritaire de l'UHE</a></li>
<li><a href="/cnsconline/ff11-mr11/fra/">Mythe ou réalité : Le transport de l'UHE</a></li>
</ul>
</section> </section> <section className="col-md-4">
<section className="col-md-4 module-menu-section">
<h4>Lois et règlements</h4>
<ul>
<li><a href="/fra/acts-and-regulations/">Lois et règlements</a></li>
<li><a href="/fra/acts-and-regulations/acts/">Lois</a><ul></ul>
</li>
<li><a href="/fra/acts-and-regulations/regulations/">Liste des règlements</a></li>
<li><a href="/fra/acts-and-regulations/regulatoryplan/">Plan prospectif de la réglementation</a><ul>
<li><a href="/fra/acts-and-regulations/regulatoryplan/forward-regulatory-plan-details/">Plan prospectif de la réglementation : 2021–2023</a></li>
</ul>
</li>
<li><a href="/fra/acts-and-regulations/service-standards/">Normes de service</a><ul></ul>
</li>
<li><a href="/fra/acts-and-regulations/regulatory-framework/">Aperçu du cadre de réglementation</a><ul>
<li><a href="/fra/acts-and-regulations/regulatory-framework/regulatory-framework-plan">Plan du cadre de réglementation de la CCSN</a></li>
</ul>
</li>
<li><a href="/fra/acts-and-regulations/regulatory-documents/">Documents d'application de la réglementation</a><ul></ul>
</li>
<li><a href="/fra/acts-and-regulations/consultation/">Consultation</a><ul>
<li><a href="/fra/acts-and-regulations/consultation/history/">Parcourez l'historique des documents de travail</a></li>
<li><a href="/fra/acts-and-regulations/consultation/history-regs/">Parcourir l'historique des projets de réglementation</a></li>
</ul>
</li>
<li><a href="/fra/acts-and-regulations/memorandums-of-understanding/">Accords intérieurs</a><ul></ul>
</li>
<li><a href="/fra/acts-and-regulations/directives-and-international-treaties/">Directives et traités internationaux</a></li>
<li><a href="/fra/acts-and-regulations/event-reports-for-major-nuclear-facilities/">Rapports d'événements liés au nucléaire</a><ul></ul>
</li>
<li><a href="/fra/acts-and-regulations/regulatory-action/">Mesure réglementaire</a><ul></ul>
</li>
<li><a href="/fra/acts-and-regulations/compliance-verification-and-enforcement/">Approche de la CCSN en matière de vérification de la conformité et d'application de
la loi</a></li>
<li><a href="/fra/acts-and-regulations/cost-recovery-program/">Programme de recouvrement des coûts</a><ul></ul>
</li>
</ul>
</section> </section>  </div>
                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }