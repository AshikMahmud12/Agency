import React from "react";

import Envato from "./../../static/assets/img/logos/envato.jpg";
import Creative from "./../../static/assets/img/logos/creative-market.jpg";
import Design from "./../../static/assets/img/logos/designmodo.jpg";
import ThemeForest from "./../../static/assets/img/logos/themeforest.jpg";

const Client = () => {
    return (
        <section class="py-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-3 col-sm-6 my-3">
                        <a href="#!">
                            <img
                                class="img-fluid d-block mx-auto"
                                src={Envato}
                                alt=""
                            />
                        </a>
                    </div>
                    <div class="col-md-3 col-sm-6 my-3">
                        <a href="#!">
                            <img
                                class="img-fluid d-block mx-auto"
                                src={Creative}
                                alt=""
                            />
                        </a>
                    </div>
                    <div class="col-md-3 col-sm-6 my-3">
                        <a href="#!">
                            <img
                                class="img-fluid d-block mx-auto"
                                src={Design}
                                alt=""
                            />
                        </a>
                    </div>
                    <div class="col-md-3 col-sm-6 my-3">
                        <a href="#!">
                            <img
                                class="img-fluid d-block mx-auto"
                                src={ThemeForest}
                                alt=""
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Client;
