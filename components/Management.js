import Image from 'next/image';
import data from '../data/managementSection.json';
import faqData from '../data/faq.json';
import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
const Management = () => {
    const styles = {
        bgColor: 'white',
        titleTextColor: "#000",
        rowTitleColor: "#000",
        rowContentColor: '#8E22F4',
        arrowColor: "#fff",
    };
    
    const config = {
        animate: true,
        arrowIcon: "",
        tabFocus: false
    };
    return (
        <>
        <section className="management">
            <div className="container-management">
                <div className="content-management">
                    {data.blocks.map(managment =>
                        <div className="item" key={managment.id}>
                            <div className="left-side">
                                <Image src={managment.image} alt="Mockup" width={650} height={650}/>
                            </div>
                            <div className="right-side">
                                <h3>{managment.title}</h3>
                                <p>{managment.description}</p>
                                {/* <button>Learn more</button> */}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
        <br/>
        <div className= "faq-style-wrapper">
            <Faq
                data={faqData}
                styles={styles}
                config={config}
            />
        </div>
        </>
    )
}

export default Management;