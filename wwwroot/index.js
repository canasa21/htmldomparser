import React from "react"
import { Helmet } from "react-helmet"
import Layout from "/src/components/LayoutEn"

export default function features() {
    return (

        <>

            <Helmet>
                <title>Collapsible</title>
            </Helmet>

            <Layout>

                {/*BREADCRUMB START*/}

                <nav id="wb-bc" property="breadcrumb">
                    <h2>You are here:</h2>
                    <div className="container">
                        <ol className="breadcrumb">
                            <li><a href="https://www.canada.ca/en.html">Canada.ca</a></li>
                            <li><a href="/home-en" title="Canadian Nuclear Safety Commission">CNSC</a></li>
                            <li><a href="/features">features</a></li>
                            <li><a href="/features/collapsible">collapsible</a></li>
                        </ol>
                    </div>
                </nav>

                {/*BREADCRUMB END*/}

                <main property="mainContentOfPage" resource="#wb-main" className="container" typeof="WebPageElement">
                    <h1 property="name" id="wb-cont">Collapsible alerts</h1>
                    <section>
                        <details className="alert alert-success" id="alert-success" open="open">
                            <summary className="h2">
                                <h2>Well done!</h2>
                            </summary>
                            <p>You successfully read <a href="#" className="alert-link">this important alert message</a>.</p>
                        </details>
                    </section>
                    <section>
                        <details className="alert alert-info" id="alert-info" open="open">
                            <summary className="h2">
                                <h2>Heads up!</h2>
                            </summary>
                            <p>This <a href="#" className="alert-link">alert needs your attention</a>, but it's not super important.</p>
                        </details>
                    </section>
                    <section>
                        <details className="alert alert-warning" id="alert-warning" open="open">
                            <summary className="h2">
                                <h2>Warning!</h2>
                            </summary>
                            <p>Best check yourself, you're <a href="#" className="alert-link">not looking too good</a>.</p>
                        </details>
                    </section>
                    <section>
                        <details className="alert alert-danger" id="alert-danger" open="open">
                            <summary className="h2">
                                <h2>Oh snap!</h2>
                            </summary>
                            <p><a href="#" className="alert-link">Change a few things up</a> and try submitting again.</p>
                        </details>
                    </section>
                   
                </main>

                {/*MAIN CONTENT END*/}

            </Layout>

        </>

    )
}