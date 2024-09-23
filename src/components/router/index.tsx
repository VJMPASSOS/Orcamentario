import React, { useState } from "react";
import Dashboard from "../../pages/dashboard";
import Home from "../../pages/home";
import About from "../../pages/about";

enum RouterPages{
    'home'='home',
    'dashboard'='dashboard',
    'about'='about'
}

const Router = () =>{
    const[getCurrentPage, setCurrentPage]=
    useState<RouterPages>(RouterPages.home)

    const renderButton = () => (
        <div>
            <button onClick={()=> setCurrentPage(RouterPages.home)}>Home</button>
            <button onClick={()=> setCurrentPage(RouterPages.about)}>About</button>
            <button onClick={()=> setCurrentPage(RouterPages.dashboard)}>Dashboard</button>
        </div>
    )

    const renderPage = () =>{
        switch(getCurrentPage){
            case RouterPages.home:return <Home/>
            case RouterPages.about:return <About/>
            case RouterPages.home:return <Dashboard/>
        }
    }

    return(
        <div>
            {renderButton()}
            {renderPage()}
        </div>
    )
}

export default Router;