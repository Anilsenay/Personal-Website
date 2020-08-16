import React, { Component } from 'react'
import '../App.css'
import { RoughNotation } from "react-rough-notation";

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

        const hacker = "Hacking ifadesi gibi değişken bir ifade için basit bir tanım yapmak zordur; ama birçok hacker'ın ortak özelliği oyuncu, zeki ve keşifçi olmalarıdır. Bu nedenle hacking, oyuncu bir zeka ruhunda mümkün olanın sınırlarını keşfetmek anlamına gelmektedir. Oyuncu zeka gösteren etkinlikler hack değerine sahiptir.\n\n – Richard Stallman, “Hacking Hakkında”"

        const paragraphs_tr = [
            <p>Selam ben Anıl. Marmara Üniversitesi'nde Bilgisayar Mühendisliği okuyorum. Çocukluğumdan beri bilgisayarla ilgileniyorum. Bir merak, tutku ile başladığım kodlama ve tasarım artık hayatımın büyük bir parçası olmuş durumda. </p>,
            <p>Kendimi <RoughNotation type="box" show={true} color="green"><a href="https://frpnet.net/makaleler/geek-nedir">Geek</a></RoughNotation> olarak tanımlayabilirim. Bilgisayar oyunları, sinema, çizgi roman, bilim kurgu ve fantastik kitaplar günlük hayatımda bolca tükettiğim ve vakit ayırdığım ilgi alanlarım. </p>,
            <p>Yazılım dünyasına girişim ise web tasarım ile başladı. O zamanlar(~2012) henüz Html5 bile yoktu ve Frontpage kullanılıyordu. Birkaç yıl web tasarım ile ilgilendikten sonra uzun bir süre web tarafında bir geliştirme yapmadım. Şu sıralar tekrardan frontend ile ilgileniyorum. <RoughNotation type="underline" strokeWidth={2} show={true} color="green">React</RoughNotation> ile web, <RoughNotation type="underline" strokeWidth={2} show={true} color="green">React Native</RoughNotation> ile mobil uygulama geliştiriyorum. Kod yazmak dışında Figma ve XD ile UI tasarımı da yapıyorum. Bunun dışında küçük yaşlardan beridir hack kültürünün içindeyim ve kendimi <span className="tool" data-tip={hacker} data-html="true" >hacker</span>(cracker değil) olarak da tanımlayabilirim. Bu hack kültüründen gelen aktivist bir tutum olarak da özgür yazılım savucusuyum ve mümkün olduğunca özgür yazılımları kullanmayı tercih ediyorum.</p>
        ]


        return (
            <div className="whoami">
                <div className="whoami-text">
                    <div>~$ whoam<span className="i">i</span></div>  
                </div>
                {paragraphs_tr[0]}
                {paragraphs_tr[1]}
                {paragraphs_tr[2]}
            </div>
        )
    }
}
//style={{backgroundColor: '#403e42'}}