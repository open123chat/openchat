import React from 'react';
import { Button, Form } from 'react-bootstrap';
import SiteLayout from '../../layout/SiteLayout';
const CommunityWrite = () => {
    return (
        <SiteLayout>
            <Form style={{marginTop:'20px'}}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>제목</Form.Label>
                    <Form.Control type="text" placeholder="제목을 입력해주세요" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>내용</Form.Label>
                    <Form.Control type="text" placeholder="내용을 입력해주세요" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    글작성
                </Button>
            </Form>
        </SiteLayout>
    );
};

export default CommunityWrite;