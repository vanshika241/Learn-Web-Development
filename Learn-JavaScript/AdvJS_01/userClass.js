
export default class User {
    constructor(email, name) {
        this._id = email;
        this._name = name;
    }

    greeting(){
        console.log(`Hii , My name is ${this._name} and connect with me here ${this._id}`);
    }
}