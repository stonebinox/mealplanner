import React, { Component } from 'react';

export class Meal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breakfast: ["Idli-Vada", "Dosa", "Gobi paratha", "Aloo paratha", "Paneer paratha", "Methi paratha", "Radish paratha", "Upma", "Vermicelli", "Pulao", "Chapati - Palak Paneer", "Puri - Aloo", "Puri - Channa", "Puri", "Paddu", "Rava Dosa", "Poha", "Tomato rice", "Maggi", "Puliogare", "Bisibelebath", "Bread toast and eggs", "Chapati - Egg masala", "Bakery bread toast", "Vangibath", "Lemon rice"],
            currentMeal: null
        };
        this.getMeal = this.getMeal.bind(this);
        var that = this;
        setTimeout(function(){
            that.getMeal();
        }, 500);
    }

    getMeal() {
        var meals = this.state.breakfast;
        var meal = meals[Math.floor(Math.random() * meals.length)];
        this.setState({
            currentMeal: meal
        });
    }

    render() {
        return (
            <div className="well">
                <h4 className="text-center">Today's meal is ...</h4>
                <p className="text-center lead text-success">{this.state.currentMeal}</p>
                <hr/>
                <div className="text-center">
                    <button type="button" className="btn btn-primary" onClick={this.getMeal}>Something else ...</button>
                </div>
            </div>
        );
    }
}