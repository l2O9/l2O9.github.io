(function(){"use strict";var t={6853:function(t,s,e){var a=e(6369),i=function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"app"}},[s("HelloWorld")],1)},n=[],l=function(){var t=this,s=t._self._c;return s("div",{staticClass:"container"},[t.checked&&"강지원"===t.clickNm?s("div",{staticClass:"chatbox"},[t._m(0),s("div",{staticClass:"middle",attrs:{id:"chat-textarea"}},[s("div",{staticClass:"love"},[t._l(t.textData,(function(e,a){return s("div",{key:a,class:t.setClass(e)},[s("div",{class:t.setClass(e)+" bubble"},[t._v(t._s(t.setMsg(e)))])])})),t._m(1)],2)]),s("div",{staticClass:"bottom-bar"},[s("div",{staticClass:"chat"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text",placeholder:"메시지를 입력하세요"},domProps:{value:t.text},on:{keyup:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:t.sendMsg()},input:function(s){s.target.composing||(t.text=s.target.value)}}}),s("button",{attrs:{type:"button"},on:{click:function(s){return t.sendMsg()}}},[s("i",{staticClass:"fas fa-paper-plane"})])])])]):s("div",{staticClass:"chatbox"},[t._m(2),s("div",{staticClass:"middle",attrs:{id:"chat-textarea"}},[s("div",{staticClass:"love"},t._l(t.letterData,(function(e,a){return s("div",{key:a,class:t.setClass(e)},[s("div",{class:t.setClass(e)+" bubble"},[t._v(t._s(t.setMsg(e)))])])})),0)]),s("div",{staticClass:"bottom-bar"},[s("div",{staticClass:"chat"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text",placeholder:"메시지를 입력하지 말고 밴드로 뽀뽀해"},domProps:{value:t.text},on:{keyup:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:t.sendMsg()},input:function(s){s.target.composing||(t.text=s.target.value)}}}),s("button",{attrs:{type:"button"},on:{click:function(s){return t.sendMsg()}}},[s("i",{staticClass:"fas fa-paper-plane"})])])])]),s("div",{staticClass:"messages"}),t._m(3),s("ul",{staticClass:"people"},[s("li",{staticClass:"person",class:{focus:"강지원"===t.clickNm},on:{click:function(s){t.clickNm="강지원"}}},[s("span",{staticClass:"title"},[t._v("강지원 ")]),s("span",{staticClass:"time"},[t._v("09:01am")]),s("br"),s("span",{staticClass:"preview"},[t._v("보고 싶다")])]),s("li",{staticClass:"person",class:{focus:"편지"===t.clickNm},on:{click:function(s){t.clickNm="편지"}}},[s("span",{staticClass:"title"},[t._v("누르지 마시오")]),s("span",{staticClass:"time"},[t._v("12:04pm")]),s("br"),s("span",{staticClass:"preview"},[t._v("진짜 안 누른다고?")])])])])},r=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"top-bar"},[s("div",{staticClass:"avatar2"},[s("p")]),s("div",{staticClass:"name"},[t._v("강지원")]),s("div",{staticClass:"icons"},[s("i",{staticClass:"fas fa-phone"}),s("i",{staticClass:"fas fa-video"})]),s("div",{staticClass:"menu"},[s("div",{staticClass:"dots"})])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"typing"},[s("div",{staticClass:"bubble"},[s("div",{staticClass:"ellipsis one"}),s("div",{staticClass:"ellipsis two"}),s("div",{staticClass:"ellipsis three"})])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"top-bar"},[s("div",{staticClass:"avatar"},[s("p",[t._v("❤")])]),s("div",{staticClass:"name"},[t._v("내 강아지에게")]),s("div",{staticClass:"icons"},[s("i",{staticClass:"fas fa-phone"}),s("i",{staticClass:"fas fa-video"})]),s("div",{staticClass:"menu"},[s("div",{staticClass:"dots"})])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"profile"},[s("div",{staticClass:"avatar3"},[s("p")]),s("div",{staticClass:"name2"},[t._v("박희철"),s("p",{staticClass:"email"},[t._v("my@cutie.com")])])])}],c=(e(7658),{name:"HelloWorld",data(){return{age:100,textData:[],text:null,checked:!1,clickNm:"강지원",letterData:[]}},created(){this.alert()},methods:{alert(){let t=window.prompt("우리 연애하기 시작한 날. YYYY-MM-DD."),s=String(t);"2022-09-01"===s?(this.checked=!0,this.fetchData()):this.alert()},setClass(t){return t.substr(0,25).includes("박희철")?"outgoing":"incoming"},setMsg(t){return t.substr(25)},sendMsg(){if(null===this.text||""===this.text)return!1;this.textData.push("2022년 8월 29일 오후 7:25 박희철 "+this.text),this.text=null,setTimeout(this.scroll,100)},scroll(){document.getElementById("chat-textarea").scrollTop=document.getElementById("chat-textarea").scrollHeight},fetchData(){this.textData=["2022년 8월 29일 오후 7:25 박희철 이사님도 골라 보시죠. 짬뽕 vs 국밥.","2022년 8월 29일 오후 7:27 강지원 이게 뭔데.","2022년 8월 29일 오후 7:27 강지원 짬뽕.","2022년 8월 29일 오후 7:28 박희철 고추 짬뽕? 삼선 짬뽕? 볶음 짬뽕?","2022년 8월 29일 오후 7:29 강지원 삼선.","2022년 8월 29일 오후 7:29 강지원 설마 박 보좌관 저녁 고르기 이런 거 아니지.","2022년 8월 29일 오후 7:29 박희철 예. 맞음. 당연함.","2022년 8월 29일 오후 7:30 강지원 그리고 답은 정해져 있거나 다른 걸 먹겠지.","2022년 8월 29일 오후 7:31 강지원 나가.","2022년 8월 29일 오후 7:33 박희철 아니 정해진 답이 짬뽕이었는데 사람들이 자꾸 국밥을넵안녕히개새요.","2022년 8월 29일 오후 7:37 강지원 야, 앉아 봐. 내가 또 성급한 헛소리로 무해한 고객 하나를. 개새야?","2022년 8월 29일 오후 7:54 박희철 아 대출 안 해요. 삼선 짬뽕 먹을 거고요. 계세요! 였는데 혀를 씹어서 아 문은 바람 소리 때문에 쾅 닫힌 거라고요.","2022년 8월 29일 오후 7:58 강지원 편협한 어쩌고 미안하다. 그래. 개새요. 문에 흠집 생긴 것 같은데 이게 얼마짜리인지 알아? 우리 사이에 돈은 됐고 상품 하나만 가입하고 가.","2022년 8월 29일 오후 8:05 박희철 그렇죠? 우리 사이에 매달 49,900 원이 오가긴 하지만 삭막한 사이는 또 아니죠……. 도장 어디 찍으면 돼요? 여기요?","2022년 8월 29일 오후 8:16 강지원 이걸 진짜 찍는다고. 상품 설명도 안 읽어 보니? 고맙다. 박 보좌관, 어디 가서 누가 보증 서 달라고 하면 안 된다고 해야 해. 주 후보 찍는다고 해도 따라가면 안 된다.","2022년 8월 29일 오후 8:23 박희철 이거 뭐야. 감사 인사 뭐야. 사인 전에 멈추면서 너의 믿음을 보고 나의 잘못을 뉘우쳤다는 드라마틱한 반전 어디 갔어 이거.","2022년 8월 29일 오후 8:27 강지원 인간은 쉽게 변하지 않는단다, 아들아. 마저 하세요. 왜 멈추냐. 잘못 뉘우친다고 돈이 들어와, 드라마틱한 인생이 돼.","2022년 8월 29일 오후 8:33 박희철 아멘……. 그런데 전에 누가 보험 들고 결혼, 보증, 기타 서류 서명 조심하면 큰 문제 없다고 해서요. 그냥 제가 조금 더 드라마틱하게 살아 볼게요……. 아니근데정말내장기를팔아먹으려고.","2022년 8월 29일 오후 9:14 강지원 아멘 이런다. 술이랑 담배 안 하지. 혈액형은. 나이야 뭐, 그 정도면 나쁘지 않고. 농담이니 장기 걱정 마라. 남한테 팔 생각은 아직 없고. 저당 잡으려던 건데. 네 몸 내 거.","2022년 8월 29일 오후 9:24 박희철 장기 짱짱하긴 한데 최근에 피곤해서 간이 약간. 사은품은 집으로 배송 좀 해 주세요. 저는 마약 베개 드렸는데 이사님은 뭐 주시게요? 저축 은행 스티커 붙은 2080 치약은 안 받아요. 은행 가면 그것만 줘.","2022년 8월 29일 오후 9:27 강지원 대신 귀여운 2023 달력을 드립니다. 미래 캐피탈 로고 박힌 것 좀 봐. 존나 대박이지. 피곤할 일이 뭐가 있길래. 잠을 못 자나. 그 마약 베개 괜찮더라. 우리 뽀삐가 좋아해.","2022년 8월 29일 오후 9:36 박희철 아저씨……. 달력에 숫자가 너무 커요……. 아니 근데 내 선물을 강아지를 줬다고요? 뽀삐 보러 방문합니다. 설마 뽀삐가 사람은 아닐 것 아니야. 아니라고 해.","2022년 8월 29일 오후 9:38 강지원 이런 게 바로 어르신 배려라는 거다. 사람이면 어떻게 되는데. 개 안 키우고, 농담으로 해 본 소리니 웃어. 그래, 뽀삐야. 집에는 언제 들어올래.","2022년 8월 29일 오후 9:50 박희철 그게 농담이면 뽀삐를 길들여서 빼앗으려던 내 원대한 계획은 어디로 가는데요. 아니 근데 제가 왜 갑자기 뽀삐 헥헥 이름이 그게 뭔데화장지이름이잖아장난하나.","2022년 8월 29일 오후 10:07 강지원 혹시 나랑 부부의 세계를 넘어서 자식의 세계 찍고 싶은 건가? 화장지 이름 미쳤냐고. 부를 때마다 떠오를 것 같으니 예삐로 바꾸자. 지금 이미 반쯤 개가 된 것 같은데.","2022년 8월 29일 오후 10:23 박희철 양육비 월 600 받으면 조용히 살게요. 원래 결혼 생활보다 기타 갈등 및 소유권 전쟁이 제일 재미있는 건데 왜 모르세요? 예삐 말고 박희철은 외않되.","2022년 8월 29일 오후 10:31 강지원 애가 둘이었네, 하나가 아니라. 결혼하고 이혼 소송까지 다이렉트로 해 볼까. 예삐가 어때서? 박 보좌관 취향 참 까다롭네. 알았어, 예삐. 손.","2022년 8월 29일 오후 10:41 박희철 원래 헤어져 봐야 소중한 줄 안다고 했어요. 근데 알았다고 해 놓고 손은 왜 달라고 하세요? 이게 알았다는 사람 태도인가? 일단 주긴 하는데…… 말린 기분에 갑자기 피곤하네…….","2022년 8월 29일 오후 10:50 강지원 매달리는 쪽이 취향인 줄은. 주라는 대로 줄 거라는 기대 안 했는데. 상이라도 줄까, 희철아. 길들이기 힘들 줄 알았는데 생각 이상으로 순하네. 피곤해? 누워. 손만 잡고 잘게.","2022년 8월 29일 오후 11:00 박희철 그러니까 그게 제가 지금 잠이 와서. 내일 쌩쌩한 상태로 다시 붙읍시다. 지금은 제 피통이 이제 다 딸려서 당장 포션을 빨아야만. 그런데 지금 자기는 싫은.","2022년 8월 30일 오전 1:09 강지원 그럴싸한 핑계를 가져다 대는 건지, 진심인지. 마법의 포션 적당히 빨고 졸리면 자라. 그거 미래 체력 끌어다 사채 쓰는 거라고. 쌩쌩한 상태에서 붙으면 페이스에 덜 말릴 것 같냐.","2022년 8월 30일 오전 1:16 박희철 저 쌩쌩한 상태에서 이사님 박희철 케어 가입 시켰는데요. 자는 줄 알고 열심히 구경했는데 왜 튀어나오세하아암. 이제 더는 안 되겠어요. 저는 틀렸으니 저를 두고 먼저 가세요.","2022년 8월 30일 오전 1:20 강지원 자다가 누구 뜨거운 시선에 깼고, 금방 다시 잘 거고. 체감 삼 년 동안 즐거웠다. 네 몸은 내가 유용히 잘 쓸게. 내 거 두고 갈 수는 없으니 잠들기만 기다릴 거라는 뜻. 어서 자라. 좋은 꿈 꾸고.","2022년 8월 30일 오전 1:27 박희철 죄송한데 실례지만 혹시 전직 깡패세요? 내 몸인데 그걸 왜. 그렇지만 이대로면 졸음에 유체 이탈로 영혼 털린 껍데기 홀랑 넘길 것 같으니까 잡시다. 잘 자요. 두고 보자.","2022년 8월 30일 오전 1:31 강지원 앞에 쿠션 붙인다고 무슨 말이든 해도 되는 게 아니지요? 졸려서 기억 안 나는구나. 상품 가입서에 서명한 거 벌써 잊었어? 두고 보자. 깡패 새끼 꿈 꿔. 일어나면 다시 불러라.","2022년 8월 30일 오전 8:35 박희철 한 시간만 더…….","2022년 8월 30일 오전 8:37 강지원 더? 자고 일어나면 천장이 바뀌는 마술 보여 줄게.","2022년 8월 30일 오전 8:39 박희철 졸려요. 근데 천장이 어떻게 바뀌는데요. 뭐야 그거 어떻게 하는 거야.","2022년 8월 30일 오전 8:48 강지원 너 잠든 사이에 납치해 가겠다는 말을 최대한 순화한 건데. 키 링처럼 끌고 다니게.","2022년 8월 30일 오전 8:58 박희철 하여튼 불법 되게 좋아해. 끌고 다니다가 의원님이 부르시면 같이 가나요? 사채 깡패였던 은행장, 알고 보니 보좌관의 수행 보좌관?","2022년 8월 30일 오전 8:59 박희철 눈이 안 떠져요.","2022년 8월 30일 오전 9:31 강지원 좋아하는 게 아니고 이 나라 법이 개판인 거다. 드라마 너무 많이 봤네. 내가 네 수행 보좌관? 정말 괜찮겠어? 내 뒤 캐면 너희 의원님 이미지도 떨어질 텐데.","2022년 8월 30일 오전 9:31 강지원 세수하고 와. 해 줘?","2022년 8월 30일 오전 9:36 박희철 금쪽이도 품는 아량 넓은 이미지…… 가 될 리가 없지.","2022년 8월 30일 오전 9:36 박희철 죄송한데 혹시 세수하다가 코 흥 가능인가요?","2022년 8월 30일 오전 9:51 강지원 누가 금쪽이라는 거야. 박 보좌관, 몇 살? 죽는다.","2022년 8월 30일 오전 9:54 박희철 내가 어제 무슨 꿈 꿨는지 물어보세요.","2022년 8월 30일 오전 9:55 강지원 무슨 꿈 꿨는데.","2022년 8월 30일 오전 9:58 박희철 부엌에서 한 손으로 고기를 굽고 한 손으로 일을 하는 바쁜 상태였는데 이사님이 말을 안 들어서 내가 잔소리까지 하는 와중에 좀비가 들이닥쳤어요.","2022년 8월 30일 오전 9:59 박희철 조심하고 삽시다…….","2022년 8월 30일 오전 10:08 강지원 여보, 내가 창고에 총기랑 구호 물품 쌓아 둘게. 걱정 마. 그래서 꿈속 강지원 말고 내 고기는 어디 있는데.","2022년 8월 30일 오전 10:15 박희철 여보. 창고에 현금만 잔뜩 있는 것 다 알고 있는데. 나는 고기 먹으러 갈 테니까 지원이는 돈다발하고 살아.","2022년 8월 30일 오전 10:20 강지원 그 돈다발 다 당신 거인데. 그래. 나랑 돈보다 고기를 택했단 말이지. 사랑이 식었네. 이혼 서류에 도장 찍어.","2022년 8월 30일 오전 10:23 박희철 잠깐거기서스톱. 내가 먹는 건 돼지고기고 당신이 먹을 건 소고기야. 한국 말은 끝까지 들어야지요.","2022년 8월 30일 오전 10:36 강지원 웃기는 놈일세. 내 성격 급한 거 당신도 알지. 이혼은 못 들은 걸로 하고 아침부터 먹어.","2022년 8월 30일 오전 10:54 박희철 알죠. 이사님 성격 급해서 사채로 고객들 성격도 급하게 만드는 것도 알지……. 넵. 오늘 감기 조심하세요. 춥다.","2022년 8월 30일 오전 10:57 강지원 자꾸 이런 식으로 기어오르면 너도 내 고객 되는 거야. 이미 고객이던가. 그래. 안 그래도 잘 걸치고 나왔으니 너도. 바람 차더라.","2022년 8월 30일 오전 11:56 박희철 제 가을의 낭만 톱 쓰리 아세요? 포장마차에 소주, 라면에 사케, 셔츠 위에 코트.","2022년 8월 30일 오후 12:07 강지원 얼어 뒈져도 코트 입을 인간이 여기 하나 더 있었네. 포장마차 소주, 좋지. 이건 내 겨울 낭만인데. 사케를 라면이랑 마신다고?","2022년 8월 30일 오후 12:28 박희철 라면이기는 한데…… 해물 잔뜩 들어간 나가사키 라면이요. 국물 한 입 사케 한 입? 극락 입국 완. 그럼 이사님 가을 낭만은 뭔데요? 포장마차 소주는 겨울이라면서. 낙엽 밟듯 사람 밟는 것 금지.","2022년 8월 30일 오후 1:16 강지원 곧 오는 가을에 극락 입국 시도해 보기로. 내 가을 낭만, 그러게. 겨울이나 봄, 여름은 있는데 가을은 특별한 게 없다면. 장부, 가 아니라 책이라도 쌓아 두고 읽어 볼까.","2022년 8월 30일 오후 3:41 박희철 장부 금지. 사람 대가리 깡깡 깨는 것 금지. 가을 낭만 그거 하실래요? 트렌치코트. 수트 위에 트렌치코트 입고 은행잎 입에 거꾸로 물고 0 여덟 개가 한 장이야! 하고 다녀 주세요.","2022년 8월 30일 오후 4:07 강지원 안 보이는 곳에서 조용히 깰게. 인간들이 좋은 말로 하면 안 듣던데. 요즘 진상이 많아서. 가을 낭만 핑계로 박 보좌관이 보고 싶은 거 말고. 코트 로망 있냐. 걸치고 사무실로 와 봐.","2022년 8월 30일 오후 4:19 박희철 아니어디에서도깨면안돼요. 솔직히 제가 이사님한테 진짜 입히고 싶은 거면 다른 것 불렀죠. 제 코트 관련 로망이 있긴 한데 그건 사실 가을에 잘생긴 남자가 추워서 새빨갛게 언 손을 주머니에서 빼서 자기 애인 안아 주는 거요. 길 가다가 볼 때마다 흐뭇하게 웃어요. 요즘 애들 참 보기 좋다…….","2022년 8월 30일 오후 4:43 강지원 입히고 싶은 건 따로 있다? 요즘 애들이 보기 좋은 거야, 미남을 좋아하는 거야. 내가 보기에는 후자 같은데. 남이 연애하는 거 보면 귀엽기는 하더라. 특히 애들은. 이 나이 정도 먹으면 징그럽던데. 남 말고, 내가 하는 게. 아저씨, 주책이세요.","2022년 8월 30일 오후 5:06 박희철 아무래도 미남이……. 원래 연애는 십팔 살 넘어가서 하면 다 주책인 거예요. 그걸 이겨내는 게 로맨스인 거고. 이사님 마음에 돈다발 딱 한 묶음만 빼고 로맨스를 심어 보세요. 사람이 말랑콩떡강쥐로 살기도 하고 그래야지. 그러다 돈 다 뜯기고 이혼도 하고 위자료로 줘 보고…….","2022년 8월 30일 오후 5:29 강지원 돈 다 뜯기는 게 좋은 일 맞아? 이혼 로망은 있는데. 발음 조심해라. 그 한 묶음 덕분에 사람 무너지는 거 순식간이던데. 말랑, 어쩌고는 나보다 박 보좌관한테 어울린다면. 부디 운명의 짝 찾아서 지독한 사랑에 빠지길 바란다. 축의금 얼마나 넣어 줄까.","2022년 8월 30일 오후 5:45 박희철 저는 월 600이요. 그 정도면 진짜 평생 이사님 앞에 안 나타나고 시골 어딘가에서 혼자 예삐 키우면서 살게요. 그리고 혹시 실례가 아니라면 차 한 대만…… 아니누나가안바꿔주잖아.","2022년 8월 30일 오후 6:02 강지원 600이 어디 개 이름이지. 여보, 시골 어딘가에 숨어도 사람 풀어서 어떻게든 찾아낼 거야. 그나저나 이 개소리 처음 시작했던 게 누구지? 나구나. 희철아, 차까지 바꿔 주면 오빠랑 결혼해야 해. 이혼 안 해 줄 거다.","2022년 8월 30일 오후 6:11 박희철 아니. 개 이름은 육백이 아니고 예삐고. 저랑 개소리하는 것 재미있잖아요. 나는 이사님 살살 놀리는 것 재미있는데……. 근데 방금 전에는 이혼에 로망 있다고 해 놓고 차 한 대에. 수납장 슬쩍 열면 돈 두 묶음으로 차 한 대 냅다 뽑을 수 있으면서쪼잔한깡패. 누가 훔쳐 가면 접니다.","2022년 8월 30일 오후 6:26 강지원 예삐는 박 보좌관 이름 아니었는지. 놀리는 게 재미있다는 말을 본인 앞에서 잘도 하네. 나도 너 놀리는 거야. 어디 가서 이혼 먼저 하고 와서 차를 사 줘야 하나. 너도 장부로 맞고 싶으면 훔쳐 보든가. 결혼하면 차든 뭐든 사 준다니까?","2022년 8월 30일 오후 6:36 박희철 저 사실 물욕 별로 없습니다. 정치인 보좌관이 물욕이 있으면 안 되겠지요. 하아. 그냥 소박하게 하늘에 별 하나만 따서 받았으면. 근데 그걸 포르쉐 트렁크에 넣어서…….","2022년 8월 30일 오후 6:37 박희철 저 오늘 저녁 라면 vs 샤브샤브.","2022년 8월 30일 오후 6:38 강지원 포르쉐 트렁크는 껍데기니 도로 반환하고 별만 가지는 거지?","2022년 8월 30일 오후 6:38 강지원 샤브샤브.","2022년 8월 30일 오후 6:39 박희철 ? 연애하면서 반지 선물할 때 반지만 주고 케이스는 도로 가져가시는 타입?","2022년 8월 30일 오후 6:40 박희철 저 매운 신라면 먹을 거예요.","2022년 8월 30일 오후 6:40 강지원 어제는 말 잘 듣더니 오늘은 왜.","2022년 8월 30일 오후 6:41 강지원 자기야, 반지 직접 끼워 줄 테니 껍데기는 나 줘. 버려 줄게. 하는 타입.","2022년 8월 30일 오후 6:46 박희철 입술 붓고 혀 얼얼할 정도로 매운 것 먹고 싶어서요.","2022년 8월 30일 오후 6:46 박희철 아니근데나라면껍데기도갖고싶을것같은데.","2022년 8월 30일 오후 6:50 강지원 매운 거 잘 먹어? 좋아해?","2022년 8월 30일 오후 6:50 강지원 껍데기가 포르쉐가 아니더라도?","2022년 8월 30일 오후 6:52 박희철 좋아해요.","2022년 8월 30일 오후 6:53 박희철 나에게 껍데기란 오로지 포르쉐뿐.","2022년 8월 30일 오후 6:57 강지원 위에 구멍 안 나게 조심해라.","2022년 8월 30일 오후 6:57 강지원 속물 그 자체인데. 이거 법에 안 걸리냐.","2022년 8월 30일 오후 7:00 박희철 아니 누구나 꿈은 가지고 있고 로망이라는 게 있으니까……. 저녁 뭐 드세요? 청양고추와 캡사이신 넣은 신라면 드실래요?","2022년 8월 30일 오후 7:08 강지원 변명하는 게 더 웃기네. 메뉴는 고민 중인데. 나 뒈지는 꼴 보기 싫으면 청양고추랑 캡사이신 빼고 다시 끓여 와.","2022년 8월 30일 오후 7:09 박희철 어? 지금 이거 그거잖아요. 라면 먹고 갈래? 처음 해 봐.","2022년 8월 30일 오후 7:24 강지원 그래. 주소 불러. 애들 데리고 갈게.","2022년 8월 30일 오후 7:30 박희철 그건 맡긴 돈 찾으러 갈 때 하는 짓이지요?","2022년 8월 30일 오후 7:35 강지원 맡긴 박희철 찾으러 왔는데요.","2022년 8월 30일 오후 7:44 박희철 너무 오래 안 찾아가셔서 연체료 내셔야 합니다.","2022년 8월 30일 오후 7:51 강지원 얼마 입금하면 돼. 현금 영수증 끊어 주고.","2022년 8월 30일 오후 8:18 박희철 포르쉐요.","2022년 8월 30일 오후 8:18 박희철 저 매운 것 잔뜩 넣은 라면 다 먹고 천국 다녀왔어요.","2022년 8월 30일 오후 8:18 강지원 포르쉐야, 나야.","2022년 8월 30일 오후 8:19 강지원 잠깐 저승 체험 다녀온 거 아니지.","2022년 8월 30일 오후 8:20 박희철 아 당연히 ‘포르쉐차키를들고있는’ 이사님이죠!","2022년 8월 30일 오후 8:20 박희철 잠깐 할머니를 뵌 것 같기는 한데…….","2022년 8월 30일 오후 8:20 강지원 포르쉐차키안들고있는 강지원은.","2022년 8월 30일 오후 8:21 강지원 이상하네. 박 보좌관이 천국을⋯⋯.","2022년 8월 30일 오후 8:57 박희철 키를 안 들고 있으면…… 거기서 내리셨나?","2022년 8월 30일 오후 8:57 박희철 저 천국 못 가요?","2022년 8월 30일 오후 9:24 강지원 데리러 왔다고 해야 할 타이밍?","2022년 8월 30일 오후 9:25 강지원 나랑 지옥 가야지, 희철아.","2022년 8월 30일 오후 9:53 박희철 아니 왜 저를 데리고 가세요? 내가 얼마나 정직하게 살았는데 어떻게 깡패 출신 사채업자하고 같이 지옥에를 가엉엉.","2022년 8월 30일 오후 10:03 강지원 어른스럽게 말해야지.","2022년 8월 30일 오후 10:03 강지원 천국 혼자 가기 vs 지옥 강지원과 둘이 가기.","2022년 8월 30일 오후 10:18 박희철 그럼 저기 불구덩이 안 뜨겁게 목마 태워 주나요. 아니면 날 업고 가시밭길 건너 주나요.","2022년 8월 30일 오후 11:03 박희철 저 지금 조는 중인데 잠들면 깨워 주세요.","2022년 8월 30일 오후 11:05 강지원 지금 잠들면 나랑 지옥 가는 거다.","2022년 8월 30일 오후 11:06 강지원 목마도 다른 것도 없어.","2022년 8월 30일 오후 11:16 박희철 이사님 혼자 가면 무섭잖아요. 제가 유치원 선생님처럼 휘파람 불면서 같이 가 드릴게요. 근데 이제 내가 병아리! 외치면 이사님이 삐약삐약 해야만 하는.","2022년 8월 30일 오후 11:17 박희철 나 근데 눈이 안 떠져하아암.","2022년 8월 30일 오후 11:18 강지원 야옹은 안 돼? 많이 봐줬다. 애들 상대 자주 해 봤나 봐. 어디 가서 유치원 선생이라고 해도 믿겠어.","2022년 8월 30일 오후 11:18 강지원 자정까지만 버텨 봐.","2022년 8월 30일 오후 11:30 박희철 네. 길목에서 악마 튀어나오면 꺄아 소리 지르면서 제 뒤로 숨으세요. 하 내가 이 정도로 무서운 게 없는 사람인데 꼴랑 삼십 분 버티는 건 일도 아니지.","2022년 8월 30일 오후 11:33 강지원 희철아, 아빠가 인터넷 끊으라고 했지. 무서운 게 없어? 정말 하나도? 언제까지 버틸 수 있을지 궁금해지네. 자장가 줄까.","2022년 8월 30일 오후 11:37 박희철 아빠가 뭘 알아. 인터넷 없으면 나 왕따라고! 저 정말 무서운 것 없어요. 그래도 장기 판매는 조금……. 넵. 이사님 자주 듣는 싱싱한 놈으로 넘기시죠.","2022년 8월 30일 오후 11:56 강지원 아빠 때는, 어? 인터넷 없어도 옆집 영희, 철수랑 잘만 놀았어. 내가 자주 듣는 건 자장가로 쓰기에는, 영. 그나마 자주 듣는 다른 곡 넘긴다. 이것도 잔잔한 건 아니지만.","2022년 8월 30일 오후 11:56 강지원 https://youtu.be/-veYjqnV7OE","2022년 8월 30일 오후 11:58 박희철 어? 저 라우브 좋아해요.","2022년 8월 30일 오후 11:58 박희철 요놈. 오늘 밤은 너다.","2022년 8월 30일 오후 11:59 강지원 최근에 나온 앨범 수록곡인데 좋더라.","2022년 8월 30일 오후 11:59 강지원 오래 버텼네.","2022년 8월 31일 오전 12:02 박희철 인사해 주세요.","2022년 8월 31일 오전 12:02 강지원 오늘 꿈에서는 멀쩡하게 보자.","2022년 8월 31일 오전 12:02 강지원 잘 자고.","2022년 8월 31일 오전 12:04 박희철 정답 알려 주지 말고 힌트 주세요.","2022년 8월 31일 오전 12:05 강지원 힌트 주면 다 주는 건데.","2022년 8월 31일 오전 12:05 강지원 무슨 힌트 줄까. 단어? 글자?","2022년 8월 31일 오전 12:05 박희철 앞에가 너는 나는 둘 다 아니라고요?","2022년 8월 31일 오전 12:06 강지원 당연함.","2022년 8월 31일 오전 12:07 강지원 장난으로. 안 검사한테 하는 말이었으니까.","2022년 8월 31일 오전 12:07 강지원 이렇게 진심으로 맞힐 줄 몰랐다만⋯⋯.","2022년 8월 31일 오전 12:08 박희철 내가 아까 열심히 맞혔는데 노래 가사였을때랑똑같은배신감이잖아.","2022년 8월 31일 오전 12:09 박희철 당분간말시키지마세요.","2022년 8월 31일 오전 12:09 강지원 야, 박 보좌관.","2022년 8월 31일 오전 12:09 강지원 삐쳤어?","2022년 8월 31일 오전 12:12 박희철 한번당했는데또당했어.","2022년 8월 31일 오전 12:12 강지원 여기서 귀엽다고 하면 안 되겠지.","2022년 8월 31일 오전 12:15 박희철 아 말 걸지 마세요.","2022년 8월 31일 오전 12:16 강지원 케어 어쩌고 지금 쓸게. 오만 원의 행복.","2022년 8월 31일 오전 12:16 강지원 아니. 사만 얼마.","2022년 8월 31일 오전 12:20 박희철 이사람이진짜짱나게.","2022년 8월 31일 오전 12:21 박희철 지금 쓰면 이번 달 횟수 다 차감이에요.","2022년 8월 31일 오전 12:21 강지원 이번 달 오늘이 마지막이야.","2022년 8월 31일 오전 12:22 강지원 쓸게.","2022년 8월 31일 오전 12:22 박희철 아니야. 9 월. 9 월.","2022년 8월 31일 오전 12:25 강지원 아직 구월 아니야. 달력 보고 와.","2022년 8월 31일 오전 12:27 박희철 알았다구.","2022년 8월 31일 오전 12:30 강지원 졸리다며. 언제 자게.","2022년 8월 31일 오전 12:32 박희철 언제 주무세요?","2022년 8월 31일 오전 12:32 강지원 너 자면.","2022년 8월 31일 오전 12:32 박희철 저 물어볼 것 있어요.","2022년 8월 31일 오전 12:32 강지원 어떤 거? 물어봐.","2022년 8월 31일 오전 12:34 박희철 혹시…… 겨울에 애인 친구 패딩 지퍼 올려 주고 새우 껍질도 애인 친구 먼저 까 주세요?","2022년 8월 31일 오전 12:34 강지원 아.","2022년 8월 31일 오전 12:35 강지원 중요해? 중요하지. 그래. 애인 친구가 내 애인의 친구 말하는 거지?","2022년 8월 31일 오전 12:36 박희철 네.","2022년 8월 31일 오전 12:38 강지원 내가 그런 다정하고 섬세한 새끼는. 애인 친구 패딩 지퍼는 알 바 아니고. 알맹이는 애인 먹이고 친구는 껍데기만 먹이고도 남을 놈인데.","2022년 8월 31일 오전 12:39 강지원 어때. 몇 점.","2022년 8월 31일 오전 12:41 박희철 쓰으읍 아닌데……. 방금 분명히 이 대답에서 그런 사람일 것 같다는 촉이 삭 스쳤는데…….","2022년 8월 31일 오전 12:41 박희철 몽고반점 드립니다.","2022년 8월 31일 오전 12:44 강지원 너 혹시 뭐? 내 애인 친구? 그거 돼?","2022년 8월 31일 오전 12:46 박희철 ‘아니뭐꼭애인친구만물어봐야되나’ 아니요…….","2022년 8월 31일 오전 12:47 박희철 그럼 만약에 애인 친구가 꼬시면 어떡하실 거예요? 옆에 앉아서 친구 몰래 허벅지를 더듬으면요.","2022년 8월 31일 오전 12:47 박희철 이사님 허벅지를 쓰다듬고 만져.","2022년 8월 31일 오전 12:49 강지원 이 십, 세기가 엊그제 같은데 세월 참 빠르네.","2022년 8월 31일 오전 12:50 강지원 네가 내 애인이면 솔직하게 말해 줬으면 좋겠냐, 조용히 둘이 합의 봤으면 좋겠냐.","2022년 8월 31일 오전 12:52 박희철 음. 조용히 합의 보는 게 어떤 건데요?","2022년 8월 31일 오전 12:55 강지원 내 애인이랑 자연스럽게 거리 두든가, 내 손에 인생 좆 되든가 하나 고르라고 하겠지.","2022년 8월 31일 오전 12:56 강지원 하. 꼬셔진 척 인적 드문 곳으로 끌고 가서.","2022년 8월 31일 오전 12:56 박희철 살인멈춰.","2022년 8월 31일 오전 12:56 강지원 안 죽여.","2022년 8월 31일 오전 12:57 강지원 물론죽이고싶겠지만.","2022년 8월 31일 오전 12:59 박희철 그래도 솔직하게 말해야죠. 애인도 알아야만 어떤 놈이 진짜 미친놈인지 구분해서 싹을 잘라 조질 수 있다고요.","2022년 8월 31일 오전 12:59 박희철 배신자는 내 손으로 직접 처리한다.","2022년 8월 31일 오전 1:01 강지원 그래. 반만 조지고 얘기해 줄게.","2022년 8월 31일 오전 1:02 강지원 한 대만 치는 것도 안 돼?","2022년 8월 31일 오전 1:06 박희철 음……. 제 눈에 피가 안 보이게만 하세요.","2022년 8월 31일 오전 1:07 강지원 그건 잘하지. 그런데 언제부터.","2022년 8월 31일 오전 1:07 강지원 박 보좌관이, 아니다.","2022년 8월 31일 오전 1:10 박희철 네?","2022년 8월 31일 오전 1:10 강지원 궁금하지.","2022년 8월 31일 오전 1:10 강지원 잘 자.","2022년 8월 31일 오전 1:12 박희철 아니내가흥미로운대화주제를물어왔더니돌아오는게고작.","2022년 8월 31일 오전 1:12 강지원 안 놀리고 싶어도 반응이 재미있어서.","2022년 8월 31일 오전 1:12 강지원 아니. 네가 언제부터 내 애인 대타가 됐냐?","2022년 8월 31일 오전 1:14 박희철 이때부터요.","2022년 8월 31일 오전 1:14 박희철 재미있지 않아요?","2022년 8월 31일 오전 1:14 강지원 그래, 여보.","2022년 8월 31일 오전 1:14 강지원 재미있더라.","2022년 8월 31일 오전 1:15 박희철 저 이런 거 좋아해요.","2022년 8월 31일 오전 1:15 강지원 가정하는 거?","2022년 8월 31일 오전 1:16 박희철 네. 이런 선택지 고르는 거요. 또 있어요.","2022년 8월 31일 오전 1:17 강지원 유사 애스크 같고. 어떤 건데?","2022년 8월 31일 오전 1:18 박희철 술이 떡이 되게 먹은 다음 날 침대에서 눈을 떴어요. 헉 근데 옆자리에 누가 홀딱 벗고 같이 누워 있네. 그 사람이 1. 친한 친구이면 좋겠다. 2. 생판 모르는 남이면 좋겠다.","2022년 8월 31일 오전 1:18 강지원 2가 내 이상형이야?","2022년 8월 31일 오전 1:18 박희철 둘 다 똑같이 생겼어요.","2022년 8월 31일 오전 1:19 강지원 2.","2022년 8월 31일 오전 1:19 박희철 왜요?","2022년 8월 31일 오전 1:21 강지원 아무리 친한 친구라고는 해도. 벗고 뭘 했다는 말은 없지만. 2면 한 번은 더 볼 수 있겠는데 1이면 거리 둘 것 같아서. 어색하잖아.","2022년 8월 31일 오전 1:21 강지원 결국 친구 하나 잃겠지.","2022년 8월 31일 오전 1:24 박희철 그렇구나.","2022년 8월 31일 오전 1:25 박희철 재미있어요.","2022년 8월 31일 오전 1:30 박희철 물어볼 게 많은데 자꾸 눈 감기는 보좌관 오늘 이만 셔터 내립니다. 운영 끝. 푹 주무세요.","2022년 8월 31일 오전 8:42 강지원 오래도 버텼다. 셔터 다시 올려.","2022년 8월 31일 오전 9:20 박희철 도로록…….","2022년 8월 31일 오전 11:21 강지원 잘했어. 간식 줄까.","2022년 8월 31일 오후 2:03 박희철 마침 당 떨어진 보좌관 등장.","2022년 8월 31일 오후 2:05 강지원 어쩌다 당이 떨어졌냐.","2022년 8월 31일 오후 2:06 박희철 너무 바빠서요. 기운도 뚝.","2022년 8월 31일 오후 2:08 강지원 어쩐지 오늘따라 상태가.","2022년 8월 31일 오후 2:08 강지원 애들 데리고 갈까? 하지 마? 그래.","2022년 8월 31일 오후 2:16 박희철 그 애들은 하는 일이 뭔가요?","2022년 8월 31일 오후 2:28 강지원 가오 잡기. 박 보좌관 오른팔 왼팔 잡기.","2022년 8월 31일 오후 2:53 박희철 아. 그러니까 나를 열받게 하고 월급을 받는다?","2022년 8월 31일 오후 2:54 강지원 아니? 그대로 유세 현장에서 끌고 나가기.","2022년 8월 31일 오후 2:54 강지원 집에 가자.","2022년 8월 31일 오후 2:58 박희철 어? 생각지도 못한 이 다정함 뭐지?","2022년 8월 31일 오후 2:58 박희철 이 유괴 찬성.","2022년 8월 31일 오후 3:00 강지원 밥은 먹이면서 굴리는 거 맞지?","2022년 8월 31일 오후 3:00 강지원 원래 다정했다.","2022년 8월 31일 오후 3:01 박희철 아직 한 끼도 못 먹었어요.","2022년 8월 31일 오후 3:01 박희철 배가 등에 붙었다…….","2022년 8월 31일 오후 3:01 강지원 그래. 누구부터 묻을까.","2022년 8월 31일 오후 3:02 강지원 어떤 새끼가 밥도 안 먹이고.","2022년 8월 31일 오후 3:03 박희철 사람을 묻으면 안 되지요?","2022년 8월 31일 오후 3:04 강지원 그렇지만 그 새끼들이 먼저.","2022년 8월 31일 오후 3:04 강지원 참아?","2022년 8월 31일 오후 3:05 박희철 지원이가 한 번만 참자. 딱 한 번만 참아 주자.","2022년 8월 31일 오후 3:05 강지원 하⋯⋯.","2022년 8월 31일 오후 3:06 강지원 살인 한 번이면 참을 인 세 번을 면하는데.","2022년 8월 31일 오후 3:08 박희철 앞뒤바뀌었다구.","2022년 8월 31일 오후 3:08 박희철 처리할 사람 따로 있는데 그때 부탁할 거예요.","2022년 8월 31일 오후 3:11 강지원 강지원은 아니지?","2022년 8월 31일 오후 3:12 박희철 그 사람은 나 죽을 때 옆에 산 채로 묻어 달라고 유언을 남겨야 해서…….","2022년 8월 31일 오후 3:12 강지원 아, 미친 새끼⋯⋯.","2022년 8월 31일 오후 3:13 강지원 나 없이도 당신 혼자 행복하게 이런 유언 남길 생각을 안 하고.","2022년 8월 31일 오후 3:14 박희철 개소리말고얌전히묻혀.","2022년 8월 31일 오후 3:15 강지원 재혼 한 번만 해 보고 묻히면 안 될까.","2022년 8월 31일 오후 3:16 박희철 여보 그냥 지금 먼저 묻히고 싶으세요? 짜증나게하네진짜.","2022년 8월 31일 오후 3:17 강지원 내가 존나 사랑하는 거 알지.","2022년 8월 31일 오후 3:17 강지원 같이 묻히는 게 좋겠다.","2022년 8월 31일 오후 3:18 박희철 잘합시다.","2022년 8월 31일 오후 3:19 강지원 박 보좌관 사실.","2022년 8월 31일 오후 3:20 강지원 깡패였지? 나한테만 사실대로 말해 봐.","2022년 8월 31일 오후 3:21 박희철 깡패보다 더 깡패 같은 정치인들 밑에서 자랐어요.","2022년 8월 31일 오후 3:22 강지원 내가 잘할게요, 여보.","2022년 8월 31일 오후 3:24 박희철 저 배고파서 손 떨려요. 심각하게 매운 핵폭탄 단계 떡볶이 먹고 싶다.","2022년 8월 31일 오후 3:26 강지원 바빠서 못 먹는 거? 그래도 첫 끼를 그걸로 먹는 건 참아라.","2022년 8월 31일 오후 3:26 강지원 이러다 애 쓰러지겠네.","2022년 8월 31일 오후 3:29 박희철 네에……. 이따 다섯 시 정도에 첫 끼 먹을 수 있을 것 같기는 한데 문제는 오늘 야근이에요. 가만 안 둬.","2022년 8월 31일 오후 3:30 박희철 저 그거 해 보고 싶어요.","2022년 8월 31일 오후 3:30 박희철 주인공이 어디 계단 같은 곳에서 쓰러지면 갑자기 뒤에서 누가 마법처럼 나타나서 받쳐 주는 거요.","2022년 8월 31일 오후 3:30 박희철 감사합니다.","2022년 8월 31일 오후 3:38 강지원 영화를 너무 많이 봤구나, 희철아. 날 믿고 계단에서 쓰러져 봐.","2022년 8월 31일 오후 3:39 강지원 보험 몇 개 들었지?","2022년 8월 31일 오후 3:43 박희철 보험은 하나도 없고요. 대신에 저 죽으면 같이 묻힐 사람은 하나 있는데 어떻게 그거라도…….","2022년 8월 31일 오후 3:45 강지원 그런데 그 하나가 이제 강지원이라는 거지?","2022년 8월 31일 오후 3:46 강지원 **⋯⋯.","2022년 8월 31일 오후 3:46 강지원 데리고 다녀. 언제 쓰러져도 받을 수 있게.","2022년 8월 31일 오후 3:49 박희철 네. 오래 살고 싶으시면 제 목숨 귀하게 여기세요.","2022년 8월 31일 오후 3:50 강지원 오늘부터 자극적인 거 입에도 못 대게 한다.","2022년 8월 31일 오후 3:50 강지원 최대한 싱겁게, 채소 위주로.","2022년 8월 31일 오후 3:53 박희철 비실비실…….","2022년 8월 31일 오후 3:53 박희철 흐물흐물…….","2022년 8월 31일 오후 3:53 강지원 귀엽게 굴어도.","2022년 8월 31일 오후 3:53 강지원 그래. 내 장기 떼어다 주면 되지⋯⋯.","2022년 8월 31일 오후 3:56 박희철 포장지는 포르쉐인가?","2022년 8월 31일 오후 3:57 강지원 아니. 페레로 로쉐.","2022년 8월 31일 오후 3:59 박희철 음…… 빠르게 발음하면 비슷하기는 해…….","2022년 8월 31일 오후 3:59 강지원 만족하지.","2022년 8월 31일 오후 4:00 강지원 이런 남친 세상에 없다.","2022년 8월 31일 오후 4:06 박희철 제가 오늘 기운이 없어서 넘어가는 줄 아세요…….","2022년 8월 31일 오후 4:07 강지원 기운이 있으면 어떻게 됐는데.","2022년 8월 31일 오후 4:44 박희철 이사님 얼굴을 문질러서 구겼을 거예요.","2022년 8월 31일 오후 4:44 강지원 444.","2022년 8월 31일 오후 4:45 강지원 다행이다, 기운이 없어서. 다행인가?","2022년 8월 31일 오후 4:56 박희철 어? 누가 이사님 생각을 하고 있었나 봐요.","2022년 8월 31일 오후 4:56 강지원 너 아니었냐?","2022년 8월 31일 오후 5:15 박희철 이사님 구슬려서 매운 떡볶이 먹는 생각을 하기는 했는데…….","2022년 8월 31일 오후 5:20 강지원 무덤은 조금 천천히 들어가고 싶거든. 참아.","2022년 8월 31일 오후 5:22 박희철 저 무농약 토마토로 직접 갈아서 만든 토마토 주스 먹고 싶어요.","2022년 8월 31일 오후 5:22 박희철 이사님 뛰는 중?","2022년 8월 31일 오후 5:23 강지원 요즘 배달이 참 잘 되어 있더라.","2022년 8월 31일 오후 5:23 강지원 네 사랑 포르쉐 시동 거는 중.","2022년 8월 31일 오후 5:30 박희철 이상한데…….","2022년 8월 31일 오후 5:30 강지원 뭐가 이상해.","2022년 8월 31일 오후 5:31 박희철 너무 다정하고 훈훈하고 뜨거워요.","2022년 8월 31일 오후 5:31 강지원 자제할까?","2022년 8월 31일 오후 5:31 박희철 아니요!","2022년 8월 31일 오후 5:32 강지원 그러라고 해도 내 마음대로 했겠지만.","2022년 8월 31일 오후 5:32 강지원 그럼 기꺼이.","2022년 8월 31일 오후 5:39 박희철 이 사람이 아주 가지고 노네…….","2022년 8월 31일 오후 5:41 강지원 그래도 나랑 놀아 줄 거잖아.","2022년 8월 31일 오후 5:51 박희철 내가 한 손으로 가지고 노는 그날까지.","2022년 8월 31일 오후 5:52 강지원 응원할게. 그런데 난 이미 네 손바닥 안인데.","2022년 8월 31일 오후 5:55 박희철 혹시 꽉 쥐면 부서져요?","2022년 8월 31일 오후 5:55 강지원 부수게? 작고 연약하며 가녀린 나를?","2022년 8월 31일 오후 5:55 강지원 아니. 물어.","2022년 8월 31일 오후 6:25 박희철 어? 귀여워…….","2022년 8월 31일 오후 6:25 박희철 저 야근 안 해요. 당장 탈출한다.","2022년 8월 31일 오후 6:26 강지원 이상한 취향이.","2022년 8월 31일 오후 6:26 강지원 연장 들고 갈지 고민했다. 얼른 가서 밥부터 먹어. 매운 거 빼고. 고생했네.","2022년 8월 31일 오후 6:27 박희철 밥은 나중에 먹고 잠부터 자면 안 되나…….","2022년 8월 31일 오후 6:27 박희철 강지원: 그래.","2022년 8월 31일 오후 6:27 박희철 역시 그렇죠?","2022년 8월 31일 오후 6:27 강지원 근데 밥 먹고 소화 못 시키고 바로 기절할 거면.","2022년 8월 31일 오후 6:27 강지원 자고 일어나서 먹어.","2022년 8월 31일 오후 6:28 강지원 그래, 지원아.","2022년 8월 31일 오후 6:56 박희철 저 씻고 왔어요. 지니야, 이따 밥 먹어야 될 때 적당히 깨워 줘.","2022년 8월 31일 오후 6:58 강지원 웃기는 놈. 누구를 네 AI 비서 취급이야. 잘 자라.","2022년 8월 31일 오후 7:01 박희철 너무 피곤해서 잠도 안 와요. 어떡하죠? 눈만 아파요.","2022년 8월 31일 오후 7:12 강지원 잠이 안 와? 전혀?","2022년 8월 31일 오후 8:46 박희철 음. 그런 사람 치고 너무 잘 잤네…….","2022년 8월 31일 오후 9:06 강지원 잘 잤으면 오히려 다행 아니냐. 걱정할 뻔했네.","2022년 8월 31일 오후 9:06 강지원 저녁 먹어.","2022년 8월 31일 오후 9:09 박희철 저 지금 약간 몽롱하고 붕 떠 있어요.","2022년 8월 31일 오후 9:15 강지원 졸려서 제정신이 아니다?","2022년 8월 31일 오후 9:21 박희철 네. 기분 좋아서 꼼짝도 안 하고 싶어요.","2022년 8월 31일 오후 9:21 박희철 무슨 꿈 꿨는지 물어보세요.","2022년 8월 31일 오후 9:23 강지원 꼼짝도 하지 말고 나만 봐.","2022년 8월 31일 오후 9:23 강지원 무슨 꿈 꿨는데.","2022년 8월 31일 오후 9:23 강지원 아니다. 저녁은 먹어야지.","2022년 8월 31일 오후 9:28 박희철 진짜 꼼짝도 안 하고 혀만 움직이면서 지니 놀릴 준비 완.","2022년 8월 31일 오후 9:28 박희철 저 핫바 먹을 거예요. 안에 떡도 들어서 너무 맛있겠다.","2022년 8월 31일 오후 9:28 강지원 내 이름이 언제 지니가 되었는지 해명 바란다.","2022년 8월 31일 오후 9:28 강지원 한 입만.","2022년 8월 31일 오후 9:29 박희철 지니 아 해.","2022년 8월 31일 오후 9:29 박희철 케첩만 먼저 드세요.","2022년 8월 31일 오후 9:35 강지원 아.","2022년 8월 31일 오후 9:35 강지원 뭐?","2022년 8월 31일 오후 9:38 박희철 아 이 집이 케첩 맛집이라서……. 새콤달콤 너무 맛있는 케첩은 지니 거. 맛이라곤 하나도 없는 밍밍한 핫바는 내 거.","2022년 8월 31일 오후 9:42 강지원 이걸 로맨스로 받을지 스릴러로 받을지 십 초 정도 고민했고. 그래⋯⋯. 첫 끼니 봐준다. 지니가 입에 붙었네. 이러면 나도 이상한 호칭 붙일 거라고. 뽀삐(not 화장지), 내 작명 센스 알지.","2022년 8월 31일 오후 9:46 박희철 지니 별로예요? 왜요? 나만 좋아? 귀여운데. 뽀삐는 진짜 어떻게 봐도 예스 화장지라서 짱나거든요.","2022년 8월 31일 오후 9:48 강지원 귀여운데. 그래. 귀엽다고. 뽀삐야, 귀 막아. 저런 말 듣지 마라. 넌 최고의 강아지야.","2022년 8월 31일 오후 9:50 박희철 나안해.","2022년 8월 31일 오후 9:50 강지원 해 줘.","2022년 8월 31일 오후 9:50 강지원 이럴 거야?","2022년 8월 31일 오후 9:51 박희철 강아지 아니고 희철인데요.","2022년 8월 31일 오후 9:51 강지원 넌 최고의⋯⋯","2022년 8월 31일 오후 9:51 강지원 보좌관이야.","2022년 8월 31일 오후 9:54 박희철 이사님은 최고의 깡패예요.","2022년 8월 31일 오후 9:54 강지원 나가.","2022년 8월 31일 오후 9:56 박희철 터덜터덜…….","2022년 8월 31일 오후 9:56 강지원 가지 마.","2022년 8월 31일 오후 9:56 강지원 여기 묻을 거니까.","2022년 8월 31일 오후 9:56 박희철 이사님은 최고의 귀염둥이예","2022년 8월 31일 오후 9:56 박희철 네?","2022년 8월 31일 오후 9:57 강지원 뭐?","2022년 8월 31일 오후 9:57 박희철 뭐요.","2022년 8월 31일 오후 9:57 강지원 예쁘게 말해야지.","2022년 8월 31일 오후 9:59 박희철 🧨🔨💰뭐요🪓🔪🚬","2022년 8월 31일 오후 9:59 강지원 귀여운 거 붙여 줘.","2022년 8월 31일 오후 10:01 박희철 5 분 정도 필요해요.","2022년 8월 31일 오후 10:01 강지원 10 분 줄게.","2022년 8월 31일 오후 10:05 박희철 사진을 보냈습니다.","2022년 8월 31일 오후 10:09 강지원 어이가 없고.","2022년 8월 31일 오후 10:09 강지원 귀엽네.","2022년 8월 31일 오후 10:11 박희철 지꾸.","2022년 8월 31일 오후 10:11 강지원 지꾸?","2022년 8월 31일 오후 10:12 박희철 네. 지니 꾸미기.","2022년 8월 31일 오후 10:12 박희철 귀여운 거 붙여 달라고 하셔서 귀여운 거 위에 귀여운 거.","2022년 8월 31일 오후 10:14 강지원 너 진짜 짜증 나고 귀엽다.","2022년 8월 31일 오후 10:14 강지원 설마. 내 이름이 지원이라서 지니냐?","2022년 8월 31일 오후 10:16 박희철 헉. 여태 모르셨구나……. 괜찮아요. 나이를 먹는다는 건 슬픈 일이 아니잖아요.","2022년 8월 31일 오후 10:18 강지원 하⋯⋯. 꼭 나보다 한참 어린 것처럼.","2022년 8월 31일 오후 10:21 박희철 저는 젊게 살려고 노력을 하는 편이라서요. 비슷한 위치에 놓지 말아 주세요. 불편.","2022년 8월 31일 오후 10:23 강지원 나랑 비슷한 위치에 있는 게 불편해?","2022년 8월 31일 오후 10:27 박희철 저기 실례지만 이거 혹시 맞먹어도 된다는 말씀이신지.","2022년 8월 31일 오후 10:29 강지원 남은 한 시간 반은 허락해 줄게.","2022년 8월 31일 오후 10:31 박희철 꼬집어도 돼요?","2022년 8월 31일 오후 10:32 강지원 볼을?","2022년 8월 31일 오후 10:33 박희철 다요.","2022년 8월 31일 오후 10:33 강지원 돼.","2022년 8월 31일 오후 10:33 박희철 깨무는 건요?","2022년 8월 31일 오후 10:33 강지원 안 아프게.","2022년 8월 31일 오후 10:34 박희철 그럼 와랄랄라는요?","2022년 8월 31일 오후 10:36 강지원 뽀뽀는.","2022년 8월 31일 오후 10:38 박희철 뽀뽀는 맞먹는 게 아니잖아요…….","2022년 8월 31일 오후 10:38 강지원 위에 저것들은 맞먹는 거다?","2022년 8월 31일 오후 10:38 강지원 맞긴 하지⋯⋯.","2022년 8월 31일 오후 10:38 박희철 얼굴 꾸겨도 돼요?","2022년 8월 31일 오후 10:39 강지원 꾸기고 30 분 일찍 이별하기 vs 얼굴은 가만히 두기.","2022년 8월 31일 오후 10:39 강지원 후자라고 해.","2022년 8월 31일 오후 10:40 박희철 일찍 이별하기 싫어요.","2022년 8월 31일 오후 10:40 박희철 아무것도 안 할게요…….","2022년 8월 31일 오후 10:41 강지원 귀여우니 구겨도 돼⋯⋯.","2022년 8월 31일 오후 10:42 박희철 꾸깃꾸깃.","2022년 8월 31일 오후 10:42 박희철 오늘 쭉 안 자고 일어나길 잘했어요.","2022년 8월 31일 오후 10:43 강지원 쭉 잤으면 얼굴 못 볼 뻔했네.","2022년 8월 31일 오후 10:44 박희철 그럼 눈물 흩뿌리며 끌린 푼으로 달려가야…….","2022년 8월 31일 오후 10:45 강지원 눈물 흩뿌리는 거 못 봐서 아쉽다.","2022년 8월 31일 오후 10:46 박희철 강지원문흑열어쾅쾅쾅어흐윽.","2022년 8월 31일 오후 10:48 강지원 끌린 푼에서 만나.","2022년 8월 31일 오후 10:49 박희철 하아. 베란다 가서 손 들고 계세요.","2022년 8월 31일 오후 10:49 박희철 제가 선창하면 복창하시는 겁니다.","2022년 8월 31일 오후 10:49 박희철 헤어지기 전에 잘하자!","2022년 8월 31일 오후 10:49 강지원 여보, 숨 그렇게 쉬지 마.","2022년 8월 31일 오후 10:49 강지원 헤어진 뒤에 질척거리자.","2022년 8월 31일 오후 10:49 박희철 내가지금혼내는중이지요.","2022년 8월 31일 오후 10:50 강지원 헤어지기 전에 잘하자⋯⋯.","2022년 8월 31일 오후 10:50 강지원 나도 모르게 필터링이.","2022년 8월 31일 오후 10:51 박희철 박희철은 항상 옳고 강지원은 항상 틀리다!","2022년 8월 31일 오후 10:51 강지원 이거 세뇌 아니야?","2022년 8월 31일 오후 10:52 박희철 복창 안 하세요?","2022년 8월 31일 오후 10:52 강지원 박희철은 항상 옳고 강지원은 항상 틀리다.","2022년 8월 31일 오후 10:53 강지원 만족?","2022년 8월 31일 오후 10:53 박희철 공지 쾅.","2022년 8월 31일 오후 10:54 박희철 앞으로도 항시 속으로 곱씹으세요.","2022년 8월 31일 오후 10:55 강지원 곧 쫓겨나서 다행이다.","2022년 8월 31일 오후 10:55 박희철 이별을 기대하는 이 남자 진짜 어떡하지…….","2022년 8월 31일 오후 10:57 강지원 아무래도 이혼이 로망인 남자에게 이별은.","2022년 8월 31일 오후 10:58 박희철 알았다구.","2022년 8월 31일 오후 10:59 강지원 희철아.","2022년 8월 31일 오후 11:01 박희철 넵. 저 여기.","2022년 8월 31일 오후 11:17 강지원 내가 만약 눈이 감긴다고 해.","2022년 8월 31일 오후 11:17 강지원 뺨 좀 때려 주겠니.","2022년 8월 31일 오후 11:21 박희철 음.","2022년 8월 31일 오후 11:21 박희철 그렇게 졸리면 주무셔야죠…….","2022년 8월 31일 오후 11:22 강지원 이 현실적 모멘트.","2022년 8월 31일 오후 11:22 강지원 자면 안 되지.","2022년 8월 31일 오후 11:22 박희철 주먹으로 쳐도 돼요?","2022년 8월 31일 오후 11:23 강지원 감동적인 멘트 치고 있었는데 주먹으로 치겠다는 이 보좌관 어쩌면 좋냐?","2022년 8월 31일 오후 11:23 강지원 얼굴은 빼고.","2022년 8월 31일 오후 11:25 박희철 저 지금 좀 이상해요.","2022년 8월 31일 오후 11:25 강지원 뭐가.","2022년 8월 31일 오후 11:25 강지원 잠 덜 깼어?","2022년 8월 31일 오후 11:25 박희철 눈이 간지러워서 문지르고 있는데 그래도 더 간지럽고 아프고 눈이 부어요.","2022년 8월 31일 오후 11:26 강지원 심해? 앞은 잘 보여?","2022년 8월 31일 오후 11:26 박희철 이사님만 보여요.","2022년 8월 31일 오후 11:26 강지원 병원 가야 하는 거 아니야? 눈이면. 피부가.","2022년 8월 31일 오후 11:26 강지원 하.","2022년 8월 31일 오후 11:26 박희철 로맨틱했다.","2022년 8월 31일 오후 11:26 박희철 저 찢었어요?","2022년 8월 31일 오후 11:27 강지원 존나걱정했는데지금하.","2022년 8월 31일 오후 11:27 강지원 한 대만 치자.","2022년 8월 31일 오후 11:27 박희철 …….","2022년 8월 31일 오후 11:27 박희철 눈 감고 있을 때 치세요.","2022년 8월 31일 오후 11:27 강지원 그래.","2022년 8월 31일 오후 11:27 강지원 얼굴은 안 때릴게.","2022년 8월 31일 오후 11:28 박희철 아니 근데 내가 때릴 곳이 어디 있어?","2022년 8월 31일 오후 11:28 강지원 많은 것 같은데?","2022년 8월 31일 오후 11:29 박희철 지원아!","2022년 8월 31일 오후 11:29 강지원 마지막이라고 지금.","2022년 8월 31일 오후 11:29 강지원 정신을 놓은 게.","2022년 8월 31일 오후 11:30 박희철 공지사항 다시 외우세요.","2022년 8월 31일 오후 11:31 박희철 아니 이게 아니라.","2022년 8월 31일 오후 11:31 강지원 나는 옳고 희는 틀리다.","2022년 8월 31일 오후 11:31 박희철 뭐야. 할 말 까먹었잖아.","2022년 8월 31일 오후 11:31 강지원 뭔데.","2022년 8월 31일 오후 11:32 박희철 까먹었어요.","2022년 8월 31일 오후 11:32 강지원 떠오르면 다시 불러.","2022년 8월 31일 오후 11:32 박희철 그게 30 분 뒤면요?","2022년 8월 31일 오후 11:32 강지원 끈에서 만나.","2022년 8월 31일 오후 11:32 박희철 하아.","2022년 8월 31일 오후 11:33 강지원 하아?","2022년 8월 31일 오후 11:33 박희철 공지사항에손대지마라.","2022년 8월 31일 오후 11:33 강지원 들켰네.","2022년 8월 31일 오후 11:33 강지원 아.","2022년 8월 31일 오후 11:33 강지원 미쳤나.","2022년 8월 31일 오후 11:33 박희철 눈이 자꾸 부어서 찜질 좀 해야겠어요.","2022년 8월 31일 오후 11:34 강지원 눈이 왜. 원래 잘 부어?","2022년 8월 31일 오후 11:35 박희철 여기까진진짜였다고요.","2022년 8월 31일 오후 11:35 강지원 야나진짜아닌줄알았어.","2022년 8월 31일 오후 11:35 박희철 참을 수 없는 드립의 충동이 나를 이겨서 그렇지…….","2022년 8월 31일 오후 11:36 강지원 알레르기 아니야? 염증인가?","2022년 8월 31일 오후 11:36 강지원 지금 병원 안 가 봐도 돼?","2022년 8월 31일 오후 11:36 박희철 귀신인가? 알레르기 맞아요. 약 먹었어요.","2022년 8월 31일 오후 11:36 박희철 아니이게아니라.","2022년 8월 31일 오후 11:36 박희철 이사님.","2022년 8월 31일 오후 11:37 강지원 보통 그렇잖아, 알레르기가.","2022년 8월 31일 오후 11:37 강지원 왜?","2022년 8월 31일 오후 11:37 박희철 저 이사님하고 노느라 잘 붙어 있을 수 있었어요. 제일 재미있어.","2022년 8월 31일 오후 11:38 강지원 나도. 얼마나 재미있었어.","2022년 8월 31일 오후 11:39 박희철 보실래요?","2022년 8월 31일 오후 11:39 강지원 뭘?","2022년 8월 31일 오후 11:39 박희철 사진을 보냈습니다.","2022년 8월 31일 오후 11:39 강지원 기절하겠네.","2022년 8월 31일 오후 11:39 박희철 다 내가 재미없어서 씹어서 내보낸 친구들이에요. 인사하세요.","2022년 8월 31일 오후 11:40 강지원 안녕, 친구들아. 다음에는 강지원으로 개명하고 오도록 해.","2022년 8월 31일 오후 11:40 강지원 아니. 가지 마.","2022년 8월 31일 오후 11:40 박희철 다음에는 강지원으로 분장해서 오도록 해.","2022년 8월 31일 오후 11:41 강지원 분장해서 오는 건 좋은데.","2022년 8월 31일 오후 11:41 강지원 박희철한테 가면 죽는다⋯⋯.","2022년 8월 31일 오후 11:42 박희철 저기 정말 정말 죄송한데 혹시 깡패세요?","2022년 8월 31일 오후 11:42 강지원 미래 캐피탈 이사인데.","2022년 8월 31일 오후 11:43 박희철 아. 거기 알죠. 깡패가 은행장 하겠다고 대가리 깡깡 깨고 다니면서 세운 거기.","2022년 8월 31일 오후 11:43 박희철 멋져. 멋져.","2022년 8월 31일 오후 11:43 강지원 마지막까지진짜열받게하네.","2022년 8월 31일 오후 11:44 박희철 행복합니다.","2022년 8월 31일 오후 11:44 강지원 혹시 사디스트 뭐 그런 거 해?","2022년 8월 31일 오후 11:45 박희철 사디스트의 정의가 강지원의 괴로움을 보면서 기쁨을 얻는 거라면 저 그거 해요.","2022년 8월 31일 오후 11:45 박희철 헉. 십오 분 남았어요.","2022년 8월 31일 오후 11:45 박희철 뭐 할까요?","2022년 8월 31일 오후 11:45 박희철 우리 뭐 하자.","2022년 8월 31일 오후 11:45 강지원 눈치껏 개 발바닥 달아 봐.","2022년 8월 31일 오후 11:45 박희철 사람들이 안 속을 것 같은데…….","2022년 8월 31일 오후 11:45 강지원 10 분 연애하고 5 분 헤어지자.","2022년 8월 31일 오후 11:45 강지원 하.","2022년 8월 31일 오후 11:46 박희철 그럼 10 분 안에 연애 로망 다 채우고 5 분 동안 이별 로망 채워요?","2022년 8월 31일 오후 11:47 강지원 가성비 대단하지.","2022년 8월 31일 오후 11:48 박희철 아니 근데 아무도 안 보면 우리만 그냥 개 발바닥 단 사람 된 거네…….","2022년 8월 31일 오후 11:48 박희철 아니 벌써 삼 분이 지났는데.","2022년 8월 31일 오후 11:48 강지원 우리만 그냥 상메 맞춘 사람 되는 거지.","2022년 8월 31일 오후 11:48 박희철 연애 로망 뭐 하지?","2022년 8월 31일 오후 11:49 박희철 아!","2022년 8월 31일 오후 11:49 박희철 저 취한 애인 업는 로망 있어요. 지원아! 형한테 업혀.","2022년 8월 31일 오후 11:49 강지원 로망이 무슨.","2022년 8월 31일 오후 11:49 강지원 형, 그런데 나 속이.","2022년 8월 31일 오후 11:49 박희철 아그거아니라고.","2022년 8월 31일 오후 11:50 박희철 진짜짜증나.","2022년 8월 31일 오후 11:51 강지원 이 맛에 놀리는구나.","2022년 8월 31일 오후 11:51 박희철 우리 4 분 뒤부터는 이별 로망이에요.","2022년 8월 31일 오후 11:52 박희철 저 이별 로망 그거 있어요.","2022년 8월 31일 오후 11:52 강지원 삼십 분 일찍 시작할걸.","2022년 8월 31일 오후 11:52 강지원 어떤 거.","2022년 8월 31일 오후 11:52 박희철 헤어지자는 사람 붙잡고 애원하고 드라마 찍는 것처럼.","2022년 8월 31일 오후 11:52 박희철 포장마차에 왜 혼자 앉아서 미지근한 소주 먹으면서 안주도 없이 그런 거 있잖아요.","2022년 8월 31일 오후 11:53 박희철 울면서 전화해가지고.","2022년 8월 31일 오후 11:53 강지원 너는 잡는 쪽이야, 잡히는 쪽이야.","2022년 8월 31일 오후 11:53 박희철 지원아……. 너 깡패지만 내가 진짜 너 좋아했다…….","2022년 8월 31일 오후 11:53 박희철 이런 거.","2022년 8월 31일 오후 11:53 강지원 아.","2022년 8월 31일 오후 11:53 강지원 깡패아니라고이새끼야.","2022년 8월 31일 오후 11:53 박희철 전 잡히는 쪽이었던 거 같아요.","2022년 8월 31일 오후 11:53 박희철 지원아……. 너 사채업자지만 내가 진짜 너 좋아했다…….","2022년 8월 31일 오후 11:54 강지원 씨발⋯⋯. 내가 사채업자 깡패지만 너 좋아했다.","2022년 8월 31일 오후 11:55 박희철 맞아요. 그 무드.","2022년 8월 31일 오후 11:55 강지원 이 무드.","2022년 8월 31일 오후 11:55 박희철 내가 진짜 요란하게 어? 혼자 그거 했다!","2022년 8월 31일 오후 11:55 강지원 어? 사랑을 했다. 잘했다.","2022년 8월 31일 오후 11:56 박희철 잘했다. 비록 사람 보험이랑 몸 가지고 몹쓸 짓을 하는 사채업자 깡패지만 잘 좋아했던 것 같다.","2022년 8월 31일 오후 11:58 강지원 비록 내 월 오만 원과 박희철 뒈지면 옆에 같이 매장당하게 생겼지만 잘 좋아했다.","2022년 8월 31일 오후 11:58 박희철 다행이다. 그럼 됐죠.","2022년 8월 31일 오후 11:58 박희철 2 분이야. 와.","2022년 8월 31일 오후 11:59 박희철 원래는 이렇게 치열하게 휴대폰 안 보는데 지금 많이 열심히 보는 중.","2022년 8월 31일 오후 11:59 강지원 적고 싶은 말은 많은데 시간이 없네.","2022년 9월 1일 오전 12:00 박희철 슥삭.","2022년 9월 30일 오전 01:10 강지원 위에 네 슥삭, 까지가 우리 처음 만났던 단체 밴드에서 나눴던 대화. 이 대화 하나는 이거 만들면서 추가해 둔 거. 백업해 둔 걸 이런 식으로 쓸 줄 몰랐지만, 과연 박희철은 이 아래까지 읽어 볼 것인가. 근데 나도 웃기는 놈이네. 세상 소중하게 대화 백업은 해 두고 풀끈을 안 써? 강지원은 귀여우니 그럴 수 있다. 박희철이 봐주자. 쪽."],this.letterData=["2022년 12월 4일 오후 10:10 강지원 Q. 희수는 어디 갔는지? A. 내가 삼킴. 50 일이 엊그제 같은데 벌써 100 일이네. 시간이 빠른 것 같으면서도. 크리스마스가 코앞이라는 것도 믿기지 않아. 특별할 건 없지만 보면서 내 생각 하길. 그리고 다 읽으면 밴드로 가서 냉큼 뽀뽀 갈겨 주길 바람. 아직 잠들어 있겠지? 내 꿈 꿨으면.","2022년 12월 4일 오후 10:10 강지원 사랑해."]}}}),o=c,u=e(1001),v=(0,u.Z)(o,l,r,!1,null,null,null),d=v.exports,f={name:"App",components:{HelloWorld:d}},p=f,m=(0,u.Z)(p,i,n,!1,null,null,null),C=m.exports;a.ZP.config.productionTip=!1,new a.ZP({render:t=>t(C)}).$mount("#app")}},s={};function e(a){var i=s[a];if(void 0!==i)return i.exports;var n=s[a]={exports:{}};return t[a](n,n.exports,e),n.exports}e.m=t,function(){var t=[];e.O=function(s,a,i,n){if(!a){var l=1/0;for(u=0;u<t.length;u++){a=t[u][0],i=t[u][1],n=t[u][2];for(var r=!0,c=0;c<a.length;c++)(!1&n||l>=n)&&Object.keys(e.O).every((function(t){return e.O[t](a[c])}))?a.splice(c--,1):(r=!1,n<l&&(l=n));if(r){t.splice(u--,1);var o=i();void 0!==o&&(s=o)}}return s}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[a,i,n]}}(),function(){e.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(s,{a:s}),s}}(),function(){e.d=function(t,s){for(var a in s)e.o(s,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:s[a]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)}}(),function(){var t={143:0};e.O.j=function(s){return 0===t[s]};var s=function(s,a){var i,n,l=a[0],r=a[1],c=a[2],o=0;if(l.some((function(s){return 0!==t[s]}))){for(i in r)e.o(r,i)&&(e.m[i]=r[i]);if(c)var u=c(e)}for(s&&s(a);o<l.length;o++)n=l[o],e.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return e.O(u)},a=self["webpackChunkmerry_bday"]=self["webpackChunkmerry_bday"]||[];a.forEach(s.bind(null,0)),a.push=s.bind(null,a.push.bind(a))}();var a=e.O(void 0,[998],(function(){return e(6853)}));a=e.O(a)})();
//# sourceMappingURL=app.25ec28e9.js.map