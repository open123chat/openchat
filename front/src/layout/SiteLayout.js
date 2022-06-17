import React,{Fragment} from 'react';
import { Container } from 'react-bootstrap';
import Header from './Header';
import Navigation from './Navigation';
const SiteLayout = ({children}) => {
    return (
        <Fragment>
            <Header/>
                <div style={{display:'flex'}}>
                    <Navigation/>
                     <Container style={{}}>
                         {children}
                    </Container>
                </div>
        </Fragment>
    );
};


export default SiteLayout;