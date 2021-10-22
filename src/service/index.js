import axios from 'axios';

// content

export const addContent = ({ user_no, title, context, regdate }) => {
    return axios.post("http://127.0.0.1:3000/add/content", {
      user_no,
      title,
      context,
      regdate
    });
  };
  
  export const modifyContent = ({ title, context, content_no }) => {
    return axios.post("http://127.0.0.1:3000/modify/content", {
      
      title,
      context,
      content_no

    });
  };
  
  export const deleteContent = ({ content_no }) => {
    return axios.post("http://127.0.0.1:3000/delete/content", {
      content_no
    });
  };
  
  export const findContent = ({ content_no }) => {
    return axios.get("http://127.0.0.1:3000/find/content", {
      params: { content_no }
    });
  };
  
  export const findContentList = () => {
    return axios.get("http://127.0.0.1:3000/find/content_list");
  };
  
  // comment
  
  export const addComment = ({user_no, content_no, context}) => {
    return axios.post("http://127.0.0.1:3000/add/comment", {
      user_no, content_no, context
    })
  }

  export const findComment = ({ content_no }) => {
    return axios.get("http://127.0.0.1:3000/find/comment", {
      params: { content_no }
    });
  };

  export const modifyComment = ({ context, comment_no }) => {
    return axios.post("http://127.0.0.1:3000/modify/comment", {
      
      
      context,
      comment_no

    });
  };

  export const deleteComment = ({ comment_no }) => {
    return axios.post("http://127.0.0.1:3000/delete/comment", {
      comment_no
    });
  };
  
  // subcomment
  
  export const addSubComment = ({user_no, comment_no, context}) => {
    return axios.post("http://127.0.0.1:3000/add/sub_comment", {
      user_no, comment_no, context
    })
  }
  
  export const findSubComment = ({ comment_no }) => {
    return axios.get("http://127.0.0.1:3000/find/sub_comment", {
      params: { comment_no }
    });
  };
  
  export const deleteSubComment = ({ subcomment_no }) => {
    return axios.post("http://127.0.0.1:3000/delete/sub_comment", {
      subcomment_no
    });
  };