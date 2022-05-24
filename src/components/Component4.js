import React, { Component } from 'react'
import { StylesDiv4, StylesDiv5, StylesDiv6, Stylesh2 } from '../styles/Styles'


export default class Component4 extends Component {
    render() {
        return (
            <StylesDiv4>
                <Stylesh2>Habilidades</Stylesh2>
                <StylesDiv5>
                    <StylesDiv6>
                    <label for="file">HTML</label>
                    <progress id="file" max="100" value="60"> 60% </progress>
                    </StylesDiv6>
                    <StylesDiv6>
                    <label for="file">CSS</label>
                    <progress id="file" max="100" value="60"> 60% </progress>
                    </StylesDiv6>
                    <StylesDiv6>
                    <label for="file">JavaScript</label>
                    <progress id="file" max="100" value="40"> 40% </progress>
                    </StylesDiv6>
                </StylesDiv5>

            </StylesDiv4>
        )
    }
}