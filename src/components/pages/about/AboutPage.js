import React from 'react';
import { Title, SubTitle } from '../../common/text/Basics';
import { EnvVariables } from './envSection/EnvVariables';
import { ContextDisplay } from './contextSection/ContextDisplay';
import { TokenDisplay } from './tokenSection/TokenDisplay';

export function AboutPage() {
    return ( <
        div >
        <
        Title > About < /Title> <
        SubTitle > These are the Environment variables < /SubTitle> <
        EnvVariables / >
        <
        SubTitle > This is the Data contained in the React Context < /SubTitle> <
        ContextDisplay / >
        <
        SubTitle > Current Token in Local Storage < /SubTitle> <
        TokenDisplay / >
        <
        /div>
    );
}