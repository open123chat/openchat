import React,{Fragment} from 'react';
import { Container } from 'react-bootstrap';
import Header from './Header';
import Navigation from './Navigation';
const SiteLayout = ({children}) => {
    return (
        <Fragment>
            <Header/>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%", height:"100%"}}>
                <div style={{padding:"10px", width:"10%", backgroundColor:"yellow"}}>
                    <Navigation/>
                </div>
                <Container style={{width:"90%"}}>
                    {children}
                </Container>
            </div>    
        </Fragment>
    );
};


export default SiteLayout;