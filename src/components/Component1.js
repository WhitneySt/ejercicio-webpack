// import { Component } from "react/cjs/react.production.min";

import React, { Component } from 'react'
import StylesLI, { StylesDiv, Stylesh2, Stylesh3, StylesImg1, StylesImg2, StylesSpan } from '../styles/Styles'




export default class Component1 extends Component {
    render() {
        return (
            <StylesDiv>
                <StylesImg1 src='https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small/beautiful-latin-woman-avatar-character-icon-free-vector.jpg' alt='avatar'></StylesImg1>
                <Stylesh2>Whitney Jhoana Stevenson Seña</Stylesh2>
                <Stylesh3>Ingeniera Ambiental y Mecánica</Stylesh3>
                <StylesSpan>Aprendiz Frontend</StylesSpan>
                <StylesSpan>Cartagena, Colombia</StylesSpan>
                <StylesImg2 src='https://www.kindpng.com/picc/m/4-43270_transparent-white-png-social-media-icons-social-media.png' alt='socialMedia'></StylesImg2>
            </StylesDiv>
        )
    }
}