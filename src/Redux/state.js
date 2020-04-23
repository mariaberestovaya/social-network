const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const  SEND_MESSAGE =  'SEND-MESSAGE';
const UPDATE_NEW_MESSAGES_TEXT = 'UPDATE-NEW-MESSAGES-TEXT'

let store = {
    _state: {
        messages: {
            MessagesData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: '???'},
                {
                    id: 4,
                    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, natus. Quidem dolorem totam architecto eveniet unde mollitia, qui accusantium culpa?"
                },
            ],
            newMessageText: "",
            DialogsData: [
                {id: 1, name: 'Maria'},
                {id: 2, name: 'Katy'},
                {id: 3, name: 'Gector'},
                {id: 4, name: 'Vasya'},
                {id: 5, name: 'Andre'},
                {id: 6, name: 'Rick'},
            ],
        },
        profile: {
            PostsData: [
                {
                    id: 1,
                    img: "https://img1.goodfon.com/original/1920x1280/0/d3/devushka-krasivaya-lico-golubye.jpg",
                    name: "Vika",
                    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hendrerit gravida rutrum quisque non tellus orci ac auctor.",
                    data: "10/04/2020"
                },
                {
                    id: 2,
                    img: "https://motaen.com/upload/wallpapers/source/2015/12/02/14/04/46709/mota.ru_20151202106.jpg",
                    name: "Alex",
                    message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, molestias?",
                    data: "01/03/2020"
                },
            ],
            newPostText: ""
        },
    },
    _callSubscriber() {
        console.log("State change");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 3,
                name: action.namePost,
                message: this._state.profile.newPostText,
                data: action.dataPost,
                img: "https://yt3.ggpht.com/a/AGF-l78VkDGB-FP-TBRgPfcaE42CblHIW5DD21A0-g=s800-c-k-c0xffffffff-no-rj-mo",
            };
            this._state.profile.PostsData.push(newPost);
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profile.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.messages.newMessageText;
            this._state.messages.newMessageText = "";
            this._state.messages.MessagesData.push({id: 4, message: body});
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGES_TEXT) {
            this._state.messages.newMessageText = action.body;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = (namePost, dataPost) => {
    return {
        type: ADD_POST,
        namePost: namePost,
        dataPost: dataPost
    }
}

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});


window.store = store;

export default store;