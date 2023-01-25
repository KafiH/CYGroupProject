// -- large container
const box = document.getElementById('box');
// -- dynamic div to display 'shop' and 'redeem' pages
const redeemBox = document.getElementById('redeemBox');
box.appendChild(redeemBox);
// let displayBox = document.createElement('div');
let buttons = document.getElementsByTagName('button');
// const shopBox = document.createElement('div');


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
                        <td><b>50xp</b></td>
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
                
            
            
            `
            const title = document.createElement('h1');
                title.id="title"
                title.innerHTML="Profile Photos"
            redeemBox.appendChild(title);


            // -- Developers Designs
            // -- Heading
            const subHead1 = document.createElement('h3');
                subHead1.className='subHead';
                subHead1.innerHTML="Developers Designs";
            redeemBox.appendChild(subHead1);

            // -- Formatting
            const devDes = document.createElement('div');
                devDes.id='devDesigns';
            redeemBox.appendChild(devDes);
            
            const devPics = document.createElement('div');
                devPics.id='devpics';
            devDes.appendChild(devPics);

            // -- IMAGES

            // -- New Egg
            const picBox = document.createElement('div');
                picBox.className='picBox';
            devDes.appendChild(picBox);

            const proPic = document.createElement('img');
                proPic.src='/img/newEgg.png';
                proPic.className='proPic';
            picBox.appendChild(proPic);

            // -- Java
            const picBox1 = document.createElement('div');
                picBox1.className='picBox';
            devDes.appendChild(picBox1);
            
            const proPic1 = document.createElement('img');
                proPic1.src='/img/java.png';
                proPic1.className='proPic';
            picBox1.appendChild(proPic1);

            // -- Abstract
            const picBox2 = document.createElement('div');
                picBox2.className='picBox';
            devDes.appendChild(picBox2);

            const proPic2 = document.createElement('img');
                proPic2.src='/img/abstract.png';
                proPic2.className='proPic';
            picBox2.appendChild(proPic2);

            // -- User Designs
            
            
            // -- title
            const subHead2 = document.createElement('h3');
                subHead2.className='subHead';
                subHead2.innerHTML="User Designs";
            redeemBox.appendChild(subHead2);


            // -- Formatting
            const useDes = document.createElement('div');
                useDes.id='usserDesigns';
            redeemBox.appendChild(useDes);
            
            const usePics = document.createElement('div');
                usePics.id='usepics';
            useDes.appendChild(usePics);

            // -- PLACE HOLDERS
            // -- Out Of Place
            const uPicBox = document.createElement('div');
                uPicBox.className='picBox';
            useDes.appendChild(uPicBox);

            const uProPic = document.createElement('img');
                uProPic.src='/img/outOfPlace.png';
                    uProPic.className='proPic';
            picBox.appendChild(uProPic);

            // -- Banjo
            const uPicBox1 = document.createElement('div');
                uPicBox1.className='picBox';
            useDes.appendChild(picBox1);
            
            const uProPic1 = document.createElement('img');
                uProPic1.src='/img/banjo.png';
                uProPic1.className='proPic';
            picBox1.appendChild(uProPic1);
            // -----
            const uPicBox2 = document.createElement('div');
                uPicBox2.className='picBox';
            useDes.appendChild(uPicBox2);

            const uProPic2 = document.createElement('img');
                uProPic2.src='/img/hipGirl.png';
                uProPic2.className='proPic';
            picBox2.appendChild(uProPic2);


        }
    })
})
