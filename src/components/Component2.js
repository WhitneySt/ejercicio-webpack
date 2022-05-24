import React, {Component} from 'react'
import { StylesDiv2, Stylesh2, Stylesh4, StylesSpan } from '../styles/Styles'

export default class Component2 extends Component{
    render(){
        return(
            <StylesDiv2>
                <Stylesh2>Mis Estudios</Stylesh2>
                <Stylesh4>UTB - 2020</Stylesh4>
                <StylesSpan>Ingeniera Ambiental</StylesSpan>
                <Stylesh4>UTB - 2020</Stylesh4>
                <StylesSpan>Ingeniera Mecánica</StylesSpan>
                <Stylesh4>Academia Geek - 2022 (en curso)</Stylesh4>
                <StylesSpan>Frontend Developer</StylesSpan>
            </StylesDiv2>
        )
    }
}