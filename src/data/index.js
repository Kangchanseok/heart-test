export default {
User: [
    {
        user_no: 1,
        name: '강찬석'
        
    },
    {
        user_no: 2,
        name: '신중호'
    }
],

Content: [
    {
        content_no: 1,
        user_no: 1,
        title: 'gd',
        context: 'gd',
        regdate: '2021-10-21 12:33:22'
    },
    {
        content_no: 2,
        user_no: 2,
        title: 'good',
        context: 'good',
        regdate: '2021-10-21 12:33:22'
    }
],

Comment: [
    {
        comment_no: 1,
        user_no: 2,
        content_no: 1,
        context: 'czcz',
        regdate: '2021-10-21 12:33:22'
    }
],
SubComment: [
    {
        subcomment_no: 1,
        comment_no: 1,
        user_no: 1,
        context: 'rtrt',
        regdate: '2021-10-21 12:33:22'
    }
]
}