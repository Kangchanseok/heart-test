import axios from 'axios';

// content

export const addContent = ({ user_no, title, context }) => {
    return axios.post("http://127.0.0.1:3000/add/content", {
      user_no,
      title,
      context
      
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

  // locationcomment

  export const addLocationComment = ({user_no, loca_no, context}) => {
    return axios.post("http://127.0.0.1:3000/add/locationcomment", {
      user_no, loca_no, context
    })
  }

  export const findLocationComment = ({ loca_no }) => {
    return axios.get("http://127.0.0.1:3000/find/locationcomment", {
      params: { loca_no }
    });
  };

  export const findLocationCommentList = () => {
    return axios.get("http://127.0.0.1:3000/find/locationcomment_list");
  };

  export const modifyLocationComment = ({ context, comment_no }) => {
    return axios.post("http://127.0.0.1:3000/modify/locationcomment", {
      context,
      comment_no
    });
  };

  export const deleteLocationComment = ({ comment_no }) => {
    return axios.post("http://127.0.0.1:3000/delete/locationcomment", {
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
    return axios.post("http://127.0.0.1:3000/delete/subcomment", {
      subcomment_no
    });
  };

  // location

  export const findLocation = ({ loca_no }) => {
    return axios.get("http://127.0.0.1:3000/find/location", {
      params: { loca_no }
    });
  };
  
  export const findLocationList = () => {
    return axios.get("http://127.0.0.1:3000/find/location_list");
  };
  
  // locationdetail
  export const findLocationDetail = ({ detail_no }) => {
    return axios.get("http://127.0.0.1:3000/find/locationdetail", {
      params: { detail_no }
    });
  };
  
  export const findLocationDetailList = () => {
    return axios.get("http://127.0.0.1:3000/find/locationdetail_list");
  };
  
  // hash
  export const findHash = ({ hash_no }) => {
    return axios.get("http://127.0.0.1:3000/find/hash", {
      params: { hash_no }
    });
  };
  
  export const findHashList = () => {
    return axios.get("http://127.0.0.1:3000/find/hash_list");
  };

  export const findHashNo = ({ hash_name }) =>{
    return axios.get("http://127.0.0.1:3000/find/hashno", {
      params: { hash_name }
    });
  }; 

  export const findHashName = ({ loca_no }) => {
    return axios.get("http://127.0.0.1:3000/find/hashname", {
      params: { loca_no }
    });
  };

  // select hashname
  export const selectHashName = ({ hash_name }) => {
    return axios.get("http://127.0.0.1:3000/select/hashname", {
      params: { hash_name }
    });
  };
