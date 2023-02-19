import React from 'react'

const SignIn = () => {
return (
    <div>
    <section class="section" id="subscribe">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 offset-lg-2">
                    <div class="section-heading">
                        <h6>Welcome Administrator</h6>
                        <h2>Connexion</h2>
                    </div>
                    <div class="subscribe-content">
                        <p>If you are not an administrator, you will find where to sign in on the front page !</p>
                        <div class="subscribe-form">
                            <form id="subscribe-now" action="" method="get">
                                <div class="row">
                                    <div class="col-md-8 col-sm-12">
                                      <fieldset>
                                        <input name="pseudo" type="text" id="pseudo" placeholder="My pseudo" required=""/>
                                      </fieldset>
                                    </div>
                                    <div class="col-md-8 col-sm-12">
                                      <fieldset>
                                        <input name="password" type="password" id="pssword" placeholder="My password" required=""/>
                                      </fieldset>
                                    </div>
                                    <div class="col-md-4 col-sm-12">
                                      <fieldset>
                                        <button type="submit" id="form-submit" class="main-button">Connexion</button>
                                      </fieldset>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
);
};

export default SignIn