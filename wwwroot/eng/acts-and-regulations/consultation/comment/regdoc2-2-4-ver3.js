import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "REGDOC-2.2.4: Fitness for Duty, Volume II: Managing Alcohol and Drug Use, version 3", 
                dateModified: "2020-04-09",
                langToggleUrl: "/fra/acts-and-regulations/consultation/comment/regdoc2-2-4-ver3"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<h2>Preface</h2>
<p>This regulatory document is part of the CNSC&rsquo;s human
performance management series of regulatory documents, which also covers human
factors, personnel training and personnel certification. The full list of
regulatory document series is included at the end of this document and can also
be found on the CNSC&rsquo;s
website.</p>
<p>Regulatory document REGDOC-2.2.4, <i>Fitness for Duty, Volume II: Managing Alcohol and
Drug Use, version
<mark>3</mark>
</i> sets out
requirements and guidance for managing fitness for duty of workers in relation
to alcohol and drug use and abuse at all high-security sites, as defined in the <i>Nuclear Security Regulations</i>. </p>
<p>REGDOC-2.2.4, <i>Fitness
for Duty, Volume II, version
<mark>3</mark>
</i>is
intended to form part of the licensing basis for a regulated facility or
activity within the scope of the document. It is intended for inclusion in
licences as either part of the conditions and safety and control measures in a
licence, or as part of the safety and control measures to be described in a
licence application and the documents needed to support that application. </p>
<p>The
CNSC&rsquo;s regulatory framework includes CNSC regulatory documents as well as
national and international standards. Specifically, the Canadian Standards
Association (CSA Group) N-series standards provide an interlinked set of
regulatory requirements for the management of nuclear facilities and
activities. The CSA N286 standard provides an overall management framework and
direction to develop and implement sound management practices and controls for
the licensing basis. This regulatory document does not duplicate the generic
requirements of CSA N286. However, it provides more specific direction for
those requirements.</p>
<p>For
proposed new regulated facilities and activities, this document will be used to
assess licence applications.</p>
<p>Guidance
contained in this document exists to inform the applicant, to elaborate further
on requirements or to provide direction to licensees and applicants on how to
meet requirements. It also provides more information about how CNSC staff
evaluate specific problems or data during their review of licence applications.
Licensees are expected to review and consider guidance; should they choose not
to follow it, they should explain how their chosen alternate approach meets
regulatory requirements.</p>
<p>For
existing facilities: The requirements contained in this document do not apply
unless they have been included, in whole or in part, in the licence or
licensing basis.</p>
<p>A
graded approach, commensurate with risk, may be defined and used when applying
the requirements and guidance contained in this regulatory document. The use of
a graded approach is not a relaxation of requirements. With a graded approach,
the application of requirements is commensurate with the risks and particular
characteristics of the facility or activity. </p>
<p>
<mark>For information on the
implementation of regulatory documents and on the graded approach, see
REGDOC-3.5.3, <i>Regulatory Fundamentals</i>.</mark>
</p>
<div className="alert alert-info module-simplify">
<p>
<mark>Important note: Where referenced in a licence either directly or
indirectly (such as through licensee- referenced documents), this document is
part of the licensing basis for a regulated facility or activity.</mark>
</p>
<p>
<mark>The licensing basis sets the
boundary conditions for acceptable performance at a regulated facility or
activity, and establishes the basis for the CNSC&rsquo;s compliance program for that
regulated facility or activity.</mark>
</p>
<p>
<mark>Where this document is
part of the licensing basis, the</mark>
words &ldquo;shall&rdquo;
<mark>and &ldquo;must&rdquo; are</mark>
used to express requirements to
be satisfied by the licensee or licence applicant. &ldquo;Should&rdquo; is used to express
guidance or that which is advised. &ldquo;May&rdquo; is used to express an option or that
which is advised or permissible within the limits of this regulatory document.
&ldquo;Can&rdquo; is used to express possibility or capability.</p>
<p>Nothing contained in this document is to be
construed as relieving any licensee from any other pertinent requirements. It
is the licensee&rsquo;s responsibility to identify and comply with all applicable
regulations and licence conditions.</p>
</div><div>
<p>Table of Contents</p>
<ul>
<li><a href="#sec1">1. Introduction</a>
<ul>
<li><a href="#sec1-1">1.1 Purpose</a></li>
<li><a href="#sec1-2">1.2 Scope</a></li>
<li><a href="#sec1-3">1.3 Relevant   legislation</a></li>
<li><a href="#sec1-4">1.4 Relevant   international standards and guidelines</a></li>
</ul>
</li>
<li><a href="#sec2">2. Background</a></li>
<li><a href="#sec3">3. Managing Alcohol and Drug   Use</a>
<ul>
<li><a href="#sec3-1">3.1 Policy   Statement </a></li>
<li><a href="#sec3-2">3.2 Fitness-for-duty program.</a></li>
<li><a href="#sec3-3">3.3 Authorities,   accountabilities and responsibilities</a></li>
<li><a href="#sec3-4">3.4 General   fitness-for-duty process</a></li>
<li><a href="#sec3-5">3.5 Access   to assistance</a></li>
<li><a href="#sec3-6">3.6 Behavioural   observation</a>
<ul>
<li><a href="#sec3-6-1">3.6.1 Peer   observation and reporting</a></li>
<li><a href="#sec3-6-2">3.6.2 Supervisory   awareness program.</a></li>
</ul>
</li>
<li><a href="#sec3-7">3.7 Assessment   and continual improvement </a></li>
<li><a href="#sec3-8">3.8 Training,   education, and awareness</a></li>
</ul>
</li>
<li><a href="#sec4">4. Positions Subject to   Alcohol and Drug Testing</a>
<ul>
<li><a href="#sec4-1">4.1 Safety-critical   and safety-sensitive positions </a></li>
</ul>
</li>
<li><a href="#sec5">5. Alcohol and Drug-Testing   Requirements by Circumstance and Workgroup</a>
<ul>
<li><a href="#sec5-1">5.1 Pre-placement   alcohol and drug testing</a></li>
<li><a href="#sec5-2">5.2 Reasonable   grounds alcohol and drug testing</a></li>
<li><a href="#sec5-3">5.3 Post-incident   alcohol and drug testing</a></li>
<li><a href="#sec5-4">5.4 Follow-up   and return-to-duty alcohol and drug testing</a></li>
<li><a href="#sec5-5">5.5 Random   alcohol and drug testing</a></li>
</ul>
</li>
<li><a href="#sec6">6. Alcohol- and Drug-Testing Processes</a></li>
<li><a href="#sec6-1">6.1 Breath   alcohol-testing process</a></li>
<li><a href="#sec6-2">6.2 <s>
<mark>Urine</mark>
</s> Drug-testing process</a>
<ul>
<li>
<mark><a href="#sec6-2-1">6.2.1 Point of collection testing</a></mark>
</li>
</ul>
</li>
<li><a href="#sec6-3">6.3 Process for positive alcohol and drug tests </a></li>
<li><a href="#sec6-4">6.4 Substance abuse evaluation process</a></li>
<li><a href="#sec6-5">6.5 Investigative and alcohol and drug screening tools</a></li>
<li><a href="#sec6-6">6.6 Records</a></li>
<li><a href="#anxA">Appendix A: Alcohol and Drug Tests by Workgroup and Circumstance</a></li>
<li><a href="#anxB">Appendix B: Alcohol- and Drug-Testing Thresholds</a>
<ul>
<li><a href="#anxB-1">B.1 Blood alcohol concentration ranges and associated actions </a></li>
<li><a href="#anxB-2">B.2
<mark>Urine</mark>
immunoassay screening</a></li>
<li><a href="#anxB-3">B.3
<mark>Urine</mark>
GC-MS and LC-MS/MS confirmation</a></li>
<li><a href="#anxB-4">B.4
<mark>Urine</mark>
recommended dilution protocol cut-off concentrations</a></li>
<li><a href="#anxB-5">B.5
<mark>Oral fluid immunoassay screening</mark>
</a></li>
<li><a href="#anxB-6">B.6
<mark>Oral fluid GC-MS and LC-MS/MS confirmation</mark>
</a></li>
</ul>
</li>
<li><a href="#abbreviations">Abbreviations</a></li>
<li><a href="#glossary">Glossary</a></li>
<li><a href="#references">References</a></li>
<li><a href="#additional">Additional Information</a></li>
</ul>
</div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="1"></div>
<h2 id="sec1">1. Introduction</h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="1.1"></div>
<h3 id="sec1-1">1.1 Purpose</h3>
<p>This regulatory document establishes requirements and
guidance for managing worker fitness for duty with respect to alcohol and drug
use.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="1.2"></div>
<h3 id="sec1-2">1.2 Scope</h3>
<p>This regulatory document is intended for high-security
sites as defined in the <i><a href="http://laws-lois.justice.gc.ca/eng/regulations/sor-2000-209/page-1.html">Nuclear Security</a></i><a href="http://laws-lois.justice.gc.ca/eng/regulations/sor-2000-209/page-1.html"> <i>Regulations</i></a>. The
requirements and guidance in this document apply to workers holding safety-critical or safety-sensitive positions as described in section 4.1.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="1.3"></div>
<h3 id="sec1-3">1.3 Relevant legislation</h3>
<p>The following provisions of the <i><a href="https://laws-lois.justice.gc.ca/eng/acts/N-28.3/">Nuclear Safety and Control Act</a></i> (NSCA)
and the regulations made under it are relevant to this document:</p>
<ul>
<li>Subparagraph 9(a)(i) of the NSCA
states that one of the objects of the Commission is &ldquo;to regulate the
development, production and use of nuclear energy and the production,
possession and use of nuclear substances, prescribed equipment and prescribed
information in order to prevent unreasonable risk, to the environment and to
the health and safety of persons, associated with that development, production,
possession or use&rdquo;.</li>
<li>Paragraph 12(1)(a) of the<i> <a href="https://laws-lois.justice.gc.ca/eng/regulations/SOR-2000-202/index.html">General Nuclear Safety and Control Regulations</a></i> requires that
every licensee shall &ldquo;ensure the presence of a sufficient number of qualified
workers to carry on the licensed activity safely and in accordance with the
Act, the regulations made under the Act and the licence&rdquo;.</li>
<li>Paragraph 12(1)(b) of the <i>General Nuclear Safety and Control Regulations </i>requires
that every licensee shall &ldquo;train the workers to carry on the licensed activity
in accordance with the Act, the regulations made under the Act and the licence&rdquo;.</li>
<li>Paragraph 17(b) of the <i>General Nuclear Safety and Control Regulations </i>requires
that every worker shall &ldquo;comply with the measures established by the licensee
to protect the environment and the health and safety of persons, maintain
security, control the levels and doses of radiation, and control releases of
radioactive nuclear substances and hazardous substances into the environment&rdquo;.</li>
<li>Subparagraph 17(c)(i) of the <i>General Nuclear Safety and Control Regulations </i>requires
that every worker shall &ldquo;promptly inform the licensee or the worker&rsquo;s
supervisor of any situation in which the worker believes there may be a
significant increase in the risk to the environment or the health and safety of persons&rdquo;.</li>
<li>Paragraph 17(e) of the <i>General Nuclear Safety and Control Regulations </i>requires
that every worker shall &ldquo;take all reasonable precautions to ensure the worker&rsquo;s
own safety, the safety of the other persons at the site of the licensed
activity, the protection of the environment, the protection of the public and
the maintenance of the security of nuclear facilities and of nuclear substances&rdquo;.</li>
<li>
<mark>Paragraph
3(d.1) of the <i><a href="http://laws-lois.justice.gc.ca/eng/regulations/SOR-2000-204/index.html">Class I Nuclear Facilities
Regulations</a></i> requires that an
application for a licence to operate a Class I nuclear facility shall contain
&ldquo;the proposed human performance program for the activity to be licensed,
including measures to ensure workers&rsquo; fitness for duty&rdquo;.</mark>
</li>
<li>Paragraph 6(d) of the <i>Class I Nuclear Facilities Regulations</i> stipulates
that an application for a licence to operate a Class I nuclear facility shall
contain &ldquo;the proposed measures, policies, methods and procedures for operating
and maintaining the nuclear facility&rdquo;.</li>
<li>Section 18.4 of the <i>Nuclear Security Regulations </i>states that
&ldquo;an authorization referred to in section 18 may be issued for any term not
exceeding five years and shall be subject to any terms and conditions necessary
to minimize the risk to the security of the facility.&rdquo;</li>
<li>Section 38 of the <i>Nuclear Security Regulations </i>requires that
&ldquo;every licensee shall develop a supervisory awareness program and implement it
on an ongoing basis to ensure that its supervisors are trained to recognize
behavioural changes in all personnel, including contractors, that could pose a
risk to security at a facility at which it carries on licensed activities.&rdquo;</li>
</ul>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="1.4"></div>
<h3 id="sec1-4">1.4 Relevant international standards and
guidelines</h3>
<p>The International Atomic
Energy Agency (IAEA) has identified the need for nuclear facilities to address
fitness for duty. The IAEA&rsquo;s framework that supports fitness for duty is
embedded in two safety requirement documents [1, 2] and in numerous safety
guides [3&#8209;6].</p>
<p>For all nuclear
facilities, the IAEA recommends that regulators inspect licensees&rsquo;
fitness-for-duty programs and evaluate their effectiveness [3]. Regulators are
also to ensure nuclear facility operators have &ldquo;guidelines on fitness for duty
in relation to hours of work, health, and substance abuse&rdquo; [4].</p>
<p>With respect to drugs and alcohol, the IAEA recommends
that all nuclear facilities have guidelines on fitness for duty related to
substance use [5]. The IAEA further recommends that licensees have methods for
identifying those with a tendency toward alcohol or drug abuse, and that administrative
controls be established to allow the fitness for duty of shift personnel to be
observed, verified and controlled. As well, the IAEA also advises that
&ldquo;personnel prone to drug or alcohol abuse should not be employed for safety
related tasks&rdquo; [6].</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="2"></div>
<h2 id="sec2">2. Background</h2>
<p>Human performance is a key contributor to the safety
and security of nuclear facilities. One factor that affects human performance
is fitness for duty. The adoption of measures that monitor alcohol and drug use
or abuse is a key component of ensuring worker fitness for duty. For the
purposes of this document, fitness for duty is defined as:</p>
<blockquote>
<p>A condition in which workers are physically,
physiologically, and psychologically capable of competently and safely
performing their tasks.</p>
</blockquote>
<p>The implementation of an effective fitness-for-duty
program relating to alcohol and drug use and abuse provides reasonable
assurance that workers have the capacity, and are free of impairment that could
hinder their ability, to competently and safely perform the duties of their
position, and as such do not pose a safety or security risk.</p>
<p>The fitness-for-duty requirements herein in relation
to alcohol and drug use and abuse represent reasonable occupational and
operational requirements for the applicable worker population. An employer is
responsible for assessing the extent, where considered necessary, of the duty
to accommodate. In fulfilling the duty to accommodate, an employer is required
to accommodate a worker whose need(s) are based on any of the grounds of
discrimination in the <i>Canadian Human Rights
Act </i>&ndash; for example, someone identified with a disability &ndash; to the
point where accommodation would cause undue hardship for the employer [7]. The
licensee is also responsible for ensuring that any duties assigned to a worker
do not pose a risk to his or her health or safety, the health or safety of
others, the safety of the facility and the environment, and do not impact the
effectiveness of the licensee&rsquo;s operation.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3"></div>
<h2 id="sec3">3. Managing Alcohol and Drug Use</h2>
<p>With respect to alcohol and drug use and abuse,
licensees shall manage the fitness for duty of applicable workers (see section
4.1) who could pose a risk to nuclear safety or security in accordance with
their management system as defined in the licensee&rsquo;s licensing basis. The
following subsections specify how the management system&rsquo;s generic requirements
apply to managing fitness for duty in relation to alcohol and drug use and
abuse.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.1"></div>
<h3 id="sec3-1">3.1 Policy Statement</h3>
<p>Licensees shall
establish, implement and maintain clear fitness-for-duty policy statements regarding
alcohol and drug use and abuse. The policy statements shall provide workers
with information on what is expected of them and the consequences that may
result from policy violations.</p>
<p><strong>Guidance</strong></p>
<p>Licensees&rsquo; alcohol- and drug-related policy statements
should:</p>
<ol>
<li>prohibit reporting to work or remaining at work
under the influence of alcohol, cannabis,
<mark>cannabis-derived products</mark>, or illicit drugs</li>
<li>prohibit bringing, keeping or consuming alcohol, <mark>cannabis, cannabis-derived products</mark>, illicit
drugs, drug paraphernalia or prescribed medications without a legal
prescription on the grounds of the high-security site</li>
<li>reinforce the responsible use of prescription or
over-the-counter medications, or mood-altering substances, and the process to
follow if a worker uses medication that impairs or has the potential to impair
his or her ability to competently and safely perform his or her duties</li>
<li>describe the responsibilities of workers,
supervisors, oversight personnel and escorts to report fitness-for-duty
concerns in relation to alcohol and drug use and abuse</li>
<li>
<mark>describe the
expectations regarding the reasonable length of time that workers should
abstain from the use of alcohol and/or drugs prior to reporting to work, with
due consideration of longer-term impairing effects.</mark>
</li>
</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.2"></div>
<h3 id="sec3-2">3.2 Fitness-for-duty program</h3>
<p>With respect to alcohol and drug use and abuse, a
licensee shall implement a documented fitness-for-duty program that includes a
set of coordinated measures designed to provide reasonable assurance that
applicable workers (see section 4.1) are capable of performing their tasks and
as such do not pose a risk to their safety, the safety of others, or the safety
or security of the facility. Note: In implementing the fitness-for-duty
program, licensees are required to consider all relevant privacy-related
legislation.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.3"></div>
<h3 id="sec3-3">3.3 Authorities, accountabilities and responsibilities</h3>
<p>With respect to alcohol and drug use and abuse,
licensees shall define and document the authorities, accountabilities, and
responsibilities for those involved with managing worker fitness for duty
including the interfaces with external organizations.</p>   <strong> <p>Guidance</p></strong>
<p>With respect to alcohol and drug use and abuse,
licensees should define and document the authorities, accountabilities, and
responsibilities of the following, if applicable:</p>
<ul>
<li>senior management</li>
<li>supervisors, oversight personnel and escorts</li>
<li>workers</li>
<li>security personnel</li>
<li>human resources</li>
<li>fitness-for-duty program administrators</li>
<li>duly qualified health professionals</li>
<li>duly qualified forensic toxicologists</li>
<li>duly qualified pharmacists</li>
<li>breath alcohol technicians</li>
<li>
<mark>specimen <s>urine</s></mark>
collectors</li>
<li>medical review officers (MROs)</li>
<li>accredited laboratories</li>
<li>third-party providers</li>
<li>employee assistance program (EAP) providers</li>
<li>substance abuse evaluation providers</li>
</ul>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.4"></div>
<h3 id="sec3-4">3.4 General fitness-for-duty process</h3>
<p>Licensees shall establish, implement and maintain a
process to identify and manage applicable workers who have temporary or ongoing
limitations that may make them incapable of performing their assigned duties
competently and safely due to alcohol or drug use or abuse. This process shall
include actions for a supervisor to take if he or she believes &ndash; through
self-reporting, peer reporting, observed behaviour, physical condition, a
fitness-for-duty screening or assessment, a health professional&rsquo;s report or after
receiving credible information &ndash; that a worker may be unable to competently and
safely perform his or her assigned duties because of alcohol or drug use or
abuse.</p>
<p>Licensees shall establish, implement and maintain a
referral process to guide workers to seek assistance from the appropriate
resources.</p>
<strong><p>Guidance</p></strong>
<p>The fitness-for-duty process may include both
self-referrals and directed referrals to appropriate fitness-for-duty
resources, such as health professionals, employee assistance program provider
or testing program through the fitness-for duty administrator. Processes should
identify the conditions that warrant for-cause assessments.</p>
<p>Prior to a mandatory referral based on observed
behaviour, a fitness-for-duty screening should be conducted. The screening
should be based on face-to-face interaction between the worker, a supervisor
and at least one other person. A screening checklist should be used.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.5"></div>
<h3 id="sec3-5">3.5 Access to assistance</h3>
<p>Licensees shall ensure that applicable workers have
access to an EAP. EAPs shall be designed to achieve early intervention and
provide confidential assistance.</p>
<strong><p>Guidance</p></strong>
<p>The EAP should offer
confidential assessment, short-term counselling, referral services and
treatment monitoring to workers who have problems, including alcohol or drug
use or abuse, that could adversely affect their ability to competently and
safely perform their duties.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.6"></div>
<h3 id="sec3-6">3.6 Behavioural observation</h3>
<p>Licensees shall ensure that applicable workers are
subject to behavioural observation, specifically related to alcohol or drug use
or abuse.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.6.1"></div>
<h4 id="sec3-6-1">3.6.1 Peer observation and reporting</h4>
<p>Licensees shall ensure that expectations regarding
peer observation and reporting are included in their fitness-for-duty processes
and aligned with their respective policy statements on peer observation for
potential alcohol or drug use or abuse issues.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.6.2"></div>
<h4 id="sec3-6-2">3.6.2 Supervisory awareness program</h4>
<p>As indicated in section 1.3 of this document, section
38 of the <i>Nuclear Security Regulations </i>requires
licensees to develop a supervisory awareness program. This is to ensure that supervisors
are trained to recognize behavioural changes in all personnel, including
contractors, that could pose a risk to security at a facility.</p>
<p>Supervisory awareness training shall be delivered to
supervisors and other designated personnel identified by the licensee.</p>
<strong><p>Guidance</p></strong>
<p>Observations related to a
worker&rsquo;s fitness for duty related to alcohol or drug use or abuse should be
made in a variety of situations, such as during task assignments, observation
and coaching sessions, field inspections, pre-job briefings, performance
reviews, one-on-one sessions, shift turnovers and incident investigations.</p>
<p>Aberrant behaviour and incidents related to alcohol
and drug use and abuse should be documented and trended to facilitate
appropriate intervention strategies based on risk.</p>
<p>Supervisory awareness training may include the
following aspects:</p>
<ul>
<li>knowledge of the authorities,
accountabilities, and responsibilities of supervisors and other designated
personnel with respect to behavioural observation</li>
<li>knowledge of the interfaces between
related fitness-for-duty policies, procedures, and supporting programs</li>
<li>the ability to recognize behaviours
that may indicate the possible use, sale, or possession of illegal drugs; use
or possession of alcohol or impairment from prescription and over-the-counter
medication onsite or while on duty</li>
</ul>
<p>Further information on observed behaviours can be
found in section 5.2.
<mark>&ldquo;<s>Reasonable grounds
alcohol and drug testing</s>&rdquo;</mark>
</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.7"></div>
<h3 id="sec3-7">3.7 Assessment and continual improvement</h3>
<p>An assessment of the
fitness-for-duty program related to alcohol and drug use and abuse and the
supervisory awareness program shall be performed periodically to identify
opportunities for continual improvement and to confirm the program&rsquo;s
effectiveness.</p>
<p>Licensees shall carry out trend analyses of problems and causes related
to the use and abuse of alcohol and drugs.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="3.8"></div>
<h3 id="sec3-8">3.8 Training, education, and awareness</h3>
<p>Licensees shall ensure
that those with authorities, accountabilities, and responsibilities for
monitoring alcohol and drug use and abuse, including workers, receive initial
and continuing training commensurate with their authorities, accountabilities
and responsibilities.</p>
<h4>Guidance</h4>
<p>With respect to alcohol
and drug use and abuse, licensees&rsquo; training, education and awareness for
workers who are subject to the fitness-for-duty program should include the
following aspects:</p>
<ul>
<li>knowledge of the fitness-for-duty
policy statements and procedures that apply to the worker, the methods that
will be used to implement them, and the consequences of violating the policy and
procedures</li>
<li>knowledge of the individual&rsquo;s
authorities, accountabilities, and responsibilities under the fitness-for-duty program</li>
<li>knowledge of the EAP and other
support or assessment services available to the worker</li>
<li>knowledge of the health and safety
hazards associated with abuse of illegal and legal drugs and alcohol</li>
<li>knowledge of the potential adverse
effects of alcohol, and prescription and over-the-counter drugs on job performance</li>
<li>the ability to recognize behaviours
in peers that may indicate the possible use, sale or possession of illegal
drugs; use or possession of alcohol or impairment from prescription and
over-the-counter medication on site or while on duty</li>
<li>knowledge of the individual&rsquo;s
responsibility to report a fitness-for-duty concern and the ability to initiate
appropriate actions related to self- and peer-reporting</li>
</ul>
<p>Additional requirements and guidance related to training can be found
in the following sections: section 3.6.2,
<mark><s>Supervisory
awareness program</s></mark>
; section 6.1,
<mark><s>Breath   alcohol-testing process</s></mark>
; section 6.2,
<mark><s>Urine drug-testing process </s></mark>
and section 6.5
<mark><s>, Investigative and alcohol and drug screening tools</s></mark>
.</p>
<p>Requirements and guidance for training systems are
found in REGDOC-2.2.2, <i>Personnel Training</i>.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4"></div>
<h2 id="sec4">4. Positions Subject to Alcohol and Drug Testing</h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="4.1"></div>
<h3 id="sec4-1">4.1 Safety-critical and safety-sensitive positions</h3>
<p>Safety-critical positions shall include:</p>
<ol>
<li> workers certified under
<mark> </mark>
<i>Class I Nuclear Facilities Regulations</i>subsection 9
(2), excluding certified health physicists</li>
<li> onsite nuclear response force (NRF) members</li>
</ol>
<p>For the purposes of alcohol and drug testing, safety-sensitive
positions shall include:</p>
<ol start="3">
<li> certified health physicists</li>
<li> the following security personnel: nuclear security
officers (NSOs), and designated non-NRF
personnel</li>
<li> emergency response teams (ERTs) / fire brigade</li>
</ol>
<strong><p>Guidance</p></strong>
<p>Additional information regarding certified workers and
ERTs may be found in RD-204, Certification of Persons Working at Nuclear Power
Plants [8], CSA N293, Fire protection for nuclear power plants [9], and CSA
N393, Fire protection for facilities that process, handle, or store nuclear
substances [10].</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="5"></div>
<h2 id="sec5">5. Alcohol and Drug-Testing Requirements by
Circumstance and Workgroup</h2>
<p>Alcohol and drug testing of workers holding
safety-critical or safety-sensitive positions shall be conducted in accordance
with the breath alcohol-testing and <s>
<mark>urine D</mark>
</s>
<mark> drug</mark>-testing processes described in sections
6.1 to 6.6.
<mark>A
summary of the testing circumstances relevant to the prescribed workgroups is
summarized in Table A1 of appendix A.</mark>
</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="5.1"></div>
<h3 id="sec5-1">5.1 Pre-placement alcohol and drug testing</h3>
<p>Licensees shall require all candidates who succeed in
progressing through all the previous stages of a job competition to a safety-critical
position (see section 4.1, bullets 1 and 2) to submit to alcohol and drug
testing as a condition of placement. Incumbent workers transferring into a
safety-critical position (see section 4.1, bullets 1 and 2) shall also be
required to submit to a pre-placement alcohol and drug test.</p>
<strong><p>Guidance</p></strong>
<p>As job applicants are not workers, a substance test
should not be used as a screening tool and should only be administered once a
candidate has met all other qualifications necessary.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="5.2"></div>
<h3 id="sec5-2">5.2 Reasonable grounds alcohol and drug testing</h3>
<p>Licensees shall require all workers in safety-critical
or safety-sensitive positions (see section 4.1, bullets 1&ndash;5) to submit to
for-cause testing under the reasonable grounds testing circumstance.</p>
<p>Licensees shall define within their fitness-for-duty
governance documents when workers in safety-critical or safety-sensitive
positions will be required to submit to for-cause reasonable grounds testing.</p>
<p>Under for-cause reasonable grounds testing, workers in
safety-critical or safety-sensitive positions (see section 4.1, bullets 1&ndash;5)
shall be required to submit to for-cause reasonable grounds testing when there
is reasonable cause to believe, through observed behaviour, physical condition
or after receiving credible information, that the individual is unfit to
perform his or her duties, due to the adverse effects of alcohol or drug use.
The grounds for for-cause reasonable grounds testing shall be independently
verified by at least two people (one of whom is a supervisor).</p>
<strong><p>Guidance</p></strong>
<p>Observed behaviours and
physical conditions that may establish for-cause reasonable grounds testing
include:</p>
<ul>
<li> breath odour </li>
<li> observed use or possession of
alcohol, illicit drugs, or drug paraphernalia </li>
<li> speech patterns </li>
<li> physical appearance and behaviour </li>
<li> an episode or events that suggest
irrational or reckless behaviour </li>
</ul>
<p>Further information on
supervisory awareness is found in section 3.6.2, Supervisory awareness program. </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="5.3"></div>
<h3 id="sec5-3">5.3 Post-incident alcohol and drug testing</h3>
<p>Licensees shall require all workers in safety-critical
or safety-sensitive positions (see section 4.1 bullets 1&ndash;5) to submit to
for-cause testing under the post-incident testing circumstance.</p>
<p>Under post-incident testing, workers in
safety-critical or safety-sensitive positions (section 4.1 bullets 1&ndash;5) shall
be required to submit to for-cause testing as soon as practicable after a
significant incident where a human act or omission by the worker may have
caused or contributed to the event.</p>
<p><strong>Guidance</strong></p>
<p>In deciding whether or not to conduct post-incident
testing, it is not necessary to determine if alcohol or drugs were contributing
factors to the significant incident.</p>
<p>Significant incidents refer to a subset of incidents
that have safety significance (see Glossary for definitions of &ldquo;incident&rdquo; and
&ldquo;safety significance&rdquo;).</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="5.4"></div>
<h3 id="sec5-4">5.4 Follow-up and return-to-duty alcohol and drug testing</h3>
<p>Licensees shall require
all workers in safety critical or safety-sensitive positions (see section 4.1,
bullets 1&ndash;5) to submit to follow-up testing after confirmation of
<mark>a substance use disorder <s>substance abuse or
dependency issue</s></mark>
by a health professional, and return-to-duty
testing as part of the reinstatement process.</p>
<p>Workers shall be subject to follow-up alcohol and drug
testing in an unannounced and random fashion at a minimum of every 3 months for
a minimum period of 2 years. At the discretion of the health care professional,
additional testing beyond these minimum requirements may be conducted to ensure
abstinence.</p>
<p>Licensees shall, as part of the reinstatement process
to a safety-critical or safety-sensitive position, require workers identified
with a
<mark>substance use disorder <s>substance
abuse or dependency</s></mark>
issue to be tested prior to returning to and
assuming safety-sensitive duties. The worker must have a negative drug test
result and/or an alcohol test with an alcohol concentration below 20 mg/100mL
before resuming performance of safety-sensitive duties.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="5.5"></div>
<h3 id="sec5-5">5.5 Random alcohol and drug testing</h3>
<p>Licensees shall require all workers holding
safety-critical positions (see section 4.1, bullets 1 and 2) to submit to
random alcohol and drug testing. Licensees&rsquo; sampling process used to select
these workers for random testing shall ensure that the number of random tests
performed at least every 12 months is equal to at least 25 percent of the
applicable worker population.</p>
<p>Licensees shall develop procedures and practices to
ensure that random testing is administered in a manner that provides reasonable
assurance that individuals are unable to predict when specimens will be
collected.</p>
<p>The following shall be addressed for the
implementation and conduct of random testing:</p>
<ol>
<li> ensure that all individuals in the population
subject to testing have an equal probability of being selected and tested.</li>
<li> require that individuals who are offsite when
selected for testing, or who are onsite and are not reasonably available for
testing when selected, be tested at the earliest reasonable opportunity when
both the donor and
<mark>specimen</mark>
collectors
are available to collect specimens for testing and without prior notification
to the individual that he or she has been selected for testing.</li>
<li> provide that an individual completing a test is
immediately eligible for another unannounced test.</li>
</ol>
<p> <strong>Guidance </strong></p>
<p>The following should be considered for the
implementation and conduct of random testing: </p>
<ul>
<li>collect specimens on an unpredictable
schedule, including weekends, night shifts and holidays, and at various times
during a shift. </li>
<li>have testing administered by the
fitness-for-duty program on a nominal weekly frequency. </li>
<li>require individuals who are selected
for random testing to report to the collection site as soon as reasonably
practicable after notification, within the time period specified in the
fitness-for-duty program policy. </li>
<li>Alcohol- and drug-testing processes. </li>
</ul>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6"></div>
<h2 id="sec6">6. Alcohol- and Drug-Testing Processes</h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.1"></div>
<h3 id="sec6-1">6.1 Breath alcohol-testing process</h3>
<p>Licensees shall establish, implement and maintain a
process to test workers holding safety-critical and safety-sensitive positions
for the presence of alcohol.</p>
<p>Licensees shall retain or maintain competency in the
administration, collection, and analysis of evidential breath alcohol testing.
The qualified technicians conducting the breath alcohol testing shall be
independent from workgroups subject to testing. For licensee-maintained
processes, licensees shall establish, implement, and maintain procedures for
the administration of evidential breath alcohol testing. For retained services,
licensees shall ensure service providers maintain procedures for the administration
of evidential breath alcohol testing.</p>
<p>Licensees shall ensure that an evidential breath
testing instrument is used that has been evaluated, tested and recommended by
the Alcohol Test Committee (a committee under the auspices of Canada&rsquo;s
Department of Justice) as an approved instrument published in the <i>Approved Breath Analysis Instruments Order </i>(SI/85-201)
[11].</p>
<p>Licensees shall ensure that the following blood
alcohol concentrations (BACs) are used for the determination of positive breath
alcohol test results:</p>
<ol>
<li> A BAC below 20 mg/100mL shall be considered a
negative test, and no further action is required.</li>
<li> A BAC from 20 to 39 mg/100mL shall be considered an
action level. The licensees shall prohibit the worker from performing
safety-sensitive duties until a determination of fitness indicates that the
worker is fit to competently and safely perform his or her duties.</li>
<li> A BAC of 40 mg/100mL or greater shall be considered
a positive test and a fitness-for-duty policy violation (see section 6.3,
Process for positive alcohol and drug tests).</li>
</ol>
<p>Table B1 in appendix B provides a summary of BAC
ranges and associated actions [12].</p>
<p><strong>Guidance</strong></p>
<p>Licensees should refer to the Alcohol Test Committee
when establishing procedures for the administration of evidential breath
alcohol testing, including:</p>
<ul>
<li> the initial and continuing training
and qualification of breath alcohol technicians for the operation of approved
instruments, including conversion training
</p>
</li>
<li> the initial and continuing training
and qualification of designated service personnel for the preventative and
corrective maintenance of approved instruments </li>
<li> the development and implementation of
protocol(s) for:
</p>
<ul>
<li> maintaining approved instruments
authorized for use at the nuclear site</li>
<li> the preparation required prior to
conducting alcohol testing</li>
<li> handling and processing workers that
will be tested, including escort procedures</li>
<li> conducting an initial alcohol test
using a breath specimen</li>
<li> conducting a confirmatory test for
alcohol (when the initial test is 20 mg/100mL or greater)</li>
<li> determining a confirmed positive
breath alcohol test result</li>
<li> shy lung</li>
<li> documenting and reporting requirements of breath alcohol specimens</li>
</ul>
</li>
</ul>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.2"></div>
<h3 id="sec6-2">6.2
<mark><s>Urine</s></mark>
Drug-testing process</h3>
<p>Licensees shall establish, implement and maintain a
process to test workers holding safety-critical and safety-sensitive positions
for the presence of drugs.
<mark>In meeting this
requirement, licensees may choose to use either laboratory urine drug testing
or laboratory oral fluid drug testing, or a combination of both.</mark>
</p>
<p>Licensees shall develop, implement, and maintain
procedures for the administration of drug testing including the collection,
storage, and transportation of specimens to a designated accredited laboratory.
Licensees shall retain or maintain competency in the collection, storage and
transportation of specimens, and shall ensure that specimen collectors are
independent from workgroups subject to testing.</p>
<p>Licensees shall retain and
utilize the services of
<mark>an accredited
laboratory <s>accredited by the Substance Abuse and Mental Health Services
Administration (SAMHSA)</s></mark>
to analyze and report the results of urine
<mark>or
oral fluid</mark>
drug specimens.
<mark>For urine
drug testing, licensees shall use a laboratory accredited by the Substance
Abuse and Mental Health Services Administration (SAMHSA)<sup>[<a href="#footnote">1</a>]</sup>. For oral
fluid drug testing, licensees shall use a laboratory accredited by SAMHSA or a
laboratory that meets ISO/IEC 17025 [14].</mark>
</p>
<p>
<mark>For each drug class, licensees shall
document in their governance whether urine or oral fluid test results will be
used to determine a policy violation.</mark>
Licensees shall direct the <s>
<mark>SAMHSA</mark>
</s> accredited laboratory to report
positive test results in conjunction with the urine
<mark>and oral fluid</mark>
drug panels (initial and confirmatory cut-off
thresholds) as established in B2 and B3 in appendix B.</p>
<p>Licensees shall develop, implement, and maintain a
procedure for reviewing and verifying positive, adulterated, or invalid
<mark><s>urine</s></mark>
drug test results from a medical,
toxicological or pharmacological perspective. The procedure shall ensure that a
medical review officer (MRO) is designated to review, interpret, and verify the
<mark>laboratory</mark>
test results for each drug
class as specified in the urine
<mark>and oral fluid</mark>
drug panels [13
<mark>] [15]</mark>
in appendix B.</p>
<p>Licensees shall direct the accredited laboratory to
report all positive, adulterated or invalid test results directly to the MRO
conducting the drug test review.</p>
<p>In determining whether the donor has violated the
fitness-for-duty policy, licensees shall direct the MRO to:</p>
<ol>
<li> provide the donor an opportunity to explain any
alternative reasons for the positive test result</li>
<li> only report verified positive test results to the
licensee</li>
</ol>
<p>Licensees shall direct the MRO to raise any for-cause
mandatory referrals for other fitness-for-duty assessments, as necessary, to
ensure safety and security. </p>
<p><strong>Guidance</strong></p>
<p>Procedures for the administration of drug-testing
collection and transportation of specimens should include or make reference to
the following:</p>
<ul>
<li>licensee-approved collection kits,
containers, and other supplies for specimen collection</li>
<li>protocol for chain of custody,
including relevant forms</li>
<li>protocol for urine and oral fluid
specimen collection, including collector duties, specific collection site
requirements, verification of donor identity, and potential collection errors
(recoverable and non-recoverable)</li>
<li>protocols for handling and processing
workers that will be tested, including escort procedures</li>
<li>protocol for verification and
assurance of sample integrity, including tampering and adulteration</li>
<li>protocols for urine and oral fluid
specimen storage and security</li>
<li>protocols for urine and oral fluid
specimen packaging and transportation to a designated accredited laboratory</li>
<li>licensee-approved shipment containers</li>
<li>protocols for shy bladder and dry
mouth</li>
<li>protocol for refusal to test</li>
<li>initial and continuing training and
qualification of urine
<mark>and oral fluid specimen</mark>
collectors</li>
</ul>
<p>Licensees should retain and utilize the services of a
third-party provider, where feasible, for the administration, collection,
verification and assurance of specimen integrity and chain of custody, and
shipment of specimens to an accredited <s>
<mark>SAMHSA</mark>
</s> laboratory.</p>
<p>Licensees should consider adopting a dilution protocol
<mark>for urine samples</mark>
and should consider
testing samples identified as dilute against the urine drug panel (initial and
confirmatory cut-off thresholds) established in
<mark>table
B4 [13]</mark>
of appendix B.</p>
<p>Licensees should direct the MRO to consult with duly
qualified toxicologists, duly qualified pharmacists, or other specialists as
required when reviewing, interpreting, and verifying test results. In the event
that the MRO determines that there is a legitimate medical explanation for the
positive drug test &ndash; such as legitimate use of prescription drugs, or a medical
condition &ndash; the positive test should not be considered verified. However, a
fitness-for-duty assessment may be required to determine if the worker is fit
for duty.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.2.1"></div>
<h4 id="sec6-2-1">
<mark>6.2.1 Point of collection testing</mark>
</h4>
<p>
<mark>Licensees may choose to utilize
point of collection testing (POCT) as a screening tool or to assess the risk of having a worker return to
safety-sensitive or safety-critical duties, pending the medical review
officer&rsquo;s report on the urine- or oral-fluid-based laboratory test.</mark>
</p>
<p>
<mark>If licensees choose to utilize POCT,
a protocol shall be established and documented. Non-negative results shall be
verified by laboratory immunoassay screening and confirmation testing.</mark>
</p>
<p>
<mark>The licensee shall compare negative
POCT results with laboratory-based results on an anonymous and aggregate basis
for quality assurance purposes.</mark>
</p>
<p>
<mark>Licensees who decide to conduct POCT shall select devices that are:</mark>
</p>
<ol>
<li>
<mark>Health Canada
certified or approved by the Department of Justice Canada for roadside use</mark>
</li>
<li>
<mark>independently
evaluated by qualified laboratory personnel on an initial and annual basis to
ensure that the devices meet forensic standards such as specificity,
sensitivity and accuracy</mark>
</li>
<li>
<mark>calibrated to the
extent possible with the urine or oral fluid drug testing cut-off levels
established in appendix B (see table B2 for urine immunoassay or table B5 for
oral fluid immunoassay)</mark>
</li>
</ol>
<p>
<mark>POCT devices shall not be used in
pre-placement or follow-up testing circumstances.</mark>
</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.3"></div>
<h3 id="sec6-3">6.3 Process for positive alcohol and drug tests</h3>
<p>Workers who provide a verified positive alcohol or
drug test shall be removed from safety-critical or safety-sensitive duties and
referred for a mandatory substance abuse evaluation.</p>
<p>The licensee shall not consider the worker for
reinstatement to safety-critical or safety-sensitive duties until a
recommendation for reinstatement has been received from a duly qualified health
professional.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.4"></div>
<h3 id="sec6-4">6.4 Substance abuse evaluation process</h3>
<p>Licensees shall establish, implement and maintain an
assessment process to evaluate workers in safety-critical or safety-sensitive
positions for
<mark>substance use disorder <s>substance
abuse or dependency</s></mark>
. Licensees shall identify the conditions under
which a substance abuse evaluation is required, including a verified positive
alcohol or drug test.</p>
<p>Licensees shall ensure that both licit and illicit
drugs are addressed.</p>
<p>The substance abuse evaluation shall be conducted by a
duly qualified health professional. Duly qualified health professionals shall
be certified by a professional association that includes substance abuse
evaluation or shall have received training in substance abuse evaluation and be
affiliated with a provincial college of physicians or nurses.</p>
<p>Workers assessed as having
<mark>a substance use disorder <s>substance abuse or dependency issue</s></mark>
shall not return to safety- critical or safety-sensitive duties until they have
met conditions for reinstatement, as recommended by the duly qualified health
professional.</p>
<p><strong>Guidance</strong></p>
<p>The assessment process should include consideration of
the following aspects:</p>
<ul>
<li> organizational and procedural
interfaces between internal and external stakeholders with defined roles in the
management of substance dependency, such as the duly qualified health
professionals, supervisors and oversight personnel, and external third-party providers </li>
<li> reporting to the designated
fitness-for-duty program administrator </li>
<li> referral to the licensee&rsquo;s designated
substance testing facility </li>
</ul>
<p>In determining the duly qualified health
professional&rsquo;s qualifications, licensees may consider the following or
equivalent certifying bodies as listed below: </p>
<ul>
<li> Canadian Addiction Counsellors
Certification Federation </li>
<li> Canadian Society for Addiction Medicine </li>
<li> Canadian Counselling and
Psychotherapy Association </li>
<li> Association of Cooperative
Counselling Therapists of Canada </li>
<li> Canadian Professional Counsellors
Association </li>
<li> Indigenous Certification Board of
Canada </li>
<li> Canadian Council of Professional Certification </li>
</ul>
<p>Alcohol-related disorders or drug abuse and dependence
may also be diagnosed through medical or psychological assessments. </p>
<p>Licensees should consider adopting relapse agreements
with workers assessed with substance dependence. </p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.5"></div>
<h3 id="sec6-5">6.5 Investigative
and alcohol and drug screening tools</h3>
<p>Licensees shall establish and document the accepted
use of investigative and alcohol and drug screening tools included in their
respective fitness-for-duty programs. Use of these tools shall be clearly
documented, and training programs shall be provided to support the designated
personnel in the proper use of the tools.</p>
<p><strong>Guidance</strong></p>
<p>Licensees may consider the adoption of the following
investigative and alcohol and drug screening tools:</p>
<ul>
<li> fitness-for-duty assessment screening
checklist for supervisors </li>
<li> fitness-for-duty self-assessment
screening checklist for workers </li>
<li> passive alcohol screening devices </li>
<li> drug detection dogs and devices (for
example, ion scanners) </li>
<li> physical searches </li>
</ul>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="6.6"></div>
<h3 id="sec6-6">6.6 Records</h3>
<p>The licensee shall retain alcohol and drug testing
results for workers holding safety-critical or safety-sensitive positions.</p>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="a"></div>
<h2 id="anxA">Appendix A: Alcohol and Drug Tests
by Workgroup and Circumstance</h2>
<table className="">
<caption className="text-left">
Table A1 provides a summary of the alcohol and drug
testing to be conducted, by workgroup and circumstance.
</caption>
<tr>
<th colSpan="2">Workgroup</th>
<th>Pre- placement</th>
<th>For-cause reasonable grounds</th>
<th>For-cause post- incident</th>
<th>Follow-up</th>
<th>Random</th>
</tr>
<tr>
<td colSpan="2">Certified workers
(excluding certified health physicists)</td>
<td className="text-center">YES</td>
<td className="text-center">YES</td>
<td className="text-center">YES</td>
<td className="text-center">YES</td>
<td className="text-center">YES</td>
</tr>
<tr>
<td rowspan="3">Security personnel</td>
<td>Onsite nuclear response force (NRF) members</td>
<td className="text-center">YES</td>
<td className="text-center">YES</td>
<td className="text-center">YES</td>
<td className="text-center">YES</td>
<td className="text-center">YES</td>
</tr>
<tr>
<td><mark><s>Nuclear response force members</s> Nuclear security officers</mark></td>
<td className="text-center">NO</td>
<td className="text-center">YES</td>
<td className="text-center">YES</td>
<td className="text-center">YES</td>
<td className="text-center">NO</td>
</tr>
<tr>
<td>Designated non-NRF personnel</td>
<td className="text-center">NO</td>
<td className="text-center">YES</td>
<td className="text-center">YES</td>
<td className="text-center">YES</td>
<td className="text-center">NO</td>
</tr>
<tr>
<td colSpan="2">Certified health physicists</td>
<td className="text-center">NO</td>
<td className="text-center">YES</td>
<td className="text-center">YES</td>
<td className="text-center">YES</td>
<td className="text-center">NO</td>
</tr>
<tr>
<td colSpan="2">Emergency response teams / fire brigade</td>
<td className="text-center">NO</td>
<td className="text-center">YES</td>
<td className="text-center">YES</td>
<td className="text-center">YES</td>
<td className="text-center">NO</td>
</tr>
</table>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="b"></div>
<h2 id="anxB">Appendix B: Alcohol- and
Drug-Testing Thresholds</h2>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="b.1"></div>
<h3 id="anxB-1">B.1 Blood alcohol concentration
ranges and associated actions</h3>
<p>Table B1 provides a summary of blood alcohol
concentration (BAC) ranges and associated actions to be taken by licensees
[12].</p>
<table className="">
<caption className="text-left">
Table B.1: Blood alcohol concentration ranges and associated actions to
be taken by licensees
</caption>
<tr>
<th>BAC
range</th>
<th>Action</th>
</tr>
<tr>
<td>Below 20
mg/100mL</td>
<td>Negative test &ndash;
no action required</td>
</tr>
<tr>
<td>20 to 39
mg/100mL</td>
<td>Action level &ndash; removal
of worker from safety- critical or safety-sensitive duties until assessed as
fit</td>
</tr>
<tr>
<td>40 mg/100mL or greater</td>
<td>Positive test &ndash;
fitness-for-duty policy violation and removal of worker from safety-critical
or safety- sensitive duties until assessed as fit by duly qualified health
professional</td>
</tr>
</table>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="b.2"></div>
<h3 id="anxB-2">B.2
<mark>Urine</mark>
immunoassay screening</h3>
<p>Table B2 provides the urine analysis drug panel and
the associated cut-off values to be used for immunoassay screening [13].</p>
<table className="">
<caption className="text-left">
Table B.2: Urine analysis drug panel and associated cut-off values
</caption>
<tr>
<th>Drug /
Drug Class/ Metabolite</th>
<th>Cut-off value (ng/mL)</th>
</tr>
<tr>
<td>Cocaine
metabolite (benzoylecgonine)</td>
<td>150</td>
</tr>
<tr>
<td>Opiates :</td>
<td></td>
</tr>
<tr>
<td style="padding-left:30px;">Morphine,
codeine</td>
<td>2,000</td>
</tr>
<tr>
<td style="padding-left:30px;"><mark>Hydromorphone
and hydrocodone</mark></td>
<td><mark>300</mark></td>
</tr>
<tr>
<td style="padding-left:30px;"><mark><s>Hydromorphone,
hydrocodone,</s></mark>
Oxymorphone
and oxycodone</td>
<td>100</td>
</tr>
<tr>
<td>6-acetylmorphine</td>
<td>10</td>
</tr>
<tr>
<td>Amphetamines</td>
<td>500</td>
</tr>
<tr>
<td>Cannabinoids</td>
<td>50</td>
</tr>
<tr>
<td>Benzodiazepines</td>
<td>100</td>
</tr>
<tr>
<td>Methadone
metabolite (EDDP)</td>
<td>100</td>
</tr>
</table>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="b.3"></div>
<h3 id="anxB-3">B.3
<mark>Urine</mark>
GC-MS and LC-MS/MS confirmation</h3>
<p>Table B3 provides the urine analysis drug panel and
the associated cut-off values to be used for GC-MS and LC-MS/MS confirmation
[13].</p>
<table className="">
<caption className="text-left">
Table B.3: Urine analysis drug panel and associated cut-off values for GC-MS and LC-MS/MS confirmation
</caption>
<tr>
<th>Drug
/ Drug class / Metabolite</th>
<th>Cut-off value (ng/mL)</th>
</tr>
<tr>
<td>Amphetamines (amphetamine, methamphetamine, MDMA, MDA)</td>
<td>250</td>
</tr>
<tr>
<td>Cannabinoids (as
11-nor-&#916;-9 THC COOH)</td>
<td>15</td>
</tr>
<tr>
<td>Cocaine
metabolite (benzoylecgonine)</td>
<td>100</td>
</tr>
<tr>
<td>Methadone
metabolite (EDDP)</td>
<td>100</td>
</tr>
<tr>
<td colSpan="2"><p>Opiates:</td>
</tr>
<tr>
<td style="padding-left:30px;">Morphine,
codeine</td>
<td>2,000</td>
</tr>
<tr>
<td style="padding-left:30px;">Hydromorphone,
hydrocodone, oxymorphone and oxycodone</td>
<td>100</td>
</tr>
<tr>
<td style="padding-left:30px;">6-monoacetyl
morphine (6-AM, heroin metabolite)</td>
<td>10</td>
</tr>
<tr>
<td colSpan="2"><p>Benzodiazepines
(LC-MS/MS):</td>
</tr>
<tr>
<td style="padding-left:30px;">Oxazepam,
temazepam, diazepam, nordiazepam</td>
<td>50</td>
</tr>
<tr>
<td style="padding-left:30px;">Alprazolam,
lorazepam, triazolam, clonazepam</td>
<td>50</td>
</tr>
<tr>
<td style="padding-left:30px;">Bromazepam,
flurazepam</td>
<td>50</td>
</tr>
</table>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="b.4"></div>
<h3 id="anxB-4">B.4
<mark>Urine</mark>
recommended dilution protocol cut-off concentrations</h3>
<p>Table B4 provides the urine analysis drug panel and
the associated cut-off values recommended to be used as part of a dilution
protocol for immunoassay screening and GC-MS and LC-MS/MS confirmation.</p>
<table className="">
<caption className="text-left">
Table B.4: Urine analysis drug panel and recommended associated cut-off values to be used as part of dilution protocol
</caption>
<tr>
<th>Drug
/ Drug class / Metabolite</th>
<th>Screening
cut-off value (ng/mL)</th>
<th>Confirmation
cut-off value (ng/mL)</th>
</tr>
<tr>
<td>Amphetamine/
methamphetamine</td>
<td>100</td>
<td>100</td>
</tr>
<tr>
<td>Benzodiazepines</td>
<td>50</td>
<td>50</td>
</tr>
<tr>
<td>Cannabinoids</td>
<td>20</td>
<td>6</td>
</tr>
<tr>
<td>Cocaine
metabolite</td>
<td>15</td>
<td>15</td>
</tr>
<tr>
<td>Opiates (codeine
and morphine only)</td>
<td>120</td>
<td>120</td>
</tr>
<tr>
<td>Methadone
metabolite</td>
<td>50</td>
<td>50</td>
</tr>
</table>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="b.5"></div>
<h3 id="anxB-5">
<mark>B.5 Oral
fluid immunoassay screening</mark>
</h3>
<p>
<mark>Table B5 provides the oral fluid analysis
drug panel and the associated cut-off values to be used for immunoassay
screening [15].</mark>
</p>
<table className="">
<caption className="text-left">
<mark>Table B.5: Oral fluid analysis drug panel and
associated cut-off values</mark>
</caption>
<tr>
<th> <mark>Drug / Drug class / Metabolite</mark>
</th>
<th> <mark>Cut-off value (ng/mL)</mark>
</th>
</tr>
<tr>
<td><mark>Amphetamines</mark></td>
<td><mark>50</mark></td>
</tr>
<tr>
<td><mark>Cannabinoids</mark></td>
<td><mark>5</mark></td>
</tr>
<tr>
<td><mark>Cocaine
metabolite (benzoylecgonine)</mark></td>
<td><mark>20</mark></td>
</tr>
<tr>
<td><mark>Opiates:</mark></td>
<td></td>
</tr>
<tr>
<td style="padding-left:30px;"><mark>Morphine,
codeine</mark></td>
<td><mark>30</mark></td>
</tr>
<tr>
<td style="padding-left:30px;"><mark>Hydromorphone
and hydrocodone</mark></td>
<td><mark>30</mark></td>
</tr>
<tr>
<td style="padding-left:30px;"><mark>Oxymorphone
and oxycodone</mark></td>
<td><mark>30</mark></td>
</tr>
<tr>
<td style="padding-left:30px;"><mark>6-acetylmorphine</mark></td>
<td><mark>4</mark></td>
</tr>
<tr>
<td><mark>Benzodiazepines</mark></td>
<td><mark>10</mark></td>
</tr>
<tr>
<td><mark>Methadone
metabolite (EDDP)</mark></td>
<td><mark>20</mark></td>
</tr>
</table>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="b.6"></div>
<h3 id="anxB-6">
<mark>B.6 Oral
fluid GC-MS and LC-MS/MS confirmation</mark>
</h3>
<p>
<mark>Table B6 provides the oral fluid
analysis drug panel and the associated cut-off values to be used for GC-MS and
LC-MS/MS confirmation [15]. </mark>
</p>
<table className="">
<caption className="text-left">
<mark>Table B.6: Oral fluid analysis drug panel and
associated cut-off values for GC-MS and LC-MS/MS confirmation </mark>
</caption>
<tr>
<th> <mark>Drug / Drug class / Metabolite</mark>
</th>
<th> <mark>Cut-off value
(ng/mL)</mark>
</th>
</tr>
<tr>
<td><mark>Amphetamines</mark>
<mark>(amphetamine, methamphetamine)</mark></td>
<td><mark>25</mark></td>
</tr>
<tr>
<td><mark>Cannabinoids</mark></td>
<td><mark>2</mark></td>
</tr>
<tr>
<td><mark>Cocaine
metabolite (benzoylecgonine)</mark></td>
<td><mark>8</mark></td>
</tr>
<tr>
<td colSpan="2"><mark>Opiates:</mark></td>
</tr>
<tr>
<td style="padding-left:30px;"><mark>Morphine,
codeine</mark></td>
<td><mark>15</mark></td>
</tr>
<tr>
<td style="padding-left:30px;"><mark>Hydromorphone, hydrocodone, oxymorphone and oxycodone</mark></td>
<td><mark>15</mark></td>
</tr>
<tr>
<td style="padding-left:30px;"><mark>6-monoacetyl
morphine (6-AM, heroin metabolite)</mark></td>
<td><mark>2</mark></td>
</tr>
<tr>
<td style="padding-left:30px;"><mark>Benzodiazepines
(LC-MS/MS):</mark></td>
<td><mark>3</mark></td>
</tr>
<tr>
<td style="padding-left:30px;"><mark>Methadone
metabolite (EDDP)</mark></td>
<td><mark>15</mark></td>
</tr>
</table>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="abbreviations"></div>
<h2 id="abbreviations">Abbreviations</h2>
<dl className="cnsc-glossary">
<dt> BAC </dt>
<dd> blood alcohol concentration </dd>
<dt> CSA </dt>
<dd> Canadian Standards Association </dd>
<dt> EAP </dt>
<dd> employee assistance program </dd>
<dt> ERT </dt>
<dd> emergency response team </dd>
<dt> FFD </dt>
<dd> fitness for duty </dd>
<dt> GC-MS </dt>
<dd> gas chromatography&ndash;mass spectrometry </dd>
<dt> IAEA </dt>
<dd> International Atomic Energy Agency </dd>
<dt> LC-MS/MS </dt>
<dd> liquid chromatography&ndash;tandem mass spectrometry </dd>
<dt> MRO </dt>
<dd> medical review officer </dd>
<dt> NRF </dt>
<dd> nuclear response force </dd>
<dt> NSO </dt>
<dd> nuclear security officer </dd>
<dt>
<mark>POCT</mark>
</dt>
<dd>
<mark>point of collection testing</mark>
</dd>
</dl>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="glossary"></div>
<h2 id="glossary">Glossary</h2>
<p>For definitions of terms used in this document, see <a href="http://www.nuclearsafety.gc.ca/pubs_catalogue/uploads/REGDOC-3-6-Glossary-of-CNSC-Terminology-eng.pdf">REGDOC&#8209;3.6, <i>Glossary of CNSC Terminology</i></a>,
which includes terms and definitions used in the <i>Nuclear Safety and Control Act</i> and the
regulations made under it, and in CNSC regulatory documents and other
publications. REGDOC&#8209;3.6 is provided for reference and information.</p>
<p>The following terms are either new terms being
defined, or include revisions to the current definition for that term.
Following public consultation, the final terms and definitions will be
submitted for inclusion in the next version of REGDOC&#8209;3.6, <i>Glossary of CNSC Terminology</i>.</p>
<dl className="margins-removed">
<dt> accredited laboratory </dt>
<dd> With respect to drug testing, a laboratory accredited by the Substance Abuse and Mental Health Services Administration
<mark>or that meets ISO/IEC 17025</mark>
to analyze and report the results of urine drug specimen tests. </dd>
<dt> Alcohol Test Committee </dt>
<dd> A scientific committee, under the auspices of the Canadian Society of Forensic Science, that evaluates the scientific, technical and law enforcement aspects of breath alcohol. Its scope includes road-side screening devices, the advent of automated breath test equipment, mobile breath testing and provisions to demand blood samples. </dd>
<dt> approved instrument </dt>
<dd> With respect to breath samples, an instrument of a kind that is designed to receive and make an analysis of a sample of the breath of a person in order to measure the concentration of alcohol in the blood of that person and is approved as suitable for the purposes of section 258 of the Canadian Criminal Code by order of the Attorney General of Canada. </dd>
<dt> breath alcohol technician </dt>
<dd> With respect to breath samples, a person that is qualified to operate an approved instrument. Also known as a qualified technician. See also &ldquo;approved instrument&rdquo;. </dd>
<dt> certified </dt>
<dd> Certified by the Commission under paragraph 21(1)(i) of the Nuclear Safety and Control Act (NSCA) or by a designated officer authorized under paragraph 37(2)(b) of the NSCA. </dd>
<dt> conversion training </dt>
<dd> Additional training a breath alcohol technician previously qualified to operate an approved instrument is required to take to become qualified to operate a different approved instrument. </dd>
<dt> designated non-nuclear response force personnel </dt>
<dd> Nuclear security staff who are authorized under the Public Agents Firearms Regulations to possess or have access to prohibited and restricted firearms, items or devices on behalf of and under the authority of the CNSC for the purpose of carrying out their duties. These duties may encompass the storage, transport, handling, maintenance and use of firearms related to nuclear response force functions. </dd>
<dt>
<mark> dry mouth </mark>
</dt>
<dd>
<mark> The inability of the donor to provide a sufficient amount or volume of oral fluid (i.e., saliva) to permit a valid oral fluid drug test </mark>
</dd>
<dt> fitness for duty (FFD) </dt>
<dd> A condition in which workers are physically, physiologically, and psychologically capable of competently and safely performing their tasks. </dd>
<dt> follow-up testing </dt>
<dd> As part of a follow-up plan to verify an individual&rsquo;s continued abstinence from substance abuse. </dd>
<dt> for-cause testing </dt>
<dd> With respect to fitness for duty, for-cause testing includes post-incident testing and reasonable grounds testing. See also &ldquo;post-incident testing&rdquo; and &ldquo;reasonable grounds testing&rdquo;. </dd>
<dt> high-security site </dt>
<dd> A nuclear power plant or a nuclear facility where Category I or II nuclear material is processed, used or stored. </dd>
<dt> incident </dt>
<dd> Any unintended event, including operating errors, equipment failures, initiating events, accident precursors, near misses or other mishaps, or unauthorized act, malicious or non-malicious, the consequences or potential consequences of which are not negligible from the point of view of protection or safety. (International Atomic Energy Agency Safety Glossary 2007 Edition) </dd>
<dt> licensing basis </dt>
<dd> A set of requirements and documents for a regulated facility or activity comprising:
<ul>
<li> the regulatory requirements set out in the applicable laws and regulations </li>
<li> the conditions and safety and control measures described in the facility&rsquo;s or activity&rsquo;s licence and the documents directly referenced in that licence </li>
<li> the safety and control measures described in the licence application and the documents needed to support that licence application</li>
</ul>
</dd>
<dt> medical review officer (MRO) </dt>
<dd> A person who is a licensed physician and board-certified as a medical review officer responsible for receiving and reviewing laboratory results generated by an employer&rsquo;s drug testing program and evaluating medical explanations for certain drug test results. </dd>
<dt> mood-altering substance </dt>
<dd> Any product that is legally or illegally used, resulting in cognitive or physical limitations that negatively impact performance on the job. </dd>
<dt> nuclear security officer (NSO) </dt>
<dd> A person whose function is to provide security at a high-security site and to whom an authorization referred to in subsection 18(2) of the Nuclear Security Regulations has been issued. </dd>
<dt> onsite nuclear response force (NRF) </dt>
<dd>
<ol type="a">
<li>a team of nuclear security officers whose members are
<ol className="list-bullet-none">
<li>(i) trained in the use of firearms, authorized to carry firearms in Canada and qualified to use them, <br/>
and </li>
<li>(ii) permanently located at a high-security site or </li>
</ol>
</li>
<li>a local, provincial or federal police service, a Canadian Forces unit or any other force
<ol className="list-bullet-none">
<li>(i) under contract to a licensee </li>
<li>(ii) whose members are trained in the use of firearms, authorized to carry firearms in Canada and qualified to use them, and </li>
<li>(iii) whose members are permanently located at a high-security site </li>
</ol>
</li>
</ol>
</dd>
<dt>oral fluid specimen collector</dt>
<dd>
<mark>A trained person who instructs and assists workers at an oral fluid collection site, who receives the specimen provided by workers and performs an initial inspection of that specimen, and who initiates and completes a custody control form. </mark>
</dd>
<dt> point of collection testing </dt>
<dd>
<mark> An immunoassay urine or oral fluid drug screening test that is conducted in the field outside the laboratory setting and that provides immediate results. </mark>
</dd>
<dt> post-incident testing </dt>
<dd> An element of for-cause testing, where an alcohol or drug test is administered to a worker designated in a safety-critical or safety-sensitive position as soon as practical after a significant incident, where an act or omission by the worker may have caused or contributed to the event. See also &ldquo;incident&rdquo; and &ldquo;safety significance&rdquo;. </dd>
<dt> pre-placement testing </dt>
<dd> An assessment of fitness for duty of an applicant to a safety-critical position before employment begins or a fitness-for-duty assessment conducted before the transfer of an incumbent worker into a safety-critical or safety-sensitive position. </dd>
<dt> qualification </dt>
<dd> A recognized level of mastery of task performance in a work-related field, which is normally acquired through successful completion of training. Qualification involves mastery of all the knowledge, skills and safety-related attributes required for successful task performance on the job. </dd>
<dt> random testing </dt>
<dd> A statistically random and unannounced basis for selecting which workers designated in safety-critical positions will be subject to alcohol and drug testing, so that each worker has an equal probability of being selected and tested. </dd>
<dt> reasonable grounds testing </dt>
<dd> An element of for-cause testing, where workers in
<mark>safety-sensitive</mark>
or safety-critical are required to submit to testing when there is reasonable cause to believe, through observed behaviour, physical condition or after receiving credible information, that the individual is unfit to perform their duties, due to the adverse effects of alcohol or drug use. </dd>
<dt> safety-critical position </dt>
<dd> A position certified (see RD-204, Certification of Persons Working at Nuclear Power Plants) or authorized (see REGDOC-2.12.1, High-Security Sites: Nuclear Response Force) by the CNSC that requires workers to make decisions and take actions that have a direct and immediate impact on nuclear safety and security of the high security site. </dd>
<dt> safety-sensitive position </dt>
<dd>A position that has a role in the operation of the high-security site, where impaired performance could result in a significant incident affecting the environment, the public, the health and safety of workers and others at site, or the safety and security of the facility. This includes all workers who are regularly required to rotate through or regularly relieve in safety-sensitive positions.
<p>Those who directly supervise working-level positions, or who may perform the same duties or exercise the same responsibilities as safety-sensitive positions, are deemed to hold safety-sensitive positions. </p>
</dd>
<dt> safety significance </dt>
<dd>The significance of a situation, event or issue with respect to the impact on meeting the nuclear safety objectives as defined by the International Atomic Energy Agency in document SF1, Fundamental Safety Principles. In general, a situation, event or issue has safety significance if it denotes a deviation from the safety case accepted in the licence, in a direction detrimental to safety, such as but not limited to:<br/>
<ul>
<li> reducing margins to (or exceeding) the accepted limits </li>
<li> increasing risk to the health, safety and security of persons and the environment </li>
<li> impairments (various degrees) of the special safety systems or of the safety functions for accident mitigation </li>
<li> reduction in defence in depth </li>
<li> events causing radioactive releases and spills of hazardous substances, injuries to workers or the public, etc. </li>
</ul>
</dd>
<dt> shy bladder </dt>
<dd> The inability to provide a urine sample as a result of a physiological or psychological medical condition. </dd>
<dt> shy lung </dt>
<dd> The inability to provide a sufficient amount or volume of breath to permit a valid alcohol test as a result of a physiological or psychological medical condition. </dd>
<dt> urine
<mark>specimen</mark>
collector </dt>
<dd> A trained person who instructs and assist workers at an urine collection site, who receives and makes an initial inspection of the specimen provided by workers, and who initiates and completes a custody control form. </dd>
<dt> verified positive drug test </dt>
<dd> A drug test result from
<mark>an accredited <s>Substance Abuse and Mental Health Services Administration-certified</s></mark>
laboratory that has undergone review by a medical review officer, and that has been determined by the medical review officer to be a positive test result for which no legitimate medical explanation has been provided. </dd>
<dt> worker </dt>
<dd> A person who performs work that is referred to in a licence, including someone directly employed by a licensee, contractor or subcontractor. </dd>
</dl>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="references"></div>
<h2 id="references">References</h2>
<ol>
<li> International Atomic Energy Agency (IAEA),
<a href="http://www-pub.iaea.org/books/IAEABooks/10883/Governmental-Legal-and-Regulatory-Framework-for-Safety">GSR
Part 1 (Rev. 1), Governmental, Legal and Regulatory Framework for Safety</a>, Vienna, 2016.</li>
<li> IAEA,
<a href="http://www-pub.iaea.org/books/IAEABooks/5858/Safety-of-Nuclear-Power-Plants-Operation-Safety-Requirements">NS-R-2, <i>Safety of Nuclear Power Plants: Operation,
Requirements</i></a>, Vienna, 2000.</li>
<li> IAEA,
<a href="http://www-pub.iaea.org/books/IAEABooks/6417/Regulatory-Inspection-of-Nuclear-Facilities-and-Enforcement-by-the-Regulatory-Body-Safety-Guide">GS-G-1.3, <i>Regulatory Inspection of Nuclear Facilities
and Enforcement by the Regulatory Body</i></a><i>, </i>Vienna, 2002.</li>
<li> IAEA,
<a href="http://www-pub.iaea.org/books/IAEABooks/6416/Review-and-Assessment-of-Nuclear-Facilities-by-the-Regulatory-Body-Safety-Guide">GS-G.1.2, <i>Review and Assessment of Nuclear Facilities
by the Regulatory Body</i></a>, Vienna, 2002.</li>
<li> IAEA,
<a href="http://www-pub.iaea.org/MTCD/publications/PDF/Pub1115_scr.pdf">NS-G-2.4, <i>The Operating Organization for Nuclear Power Plants</i></a><i>, </i>Vienna, 2001.</li>
<li>IAEA,
<a href="http://www-pub.iaea.org/books/IAEABooks/6620/Recruitment-Qualification-and-Training-of-Personnel-for-Nuclear-Power-Plants-Safety-Guide">NS-G-2.8, <i>Recruitment, Qualification and Training of
Personnel for Nuclear Power Plants</i></a><i>,</i>Vienna, 2002<i>.</i></li>
<li> Canadian Human Rights Commission, <i>Bona Fide Occupational Requirements and Bona Fide
Justifications under the Canadian Human Rights Act &ndash;The Implications of Meiorin
and Grismer</i>, Ottawa, 2007.</li>
<li> Canadian Nuclear Safety Commission,
<a href="/eng/acts-and-regulations/regulatory-documents/published/html/rd204/">RD-204, <i>Certification of Persons Working at Nuclear
Power Plants</i></a><i>, </i>Ottawa, 2008.</li>
<li> CSA
Group, CSA N293, <i>Fire protection for nuclear
power plants</i>, Mississauga, Ontario.</li>
<li> CSA Group, CSA N393, <i>Fire protection for facilities that process, handle, or store nuclear
substances</i>, Mississauga, Ontario.</li>
<li> Canada, <i><a href="http://laws-lois.justice.gc.ca/eng/regulations/SI-85-201/page-1.html">Approved Breath Analysis Instruments Order</a></i> (SI/85-201).</li>
<li> J. Wigmore. <em><a href="/eng/pdfs/RSP-0315-eng.pdf">The Forensic Toxicology of Alcohol and Best Practices
for Alcohol Testing in the Workplace: A Report to the Canadian Nuclear Safety Commission</a></em></i></a><i>, RSP-0315</i>, Ottawa, 2014.</li>
<li> A. Fraser, PhD. <i><a href="/eng/pdfs/RSP-0314-eng.pdf">Urine Drug Testing Practice: Report to the Canadian
Nuclear Safety Commission</a>, RSP-0314</i>, Ottawa, 2014.</li>
<li>
<mark>International
Organization for Standardization, ISO/IEC 17025:2017, <i>General Requirements for the Competence of Testing
and Calibration Laboratories</i>, Geneva, Switzerland.</mark>
</li>
<li>
<mark>M. Huestis, PhD. <i>Oral Fluid Drug Testing Practice: Report to the
Canadian Nuclear Safety Commission</i>, RSP-673.2, Ottawa, 2019</mark>
</li>
</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<div className="col-md-12 mrgn-tp-0 mrgn-bttm-0">
<div id="additional"></div>
<h2 id="additional">Additional
Information</h2>
<p>The following documents provide additional information
that may be relevant and useful for understanding the requirements and guidance
provided in this regulatory document:</p>
<ol>
<li> Canadian Nuclear Safety Commission (CNSC),
<a href="/eng/pdfs/RSP-0314-eng.pdf">INFO-0831, <i>Recent Alcohol and Drug Workplace Policies in Canada: Considerations for the Nuclear
Industry</i></a>, Ottawa, 2012.</li>
<li> CNSC,
<a href="/eng/acts-and-regulations/regulatory-documents/published/html/regdoc2-2-2-v2/index">REGDOC-2.2.2, <i>Personnel Training</i></a>, Ottawa,
2016.</li>
<li> United States Nuclear Regulatory Commission,
<a href="https://www.nrc.gov/docs/ML1418/ML14189A355.pdf">NUREG/CR-7183, <i>Best Practices for Behavioral Observation Programs at Operating Power Reactors and
Power Reactor Construction Sites</i></a>. Washington, D.C., 2014.</li>
<li> United States Department of Transportation, <i><a href="https://transit-safety.fta.dot.gov/DrugAndAlcohol/publications/LogRedirect.aspx?FileID=376&LocationID=1">Prescription and Over-the Counter Medications Tool Kit</a></i>, Washington,
D.C., 2011.</li>
<li> Canada, <i><a href="http://laws-lois.justice.gc.ca/eng/acts/h-6/">Canadian Human Rights Act</a></i>(R.S.C., 1985, c. H-6).</li>
<li> Canadian Human Rights Commission, <i><a href="https://www.chrc-ccdp.gc.ca/eng/content/accommodation-works">Accommodation Works! A user-friendly guide to working together on health issues in the workplace</a></i>, (no date).</li>
</ol>
</div>
<div className="clear"></div>
<div className="col-md-6  mrgn-tp-0 mrgn-bttm-0">
</div>
<div className="col-md-3  text-right mrgn-tp-0 mrgn-bttm-0">
<p className="text-right"><a href="#wb-main"><span className="wb-icon-nav-090-alt"></span>Top of page</a></p>
</div>
<div className="clear"></div>
<h2>CNSC Regulatory
Document Series</h2>
<p>
<mark>Facilities and activities within the
nuclear sector in Canada are regulated by the CNSC. In addition to the <i>Nuclear Safety and Control Act</i> and
associated regulations, these facilities and activities may also be required to
comply with other regulatory instruments such as regulatory documents or
standards.</mark>
</p>
<p>
<mark>CNSC regulatory documents are
classified under the following categories and series:</mark>
</p>
<ul className="list-bullet-none">
<li><strong>1.0 Regulated facilities and activities</strong></li>
<li>Series 1.1 Reactor facilities
<ul className="list-bullet-none">
<li>1.2 Class IB facilities</li>
<li>1.3 Uranium mines and mills</li>
<li>1.4 Class II facilities</li>
<li>1.5 Certification of prescribed equipment</li>
<li>1.6 Nuclear  substances and radiation devices</li>
</ul>
</li>
<li><strong>2.0 Safety and control areas</strong></li>
<li>Series 2.1 Management system
<ul className="list-bullet-none">
<li>2.2 Human performance management</li>
<li>2.3 Operating performance</li>
<li>2.4 Safety analysis</li>
<li>2.5 Physical design</li>
<li>2.6 Fitness for service</li>
<li>2.7 Radiation protection</li>
<li>2.8 Conventional health and safety</li>
<li>2.9 Environmental protection</li>
<li>2.10 Emergency management and fire protection</li>
<li>2.11 Waste management</li>
<li>2.12 Security</li>
<li>2.13 Safeguards and non-proliferation</li>
<li>2.14 Packaging and transport</li>
</ul>
</li>
<li><strong>3.0 Other regulatory areas</strong></li>
<li>Series 3.1 Reporting requirements
<ul className="list-bullet-none">
<li>3.2 Public and
<mark>Indigenous</mark>
engagement</li>
<li>3.3 Financial guarantees</li>
<li>3.4 Commission proceedings</li>
<li>3.5 CNSC processes and practices</li>
<li>3.6 Glossary of CNSC terminology</li>
</ul>
</li>
</ul>
<p>Note: The regulatory document series may be adjusted periodically by the
CNSC. Each regulatory document series listed above may contain multiple
regulatory documents.
<mark>Visit the CNSC&rsquo;s website
for the latest
list of regulatory documents
.</mark>
</p> <p id="footnote">[1] Effective May 12, 1998, the Standards Council of Canada (SCC) voted to end its
laboratory accreditation program and adopt United States Department of
Transportation regulations for the conduct of forensic urine drug testing. The
SCC program was formerly known as the Laboratory Accreditation Program for
Substance Abuse (LAPSA).</p>

                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }