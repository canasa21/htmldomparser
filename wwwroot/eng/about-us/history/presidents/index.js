import React from "react"
        import Layout from "/src/components/Layout"

        export default function pageName({ pageContext }) {

            pageContext.layout = {

                language: "en",
                pageTitle: "Presidents of the Canadian Nuclear Safety Commission", 
                dateModified: "2020-06-09",
                langToggleUrl: "/fra/about-us/history/presidents/index"
        
            };


            return (
                <>
                    <Layout pageContext={pageContext}>
                    {/*MAIN CONTENT START*/}
                    
<div className="grid-12">  <div className="col-md-22">  <div className="col-md-6 ">  <p className="lead"><a href="/eng/about-us/organization/president">Rumina Velshi (2018 to present)  <img src="/images/20th-anniversary/web_presidents_Velshi.png" alt="Rumina Velshi" className="mrgn-tp-md"/>  	</a></p>  </div>  <div className="col-md-6">  <p className="lead"><a href="/eng/about-us/history/presidents/former-president-bios#Binder">Dr. Michael Binder (2008&ndash;2018)  <img src="/images/20th-anniversary/web_presidents_Binder.png" alt="Dr. Michael Binder" className="mrgn-tp-md"/>  	</a></p>	  </div>  <div className="col-md-6 ">  <p className="lead"><a href="/eng/about-us/history/presidents/former-president-bios#Keen">Linda J. Keen (2001&ndash;2008)  <img src="/images/20th-anniversary/web_presidents_Keen.png" alt="Linda J. Keen" className="mrgn-tp-md"/></a></p>  </div>	  </div>
<div className="col-md-22">  <div className="col-md-6 ">  <p className="lead"><a href="/eng/about-us/history/presidents/former-president-bios#Bishop">Dr. Agnes Bishop (1994&ndash;2001)  <img src="/images/20th-anniversary/web_presidents_Bishop.png" alt="Dr. Agnes Bishop" className="mrgn-tp-md"/></a></p>  </div>  <div className="col-md-6">  <p className="lead"><a href="/eng/about-us/history/presidents/former-president-bios#Levesque">Ren&eacute; J. A. L&eacute;vesque (1987&ndash;1993)  <img src="/images/20th-anniversary/web_presidents_Levesque.png" alt="Ren&eacute; J. A. L&eacute;vesque" className="mrgn-tp-md"/></a></p>	  </div>  <div className="col-md-6 ">  <p className="lead"><a href="/eng/about-us/history/presidents/former-president-bios#Jennekens">Jon H. Jennekens (1978&ndash;1987)  <img src="/images/20th-anniversary/web_presidents_Jennekens.png" alt="Jon H. Jennekens" className="mrgn-tp-md"/></a></p>  </div>	  </div>
<div className="col-md-22">  <div className="col-md-6 ">  <p className="lead"><a href="/eng/about-us/history/presidents/former-president-bios#Prince">Alan T. Prince (1975&ndash;1978)  <img src="/images/20th-anniversary/web_presidents_Prince.png" alt="Alan T. Prince" className="mrgn-tp-md"/></a></p>  </div>  <div className="col-md-6">  <p className="lead"><a href="/eng/about-us/history/presidents/former-president-bios#Hurst">Donald G. Hurst (1970&ndash;1974)  <img src="/images/20th-anniversary/web_presidents_Hurst.png" alt="" className="mrgn-tp-md"/></a></p>  </div>  <div className="col-md-6 ">  <p className="lead"><a href="/eng/about-us/history/presidents/former-president-bios#Laurence">George C. Laurence (1961&ndash;1970)  <img src="/images/20th-anniversary/web_presidents_Laurence.png" alt="Donald G. Hurst " className="mrgn-tp-md"/></a></p>  </div>	  </div>
<div className="col-md-22">  <div className="col-md-6 ">  <p className="lead"><a href="/eng/about-us/history/presidents/former-president-bios#MacKenzie">Chalmers J. MacKenzie (1948&ndash;1961)  <img src="/images/20th-anniversary/web_presidents_MacKenzie.png" alt="Chalmers J. MacKenzie" className="mrgn-tp-md"/></a></p>  </div>  <div className="col-md-6 ">  <p className="lead"><a href="/eng/about-us/history/presidents/former-president-bios#McNaughton">Andrew McNaughton (1946&ndash;1948)  <img src="/images/20th-anniversary/web_presidents_McNaughton.png" alt="Andrew McNaughton" className="mrgn-tp-md"/></a></p>  </div>	  </div>

                    {/*MAIN CONTENT END*/}
                    </Layout>
                </>
            )
        }