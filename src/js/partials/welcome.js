import welcomeImage from './../../img/welcome.svg'
import fishGif from './../../img/fish.gif'

const Welcome = {
    container: null,
    loading: null,
    init: function() {

        this.container = document.createElement('div');
        this.container.className = "welcome-container";
        document.body.appendChild(this.container);

        const img = document.createElement('img');
        img.src = welcomeImage;
        this.container.appendChild(img);


        setTimeout(() => {
            const label = document.createElement('label');
            label.innerText = "Введите кодовое слово для входа в ультрареальность:"
            this.container.appendChild(label);

            const input = document.createElement('input');
            input.id = "secretword"
            input.type = "text"
            input.placeholder = "Сюда..."
            label.appendChild(input);

            const button = document.createElement('button');
            button.innerText = "Войти";
            this.container.appendChild(button);

            button.addEventListener('click', () => {
                if (this.loading) return;
                const secretWord = document.getElementById('secretword').value;
                if (secretWord) {
                    this.showLoading();
                    this.checkSecretWord(secretWord).then(result => {
                        console.log(result)
                    }).catch(error => {
                        console.log(error)
                        this.showError();
                    }).finally(() => {
                        this.hideLoading()
                    })
                } else {
                    this.showError();
                }

            })

        }, 5000);
    },
    checkSecretWord: function() {
        return new Promise((resolve, reject) => {


            setTimeout(() => {
                reject({
                    success: true
                });
            }, 1000);


        })
    },
    showError: function() {
        console.log("ERROR!")
        const input = document.getElementById('secretword')
        input.classList.add('error')
        setTimeout(() => {
            input.classList.remove('error')
        }, 500);
    },
    showLoading: function() {

        this.loading = document.createElement('img');
        this.loading.src = fishGif;
        this.container.appendChild(this.loading);
    },
    hideLoading: function() {
        this.loading.remove();
        this.loading = null;
    },
}

export default Welcome;