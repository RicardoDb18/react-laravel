import React from 'react'

export default function Sonnet(){

const message= '98.90'
return(
<div className="col-12 col-md-6">
            <form name="formulario" id="formulario">
              <div id="meals_per_day" className="fields mt-2">
                <p className="mb-1 text-center text-md-left">
                  <strong className="txt">Comidas por dia: </strong>
                   
                </p>
                <div className="meal_amount radio_row  justify-content-center justify-content-md-start">
                  <label>
                    <input type="radio" id="meal_1" name="meal" value="1" defaultChecked></input>
                    <span>1</span>
                  </label>
                  <label>
                    <input type="radio" id="meal_2" name="meal" value="2"></input>
                    <span>2</span>
                  </label>
                  <label>
                    <input type="radio" id="meal_3" name="meal" value="3"></input>
                    <span>3</span>
                  </label>
                  <div className="status" data-indicator="meals"></div>
                </div>
              </div>
              <div className="days_per_week">
                <p className="mb-1 text-center text-md-left">
                  <strong className="txt">Adicional:</strong>
                   
                </p>
                <div className="day_amount radio_row justify-content-center justify-content-md-start">
                  <label>
                    <input
                      type="radio"
                      id="desayuno"
                      name="day"
                      value="5"
                    ></input>
                    <span>Desayuno</span>
                  </label>
                  <label>
                    <input type="radio" id="postre" name="day" value="7"></input>
                    <span>Postre</span>
                  </label>
                  <div className="status" data-indicator="days"></div>
                </div>
              </div>
              <div className="totals border-bottom mb-3 pb-3">
                <div className="d-flex align-items-center justify-content-around justify-content-md-start">
                  <div className="order-total mr-3">
                    <p className="weight-bold mb-0">Total:</p>
                    S/.
                    <span>{message}</span>
                  </div>
                  <div className="add-to-cart-button mx-3">
                    <div id="add_to_cart">Comprar</div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          )
        }