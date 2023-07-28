import './Welcome.css';
import App from "../App";
import sudoku from "../Images/rules.jpg"
import React, {useState} from "react";
function Welcome(){

    return (
            <>
                <App></App>
                <div className = "welcome-page-background">
                    <div>
                        <h1>Old meg a sudoku-t Sudoku Solverrel!</h1>
                        <div className="welcome-paragraphs">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis volutpat ligula mauris, ut scelerisque massa aliquet sit amet. Vivamus ligula nisl, bibendum vel tincidunt vitae, posuere id turpis. Vestibulum non est eu erat tincidunt condimentum nec ut orci. Vivamus maximus nisi sed laoreet dictum. Quisque sollicitudin urna neque. Suspendisse at luctus tortor, ac elementum quam. Fusce gravida nulla sed magna maximus, vitae tincidunt diam pretium. Vestibulum pretium ante augue, a commodo orci tempus sed. Phasellus aliquam tellus ac orci semper tempor. Curabitur nibh enim, pellentesque nec tellus sit amet, viverra egestas enim.</p>
                            <div>
                                <img src= {sudoku}/>
                                <p>Cras purus leo, efficitur sed diam vel, congue faucibus nunc. Maecenas vel bibendum est. Pellentesque facilisis elit at libero sodales, sit amet rutrum libero commodo. Vivamus egestas egestas dictum. Donec ac malesuada lacus, ac mattis ex. Nulla tempor risus vitae porta ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                            </div>
                            <p>Aliquam in vestibulum dolor, sed rutrum mi. Aliquam ipsum neque, suscipit vel iaculis rutrum, rhoncus non leo. Quisque sagittis nulla sit amet augue mollis, a condimentum nisi imperdiet. Morbi eu felis pellentesque, consectetur enim in, iaculis nisl. Suspendisse at mauris iaculis, cursus dolor eget, facilisis lorem. Fusce imperdiet aliquet lorem, at posuere nulla fermentum eu. Morbi quis orci volutpat, convallis tellus a, pulvinar lorem. Nunc vel mauris nec orci dapibus vestibulum molestie sed orci. Integer tellus ante, euismod rhoncus turpis a, interdum lacinia dolor. Etiam est nisl, vestibulum non commodo vel, luctus nec ex. Pellentesque placerat tortor lectus, id ullamcorper leo porttitor non. Proin leo arcu, congue ac urna ut, semper condimentum nulla. Vestibulum enim augue, fermentum in risus ut, bibendum tincidunt mauris. Suspendisse potenti. Maecenas scelerisque nisi vel auctor iaculis.</p>
                        </div>
                    </div>
                </div>
            </>
    );
}
export default Welcome;