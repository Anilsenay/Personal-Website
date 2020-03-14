import React, { Component } from 'react'

export default class Whoami extends Component {

    intervalID = 0;
    
    componentDidMount(){
        this.intervalID = setInterval(() => {
            (document.querySelector('.i').style.backgroundColor === "rgb(64, 62, 66)") ? (document.querySelector('.i').style = '') : (document.querySelector('.i').style = 'background-color: #403e42');
        }, 500);
    }

    componentWillUnmount() {
        clearInterval(this.intervalID)
    }

    render() {

        const paragraphs_tr = [
            <p>Selam ben Anıl. Marmara Üniversitesi'nde Bilgisayar Mühendisliği okuyorum. Çocukluğumdan beri bilgisayarla ilgileniyorum. Bir merak, tutku ile başladığım kodlama ve tasarım artık hayatımın büyük bir parçası olmuş durumda. </p>,
            <p>Kendimi <a href="https://frpnet.net/makaleler/geek-nedir">Geek</a> olarak tanımlayabilirim. Bilgisayar oyunları, sinema, çizgi roman, bilim kurgu ve fantastik kitaplar günlük hayatımda bolca tükettiğim ve vakit ayırdığım ilgi alanlarım. </p>
        ]

        const paragraphs_en = [
            <p>Hi, I am Anıl. I am studying Computer Engineering at Marmara University. I've been interested in computers since I was a kid. I started coding and designing with a curiosity, passion then they became a big part of my life. </p>,
            <p>I could call myself a <a href="https://www.dictionary.com/e/dork-dweeb-nerd-geek-oh/">Geek</a>. Computer games, cinema, comics, science fiction and fantasy books are my interests which I have consumed and spent time in my daily life. </p>
        ]

        return (
            <div className="whoami">
                <div className="whoami-text">
                    <div>~$ whoam<span className="i">i</span></div>  
                </div>
                {paragraphs_tr[0]}
                {paragraphs_tr[1]}
            </div>
        )
    }
}
//style={{backgroundColor: '#403e42'}}