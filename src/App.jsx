// // import React from 'react'
// // import Nav from './Components/Nav'
// // import First from './Components/First'
// // import Second from './Components/Second'
// // import Common from './Components/Common'
// // import Common2 from './Components/Common2'
// // import Common3 from './Components/Common3'
// // import Third from './Components/Third'

// // const App = () => {
// //   return ( 
// //   <>
// //     <Nav /><First />

// //       <Second/>
// //       <Common/>
// //       <Common3 ig={"https://cdn.sanity.io/images/qa41whrn/prod/2fe347a0a97655fbcb8bb782f062e8522ecfebad-6000x2167.jpg"} fl={'PLAY LOUD'} sl={'BREAK IT DOWN'} ptn={"end"} align={'center'} side={'r'}  show={"hidden"}/>

// //       <Common2 ig={"https://cdn.sanity.io/images/qa41whrn/prod/6c6c8eeb889e595ebe354186241b91049b87bb40-6000x2167.jpg"} fl={'BACK TO AZZURRO'} sl={'SCUDERIA FERRARI MIAMI LIMITED EDITION'} ptn={"start"} align={'none'}   show={"hidden"} side={'l'} />

// //       <Common2 ig={"https://cdn.sanity.io/images/qa41whrn/prod/c95754a12cfb4ec610699e16fadb83290e2806b3-6000x2167.jpg"} fl={'PUMA x TROLLS'} sl={'THAT FUZY FEELING'} ptn={"start"}   show={"hidden"} align={'none'} side={'l'} />

// //       <Common2 ig={"https://cdn.sanity.io/images/qa41whrn/prod/33e1754f474d9d2896f724b524a51f2a023278b2-6000x2167.jpg"} fl={'PUMA x CARROTES'} sl={'BY ANWAR CARROTS'} ptn={"start"}   show={"hidden"} align={'none'} side={'l'} tl={"ORGANIC XL CARROTS"} />

// //       <Common2 ig={"https://cdn.sanity.io/images/qa41whrn/prod/05bc97b5db11fbd0ef483eb86caedd4c0ea5e73d-6000x2167.jpg"} fl={'MADE WITH '} sl={'24/25 AC MILAN HOME KIT'} ptn={"start"}  show={"hidden"} align={'center'} side={'l'} fl1={"MLANIISMO"} />

// //       <Common2 ig={"https://cdn.sanity.io/images/qa41whrn/prod/52e4dd38bfc2f86dd4b8728b4d1fd39f8b30fe6a-6000x2167.jpg"} fl={'PUMA x PALM'} sl={'CLASSIC SPORT STYLE'} ptn={"center"}  show={"hidden"} align={'center'} side={'l'} fl1={"TREE CREW"} />

// //       <Third/>

// //       <Common2 ig={"https://cdn.sanity.io/images/qa41whrn/prod/72fb3fa9e0c4d6e600bc1b79551ef4cbba205719-6000x2167.jpg"} fl={' THE FUTURE IS NOW'} sl={'THE NEXT GEN OF PUMA'} ptn={"end"}  show={"hidden"} align={'center'} side={'r'} tl={'RIYAN PARAG & NITISH KUMAR REDDY '} />

// //       <Common2 ig={"https://cdn.sanity.io/images/qa41whrn/prod/3fe7386927ec3ba13893df6dd4fe8dcafb576b25-6000x2167.jpg"} fl={'MANCHESTER CALLING'} sl={'24/25 MAN CITY HOME KIT'} ptn={"START"} align={'none'} side={'l'} btn={"SHOP COLLECTION"}/>

// //       <Common2 ig={"https://cdn.sanity.io/images/qa41whrn/prod/ac3fc79415884460f1a7b3459b333ff091dee5a5-6000x2167.jpg"} fl={'FOR ALL THE '} sl={'YOUR ONE-TOP SNEAKER SHOP'} ptn={"end"} align={'center'} side={'r'} clr={"black"} clr2 ={"white"} btn={"EXPLORE MORE"} fl1 ={"SNEAKERHEADS"} />

// //       <Common2 ig={"https://cdn.sanity.io/images/qa41whrn/prod/80d92bdf064393dc36761e47b7b28c7e6addb3e5-2880x1000.jpg"} fl={'PUMA x ATHLETICS '} sl={'A NEW ERA OF SPEED , STERGHT & SPIRIT'} ptn={"start"} align={'center'} side={'r'} fl1 ={"FEDERATION OF INDIA"} show={"hidden"} />

// //   </>
// //   )
// // }

// // export default App





import React from 'react';
import Nav from './Components/Nav';
import First from './Components/First';
import Second from './Components/Second';
import Common from './Components/Common';
import {
  Common2_1,
  Common2_8,
} from './Components/Common2';
import Third from './Components/Third';
import Cihld from './Components/Cihld';
import NItro from './Components/NItro';
import Scroll from './Components/Scroll';
import Footer from './Components/Footer';


const App = () => {

  return (
    <div className="bg-black bg-[url(./logow.jpg)] bg-cover bg-fixed overflow-hidden">
      <Nav />
      <First />
      <Second />
      <Common />
      <Common2_1 />
      <Third />
      <Cihld />
      <NItro />
      <Common2_8 />
      <Scroll />
      <Footer />
    </div>

  );
};

export default App;

