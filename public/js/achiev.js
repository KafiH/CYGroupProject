// -- large container
const box = document.getElementById('box');
// -- dynamic div to display 'shop' and 'redeem' pages
const redeemBox = document.getElementById('redeemBox');
box.appendChild(redeemBox);
// let displayBox = document.createElement('div');
let buttons = document.getElementsByTagName('button');
// const shopBox = document.createElement('div');
redeemBox.innerHTML=`
    <table id="table" cellspacing="0">
        <tr style="text-align:left;">
            <th colspan="2" style="padding: 0 0 10px 20px;">Achievements</th>
            <th style="padding: 0 0 10px 20px;">Merit Points</th>
        </tr >
        <tr>
            <td>Email Verification</td>
            <td class=".badge"></td>
            <td><b>50xp</b></td>
        </tr>
        <tr>
            <td>Profile set up</td>
            <td class=".badge"></td>
            <td><b>50xp</b></td>
        </tr>
        <tr>
            <td>Linked socials</td>
            <td></td>
            <td><b>50xp</b></td>
        </tr>
        <tr>
            <td>Linked codepen.io account</td>
            <td></td>
            <td><b>50xp</b></td>
        </tr>
        <tr>
            <td>Enrollment: HTML</td>
            <td></td>
            <td><b>100xp</b></td>
        </tr>
        <tr>
            <td>HTML: Introduction</td>
            <td class="badgeCont">
                <div>
                    <img src="/img/badgeGoldStar.png" class="badge">
                </div>
            </td>
            <td><b>100xp</b></td>
        </tr>
        <tr>
            <td>First Quiz Attempt</td>
            <td></td>
            <td>
                <div class="imgCont">
                    <img src="/img/present.png" class="present">
                </div>
            </td>
        </tr>
        <tr>
            <td>Certification</td>
            <td></td>
            <td>
                <div class="imgCont">
                    <img src="/img/present.png" class="present">
                </div>
            </td>
        </tr>

    </table>
`

Array.from(buttons).forEach(function(button){
    button.addEventListener('click', (event)=>{
        if(document.querySelectorAll('.focus').length!==0){
            document.querySelectorAll('.focus')[0].className='navButt';
        }
        event.target.className+=' focus';
        redeemBox.innerHTML="";
        // console.log('funtest');

        if(button.innerHTML === 'Redeem'){
            console.log("redeemPage");
            redeemBox.style.cssText=`
                color:rgb(76, 7, 10);;
                background-color: rgb(238, 218, 192);
            `
            redeemBox.innerHTML=`
                <table id="table" cellspacing="0">
                    <tr style="text-align:left;">
                        <th colspan="2" style="padding: 0 0 10px 20px;">Achievements</th>
                        <th style="padding: 0 0 10px 20px;">Merit Points</th>
                    </tr >
                    <tr>
                        <td>Email Verification</td>
                        <td class=".badge"></td>
                        <td><b>50xp</b></td>
                    </tr>
                    <tr>
                        <td>Profile set up</td>
                        <td class=".badge"></td>
                        <td><b>50xp</b></td>
                    </tr>
                    <tr>
                        <td>Linked socials</td>
                        <td></td>
                        <td><b>50xp</b></td>
                    </tr>
                    <tr>
                        <td>Linked codepen.io account</td>
                        <td></td>
                        <td><b>50xp</b></td>
                    </tr>
                    <tr>
                        <td>Enrollment: HTML</td>
                        <td></td>
                        <td><b>100xp</b></td>
                    </tr>
                    <tr>
                        <td>HTML: Introduction</td>
                        <td class="badgeCont">
                            <div>
                                <img src="/img/badgeGoldStar.png" class="badge">
                            </div>
                        </td>
                        <td><b>100xp</b></td>
                    </tr>
                    <tr>
                        <td>First Quiz Attempt</td>
                        <td></td>
                        <td>
                            <div class="imgCont">
                                <img src="/img/present.png" class="present">
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Certification</td>
                        <td></td>
                        <td>
                            <div class="imgCont">
                                <img src="/img/present.png" class="present">
                            </div>
                        </td>
                    </tr>
                    
                </table>
            `
        }else if (button.innerHTML === 'Shop'){
            console.log('shopPage');
            redeemBox.innerHTML=`
                <h1 id="title">Profile Photos</h1>
                
                <div id="display">
                    <h3 class="subHead">User Designs</h3>
                    <div id="userDesigns">
                        <div class="picBox">
                        <img src="/img/outOfPlace.png" class="proPic">
                        <p><b>Out of Place<br>1000XP</b></p>
                        </div>
                        <div class="picBox">
                        <img src="/img/banjo.png" class="proPic">
                        <p><b>QT 3.14<br>1000XP</b></p>
                        </div>
                        <div class="picBox">
                        <img src="/img/hipGirl.png" class="proPic">
                        <p><b>Hip Girl<br>1000XP</b></p>
                        </div>
                    </div>
                    <h3 class="subHead">Dev Designs</h3>
                    <div id="devDesigns">
                        <div class="picBox">
                        <img src="/img/newEgg.png" class="proPic">
                        <p><b>New Egg<br>500XP</b></p>
                        </div>
                        <div class="picBox">
                        <img src="/img/abstract.png" class="proPic">
                        <p><b>Abstract<br>500XP</b></p>
                        </div>
                        <div class="picBox">
                        <img src="/img/java.png" class="proPic">
                        <p><b>Coffee Break<br>500XP</b></p>
                        </div>
                    </div>                
                </div>
                
            `
        }
    })
})
