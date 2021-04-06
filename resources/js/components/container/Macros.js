import React from 'react'
import { Link } from "react-router-dom";
import Product from "./Product";

export default function Macros() {
    return (
        <section className="pr-sm-0 pr-md-2 pl-md-2">
            <div className="p-3">
              <h2 className="d-flex justify-content-center">O ESCOGE DIETAS CALCULADAS CALORICAMENTE</h2>
            </div>
          <div
            id="card-51574f36ce3c359e55b39e884f3f6378"
            className="row meal-container"
          >
            <div className="col-lg-4 col-md-6 col tns-item" aria-hidden="true" tabIndex={-1}>
              <div class="meal-card rounded border active">
              <Link to="/classic">
                    <Product image="https://www.trifectanutrition.com/hubfs/Meal%20Delivery/clean-eating-meal-delivery-salmon-lunch.jpg" />
                    </Link>
                <div className="w-100 p-3">
                  <div className="d-flex justify-content-between py-1">
                  <div className="title">Plan 1500 kcal</div>
                  <div className="price">
                    S/ 59.90 <span>/ semana</span>
                  </div>
                  </div>
                  <article className="primary-text-color pb-3">
                    Enjoy a balanced approach to clean eating with simply made
                    meals high in quality protein, organic veggies, and whole
                    grains.{" "}
                  </article>
                  <div className="w-100 d-flex align-items-center getting-started">           
                    <button type="button" class="col-6 btn-rounded">
                      Comprar
                    </button>
                    <p className="col-6 chef-choice primary-text-color">
                      CHEF’S CHOICE ROTATING MENU
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
  
            <div className="col-lg-4 col-md-6 col tns-item" aria-hidden="true" tabIndex={-1}>
              <div className="meal-card rounded border active">
              <Link to="/clean">
                    <Product image="https://www.trifectanutrition.com/hubfs/Meal%20Delivery/vegetarian-meal-plan-delivery-1.jpeg" />
                </Link>
                <div className="w-100 p-3">
                  <div className="d-flex justify-content-between py-1">
                  <div className="title">Plan 2000 kcal</div>
                  <div className="price">
                    S/ 69.90 <span>/ semana</span>
                  </div>
                  </div>
                  <article className="primary-text-color pb-3">
                    Enjoy a balanced approach to clean eating with simply made
                    meals high in quality protein, organic veggies, and whole
                    grains.{" "}
                  </article>
                  <div className="w-100 d-flex align-items-center getting-started">
                    <button
                      type="button"
                      className="col-6 btn-rounded"
                      href="https://www.trifectanutrition.com/clean-eating-meal-delivery"
                      onclick="window.location.href = 'https://www.trifectanutrition.com/clean-eating-meal-delivery'"
                    >
                      Comprar
                    </button>
                    <p className="col-6 chef-choice primary-text-color">
                      CHEF’S CHOICE ROTATING MENU
                    </p>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6 col tns-item" aria-hidden="true" tabIndex={-1}>
              <div className="meal-card rounded border active">
              <Link to="/vegan">
                    <Product image="https://www.trifectanutrition.com/hubfs/Meal%20Delivery/keto-meal-delivery-free-range-chicken-breast-with-spinach-and-cheese.jpeg" />
                   </Link>
                <div className="w-100 p-3">
                  <div className="d-flex justify-content-between py-1">
                  <div className="title">Plan 2500 kcal</div>
                  <div className="price">
                    S/ 79.90 <span>/ semana</span>
                  </div>
                  </div>
                  <article className="primary-text-color pb-3">
                    Enjoy a balanced approach to clean eating with simply made
                    meals high in quality protein, organic veggies, and whole
                    grains.{" "}
                  </article>
                  <div className="w-100 d-flex align-items-center getting-started">
                    <button
                      type="button"
                      class="col-6 btn-rounded"
                      href="https://www.trifectanutrition.com/clean-eating-meal-delivery"
                      onclick="window.location.href = 'https://www.trifectanutrition.com/clean-eating-meal-delivery'"
                    >
                      Comprar
                    </button>
                    <p className="col-6 chef-choice primary-text-color">
                      CHEF’S CHOICE ROTATING MENU
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </section>
   
    );
  }