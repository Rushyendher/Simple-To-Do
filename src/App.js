import React from "react";

import Header from "./components/Header.js";
import WriteToDo from "./components/WriteToDo.js";

export default class App extends React.Component{
    render(){
        return(
            <div className="container text-center">
                <Header/>
                <br/>
                <WriteToDo/>
            </div>
        )
    }
}