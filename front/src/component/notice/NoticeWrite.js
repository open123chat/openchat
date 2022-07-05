import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import SiteLayout from '../../layout/SiteLayout';

import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import styled from 'styled-components';
import { convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';

import { useNavigate } from 'react-router-dom';
// // imports for summernote
// import ReactSummernote from "react-summernote";
// import "react-summernote/dist/react-summernote.css";
// import "react-summernote/lang/summernote-ko-KR";
// import "bootstrap/js/modal";
// import "bootstrap/js/dropdown";
// import "bootstrap/js/tooltip";
// import "bootstrap/dist/css/bootstrap.css";

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
const NoticeWrite = () => {
    let navigator = useNavigate();
    const [noticeWrite, setNoticeWrite] = useState({
        noticeTitle:''});
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const changeValue = (e) => {
      // editorState에 값 설정
      console.log('내용 :',e);
      setNoticeWrite({
        ...noticeWrite,
        [e.target.name]:e.target.value
      });
    };
    const onEditorStateChange = (editorState) => {
        // editorState에 값 설정
        setEditorState(editorState);
        console.log('에디터 :',EditorState);
      };

    const submitCommunity= (e)=>{
        
        //draftToHtml 에디터에서 작성된 값을 html 값으로 변환해줌
        console.log("submit data : ", draftToHtml(convertToRaw(editorState.getCurrentContent())));
        let data = {...noticeWrite,
            'noticeContent':draftToHtml(convertToRaw(editorState.getCurrentContent())),
            'userNo':localStorage.userNo
        }
        console.log('data',data)
        const fetchfun = async() =>{
            const response = await fetch("http://localhost:8080/api/notice",{
                                method:"POST",
                                headers:{
                                    'Authorization':localStorage.getItem('Authorization'),
                                    'Content-Type':'application/json',
                                    'Accept':'application/json'
                                },
                                body:JSON.stringify(data)
                            })
                            .then((res)=>{
                                console.log('공지사항 작성 결과',res);
                                if(res.status===201){
                                    
                                    return res;
                                }else{
                                    return null;
                                }
                            })
                            .then((res)=>{
                                if(res!==null){
                                    console.log('공지사항 작성 성공')
                                    navigator("/notice")
                                }else{
                                    alert("공지사항 작성에 실패하였습니다.")
                                }
                            });
        }
        fetchfun();
    }
    return (
        <SiteLayout>
            <Form style={{marginTop:'20px'}} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label> 공지사항 제목</Form.Label>
                    <Form.Control type="text" placeholder="제목을 입력해주세요" onChange={changeValue} name="noticeTitle" />

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
                    <Button variant="primary" onClick={()=>{submitCommunity()}}>
                        글작성
                    </Button>
                </div>
                {/* <ReactSummernote
                    value="Default value"
                    options={{
                    lang: 'ru-RU',
                    height: 350,
                    dialogsInBody: true,
                    toolbar: [
                        ['style', ['style']],
                        ['font', ['bold', 'underline', 'clear']],
                        ['fontname', ['fontname']],
                        ['para', ['ul', 'ol', 'paragraph']],
                        ['table', ['table']],
                        ['insert', ['link', 'picture', 'video']],
                        ['view', ['fullscreen', 'codeview']]
                    ]
                    }}
                    
                /> */}

            </Form>
        </SiteLayout>
    );
};

export default NoticeWrite;