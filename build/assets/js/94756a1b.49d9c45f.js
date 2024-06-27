"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8972],{6150:(e,a,t)=>{t.r(a),t.d(a,{default:()=>c});var r=t(7294),l=t(6154),n=t(7961);const s={container:"container_RF05",board:"board_i5EU",boardDetail:"boardDetail_nMbO",loading:"loading_HR3C",leaderboardStairs:"leaderboardStairs_u4Wz",leaderboardBar:"leaderboardBar_cI3Q",leaderboardPosition:"leaderboardPosition_gp99",leaderboardName:"leaderboardName_XpW5",avatarUsername:"avatarUsername_AgMR",leftDetails:"leftDetails_sEcR",userInfo:"userInfo_F_iL",avatar:"avatar_VqA4",header:"header_Ve1Z","header-row":"header-row_QrMs",number:"number_pFBM",name:"name_FZrf",points:"points_z2qV",selectedRow:"selectedRow_rwa4",pagination:"pagination_stS3"};function c(){const[e,a]=(0,r.useState)([]),[t,c]=(0,r.useState)(null),[m,d]=(0,r.useState)(1),[o,i]=(0,r.useState)(!0);(0,r.useEffect)((()=>{(async()=>{try{const e=await l.Z.get("https://api.contributor.kuosc.org.np/api/v1/webhook");e.data.success&&(console.log(e.data.data.docs),a(e.data.data.docs))}catch(e){console.error("Error fetching data:",e)}finally{i(!1)}})()}),[]),(0,r.useEffect)((()=>{e.length>0&&(console.log(e[0]),c(e[0]))}),[e]);const u=7*(m-1),E=u+7;return r.createElement(n.Z,{title:"Contributors Leaderboard",description:"View the leaderboard of contributors."},r.createElement("main",null,r.createElement("div",{className:s.container},o?r.createElement("div",{className:s.loading},r.createElement("img",{src:"/img/loading.gif",alt:"Loading..."}),r.createElement("p",null,"Loading...")):r.createElement(r.Fragment,null,r.createElement("div",{className:s.board},t&&r.createElement("div",{className:s.leftDetails},r.createElement("div",{className:s.avatarUsername},r.createElement("div",{className:`${s.avatar} avatar`},r.createElement("img",{src:`https://avatars.githubusercontent.com/u/${t._id.userId}?v=4`,alt:`${t._id.username}'s Image`})),"\xa0 \xa0 \xa0 \xa0",r.createElement("h2",null,r.createElement("a",{target:"_blank",href:`https://github.com/${t._id.username}`,className:s.userName},t._id.username))),r.createElement("div",{className:s.userInfo},r.createElement("p",null,r.createElement("strong",null,"Number of Contributions: "),t.total),r.createElement("p",null,r.createElement("strong",null,"Repository:")," ",t._id.username),r.createElement("p",null,r.createElement("strong",null,"Type:")," ",t.types.map((e=>`${e.count} ${e.type}${e.count>1?"s":""}`)).join(", ")))),r.createElement("hr",null),r.createElement("div",{className:s.leaderboardStairs},r.createElement("h2",null,"Contribution Leaders"),e.length>0&&r.createElement("div",{className:s.leaderboardBar},r.createElement("div",{className:s.leaderboardPosition},r.createElement("img",{src:"/img/medals/first.webp",alt:""})),r.createElement("div",{className:s.leaderboardName},e[0]._id.username)),e.length>1&&r.createElement("div",{className:s.leaderboardBar},r.createElement("div",{className:s.leaderboardPosition},r.createElement(r.Fragment,null,r.createElement("img",{src:"/img/medals/second.webp",alt:""}))),r.createElement("div",{className:s.leaderboardName},e[1]._id.username)),e.length>2&&r.createElement("div",{className:s.leaderboardBar},r.createElement("div",{className:s.leaderboardPosition},r.createElement("span",null,r.createElement("img",{src:"/img/medals/third.webp",alt:""}))),r.createElement("div",{className:s.leaderboardName},e[2]._id.username)))),r.createElement("div",{className:s.board},r.createElement("div",{id:"header"},r.createElement("h1",null,"Contributions Leaderboard")),r.createElement("br",null),r.createElement("div",{id:"leaderboard"},r.createElement("table",null,r.createElement("thead",null,r.createElement("tr",{className:s["header-row"]},r.createElement("th",{className:s.number},"Position"),r.createElement("th",{className:s.name},"Name"),r.createElement("th",{className:s.points},"Contributions"))),r.createElement("tbody",null,e.slice(u,E).map(((e,a)=>r.createElement("tr",{key:e._id.userId,onClick:()=>(e=>{c(e)})(e),className:t===e?`${s.selectedRow} ${s.selected}`:s.notSelectedRow},r.createElement("td",{className:s.number},u+a+1),r.createElement("td",{className:s.name},e._id.username),r.createElement("td",{className:s.points},e.total))))))),r.createElement("div",{className:s.pagination},r.createElement("button",{onClick:()=>{m>1&&d(m-1)},disabled:1===m},"Previous"),r.createElement("button",{onClick:()=>{const a=Math.ceil(e.length/7);m<a&&d(m+1)},disabled:E>=e.length},"Next")))))))}}}]);