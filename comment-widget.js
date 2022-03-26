import View from './view.js'
class CommentWidget {
    constructor() {
        this.viewService = new View();
    }

    getComment = () => {
        document.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {

                if (e.target.isEqualNode(this.viewService.inputNode)) {
                    this.viewService.displayComment(this.viewService.row, e.target.value);
                    e.target.value = '';
                }
                else {
                    this.viewService.displayComment(e.target.parentNode, e.target.value);
                    e.target.value = '';
                    e.target.remove();

                }

            }
        })

    }
}
let comment_Widget = new CommentWidget();
comment_Widget.getComment();