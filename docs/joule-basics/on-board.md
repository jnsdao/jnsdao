---
sidebar_position: 5
---

import styles from '/static/css/odyssey.css';
import ExtLinkSvg from '/static/img/extlink.svg';
import JiaolianContact from '/static/img/gadm/jiaolian.jpg';

# 参与内测

从下表中选择任意一个组长（请勿重复加入），微信扫码联系（添加好友时请备注：元码链内测），请他/她拉你进**分组群**和**内测群**，开启你的奥德赛之旅吧！

目前内测阶段有10位组长，都已经进行了高等级实名认证，请放心联络。添加微信时请备注：元码链。

export const Groups = [
    {"g":"11", "n":"@OPEN", "src":"/img/gadm/g11adm.jpg"},
    {"g":"9", "n":"@Koant", "src":"/img/gadm/g09adm.jpg"},
    {"g":"1", "n":"@芳芳", "src":"/img/gadm/g01adm.jpg"},
    {"g":"6", "n":"@岑云 见路不走", "src":"/img/gadm/g06adm.jpg"},
    {"g":"8", "n":"@明海云", "src":"/img/gadm/g08adm.jpg"},
    {"g":"5", "n":"@༺晓杰🎗牙医࿐   ", "src":"/img/gadm/g05adm.jpg"},
    {"g":"2", "n":"@大可", "src":"/img/gadm/g02adm.jpg"},
    {"g":"3", "n":"@Dream...", "src":"/img/gadm/g03adm.jpg"},
    {"g":"7", "n":"@摩卡与茶", "src":"/img/gadm/g07adm.jpg"},
    {"g":"4", "n":"@志豪", "src":"/img/gadm/g04adm.jpg"},
]

<table>
    <tbody>
    <tr>
        <th>分组</th>
        <th>组长</th>
        <th>联络二维码（微信）</th>
    </tr>
    {[...Groups].map(v => 
        (<tr key={v.g}>
            <td>{v.g}组</td>
            <td>{v.n}</td>
            <td><span className='wxqr'><img key={v.src} src={v.src} /></span></td>
        </tr>)
    )}
    <tr>
        <td>10组</td>
        <td>@楼兰渔夫</td>
        <td>TBD</td>
    </tr>
    <tr>
        <td>fallback</td>
        <td>@刘教链</td>
        <td>如果都联络不上，请联系刘教链（微信号：jiaoliancoin ，添加好友时请备注：元码链内测）。<br /> <span className='wxqr'><img src={JiaolianContact} /></span></td>
    </tr>
    </tbody>
</table>

