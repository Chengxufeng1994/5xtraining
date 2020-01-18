import React, { Component } from 'react';
import './Feature.css'

class Feature extends Component {
    render() {
        return (
            <section id="feature-section light-grey-bg pb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-12 center-block pb-3">
                            <h3 className="text-center mb-5 mt-5 pb-4">
                                關於五倍紅寶石 About 5xRuby
                            </h3>
                            <div className="d-flex feature-list flex-wrap">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Feature