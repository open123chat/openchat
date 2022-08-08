import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import SiteLayout from '../../layout/SiteLayout';

import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import styled from 'styled-components';
import { ContentState, convertFromHTML, convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';

import { useNavigate, useParams } from 'react-router-dom';

//Editor css  
const MyBlock = styled.div`
    .wrapper-class{
        width: 100%;
        margin: 0 auto;
        margin-bottom: 4rem;
    }
    .editor {
        height: 250px !important;
        border: 1px solid #f1f1f1 !important;
        padding: 5px !important;
        border-radius: 2px !important;
    }
    `;

const NoticeUpdate = () => {
    
    const {noticeNo} = useParams(); //NoticeNo 받아오기
    let navigator = useNavigate();
    const [noticeTitle,setNoticeTitle] = useState({
        noticeTitle: ''
    });
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    
    //useEffect()
    useEffect(  ()=>{
        console.log('공지사항 수정 dom',noticeNo);
        const data = async() =>{
            await fetch("http://localhost:8080/api/notice/"+noticeNo,{
                method:"GET",
                headers:{
                    'Authorization':localStorage.getItem('Authorization'),
                    'Content-Type':'application/json',
                    'Accept':'application/json'
                },
                
                body:null                
            })
            .then((res)=>{
                if(res.status===200){
                    return res.json();
                }else{
                    return null;
                }

            })
            .then((res)=>{
                if(res !==null){
                    console.log('useEffect Data : ',res)
                    console.log('useEffect Title Data : ',res.noticeTitle)
                    const title={noticeTitle:res.noticeTitle};
                    setNoticeTitle(title);

                    //응답받은 Content --> block HTML로 변경
                    const blocksFromHTML = convertFromHTML(res.noticeContent);
                    //변경된 blocksFromHTML을 드래프트 위지윅에서 사용하기 위해 BlockArray 생성
                    const state = ContentState.createFromBlockArray(
                        blocksFromHTML.contentBlocks,
                        blocksFromHTML.entityMap,
                    );
                    //EditorState 상태에 BlockArray 값으로 설정
                    setEditorState(EditorState.createWithContent(state));
                }else{
                    return null;
                }
            })
        }
        data();
    },[]   )


    const changeValue = (e) => {
        // editorState에 값 설정
        console.log('제목 :',e);
        setNoticeTitle({
        ...noticeTitle,
        [e.target.name]:e.target.value
        });
    };

    const onEditorStateChange = (editorState) => {
        // editorState에 값 설정
        // setUpdateEditor(...editorState,editorState);
        setEditorState(editorState);
        console.log('에디터 :',EditorState);
      };

    const submitNotice = () =>{
        const data = {
            'noticeTitle':noticeTitle.noticeTitle,
            'noticeContent':draftToHtml(convertToRaw(editorState.getCurrentContent()))
        }
        console.log('수정 Data : ',data)
        const fetchfun = async() =>{
            await fetch("http://localhost:8080/api/notice/"+noticeNo,{
                method:"PUT",
                headers:{
                    'Authorization':localStorage.getItem('Authorization'),
                    'Content-Type':'application/json',
                    'Accept':'application/json'
                },
                body:JSON.stringify(data)
            })
            .then((res)=>{
                if(res.status === 200){
                    return res;
                }else{
                    return null;
                }
            })
            .then((res)=>{
                if(res !== null){
                    navigator("/notice/"+noticeNo);
                }else{
                    alert("수정에 실패했습니다.");
                }
            })
        }
        fetchfun();
    }
    return (
        <SiteLayout>
            <Form style={{marginTop:'20px'}} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>제목 : {noticeNo}</Form.Label>
                    <Form.Control type="text" value={noticeTitle.noticeTitle} onChange={changeValue} name="noticeTitle" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>내용</Form.Label>
                        <MyBlock>
                            <Editor
                                // 에디터와 툴바 모두에 적용되는 클래스
                                wrapperClassName="wrapper-class"
                                // 에디터 주변에 적용된 클래스
                                editorClassName="editor"
                                // 툴바 주위에 적용된 클래스
                                toolbarClassName="toolbar-class"
                                // 툴바 설정
                                toolbar={{
                                // inDropdown: 해당 항목과 관련된 항목을 드롭다운으로 나타낼것인지
                                list: { inDropdown: true },
                                textAlign: { inDropdown: true },
                                link: { inDropdown: true },
                                history: { inDropdown: false },
                                }} 
                                placeholder="내용을 작성해주세요."
                                // 한국어 설정
                                localization={{
                                locale: 'ko',
                                }}
                                // 초기값 설정
                                editorState={editorState}
                                // 에디터의 값이 변경될 때마다 onEditorStateChange 호출
                                onEditorStateChange={onEditorStateChange}
                                
                            />
                        </MyBlock>
                </Form.Group>
                <div style={{display:'flex', justifyContent:'center'}}>
                    <Button variant="primary" onClick={()=>{submitNotice()}}>
                        글수정
                    </Button>
                </div>

            </Form>
        </SiteLayout>
    );
};

export default NoticeUpdate;