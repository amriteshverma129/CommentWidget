export default class View {
    constructor() {
        this.inputNode = document.querySelector('.input-box');
        this.row = document.querySelector('.row');

    }

    createReplyNode = (commentBoxNode) => {
        let replyNode = document.createElement('span');
        replyNode.innerHTML = 'Reply';
        let tempInputNode = document.createElement('input');
        replyNode.addEventListener('click', () => {
            let arr = Array.from(commentBoxNode.parentNode.children)
            commentBoxNode.parentNode.insertBefore(tempInputNode, arr[1])
        })
        return replyNode;
    }
    createDeleteNode = (commentBoxNode) => {
        let deleteNode = document.createElement('span');
        deleteNode.innerHTML = 'Delete';
        deleteNode.addEventListener('click', () => {
            commentBoxNode.parentNode.remove();
        })
        return deleteNode;
    }
    createCommentNode = (value) => {
        let commentNode = document.createElement('div');
        commentNode.innerHTML = value;
        return commentNode;
    }

    createCommentBox = (value) => {
        let commentBoxNode = document.createElement('div');
        commentBoxNode.classList.add('comment-box');
        commentBoxNode.appendChild(this.createCommentNode(value));
        commentBoxNode.appendChild(this.createReplyNode(commentBoxNode));
        commentBoxNode.appendChild(this.createDeleteNode(commentBoxNode));
        return commentBoxNode;
    }
    displayComment = (node, value) => {
        let newRow = document.createElement('div');
        newRow.appendChild(this.createCommentBox(value))
        newRow.style.paddingLeft = "10px"
        node.appendChild(newRow);
    }
}