import React from 'react'
import Mil from './Mil'

export default function Vegan(){
    return(
        <section id="meal_module_container">
        <div className="meal-plan-description">
          <div className="container py-5">
            <div className="row align-items-center">
              <div className="col-12 col-lg-8">
                <h1>Comida Vegan Delivery</h1>
                <p>
                  <strong id="sf">
                    <span>S/.</span>69.90
                  </strong>
                  / semana
                </p>
              </div>
              <div class="row">
                <div className="col-12">
                  <p>
                    Las comidas clásicas son exactamente lo que parecen: la
                    preparación de comidas tradicionales es fácil. Combinan la
                    simplicidad de la comida lista para comer con la comodidad de
                    las macros en porciones.
                    <p></p>
                    Es el equilibrio perfecto de proteínas, verduras y
                    carbohidratos para alcanzar sus nutrientes esenciales cuando
                    está tratando de perder peso con un tiempo limitado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container pb-5">
          <div className="row align-items-end pb-md-3">
            <div className="col-12 col-md-6">
              <p className="mb-0 ready-to-order text-center text-md-left">
                Listo para ordenar?
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 meal-media-slider d-none d-md-block">
              <div className="d-none d-md-block">
                <div
                  className="tns-outer"
                  id="tiny-carousel-body_content-module-2-ow"
                >
                  <div
                    id="tiny-carousel-body_content-module-2-mw"
                    className="tns-ovh"
                  >
                    <div
                      className="tns-inner"
                      id="tiny-carousel-body_content-module-2-iw"
                    >
                      <div
                        id="tiny-carousel-body_content-module-2"
                        className="  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal"
                      >
                        <div
                          className="tns-item tns-slide-active"
                          id="tiny-carousel-body_content-module-2-item0"
                        >
                          <img
                            className="img-fluid"
                            src="https://i.pinimg.com/originals/c4/1a/b3/c41ab3f0f4827d98d3c217e554fc9881.jpg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Mil/>
          </div>
        </div>
      </section>
    )
}