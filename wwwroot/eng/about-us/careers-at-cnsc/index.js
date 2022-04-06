import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "Careers", 
                dateModified: "2022-02-28",
                langToggleUrl: "/fra/about-us/careers-at-cnsc/index"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<div className="grid-12">
<div className="span-7">
<p>Apply for new job opportunities and find out more about the friendly work environment, opportunities for growth and development, and competitive pay and benefits.</p>
</div>
<div className="span-5"> <img src="/images/career/web-careers-topic.jpg" alt=""/> </div>
<div className="col-md-22">
<h2 className="mrgn-bttm-md">For career seekers</h2>
<div className="col-md-6 ">
<p className="lead"><a href="/eng/about-us/careers-at-cnsc/life-at-cnsc">Life at the CNSC</a></p>
<p>Get to know the workplace culture and comprehensive employee benefits package.</p>
</div>
<div className="col-md-6">
<p className="lead"><a href="https://clients.njoyn.com/CL4/xweb/Xweb.asp?tbtoken=ZVFZShMXCBwuJS5ALiReFnIERyQgCFA7c2xEcCBYc0hZUlB4E2VZXERoKDUTcWoBLiUuQC4kXgkbUxRaTHAqWA%3D%3D&chk=ZVpaShw%3D&page=joblisting&CLID=71850">Job opportunities</a></p>
<p>Search job opportunities and stay up to date by signing up for career alerts.</p>
</div>
<div className="col-md-6 ">
<p className="lead"><a href="/eng/about-us/careers-at-cnsc/how-to-apply">How to apply</a></p>
<p>Learn about the job application process.</p>
</div>
<div className="clear"></div>
<div className="col-md-6 ">
<p className="lead"><a href="/eng/about-us/careers-at-cnsc/how-to-prepare">How to prepare</a></p>
<p>Learn about the assessment process and how you can prepare.</p>
</div>
<div className="col-md-6">
<p className="lead"><a href="/eng/about-us/careers-at-cnsc/key-behavioral-competencies">Key behavioural competencies</a></p>
<p>Learn about the important behaviours successful candidates must demonstrate.</p>
</div>
<div className="col-md-6 ">
<p className="lead"><a href="/eng/about-us/careers-at-cnsc/students-new-graduates">Students and new graduates</a></p>
<p>Learn about the student and new graduate program. </p>
</div>
</div>
<div className="clear"></div>
<div className="col-md-22">
<h2 className="mrgn-bttm-md">Working at the CNSC</h2>
<div className="col-md-6 ">
<p className="lead"><a href="/eng/about-us/careers-at-cnsc/cnsc-salary-ranges">Salary ranges</a></p>
<p>Salary and pay ranges for all CNSC employees</p>
</div>
<div className="col-md-6">
<p className="lead"><a href="/eng/about-us/careers-at-cnsc/collective-agreement">Collective agreement</a></p>
<p>Terms and conditions of the collective agreement between the CNSC and the Nuclear Regulatory Group (NUREG)</p>
</div>
<div className="col-md-6 ">
<p className="lead"><a href="https://www.canada.ca/en/treasury-board-secretariat/topics/pension-benefits.html">Public service benefit plan</a></p>
<p>Information about pension, dental, health and insurance benefits</p>
</div>
<div className="clear"></div>
<div className="col-md-6 ">
<p className="lead"><a href="/eng/about-us/careers-at-cnsc/CNSC-Employee-Benefits">Employee benefits at a glance</a></p>
<p>Benefit information for employees</p>
</div>
<div className="col-md-6">
<p className="lead"><a href="/eng/about-us/careers-at-cnsc/CNSC-Student-Benefits">Student benefits at a glance</a></p>
<p>Benefit information for students</p>
</div>
<div className="col-md-6 ">
<p className="lead"><a href="/eng/about-us/careers-at-cnsc/CNSC-Mngt-Ex-Benefits">Executive benefits at a glance</a></p>
<p>Benefit information for executives</p>
</div>
</div>
<div className="clear"></div>
<div className="col-md-22">
<h2 className="mrgn-bttm-md">Features</h2>
<div className="col-md-6 ">
<p className="lead"><a href="/eng/about-us/our-experts/index">CNSC Experts <img src="/images/career/web_experts_feature.png" alt="" className="mrgn-tp-md"/></a></p>
<p>Learn more about CNSC experts and the important work they do.</p>
</div>
<div className="col-md-6">
<p className="lead"><a href="https://youtu.be/d7MgPHB-tQw">We are the CNSC <img src="/images/career/we-are-cnsc-feature-eng.jpg" alt="" className="mrgn-tp-md"/></a></p>
<p>Video of CNSC employees serving Canadians by ensuring nuclear safety in Canada</p>
</div>
<div className="col-md-6 ">
<p className="lead"><a href="https://youtu.be/2gxKY5bxzb4">Life at the CNSC <img src="/images/career/why-work-with-us-feature-eng.jpg" alt="" className="mrgn-tp-md"/></a></p>
<p>Video showcasing what life is like at the CNSC</p>
</div>
</div>  
                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }