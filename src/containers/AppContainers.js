import React, { Component } from 'react'
import Component1 from '../components/Component1'
import Component2 from '../components/Component2'
import Component3 from '../components/Component3'
import Component4 from '../components/Component4'
import '../styles/styles.css'


export const AppContainers = () => {
    return (
        <div>
            <Component1 />
            <section>
                <Component2 />
                <Component3 />
                <Component4 />
            </section>

        </div>
    )
}