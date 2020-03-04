import React, { Component } from 'react'

export default class Whoami extends Component {
    
    componentDidMount(){
        setInterval(() => {
            (document.querySelector('.i').style.backgroundColor === "rgb(64, 62, 66)") ? (document.querySelector('.i').style = '') : (document.querySelector('.i').style = 'background-color: #403e42');
        }, 500);
    }

    render() {
        return (
            <div className="whoami">
                <div className="whoami-text">
                    <div>~$ whoam<span className="i">i</span></div>  
                </div>
                <p>Selam ben Anıl. Marmara Üniversitesi'nde Bilgisayar Mühendisliği okuyorum. Çocukluğumdan beri bilgisayarla ilgileniyorum. Bir merak, tutku ile başladığım kodlama ve tasarım artık hayatımın büyük bir parçası olmuş durumda. </p>
                <p>Kendimi <a href="https://frpnet.net/makaleler/geek-nedir">Geek</a> olarak tanımlayabilirim. Bilgisayar oyunları, sinema, çizgi roman, bilim kurgu ve fantastik kitaplar günlük hayatımda bolca tükettiğim ve vakit ayırdığım ilgi alanlarım. </p>
            </div>
        )
    }
}
//style={{backgroundColor: '#403e42'}}